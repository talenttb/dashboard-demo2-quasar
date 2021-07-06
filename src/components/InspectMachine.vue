<template>
  <q-table
    :title="myTitle"
    :rows="rows"
    :ref="mfrTblRef"
    :columns="columns"
    no-data-label="I didn't find anything for you"
    no-results-label="The filter didn't uncover any results"
    row-key="mfr_order_id"
    v-show="showSimulatedReturnData"
    :visible-columns="visibleColumns"
    :pagination="initialPagination"
    :rows-per-page-options="[0]"
    selection="single"
    v-model:selected="selected"
    table-header-class="bg-cyan-2"
    @selection="onSelection"
  >
    <template v-slot:top>
      <q-btn
        color="primary"
        :disable="selected.length == 0"
        label="Add row"
        @click="addRow"
      />
      <q-btn
        class="q-ml-sm"
        color="primary"
        :disable="selected.length == 0"
        label="Remove row"
      />
    </template>
  </q-table>

  <q-inner-loading :showing="visible">
    <q-spinner-gears size="50px" color="primary" />
  </q-inner-loading>
</template>

<script>
import { ref, toRefs } from 'vue'
import { api } from 'boot/axios'
import { date, useQuasar } from 'quasar'
import QuasarNotify from '../libs/errorNotify'

export default {
  name: 'InspectMachine',
  props: {
    queryMachine: String,
  },
  async setup(props) {
    const $q = useQuasar()
    const mfrTblRef = ref(null)
    const visible = ref(false)
    const selected = ref([])
    const showSimulatedReturnData = ref(false)
    const myTitle = ref('')
    const queryMachRef = ref(null)
    const visibleColumns = ref([
      'machine_id',
      'mfr_order_id',
      'item_id',
      'item_name',
      'begin_at',
      'end_at',
      'output',
    ])

    const queryMach = ref(null)
    const machOptions = ref([])

    const columns = [
      {
        name: 'machine_id',
        label: '機台編號',
        field: 'machine_id',
        align: 'left',
      },
      {
        name: 'mfr_order_id',
        label: '製令單號',
        field: 'mfr_order_id',
        align: 'left',
      },
      { name: 'item_id', label: '品號', field: 'item_id', align: 'left' },
      { name: 'item_name', label: '品名', field: 'item_name', align: 'left' },
      { name: 'begin_at', label: '開始生產', field: 'begin_at', align: 'left' },
      { name: 'end_at', label: '結束生產', field: 'end_at', align: 'left' },
      { name: 'output', label: '製令組件數', field: 'output', align: 'left' },
    ]

    const rows = ref([])

    async function loadData() {
      queryMachRef.value.validate()
      if (queryMachRef.value.hasError) {
        return
      }

      visible.value = true
      showSimulatedReturnData.value = false

      let response = await api
        .get(`/api/inspections/machines/${queryMachine}`)
        .catch((err) => {
          QuasarNotify($q, err.message)
          return { data: '123123' }
        })
      visible.value = false
      showSimulatedReturnData.value = true
      rows.value = response.data
      const timeStamp = +new Date()
      const dt = date.formatDate(timeStamp, 'YYYY-MM-DDTHH:mm:ss.SSSZ')

      myTitle.value = `報表 - ${queryMach.value}`
    }

    return {
      loadData,
      mfrTblRef,
      columns,
      rows,
      visible,
      showSimulatedReturnData,
      visibleColumns,
      initialPagination: {
        page: 1,
        rowsPerPage: 0,
      },
      selected,
      myTitle,
      machOptions,
      queryMach,
      options: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'],
      queryMachRef,
      queryMachRules: [
        (val) => (val && val.length > 0) || 'Please type something',
      ],
      addRow() {
        console.log(123)
      },
      onSelection({ rows, added, evt }) {
        if (rows.length === 0 || mfrTblRef.value === void 0) {
          return
        }

        const row = rows[0]
        console.log(row)
      },
    }
  },
}
</script>

<style scoped></style>
