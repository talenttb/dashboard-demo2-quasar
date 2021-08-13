<template>
  <div class="row">
    <div class="col-xs-12 col-sm-4 col-md-3">
      <q-card class="my-card q-ma-xs" @click="estimateClick">
        <q-card-section class="bg-positive text-white">
          <div class="text-h6 absolute-center">正常</div>
        </q-card-section>
        <q-list dense padding>
          <q-item>
            <q-item-section> 設備編號： </q-item-section>
            <q-item-section> AC-001 </q-item-section>
          </q-item>
          <q-item>
            <q-item-section></q-item-section>
            <q-item-section avatar> 有效稼動率 </q-item-section>
            <q-item-section></q-item-section>
          </q-item>
          <q-item>
            <q-item-section></q-item-section>
            <q-item-section avatar>
              <q-circular-progress
                show-value
                font-size="22px"
                :value="70"
                size="100px"
                :thickness="0.22"
                color="teal"
                track-color="grey-3"
              >
                70%
              </q-circular-progress>
            </q-item-section>
            <q-item-section></q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </div>

    <div class="col-xs-12 col-sm-4 col-md-3">
      <q-card class="my-card q-ma-xs" @click="estimateClick">
        <q-card-section class="bg-positive text-white">
          <div class="text-h6 absolute-center">正常</div>
        </q-card-section>
        <q-list dense padding>
          <q-item>
            <q-item-section> 設備編號： </q-item-section>
            <q-item-section> AC-002 </q-item-section>
          </q-item>
          <q-item>
            <q-item-section></q-item-section>
            <q-item-section avatar> 有效稼動率 </q-item-section>
            <q-item-section></q-item-section>
          </q-item>
          <q-item>
            <q-item-section></q-item-section>
            <q-item-section avatar>
              <q-circular-progress
                show-value
                font-size="22px"
                value="88"
                size="100px"
                :thickness="0.22"
                color="teal"
                track-color="grey-3"
              >
                88%
              </q-circular-progress>
            </q-item-section>
            <q-item-section></q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </div>
    <div class="col-xs-12 col-sm-4 col-md-3">
      <q-card class="my-card q-ma-xs" @click="estimateClick">
        <q-card-section class="bg-positive text-white">
          <div class="text-h6 absolute-center">正常</div>
        </q-card-section>
        <q-list dense padding>
          <q-item>
            <q-item-section> 設備編號： </q-item-section>
            <q-item-section> AC-003 </q-item-section>
          </q-item>
          <q-item>
            <q-item-section></q-item-section>
            <q-item-section avatar> 有效稼動率 </q-item-section>
            <q-item-section></q-item-section>
          </q-item>
          <q-item>
            <q-item-section></q-item-section>
            <q-item-section avatar>
              <q-circular-progress
                show-value
                font-size="22px"
                value="96"
                size="100px"
                :thickness="0.22"
                color="teal"
                track-color="grey-3"
              >
                96%
              </q-circular-progress>
            </q-item-section>
            <q-item-section></q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </div>
    <div class="col-xs-12 col-sm-4 col-md-3">
      <q-card class="my-card q-ma-xs" @click="estimateClick">
        <q-card-section class="bg-negative text-white">
          <div class="text-h6 absolute-center">停機</div>
        </q-card-section>
        <q-list dense padding>
          <q-item>
            <q-item-section> 設備編號： </q-item-section>
            <q-item-section> AC-004 </q-item-section>
          </q-item>
          <q-item>
            <q-item-section></q-item-section>
            <q-item-section avatar> 有效稼動率 </q-item-section>
            <q-item-section></q-item-section>
          </q-item>
          <q-item>
            <q-item-section></q-item-section>
            <q-item-section avatar>
              <q-circular-progress
                show-value
                font-size="22px"
                :value="0"
                size="100px"
                :thickness="0.22"
                color="negative"
                track-color="grey-3"
              >
                0%
              </q-circular-progress>
            </q-item-section>
            <q-item-section></q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </div>
  </div>
</template>

<script>
// import { ref, toRefs } from 'vue'
// import { api } from 'boot/axios'
// import { date, useQuasar } from 'quasar'

export default {
  name: 'TabMachines',

  async setup() {
    return {
      estimateClick() {},
    }
  },
}
</script>

<style scoped></style>
