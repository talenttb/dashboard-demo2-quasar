<template>
  <!-- style="max-width: 300px" -->
  <q-page padding style="padding-top: 66px">
    <div class="q-pa-md" :class="$q.dark.isActive ? 'query-section--dark' : ''">
      <div class="row q-pt-md">
        <q-btn push color="secondary" label="查詢" @click="loadData" />
      </div>
    </div>

    <div class="q-pa-md" v-show="showData">
      <div class="row items-center traceability-form">
        <div class="column items-center full-width traceability-form-header">
          <span style="font-size: xx-large">Demo1 生產履歷</span>
        </div>

        <!-- <div class="column items-center full-width">
          <div class="row">123123</div>
          <div class="row">
            <div class="col">.col</div>
            <div class="col">.col</div>
            <div class="col">.col</div>
            <div class="col">.col</div>
          </div>
        </div> -->

        <!-- 生產資訊 -->
        <div class="column items-center full-width traceability-form-subtitle">
          <span style="font-size: x-large">生產資訊</span>
        </div>
        <div class="column items-center full-width">
          <q-markup-table
            separator="cell"
            class="full-width traceability-form-table"
          >
            <tbody>
              <tr class="q-tr--no-hover">
                <td class="text-right">生產日期</td>
                <td class="text-left">2021/02/03 上午 10:23</td>
                <td class="text-right">客戶</td>
                <td class="text-left"></td>
                <td class="text-right">訂單編號</td>
                <td class="text-left">2020987671934</td>
              </tr>
              <tr class="q-tr--no-hover">
                <td class="text-right">製令單號</td>
                <td class="text-left">5203-998132177</td>
                <td class="text-right">生產數量</td>
                <td class="text-left">1000.00</td>
                <td class="text-right">標準工時</td>
                <td class="text-left">0.00</td>
              </tr>
              <tr class="q-tr--no-hover">
                <td class="text-right">上線時間</td>
                <td class="text-left">2021/02/03 上午 10:23</td>
                <td class="text-right">下線時間</td>
                <td class="text-left">2021/02/03 上午 10:23</td>
                <td class="text-right">實際工時</td>
                <td class="text-left">28.8</td>
              </tr>
            </tbody>
          </q-markup-table>
        </div>

        <!-- <div class="col">****</div>
        <div class="col-1">生產日期</div>
        <div class="col-1 col-auto">2021/02/03 上午 10:23</div>
        <div class="col-1">客戶</div>
        <div class="col-2"></div>
        <div class="col-1">訂單編號</div>
        <div class="col-2">2020987671934</div>
        <div class="col">****</div> -->

        <!-- <div class="col-1">製令單號</div>
        <div class="col-3">5203-998132177</div>
        <div class="col-1">生產數量</div>
        <div class="col-3">1000.00</div>
        <div class="col-1">標準工時</div>
        <div class="col-3">0.00</div>

        <div class="col-1">上線時間</div>
        <div class="col-3">2021/02/03 上午 10:23</div>
        <div class="col-1">下線時間</div>
        <div class="col-3">2021/02/03 上午 10:23</div>
        <div class="col-1">實際工時</div>
        <div class="col-3">28.8</div> -->

        <!-- 生產資訊 -->

        <!-- 生產參數 -->
        <div class="column items-center full-width traceability-form-subtitle">
          <span style="font-size: x-large">生產參數</span>
        </div>

        <!-- <div class="row"> -->
        <!-- style="width: 80%"  -->
        <div class="column items-center full-width">
          <q-markup-table separator="none">
            <!-- <thead class="bg-primary">
              <tr>
                <th colspan="8">
                  <div class="column items-center">
                    <div class="text-h4 q-ml-md text-white">生產參數</div>
                  </div>
                </th>
              </tr>
            </thead> -->
            <tbody>
              <tr class="q-tr--no-hover">
                <td class="text-right">即時溫度1</td>
                <td class="text-left">490</td>
                <td class="text-right">設定溫度1</td>
                <td class="text-left">620</td>
                <td class="text-right">即時溫度2</td>
                <td class="text-left">49.8</td>
                <td class="text-right">設定溫度3</td>
                <td class="text-left">49.8</td>
              </tr>
              <tr class="q-tr--no-hover">
                <td class="text-right">即時溫度3</td>
                <td class="text-left">490</td>
                <td class="text-right">設定溫度3</td>
                <td class="text-left">620</td>
                <td class="text-right">即時溫度4</td>
                <td class="text-left">49.8</td>
                <td class="text-right">設定溫度4</td>
                <td class="text-left">49.8</td>
              </tr>
              <tr class="q-tr--no-hover">
                <td class="text-right">用電電流</td>
                <td class="text-left">490</td>
                <td class="text-right">用電電量</td>
                <td class="text-left">620</td>
                <td class="text-right">用電電壓</td>
                <td class="text-left">49.8</td>
                <td class="text-right">用電頻率</td>
                <td class="text-left">49.8</td>
              </tr>
              <tr class="q-tr--no-hover">
                <td class="text-right">轉速</td>
                <td class="text-left">490</td>
                <td class="text-right"></td>
                <td class="text-left"></td>
                <td class="text-right"></td>
                <td class="text-left"></td>
                <td class="text-right"></td>
                <td class="text-left"></td>
              </tr>
            </tbody>
          </q-markup-table>
        </div>

        <!-- <div class="column items-center full-width">
          <div class="row">
            <div class="col col-md-auto">即時溫度1</div>
            <div class="col">383.66</div>
            <div class="col col-md-auto">設定溫度1</div>
            <div class="col">340</div>
            <div class="col col-md-auto">即時溫度2</div>
            <div class="col">523</div>
            <div class="col col-md-auto">設定溫度3</div>
            <div class="col">520</div>
          </div>
          <div class="row">
            <div class="col col-md-auto">即時溫度3</div>
            <div class="col">509.13</div>
            <div class="col col-md-auto">設定溫度3</div>
            <div class="col">510</div>
            <div class="col col-md-auto">即時溫度4</div>
            <div class="col">497.79</div>
            <div class="col col-md-auto">設定溫度4</div>
            <div class="col">500</div>
          </div>
          <div class="row">
            <div class="col col-md-auto">用電電流</div>
            <div class="col">15.76</div>
            <div class="col col-md-auto">用電電量</div>
            <div class="col">1085.31</div>
            <div class="col col-md-auto">用電電壓</div>
            <div class="col">400.77</div>
            <div class="col col-md-auto">用電頻率</div>
            <div class="col">60.01</div>
          </div>
          <div class="row">
            <div class="col col-md-auto">轉速</div>
            <div class="col">61.51</div>
          </div>
        </div> -->
        <!-- 生產參數 -->

        <div class="column items-center full-width">
          <div class="col">
            <q-timeline color="secondary">
              <q-timeline-entry
                title="料號來源"
                subtitle="2021/01/03"
                icon="done_all"
              >
                <div>
                  IO992843 來源：西來製作有限公司 製作人：王12 組長：陳23
                </div>
              </q-timeline-entry>

              <q-timeline-entry title="製作">
                <div>
                  IO992843 來源：西來製作有限公司 製作人：王12 組長：陳23
                </div>
              </q-timeline-entry>

              <q-timeline-entry
                title="組裝"
                subtitle="2021/02/03"
                color="orange"
                icon="done_all"
              >
                <div>
                  IO992843 來源：西來製作有限公司 製作人：王12 組長：陳23
                </div>
              </q-timeline-entry>

              <q-timeline-entry
                title="品管抽驗"
                subtitle="2021/02/03"
                color="orange"
                icon="done_all"
              >
                <div>
                  IO992843 來源：西來製作有限公司 製作人：王12 組長：陳23
                </div>
              </q-timeline-entry>

              <q-timeline-entry
                title="出貨"
                subtitle="2021/03/05"
                color="orange"
                icon="done_all"
              >
                <div>
                  IO992843 來源：西來製作有限公司 製作人：王12 組長：陳23
                </div>
              </q-timeline-entry>
            </q-timeline>
          </div>
        </div>
      </div>

      <!-- <q-timeline-entry heading> Demo1 生產履歷 </q-timeline-entry> -->

      <!-- <div class="column items-center">
        <div class="col">
          <q-markup-table separator="vertical" style="width: 80%">
            <thead class="bg-primary text-white">
              <tr>
                <th class="text-left">95276</th>
                <th class="text-right">溫度1</th>
                <th class="text-right">溫度2</th>
                <th class="text-right">溫度3</th>
                <th class="text-right">溫度4</th>
                <th class="text-right">速度</th>
                <th class="text-right">噸位</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-left">設定值</td>
                <td class="text-right text-green">490</td>
                <td class="text-right text-green">550</td>
                <td class="text-right text-green">620</td>
                <td class="text-right text-green">626</td>
                <td class="text-right text-red" rowspan="2">49.8</td>
                <td class="text-right text-red" rowspan="2">27.4</td>
              </tr>
              <tr>
                <td class="text-left">實際值</td>
                <td class="text-right text-red">486</td>
                <td class="text-right text-red">529</td>
                <td class="text-right text-red">605</td>
                <td class="text-right text-red">616</td>
              </tr>
            </tbody>
          </q-markup-table>
        </div>
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
        <q-toolbar-title>生產履歷</q-toolbar-title>
      </q-toolbar>
    </q-page-sticky>
  </q-page>
</template>

<script>
import { ref } from 'vue'
// import { ref, reactive, isReactive, computed, watch } from 'vue'
// import { api } from 'boot/axios'
// import { date, useQuasar } from 'quasar'
// import QuasarNotify from '../../libs/errorNotify'
// import VueApexCharts from 'vue3-apexcharts'
// import chart from '@/composables/reports/history/chart'

export default {
  name: 'Traceability',
  setup() {
    const showData = ref(true)
    const loadingAnimate = ref(false)
    const loadData = async () => {}
    return {
      step: ref(1),
      loadingAnimate,
      showData,
      loadData,
    }
  },
}
</script>

<style scoped></style>
<style lang="sass" scoped></style>

<style lang="scss" scoped>
.traceability-form {
  border: 2px inset rgba(15, 16, 87, 0.2);
  // background: white;
  // background: $blue-2;
  background: $light-blue-2;
  // background: $cyan-2;
}
.traceability-form-header {
  border-bottom: 2px inset rgba(15, 16, 87, 0.2);
}
.traceability-form-subtitle {
  background: rgba(47, 250, 108, 0.76);
  padding-block: 5px;
}

.traceability-form-table tr:nth-child(even) {
  background: $cyan-1;
}
</style>
