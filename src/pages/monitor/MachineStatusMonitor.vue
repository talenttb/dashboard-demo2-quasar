<template>
  <q-page padding style="padding-top: 66px">
    <div class="q-pa-md" :class="$q.dark.isActive ? 'query-section--dark' : ''">
      <div class="row">
        <!-- <q-table
          dense
          :rows="
            data.orders[item].filter((ele) => ele.work_status !== '已完工')
          "
          :columns="columns"
          row-key="order_id"
          hide-bottom
        >
        </q-table> -->
      </div>
    </div>

    <q-page-sticky expand position="top">
      <q-toolbar
        class="text-white"
        :class="$q.dark.isActive ? 'sub-title-dark' : 'sub-title-normal'"
      >
        <q-avatar> </q-avatar>
        <q-toolbar-title>各項即時數據監控列表</q-toolbar-title>
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
  setup() {
    // const $q = useQuasar()

    //
    // 生產進度Bar(%)
    const data = []
    const columns = [
      {
        name: 'machine_status',
        label: '設備狀態',
        field: 'machine_status',
      },
      { name: 'machine_id', label: '設備編號', field: 'machine_id' },
      { name: 'mfr_order_id', label: '製令單號', field: 'mfr_order_id' },
      { name: 'work_order_id', label: '工單單號', field: 'work_order_id' },
      { name: 'custom_name', label: '客戶名稱', field: 'custom_name' },
      { name: 'item_id', label: '品號', field: 'item_id' },
      { name: 'item_name', label: '品名', field: 'item_name' },
      { name: 'produce_output', label: '完工件數', field: 'produce_output' },
      {
        name: 'produce_target',
        label: '預計生產件數',
        field: 'produce_output',
      },
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
      {
        name: 'productivity',
        label: '生產效率（%）',
        field: 'productivity',
        format: (val, _) => (val ? `${val} %` : ''),
        // 生產效率 >=1 則該項目燈號(或底色)為綠色，1>生產效率>=0.75為橙色，0.75>生產效率為紅色
      },
      {
        name: 'usage_time',
        label: '日期時間',
        field: 'usage_time',
      },
      { name: 'usage_power', label: '生產進度(%)', field: 'usage_power' },
    ]

    return { columns, data }
  },
}
</script>

<style lang="scss" scoped></style>
