<template>
  <!-- style="max-width: 300px" -->
  <q-page padding style="padding-top: 66px">
    <!-- section--dark -->

    <div class="q-pa-md" :class="$q.dark.isActive ? 'query-section--dark' : ''">
      <div class="row q-gutter-sm">
        <div class="col-xs-12 col-sm-6 col-md-2">
          <q-select
            rounded
            outlined
            v-model="queryField"
            :options="fieldOptions"
            label="場域"
            style="min-width: 100px"
            class="q-select"
            ref="queryFieldRef"
            :rules="[(val) => (val && val.length > 0) || '場域']"
          />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-2">
          <q-select
            rounded
            outlined
            v-model="queryMach"
            :options="machOptions"
            label="機器"
            ref="queryMachRef"
            style="min-width: 100px"
            :rules="[(val) => (val && val.length > 0) || '機器']"
          />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-2">
          <q-select
            rounded
            outlined
            v-model="queryMach"
            :options="machOptions"
            label="機器"
            style="min-width: 100px"
            :rules="[(val) => (val && val.length > 0) || '機器']"
          />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-2">
          <q-select
            rounded
            outlined
            v-model="queryMach"
            :options="machOptions"
            label="機器"
            style="min-width: 100px"
            :rules="[(val) => (val && val.length > 0) || '機器']"
          />
        </div>
      </div>
      <div class="row q-pt-sm q-gutter-sm">
        <div class="col-xs-12 col-sm-6 col-md-3">
          <q-input filled v-model="queryStartDate" label="起始時間">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-date v-model="queryStartDate" mask="YYYY-MM-DD HH:mm">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
              <q-avatar></q-avatar>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time
                    v-model="queryStartDate"
                    mask="YYYY-MM-DD HH:mm"
                    format24h
                    :minute-options="[0, 15, 30, 45]"
                  >
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3">
          <q-input filled v-model="queryEndDate" label="結束時間">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-date v-model="queryEndDate" mask="YYYY-MM-DD HH:mm">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
              <q-avatar></q-avatar>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time
                    v-model="queryEndDate"
                    mask="YYYY-MM-DD HH:mm"
                    format24h
                  >
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </div>
      <div class="row q-pt-md">
        <q-btn push color="secondary" label="查詢" @click="loadData" />
      </div>
    </div>

    <div class="q-pa-md" v-show="showData">
      <!-- <q-btn
        push
        color="secondary"
        label="折線圖"
        @click="
          () => {
            changeLinearChart($q.dark.isActive)
          }
        "
      /> -->
      <apexchart
        :options="chartOptions"
        :series="chartSeries"
        height="330"
      ></apexchart>
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
        <q-toolbar-title>歷史資料查詢</q-toolbar-title>
      </q-toolbar>
    </q-page-sticky>
  </q-page>
</template>

<script>
import { ref, reactive, isReactive, computed, watch } from 'vue'
import { api } from 'boot/axios'
import { date, useQuasar } from 'quasar'
import QuasarNotify from '../../libs/errorNotify'
import VueApexCharts from 'vue3-apexcharts'
import chart from '@/composables/reports/history/chart'

export default {
  name: 'History',
  components: {
    apexchart: VueApexCharts,
  },
  setup() {
    const $q = useQuasar()
    // const data = ref(null)
    const loadingAnimate = ref(false)
    const showData = ref(false)

    const timeStamp = +new Date()
    const dt = date.formatDate(timeStamp, 'YYYY-MM-DD HH:mm')
    const queryStartDate = ref(dt)
    const queryEndDate = ref(dt)

    const queryField = ref(null)
    const queryFieldRef = ref(null)
    const fieldOptions = Object.freeze(['A01', 'A02', 'A03'])

    const queryMach = ref(null)
    const queryMachRef = ref(null)
    const machOptions = Object.freeze(['F00324', 'F00321', 'F00322'])

    async function loadData() {
      loadingAnimate.value = true
      showData.value = false

      queryMachRef.value.validate()
      if (queryMachRef.value.hasError) {
        loadingAnimate.value = false
        return
      }
      queryFieldRef.value.validate()
      if (queryFieldRef.value.hasError) {
        loadingAnimate.value = false
        return
      }

      // console.log(queryField.value)
      // console.log(queryMach.value)
      // console.log(queryStartDate.value)
      // console.log(queryEndDate.value)

      let response = await api.get('/api/work_orders').catch((err) => {
        QuasarNotify($q, err.message)
        return { data: '123123' }
      })
      loadingAnimate.value = false
      showData.value = true
      // rows.value = response.data
      // myTitle.value = `報表 - ${queryStartDate.value}`
      // console.table(response.data)
    }

    // isDarkActive
    // const $q = useQuasar()
    // console.log($q.dark.isActive)

    const { chartOptions, chartSeries, changeLinearChart } = chart(
      $q.dark.isActive
    )

    watch(
      () => $q.dark.isActive,
      (val) => {
        console.log(val ? 'On dark mode' : 'On light mode')
        const g = chart(val)
        chartOptions.value = g.chartOptions.value
        // chartOptions.value = g.chartOptions.value

        // chartOptions
        console.log(chartOptions.value.theme)
        chartOptions.value = {
          ...chartOptions.value,
          ...{
            theme: {
              mode: val ? 'dark' : 'light',
            },
          },
        }
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
        chartOptions.value.theme.mode = val ? 'dark' : 'light'
        console.log(chartOptions.value.theme)
      }
    )

    return {
      queryStartDate,
      queryEndDate,
      showData,
      loadData,
      loadingAnimate,
      queryField,
      fieldOptions,
      queryFieldRef,
      queryMach,
      machOptions,
      queryMachRef,
      chartOptions,
      chartSeries,
      changeLinearChart,
    }
  },
}
</script>

<style scoped></style>
<style lang="sass"></style>
