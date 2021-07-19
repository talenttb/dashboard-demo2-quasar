<template>
  <!-- style="max-width: 300px" -->
  <q-page padding style="padding-top: 66px">
    <div class="q-pa-md" :class="$q.dark.isActive ? 'query-section--dark' : ''">
      <div class="row">
        <q-input filled v-model="queryDate" mask="date" :rules="['date']">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                ref="qDateProxy"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="queryDate" today-btn>
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="row">
        <q-btn push color="secondary" label="查詢" @click="loadData" />
      </div>
    </div>

    <div class="q-pa-md">
      <q-table
        :title="myTitle"
        :rows="rows"
        :columns="columns"
        no-data-label="I didn't find anything for you"
        no-results-label="The filter didn't uncover any results"
        row-key="mould_part_id"
        v-show="showSimulatedReturnData"
        :visible-columns="visibleColumns"
        :pagination="initialPagination"
        :rows-per-page-options="[0]"
        selection="single"
        v-model:selected="selected"
        table-header-class="bg-cyan-2"
      >
        <!-- :table-header-style="{ backgroundColor: '#ff0000' }" -->
        <!-- v-model="filter" -->
        <template v-slot:top-right>
          <q-input borderless dense debounce="300" placeholder="Search">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>

        <template v-slot:no-data="{ icon, message, filter }">
          <div class="full-width row flex-center text-accent q-gutter-sm">
            <q-icon size="2em" name="sentiment_dissatisfied" />
            <span> Well this is sad... {{ message }} </span>
            <q-icon size="2em" :name="filter ? 'filter_b_and_w' : icon" />
          </div>
        </template>
      </q-table>
      <div class="q-mt-md" v-show="showSimulatedReturnData">
        Selected: {{ JSON.stringify(selected) }}
      </div>
      <q-inner-loading :showing="visible">
        <q-spinner-gears size="50px" color="primary" />
      </q-inner-loading>
    </div>

    <!-- place QPageSticky at end of page -->
    <q-page-sticky expand position="top">
      <q-toolbar
        class="text-white"
        :class="$q.dark.isActive ? 'sub-title-dark' : 'sub-title-normal'"
      >
        <q-avatar> </q-avatar>
        <q-toolbar-title>模具報表</q-toolbar-title>
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
  name: 'Mould',
  setup() {
    const $q = useQuasar()
    // const data = ref(null)
    const visible = ref(false)
    const showSimulatedReturnData = ref(false)
    const timeStamp = +new Date()
    const dt = date.formatDate(timeStamp, 'YYYY-MM-DD')
    const queryDate = ref(dt)
    const myTitle = ref('')
    const visibleColumns = ref([
      // 'row_id',
      'mould_code',
      'mould_part_code',
      'part_type',
      'alias',
      'monthly_output',
      'current_output',
    ])

    const columns = [
      { name: 'mould_id', label: 'Mould id', field: 'mould_id' },
      { name: 'mould_code', label: '模具編號', field: 'mould_code' },
      { name: 'mould_part_id', label: 'Mould part id', field: 'mould_part_id' },
      { name: 'mould_part_code', label: '部件編號', field: 'mould_part_code' },
      { name: 'part_type', label: '部件類型', field: 'part_type' },
      { name: 'alias', label: '別名', field: 'alias' },
      { name: 'monthly_output', label: '本月產量', field: 'monthly_output' },
      {
        name: 'current_output',
        label: '目前為止總產量',
        field: 'current_output',
      },
    ]

    const rows = ref([])

    async function loadData() {
      // console.log(queryDate.value)
      visible.value = true
      showSimulatedReturnData.value = false

      let response = await api.get('/api/moulds').catch((err) => {
        QuasarNotify($q, err.message)
        return { data: '123123' }
      })
      visible.value = false
      showSimulatedReturnData.value = true
      rows.value = response.data
      myTitle.value = `報表 - ${queryDate.value}`
      console.table(response.data)
    }

    // async function queryData() {
    //   let response = await api.get('/api/posts')
    //   setTimeout(() => {
    //     visible.value = false
    //     showSimulatedReturnData.value = true
    //   }, 3000)
    //   return response?.data
    // }

    // showTextLoading () {
    //   visible.value = true
    //   showSimulatedReturnData.value = false

    //   setTimeout(() => {
    //     visible.value = false
    //     showSimulatedReturnData.value = true
    //   }, 3000)
    // }

    return {
      queryDate,
      loadData,
      columns,
      rows,
      visible,
      showSimulatedReturnData,
      visibleColumns,
      initialPagination: {
        // sortBy: 'desc',
        // descending: false,
        page: 1,
        rowsPerPage: 0,
        // rowsNumber: xx if getting data from a server
      },
      selected: ref([]),
      myTitle,
    }
  },
}
</script>

<style scoped></style>
<style lang="sass">
.my-sticky-virtscroll-table
  /* height or max-height is important */
  height: 410px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th /* bg color is important for th; just specify one */
    background-color: #fff

  thead tr th
    position: sticky
    z-index: 1
  /* this will be the loading indicator */
  thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
  thead tr:first-child th
    top: 0
</style>
