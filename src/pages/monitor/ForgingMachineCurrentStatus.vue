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
      <q-toolbar
        class="text-white"
        :class="$q.dark.isActive ? 'sub-title-dark' : 'sub-title-normal'"
      >
        <q-avatar> </q-avatar>
        <q-toolbar-title>鍛造機台即時狀態</q-toolbar-title>
      </q-toolbar>
    </q-page-sticky>
  </q-page>
</template>

<script>
import { ref, reactive, onMounted, computed, watch } from 'vue'
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

    const { chartOptions, chartSeries } = chart(chartRef, $q.dark.isActive)

    // theme: {
    //   mode: $q.dark.isActive ? 'dark' : 'light',
    // },
    watch(
      () => $q.dark.isActive,
      (val) => {
        console.log(val ? 'On dark mode' : 'On light mode')
        // const g = chart(chartRef,val)
        // chartOptions.value = g.chartOptions.value
        // chartOptions.value = g.chartOptions.value

        // chartOptions
        // console.log(chartOptions.value.theme)
        // chartOptions.value = {
        //   ...chartOptions.value,
        //   ...{
        //     theme: {
        //       mode: val ? 'dark' : 'light',
        //     },
        //   },
        // }
        // chartRef.value.updateOptions({
        //   theme: {
        //     mode: val ? 'dark' : 'light',
        //   },
        // })
        // window.ApexCharts.exec('apexchartsrealtime', 'updateOptions', {
        //   theme: {
        //     mode: false ? 'dark' : 'light',
        //   },
        // })

        // theme: {
        //   mode: $q.dark.isActive ? 'dark' : 'light',
        // },
        chartOptions.theme = val ? { mode: 'dark' } : { mode: 'light' }
        console.log(chartOptions.theme)
      }
    )

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
