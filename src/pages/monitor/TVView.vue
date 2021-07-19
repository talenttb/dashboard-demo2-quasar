<template>
  <q-page style="padding-top: 66px">
    <!-- <div class="q-pa-md">
      <div class="q-gutter-y-md" style="max-width: 600px">
        <q-tabs
          v-model="tab"
          dense
          align="justify"
          class="bg-primary text-white shadow-2"
          :breakpoint="0"
        >
          <q-tab name="mails" icon="mail" />
          <q-tab name="alarms" icon="alarm" />
        </q-tabs>

        <q-card>
          <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
            <q-tab name="mails" label="Mails" />
            <q-tab name="alarms" label="Alarms" />
            <q-tab name="movies" label="Movies" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="mails">
              <div class="text-h6">Mails</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="alarms">
              <div class="text-h6">Alarms</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="movies">
              <div class="text-h6">Movies</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div> -->

    <div class="q-pa-md">
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
    </div>

    <!-- place QPageSticky at end of page -->
    <q-page-sticky expand position="top">
      <q-toolbar
        class="text-white"
        :class="$q.dark.isActive ? 'sub-title-dark' : 'sub-title-normal'"
      >
        <q-avatar> </q-avatar>
        <q-toolbar-title>TV畫面</q-toolbar-title>
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
  name: 'TVView',
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

      tab: ref('mails'),
      innerTab: ref('innerMails'),
      splitterModel: ref(20),
    }
  },
}
</script>

<style scoped></style>
<style lang="sass"></style>
