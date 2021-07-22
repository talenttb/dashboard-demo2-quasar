<template>
  <q-page>
    <q-tabs
      v-model="tab"
      dense
      class="text-grey"
      active-color="primary"
      indicator-color="primary"
      align="justify"
    >
      <q-tab name="mails" label="Mails" />
      <q-tab name="alarms" label="Alarms" icon="alarm" />
      <q-tab name="movies" label="Movies" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="mails" class="q-pa-none">
        <q-splitter v-model="splitterModel" style="height: 250px">
          <template v-slot:before>
            <q-tabs v-model="innerTab" vertical class="text-teal">
              <q-tab name="innerMails" icon="mail" label="Mails" />
              <q-tab name="innerAlarms" icon="alarm" label="Alarms" />
              <q-tab name="innerMovies" icon="movie" label="Movies" />
            </q-tabs>
          </template>

          <template v-slot:after>
            <q-tab-panels
              v-model="innerTab"
              animated
              transition-prev="slide-down"
              transition-next="slide-up"
            >
              <q-tab-panel name="innerMails">
                <div class="text-h4 q-mb-md">Mails</div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                  praesentium cumque magnam odio iure quidem, quod illum numquam
                  possimus obcaecati commodi minima assumenda consectetur culpa
                  fuga nulla ullam. In, libero.
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                  praesentium cumque magnam odio iure quidem, quod illum numquam
                  possimus obcaecati commodi minima assumenda consectetur culpa
                  fuga nulla ullam. In, libero.
                </p>
              </q-tab-panel>

              <q-tab-panel name="innerAlarms">
                <div class="text-h4 q-mb-md">Alarms</div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                  praesentium cumque magnam odio iure quidem, quod illum numquam
                  possimus obcaecati commodi minima assumenda consectetur culpa
                  fuga nulla ullam. In, libero.
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                  praesentium cumque magnam odio iure quidem, quod illum numquam
                  possimus obcaecati commodi minima assumenda consectetur culpa
                  fuga nulla ullam. In, libero.
                </p>
              </q-tab-panel>

              <q-tab-panel name="innerMovies">
                <div class="text-h4 q-mb-md">Movies</div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                  praesentium cumque magnam odio iure quidem, quod illum numquam
                  possimus obcaecati commodi minima assumenda consectetur culpa
                  fuga nulla ullam. In, libero.
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                  praesentium cumque magnam odio iure quidem, quod illum numquam
                  possimus obcaecati commodi minima assumenda consectetur culpa
                  fuga nulla ullam. In, libero.
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                  praesentium cumque magnam odio iure quidem, quod illum numquam
                  possimus obcaecati commodi minima assumenda consectetur culpa
                  fuga nulla ullam. In, libero.
                </p>
              </q-tab-panel>
            </q-tab-panels>
          </template>
        </q-splitter>
      </q-tab-panel>

      <q-tab-panel name="alarms">
        <div class="text-h6">Alarms</div>
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
          <image
            href="~assets/Snipaste_2021-07-07_19-55-52.png"
            height="500"
            width="500"
          />
          <line
            :ref="line1"
            v-if="showing"
            x1="50"
            y1="135"
            x2="360"
            y2="135"
            style="stroke: rgb(255, 0, 0); stroke-width: 2"
          />
          <line
            :ref="line2"
            v-if="showing"
            x1="50"
            y1="135"
            x2="50"
            y2="201"
            style="stroke: rgb(255, 0, 0); stroke-width: 2"
          />
          <line
            :ref="line3"
            v-if="showing"
            x1="50"
            y1="201"
            x2="360"
            y2="201"
            style="stroke: rgb(255, 0, 0); stroke-width: 2"
          />
          <line
            :ref="line4"
            v-if="showing"
            x1="360"
            y1="201"
            x2="360"
            y2="135"
            style="stroke: rgb(255, 0, 0); stroke-width: 2"
          />

          <text x="150" y="100" style="font: italic 20px serif; fill: red">
            {{ myText }}
          </text>
        </svg>
      </q-tab-panel>

      <q-tab-panel name="movies">
        <div class="q-pa-md" v-show="showData">
          <apexchart
            height="640"
            ref="chartRef"
            :options="chartOptions"
            :series="chartSeries"
          ></apexchart>
        </div>

        <q-inner-loading :showing="loadingAnimate">
          <q-spinner-gears size="50px" color="primary" />
        </q-inner-loading>
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
  <!-- <q-page style="padding-top: 66px"> -->
  <!-- <div class="q-pa-md">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
        >
          <q-tab name="mails" label="Mails" />
          <q-tab name="alarms" label="Alarms" icon="alarm" />
          <q-tab name="movies" label="Movies" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="mails" class="q-pa-none">
            <q-splitter v-model="splitterModel" style="height: 250px">
              <template v-slot:before>
                <q-tabs v-model="innerTab" vertical class="text-teal">
                  <q-tab name="innerMails" icon="mail" label="Mails" />
                  <q-tab name="innerAlarms" icon="alarm" label="Alarms" />
                  <q-tab name="innerMovies" icon="movie" label="Movies" />
                </q-tabs>
              </template>

              <template v-slot:after>
                <q-tab-panels
                  v-model="innerTab"
                  animated
                  transition-prev="slide-down"
                  transition-next="slide-up"
                >
                  <q-tab-panel name="innerMails">
                    <div class="text-h4 q-mb-md">Mails</div>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quis praesentium cumque magnam odio iure quidem, quod
                      illum numquam possimus obcaecati commodi minima assumenda
                      consectetur culpa fuga nulla ullam. In, libero.
                    </p>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quis praesentium cumque magnam odio iure quidem, quod
                      illum numquam possimus obcaecati commodi minima assumenda
                      consectetur culpa fuga nulla ullam. In, libero.
                    </p>
                  </q-tab-panel>

                  <q-tab-panel name="innerAlarms">
                    <div class="text-h4 q-mb-md">Alarms</div>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quis praesentium cumque magnam odio iure quidem, quod
                      illum numquam possimus obcaecati commodi minima assumenda
                      consectetur culpa fuga nulla ullam. In, libero.
                    </p>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quis praesentium cumque magnam odio iure quidem, quod
                      illum numquam possimus obcaecati commodi minima assumenda
                      consectetur culpa fuga nulla ullam. In, libero.
                    </p>
                  </q-tab-panel>

                  <q-tab-panel name="innerMovies">
                    <div class="text-h4 q-mb-md">Movies</div>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quis praesentium cumque magnam odio iure quidem, quod
                      illum numquam possimus obcaecati commodi minima assumenda
                      consectetur culpa fuga nulla ullam. In, libero.
                    </p>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quis praesentium cumque magnam odio iure quidem, quod
                      illum numquam possimus obcaecati commodi minima assumenda
                      consectetur culpa fuga nulla ullam. In, libero.
                    </p>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quis praesentium cumque magnam odio iure quidem, quod
                      illum numquam possimus obcaecati commodi minima assumenda
                      consectetur culpa fuga nulla ullam. In, libero.
                    </p>
                  </q-tab-panel>
                </q-tab-panels>
              </template>
            </q-splitter>
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="q-pa-md" v-show="showData">
              <apexchart
                height="640"
                ref="chartRef"
                :options="chartOptions"
                :series="chartSeries"
              ></apexchart>
            </div>

            <q-inner-loading :showing="loadingAnimate">
              <q-spinner-gears size="50px" color="primary" />
            </q-inner-loading>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div> -->

  <!-- place QPageSticky at end of page -->
  <!-- <q-page-sticky expand position="top">
      <q-toolbar
        class="text-white"
        :class="$q.dark.isActive ? 'sub-title-dark' : 'sub-title-normal'"
      >
        <q-avatar> </q-avatar>
        <q-toolbar-title>TV畫面</q-toolbar-title>
        <q-btn-toggle
          v-model="tabModel"
          spread
          no-caps
          toggle-color="purple"
          color="white"
          text-color="black"
          :options="[
            { label: 'Option 1', value: 'one' },
            { label: 'Option 2', value: 'two' },
          ]"
        />
      </q-toolbar>
    </q-page-sticky> -->
  <!-- </q-page> -->
</template>

<script>
import { ref, reactive, onMounted, computed, onUnmounted } from 'vue'
import { api } from 'boot/axios'
import { useQuasar } from 'quasar'
import QuasarNotify from '../../libs/errorNotify'
import VueApexCharts from 'vue3-apexcharts'
import chart from '@/composables/monitor/forging-machine-current-status/chart'

export default {
  name: 'TVView',
  components: {
    apexchart: VueApexCharts,
  },
  setup() {
    const $q = useQuasar()

    const loadingAnimate = ref(false)
    const showData = ref(false)
    const tab = ref('mails')

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

    onUnmounted(() => {
      console.log('onUnmounted ')
      clearInterval(timeoutID)
      clearInterval(timeoutID2)
    })

    var timeoutID = window.setInterval(() => {
      showing.value = !showing.value
      myText.value = myText.value.length > 10 ? '有人闖入' : `!${myText.value}!`
    }, 1000)

    var timeoutID2 = window.setInterval(() => {
      const tabList = ['mails', 'alarms', 'movies']
      let nextIdx = tabList.indexOf(tab.value) + 1
      if (nextIdx >= tabList.length) {
        nextIdx = 0
      }
      tab.value = tabList[nextIdx]
      console.log('timeout2')
    }, 5000)

    const line1 = ref(null)
    const line2 = ref(null)
    const line3 = ref(null)
    const line4 = ref(null)
    const color = ref('black')
    const showing = ref(false)
    const myText = ref('有人闖入')

    const { chartOptions, chartSeries } = chart(chartRef)

    return {
      showData,
      loadingAnimate,

      chartRef,
      chartOptions,
      chartSeries,

      tabModel: ref('one'),

      tab,
      innerTab: ref('innerMails'),
      splitterModel: ref(20),

      line1,
      line2,
      line3,
      line4,
      color,
      showing,
      myText,
    }
  },
}
</script>

<style scoped>
svg {
  width: 50vw;
  height: 500px;
}

@media screen and (min-width: 701px) and (max-width: 950px) {
  svg {
    height: 300px;
  }
}

@media screen and (max-width: 700px) {
  svg {
    margin-top: 150px;
    height: 100px;
  }
}
</style>
<style lang="sass"></style>
