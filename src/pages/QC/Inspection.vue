<template>
  <q-page padding style="padding-top: 66px">
    <div class="q-pa-md q-gutter-y-md">
      <div class="row">
        <q-select
          rounded
          outlined
          v-model="queryMach"
          :options="machOptions"
          label="機台清單"
          style="min-width: 300px"
          ref="queryMachRef"
          :rules="queryMachRules"
        />
      </div>

      <div class="row">
        <q-btn push color="secondary" label="查詢" @click="loadData" />
      </div>
    </div>

    <div class="q-pa-md">
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
    </div>

    <div class="q-pa-md">
      <q-table
        :title="imTitle"
        :rows="imRows"
        :columns="imHeader"
        :visible-columns="imVisibleColumns"
        :loading="imLoading"
        v-show="imTableShow"
        row-key="inspect_id"
        :pagination="initialPagination"
        :rows-per-page-options="[0]"
        table-header-class="bg-cyan-2"
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
    </div>

    <!-- place QPageSticky at end of page -->
    <q-page-sticky expand position="top">
      <q-toolbar class="bg-light-blue-6 text-white">
        <q-avatar> </q-avatar>
        <q-toolbar-title>巡檢記錄即時連線</q-toolbar-title>
      </q-toolbar>
    </q-page-sticky>
  </q-page>
</template>

<script>
import { ref, computed } from 'vue'
import { api } from 'boot/axios'
import { date, useQuasar } from 'quasar'
import QuasarNotify from '../../libs/errorNotify'

export default {
  name: 'Inspection',
  async setup() {
    const $q = useQuasar()
    const imDataSet = ref(null)
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

    console.log(date.formatDate(+new Date(), 'YYYY-MM-DDTHH:mm:ss.SSSZ'))

    const queryMach = ref(null)
    const machOptions = ref([])

    const r = await api.get('/api/machines').catch((err) => {
      QuasarNotify($q, err.message)
      return { data: '123123' }
    })

    machOptions.value = r.data

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

    const imTitle = ref('')
    const imRows = ref([])
    const imHeader = [
      { name: 'inspect_id', label: '', field: 'inspect_id' },
      {
        name: 'mfr_order_id',
        label: '製令單號',
        field: 'mfr_order_id',
        align: 'left',
      },
      { name: 'item_id', label: '品號', field: 'item_id', align: 'left' },
      {
        name: 'inspect_item',
        label: '巡檢項目',
        field: 'inspect_item',
        align: 'left',
      },
      {
        name: 'inspect_method',
        label: '巡檢方式',
        field: 'inspect_method',
        align: 'left',
      },
      {
        name: 'inspected_at',
        label: '巡檢時間',
        field: 'inspected_at',
        align: 'left',
      },
      {
        name: 'inspection_content',
        label: '巡檢內容與規格',
        field: 'inspection_content',
        align: 'left',
      },
      {
        name: 'produce_member',
        label: '生產人員',
        field: 'produce_member',
        align: 'left',
      },
      {
        name: 'self_inspected_member',
        label: '自主檢人員',
        field: 'self_inspected_member',
        align: 'left',
      },
      {
        name: 'inspected_member',
        label: '巡檢人員',
        field: 'inspected_member',
        align: 'left',
      },
    ]
    const imVisibleColumns = [
      'mfr_order_id',
      'item_id',
      'inspect_item',
      'inspect_method',
      'inspected_at',
      'inspection_content',
      'produce_member',
      'self_inspected_member',
      'inspected_member',
    ]
    const imLoading = ref(false)
    const imTableShow = ref(false)

    async function loadData() {
      queryMachRef.value.validate()
      if (queryMachRef.value.hasError) {
        return
      }

      visible.value = true
      showSimulatedReturnData.value = false

      let response = await api
        .get('/api/inspections/machines/A01')
        .catch((err) => {
          QuasarNotify($q, err.message)
          return { data: '123123' }
        })
      visible.value = false
      showSimulatedReturnData.value = true
      rows.value = response.data
      imDataSet.value = response.data
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

        if (added) {
          imTitle.value = `巡檢記錄（${row.mfr_order_id}）`
          imLoading.value = true
          imTableShow.value = true

          imRows.value = [
            {
              inspect_id: 1,
              mfr_order_id: row.mfr_order_id,
              item_id: row.item_id,
              inspect_item: '自主',
              inspect_method: '自主',
              inspected_at: '2021-07-05T20:57:58.211+08:00',
              inspection_content: '',
              produce_member: '',
              self_inspected_member: '',
              inspected_member: '',
            },
            {
              inspect_id: 2,
              mfr_order_id: row.mfr_order_id,
              item_id: row.item_id,
              inspect_item: '自主',
              inspect_method: '自主',
              inspected_at: '2021-07-05T21:57:58.211+08:00',
              inspection_content: '',
              produce_member: '',
              self_inspected_member: '',
              inspected_member: '',
            },
          ]
        } else {
          imTableShow.value = false
        }
      },

      imTitle,
      imRows,
      imHeader,
      imVisibleColumns,
      imLoading,
      imTableShow,
    }
  },
}
</script>

<style scoped></style>
