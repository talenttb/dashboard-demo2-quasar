<template>
  <div class="row">
    <!-- 環境溫度
環境濕度
總耗電(kWh) -->

    <div class="col-2">
      <q-card class="my-card q-ma-xs">
        <q-card-section class="bg-positive text-white">
          <div class="text-h6 absolute-center">外辦公室</div>
        </q-card-section>
        <q-list dense class="text-weight-bold" style="font-size: median">
          <q-item>
            <q-item-section> 環境溫度： </q-item-section>
            <q-item-section> 28 °C</q-item-section>
          </q-item>
          <q-item>
            <q-item-section> 環境濕度： </q-item-section>
            <q-item-section> 75 %</q-item-section>
          </q-item>
          <q-item>
            <q-item-section> 總耗電： </q-item-section>
            <q-item-section> 620 kWh</q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </div>
    <div class="col-3">
      <q-card class="my-card q-ma-xs">
        <q-card-section class="bg-positive text-white">
          <div class="text-h6 absolute-center">外廠房1</div>
        </q-card-section>
        <q-list dense padding class="text-weight-bold" style="font-size: large">
          <q-item>
            <q-item-section> 環境溫度： </q-item-section>
            <q-item-section> 35 °C</q-item-section>
          </q-item>
          <q-item>
            <q-item-section> 環境濕度： </q-item-section>
            <q-item-section> 75 %</q-item-section>
          </q-item>
          <q-item>
            <q-item-section> 總耗電： </q-item-section>
            <q-item-section> 2620 kWh</q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </div>
    <div class="col-2">
      <q-card class="my-card q-ma-xs">
        <q-card-section class="bg-positive text-white">
          <div class="text-h6 absolute-center">倉庫1</div>
        </q-card-section>
        <q-list dense class="text-weight-bold" style="font-size: median">
          <q-item>
            <q-item-section> 環境溫度： </q-item-section>
            <q-item-section> 33 °C</q-item-section>
          </q-item>
          <q-item>
            <q-item-section> 環境濕度： </q-item-section>
            <q-item-section> 80 %</q-item-section>
          </q-item>
          <q-item>
            <q-item-section> 總耗電： </q-item-section>
            <q-item-section> 80 kWh</q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </div>
    <div class="col-5">
      <q-card class="my-card q-ma-xs">
        <q-card-section class="bg-positive text-white">
          <div class="text-h5 absolute-center">研究大樓（實驗室）</div>
        </q-card-section>
        <q-list class="text-weight-bold" style="font-size: x-large">
          <q-item>
            <q-item-section> 環境溫度： </q-item-section>
            <q-item-section> 15 °C</q-item-section>
          </q-item>
          <q-item>
            <q-item-section> 環境濕度： </q-item-section>
            <q-item-section> 58 %</q-item-section>
          </q-item>
          <q-item>
            <q-item-section> 總耗電： </q-item-section>
            <q-item-section> 1920 kWh</q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </div>
    <div class="col-4">
      <q-card class="my-card q-ma-xs">
        <q-card-section class="bg-positive text-white">
          <div class="text-h5 absolute-center">研究大樓</div>
        </q-card-section>
        <q-list
          dense
          padding
          class="text-weight-bold"
          style="font-size: x-large"
        >
          <q-item>
            <q-item-section> 環境溫度： </q-item-section>
            <q-item-section> 22 °C</q-item-section>
          </q-item>
          <q-item>
            <q-item-section> 環境濕度： </q-item-section>
            <q-item-section> 60 %</q-item-section>
          </q-item>
          <q-item>
            <q-item-section> 總耗電： </q-item-section>
            <q-item-section> 120 kWh</q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </div>
    <div class="col-2">
      <q-card class="my-card q-ma-xs">
        <q-card-section class="bg-positive text-white">
          <div class="text-h6 absolute-center">倉庫2</div>
        </q-card-section>
        <q-list dense class="text-weight-bold" style="font-size: median">
          <q-item>
            <q-item-section> 環境溫度： </q-item-section>
            <q-item-section> 33 °C</q-item-section>
          </q-item>
          <q-item>
            <q-item-section> 環境濕度： </q-item-section>
            <q-item-section> 80 %</q-item-section>
          </q-item>
          <q-item>
            <q-item-section> 總耗電： </q-item-section>
            <q-item-section> 80 kWh</q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </div>
    <div class="col-2">
      <q-card class="my-card q-ma-xs">
        <q-card-section class="bg-negative text-white">
          <div class="text-h6 absolute-center">倉庫3</div>
        </q-card-section>
        <q-list dense class="text-weight-bold" style="font-size: median">
          <q-item>
            <q-item-section> 環境溫度： </q-item-section>
            <q-item-section> -- °C</q-item-section>
          </q-item>
          <q-item>
            <q-item-section> 環境濕度： </q-item-section>
            <q-item-section> 80 %</q-item-section>
          </q-item>
          <q-item>
            <q-item-section> 總耗電： </q-item-section>
            <q-item-section> 80 kWh</q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </div>
    <div class="col-3">
      <q-card class="my-card q-ma-xs">
        <q-card-section class="bg-positive text-white">
          <div class="text-h6 absolute-center">廠房1</div>
        </q-card-section>
        <q-list dense padding class="text-weight-bold" style="font-size: large">
          <q-item>
            <q-item-section> 環境溫度： </q-item-section>
            <q-item-section> 28 °C</q-item-section>
          </q-item>
          <q-item>
            <q-item-section> 環境濕度： </q-item-section>
            <q-item-section> 60 %</q-item-section>
          </q-item>
          <q-item>
            <q-item-section> 總耗電： </q-item-section>
            <q-item-section> 120 kWh</q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </div>
    <div class="col-5">
      <q-card class="my-card q-ma-xs">
        <q-card-section class="bg-positive text-white">
          <div class="text-h5 absolute-center">辦公大樓</div>
        </q-card-section>
        <q-list padding class="text-weight-bold" style="font-size: x-large">
          <q-item>
            <q-item-section> 環境溫度： </q-item-section>
            <q-item-section> 22 °C</q-item-section>
          </q-item>
          <q-item>
            <q-item-section> 環境濕度： </q-item-section>
            <q-item-section> 60 %</q-item-section>
          </q-item>
          <q-item>
            <q-item-section> 總耗電： </q-item-section>
            <q-item-section> 120 kWh</q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </div>
  </div>
</template>

<script>
import { ref, toRefs } from 'vue'
// import { api } from 'boot/axios'
// import { date, useQuasar } from 'quasar'
import * as dateUtils from '@/libs/dateUtils'

export default {
  async setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.running-col {
  border-style: double;
  border-width: 10px;
  border-color: $positive;
}
</style>

<style lang="sass" scoped>
.flex-break
  flex: 1 0 100% !important
  width: 0 !important

.example-container
  height: 100px

  .example-cell
    margin: 1px
    padding: 4px 8px
    box-shadow: inset 0 0 0 2px $grey-6

.flex-break
  flex: 1 0 100% !important
.row
  .flex-break
    height: 0 !important
.column
  .flex-break
    width: 0 !important
</style>
