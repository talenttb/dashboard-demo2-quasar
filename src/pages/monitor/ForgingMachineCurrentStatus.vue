<template>
  <q-page>
    <div class="q-pa-md" v-show="showData">
      <apexchart
        height="640"
        ref="chartRef"
        :options="chartOptions"
        :series="chartSeries"
      ></apexchart>
      <!-- <div id="chart">
        <apexchart
          type="line"
          height="350"
          ref="chart"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div> -->
    </div>

    <q-inner-loading :showing="loadingAnimate">
      <q-spinner-gears size="50px" color="primary" />
    </q-inner-loading>

    <!-- place QPageSticky at end of page -->
    <q-page-sticky expand position="top">
      <q-toolbar class="bg-light-blue-6 text-white">
        <q-avatar> </q-avatar>
        <q-toolbar-title>鍛造機台即時狀態</q-toolbar-title>
      </q-toolbar>
    </q-page-sticky>
  </q-page>
</template>

<script>
import { ref, reactive, onMounted, computed } from 'vue'
import { api } from 'boot/axios'
import { useQuasar } from 'quasar'
import QuasarNotify from '../../libs/errorNotify'
import VueApexCharts from 'vue3-apexcharts'
import chart from '@/composables/monitor/forging-machine-current-status/chart'

export default {
  name: 'History',
  components: {
    apexchart: VueApexCharts,
  },
  setup() {
    const $q = useQuasar()

    const loadingAnimate = ref(false)
    const showData = ref(false)

    const loadData = async () => {
      loadingAnimate.value = true
      showData.value = false

      let response = await api.get('/api/work_orders').catch((err) => {
        QuasarNotify($q, err.message)
        return { data: '123123' }
      })
      loadingAnimate.value = false
      showData.value = true
    }

    const chartRef = ref(null)

    onMounted(() => {
      loadData()
    })

    const { chartOptions, chartSeries } = chart(chartRef)
    return {
      showData,
      loadingAnimate,

      chartRef,
      chartOptions,
      chartSeries,
    }
  },
}
</script>

<style scoped></style>
<style lang="sass"></style>
