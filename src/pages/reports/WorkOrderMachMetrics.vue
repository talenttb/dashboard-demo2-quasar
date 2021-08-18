製令單
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
            :rules="[(val) => (val && val.length > 0) || '請選擇場域']"
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
            :rules="[(val) => (val && val.length > 0) || '請選擇機器']"
          />
        </div>
      </div>
      <div class="row q-gutter-sm">
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
        <div class="col-xs-12 col-md-5">
          <q-input
            rounded
            outlined
            v-model="wildQuery"
            label="工單/製令單/客戶/品名/品號"
          />
        </div>
      </div>
      <!-- <div class="row q-pt-md q-pb-md"></div> -->
      <div class="row q-pt-md">
        <q-btn push color="secondary" label="查詢" @click="loadData" />
      </div>
    </div>

    <div class="row q-pa-md" v-show="showData">
      <div class="col-2" v-for="item in data" :key="item.mach_id">
        <q-card class="my-card q-ma-xs">
          <q-card-section
            class="text-white"
            :class="workStatus2BgColor(item.work_status)"
          >
            <div class="text-h6 absolute-center">
              {{ workStatus2Chinese(item.work_status) }}
            </div>
          </q-card-section>
          <q-list dense>
            <q-item>
              <q-item-section avatar> 設備編號： </q-item-section>
              <q-item-section> {{ item.mach_id }} </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar> 製令單號： </q-item-section>
              <q-item-section> {{ item.mfr_id }} </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar> 噸位： </q-item-section>
              <q-item-section> {{ item.mach_tonnage }} </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar> 品號： </q-item-section>
              <q-item-section> {{ item.item_id }} </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar> 品名： </q-item-section>
              <q-item-section> {{ item.item_name }} </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar> 目標生產件數： </q-item-section>
              <q-item-section> {{ item.produce_target }} </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar> 完工生產件數： </q-item-section>
              <q-item-section> {{ item.produce_output }} </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar> 生產效率： </q-item-section>
              <q-item-section
                :class="
                  outputPerHour2CSS(
                    item.actual_output_per_hour,
                    item.std_output_per_hour
                  )
                "
              >
                {{ item.actual_output_per_hour / item.std_output_per_hour }} ({{
                  item.actual_output_per_hour
                }}/{{ item.std_output_per_hour }})
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar> 單機累積完工數： </q-item-section>
              <q-item-section>
                {{ item.summary_output }}
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar> 小時平均鍛打數： </q-item-section>
              <q-item-section>
                {{ item.swage_per_hour }}
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar> 用電電流： </q-item-section>
              <q-item-section>
                {{ item.usage_current }}
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar> 用電電壓： </q-item-section>
              <q-item-section>
                {{ item.usage_voltage }}
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar> 用電電量： </q-item-section>
              <q-item-section>
                {{ item.usage_power }}
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar> 用電頻率： </q-item-section>
              <q-item-section>
                {{ item.utility_frequency }}
              </q-item-section>
            </q-item>
            <q-separator color="black" inset />
            <q-item>
              <q-item-section> </q-item-section>
              <q-item-section> 設定值 </q-item-section>
              <q-item-section> 實際值 </q-item-section>
            </q-item>
            <q-item
              v-for="(item_temp, idx) in item.mach_porperties.temperature"
              :key="idx"
            >
              <q-item-section> 溫度{{ idx + 1 }} </q-item-section>
              <q-item-section>
                {{ item_temp.curr }}
              </q-item-section>
              <q-item-section>
                {{ item_temp.setting }}
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section> 速率 </q-item-section>
              <q-item-section>
                {{ item.mach_porperties.velocity.curr }}
              </q-item-section>
              <q-item-section>
                {{ item.mach_porperties.velocity.setting }}
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>
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
        <q-toolbar-title>工單生產狀態查詢</q-toolbar-title>
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
import * as dateUtils from '@/libs/dateUtils'

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

    const wildQuery = ref('')
    const data = ref(null)

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

    const queryProdPerf = ref(null)
    const queryProdPerfRef = ref(null)
    const prodPerfOptions = Object.freeze(['一般', '中等', '低效'])

    async function loadData() {
      loadingAnimate.value = true
      showData.value = false

      // queryFieldRef.value.validate()
      // if (queryFieldRef.value.hasError) {
      //   loadingAnimate.value = false
      //   return
      // }
      // queryMachRef.value.validate()
      // if (queryMachRef.value.hasError) {
      //   loadingAnimate.value = false
      //   return
      // }
      // queryProdPerfRef.value.validate()
      // if (queryProdPerfRef.value.hasError) {
      //   loadingAnimate.value = false
      //   return
      // }

      // let response = await api.get('/api/work_orders').catch((err) => {
      //   QuasarNotify($q, err.message)
      //   return { data: '123123' }
      // })

      data.value = [
        {
          std_output_per_hour: 500,
          actual_output_per_hour: 520,
          produce_target: 2000,
          produce_output: 600,
          item_id: '22998-37338-A',
          item_name: '（鍛造）圓形直徑67',
          work_status: 'work',
          mach_tonnage: 13,
          mach_id: '22998-37338-A',
          mfr_id: '22998-37338-99103',
          summary_output: 30029,
          swage_per_hour: 150,
          usage_current: 1032,
          usage_voltage: 243,
          usage_power: 1003,
          utility_frequency: 59.9,
          mach_porperties: {
            temperature: [
              { curr: 430, setting: 450 },
              { curr: 500, setting: 500 },
              { curr: 510, setting: 500 },
              { curr: 210, setting: 220 },
            ],
            velocity: {
              curr: 80,
              setting: 82,
            },
          },
        },
        {
          std_output_per_hour: 500,
          actual_output_per_hour: 520,
          produce_target: 2000,
          produce_output: 600,
          item_id: '22998-37338-A',
          item_name: '（鍛造）圓形直徑67',
          work_status: 'done',
          mach_tonnage: 13,
          mach_id: '22998-37338-A',
          mfr_id: '22998-37338-99103',
          summary_output: 30029,
          swage_per_hour: 150,
          usage_current: 1032,
          usage_voltage: 243,
          usage_power: 1003,
          utility_frequency: 59.9,
          mach_porperties: {
            temperature: [
              { curr: 430, setting: 450 },
              { curr: 500, setting: 500 },
              { curr: 510, setting: 500 },
              { curr: 210, setting: 220 },
            ],
            velocity: {
              curr: 80,
              setting: 82,
            },
          },
        },
      ]

      loadingAnimate.value = false
      showData.value = true
    }

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
      wildQuery,
      queryProdPerf,
      queryProdPerfRef,
      prodPerfOptions,
      data,
      workStatus2Chinese(item) {
        switch (item) {
          case 'work':
            return '嫁動'
          case 'stop':
            return '停機'
          case 'done':
            return '完工'
        }
      },
      workStatus2BgColor(item) {
        switch (item) {
          case 'work':
            return { 'bg-positive': true }
          case 'stop':
            return { 'bg-negative': true }
          case 'done':
            return { 'bg-accent': true }
        }
      },
      dateUtils,
      outputPerHour2CSS(act, std) {
        // 生產效率(目前小時產量數量/標準小時產量數量) ‧ 生產效率 >=1
        // 則該項目燈號(或底色)為綠色，1>生產效率>=0.75為橙色，0.75>生產效率為紅色
        const rate = act / std
        switch (true) {
          case rate >= 1:
            return { 'output-hi': true }
          case 1 >= rate && rate >= 0.75:
            return { 'output-md': true }
          case 0.75 > rate:
            return { 'output-lo': true }
        }
      },
    }
  },
}
</script>

<style scoped></style>
<style lang="scss">
.output-hi {
  color: green;
}
.output-md {
  color: orange;
}
.output-lo {
  color: red;
}
</style>
