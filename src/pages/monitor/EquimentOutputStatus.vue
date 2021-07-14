<template>
  <q-page padding style="padding-top: 66px">
    <div class="q-pa-md">
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-3">
          <q-card class="my-card q-ma-xs" @click="estimateClick">
            <q-card-section class="bg-red text-white">
              <div class="text-h6 absolute-center">停機</div>
            </q-card-section>
            <q-list>
              <q-item>
                <q-item-section avatar> 機台編號： </q-item-section>
                <q-item-section> 95276 </q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar> 製令單號： </q-item-section>
                <q-item-section> 5823-189488810 </q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar> 客戶： </q-item-section>
                <q-item-section> </q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar> 品號： </q-item-section>
                <q-item-section> AQQQ9988654 </q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar> 品名： </q-item-section>
                <q-item-section> 150圓盤（鍛胚） </q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar> 完工件數： </q-item-section>
                <q-item-section> 720 </q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar> 生產件數： </q-item-section>
                <q-item-section> 3030 </q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar> 標準小時產量數量： </q-item-section>
                <q-item-section> 356 </q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar> 目前小時產量數量： </q-item-section>
                <q-item-section> 360 </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-3">
          <q-card class="my-card q-ma-xs" @click="estimateClick2">
            <q-card-section class="bg-green text-white">
              <div class="text-h6 absolute-center">稼動</div>
            </q-card-section>
            <q-list>
              <q-item>
                <q-item-section avatar> 機台編號： </q-item-section>
                <q-item-section> 95278 </q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar> 製令單號： </q-item-section>
                <q-item-section> 5823-189933810 </q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar> 客戶： </q-item-section>
                <q-item-section> </q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar> 品號： </q-item-section>
                <q-item-section> AQQQ9988654 </q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar> 品名： </q-item-section>
                <q-item-section> 180圓盤（鍛胚） </q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar> 完工件數： </q-item-section>
                <q-item-section> 133 </q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar> 生產件數： </q-item-section>
                <q-item-section> 130 </q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar> 標準小時產量數量： </q-item-section>
                <q-item-section> 233 </q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar> 目前小時產量數量： </q-item-section>
                <q-item-section> 147 </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-3">
          <q-card class="my-card q-ma-xs" @click="estimateClick3">
            <q-card-section class="bg-green text-white">
              <div class="text-h6 absolute-center">稼動</div>
            </q-card-section>
            <q-list>
              <q-item>
                <q-item-section avatar> 機台編號： </q-item-section>
                <q-item-section> 12280 </q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar> 製令單號： </q-item-section>
                <q-item-section> 58-189110 </q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar> 客戶： </q-item-section>
                <q-item-section> </q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar> 品號： </q-item-section>
                <q-item-section> AQQ8654 </q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar> 品名： </q-item-section>
                <q-item-section> 15圓盤（鍛胚） </q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar> 完工件數： </q-item-section>
                <q-item-section> 72 </q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar> 生產件數： </q-item-section>
                <q-item-section> 303 </q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar> 標準小時產量數量： </q-item-section>
                <q-item-section> 35 </q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar> 目前小時產量數量： </q-item-section>
                <q-item-section> 30 </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </div>
      </div>
    </div>

    <q-dialog v-model="showEstimateTable" full-width>
      <q-card>
        <!-- <q-card-section>
          <div class="text-h6">Full Width</div>
        </q-card-section> -->

        <q-card-section>
          <q-markup-table separator="vertical">
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
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="showEstimateTable2">
      <q-card>
        <q-card-section>
          <div class="text-h6">95278 現況</div>
        </q-card-section>

        <q-card-section>
          <q-markup-table separator="vertical">
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
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="showEstimateTable3">
      <q-card>
        <q-card-section>
          <div class="text-h6">12280 現況</div>
        </q-card-section>

        <div class="row">
          <div class="col">
            <q-item-label header>溫度1</q-item-label>
            <q-item>
              <q-item-section>
                <span style="font-size: 2.5em" class="text-red">486</span>
              </q-item-section>
              <q-item-section side>
                <q-item-label caption class="text-green">490</q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col">
            <q-item-label header>溫度2</q-item-label>
            <q-item>
              <q-item-section>
                <span style="font-size: 2.5em" class="text-red">550</span>
              </q-item-section>
              <q-item-section side>
                <q-item-label caption class="text-green">539</q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <q-item-label header>溫度3</q-item-label>
            <q-item>
              <q-item-section>
                <span style="font-size: 2.5em" class="text-red">620</span>
              </q-item-section>
              <q-item-section side>
                <q-item-label caption class="text-green">605</q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col">
            <q-item-label header>溫度4</q-item-label>
            <q-item>
              <q-item-section>
                <span style="font-size: 2.5em" class="text-red">626</span>
              </q-item-section>
              <q-item-section side>
                <q-item-label caption class="text-green">616</q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <q-item-label header>速度</q-item-label>
            <q-item>
              <q-item-section>
                <span style="font-size: 2.5em" class="text-red">49.8</span>
              </q-item-section>
            </q-item>
          </div>
          <div class="col">
            <q-item-label header>噸位</q-item-label>
            <q-item>
              <q-item-section>
                <span style="font-size: 2.5em" class="text-red">274</span>
              </q-item-section>
            </q-item>
          </div>
        </div>

        <q-separator></q-separator>

        <!-- <q-card-section> </q-card-section> -->

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- place QPageSticky at end of page -->
    <q-page-sticky expand position="top">
      <q-toolbar class="bg-light-blue-6 text-white">
        <q-avatar> </q-avatar>
        <q-toolbar-title>機台設備完工計量即時狀態表</q-toolbar-title>
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
  name: 'EquimentOutputStatus',
  setup() {
    const $q = useQuasar()
    const showEstimateTable = ref(false)
    const showEstimateTable2 = ref(false)
    const showEstimateTable3 = ref(false)

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

    return {
      showEstimateTable,
      showEstimateTable2,
      showEstimateTable3,
      estimateClick() {
        showEstimateTable.value = true
      },
      estimateClick2() {
        showEstimateTable2.value = true
      },
      estimateClick3() {
        showEstimateTable3.value = true
      },
    }
  },
}
</script>

<style lang="sass" scoped>
.q-table tbody td
    font-size: 16px
</style>
