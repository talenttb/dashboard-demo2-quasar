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
        :row-key="rowKey"
        v-show="showData"
        :visible-columns="visibleColumns"
        :pagination="initialPagination"
        :rows-per-page-options="[0]"
        table-header-class="bg-cyan-2"
      >
      </q-table>

      <q-inner-loading :showing="loadingAnimate">
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
        <q-toolbar-title>工單日報</q-toolbar-title>
      </q-toolbar>
    </q-page-sticky>
  </q-page>
</template>

<script>
import { ref, computed } from 'vue'
import { api } from 'boot/axios'
import { date, useQuasar } from 'quasar'
import QuasarNotify from '../../libs/errorNotify'
import * as dateUtils from '@/libs/dateUtils'

export default {
  name: 'WorkOrder',
  setup() {
    const $q = useQuasar()

    const loadingAnimate = ref(false)
    const showData = ref(false)
    const timeStamp = +new Date()
    const dt = date.formatDate(timeStamp, 'YYYY-MM-DD')
    const queryDate = ref(dt)
    const myTitle = ref('')
    const visibleColumns = ref([
      'order_id',
      'work_order_id',
      'item_id',
      'item_name',
      'work_status',
      'produce_output',
      'std_output_per_hour',
      'actual_output_per_hour',
      'productivity',
      'usage_time',
      'usage_power',
    ])

    const rowKey = 'work_order_id'
    const columns = [
      { name: 'order_id', label: '訂單編號', field: 'order_id' },
      { name: 'work_order_id', label: '工單編號', field: 'work_order_id' },
      { name: 'item_id', label: '品號', field: 'item_id' },
      { name: 'item_name', label: '品名', field: 'item_name' },
      { name: 'work_status', label: '完工狀態', field: 'work_status' },
      { name: 'produce_output', label: '生產數量', field: 'produce_output' },
      {
        name: 'std_output_per_hour',
        label: '標準小時產量',
        field: 'std_output_per_hour',
      },
      {
        name: 'actual_output_per_hour',
        label: '實際小時產量',
        field: 'actual_output_per_hour',
      },
      { name: 'productivity', label: '生產效率（%）', field: 'productivity' },
      {
        name: 'usage_time',
        label: '實際生產時間',
        field: 'usage_time',
        format: (val, row) => dateUtils.minute2DHM(val),
      },
      { name: 'usage_power', label: '用電總量', field: 'usage_power' },
    ]

    const rows = ref([])
    const selected = ref([])

    async function loadData() {
      loadingAnimate.value = true
      showData.value = false

      let response = await api.get('/api/work_orders').catch((err) => {
        QuasarNotify($q, err.message)
        return { data: '123123' }
      })
      loadingAnimate.value = false
      showData.value = true
      rows.value = response.data
      myTitle.value = `報表 - ${queryDate.value}`
      console.table(response.data)
    }

    return {
      queryDate,
      loadData,
      columns,
      rows,
      loadingAnimate,
      rowKey,
      showData,
      visibleColumns,
      initialPagination: {
        page: 1,
        rowsPerPage: 0,
      },
      selected,
      myTitle,
    }
  },
}
</script>

<style scoped></style>
<style lang="sass"></style>
