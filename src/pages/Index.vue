<template>
  <!-- <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg" />
  </q-page> -->
  <q-page class="q-pt-xs">
    <div class="q-ma-md">
      <div
        class="row q-my-md shadow"
        style="border-radius: 4px; border: 1px solid rgba(0, 0, 0, 0.12)"
      >
        <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 box_1">
          <q-card class="no-shadow q-pa-sm">
            <q-item class="q-pb-none q-pt-xs">
              <q-item-section>
                <q-item-label
                  class="text-h4"
                  style="font-weight: 500; letter-spacing: 3px"
                  >900</q-item-label
                >
                <q-item-label
                  :class="!$q.dark.isActive ? 'text-grey-7' : 'text-white'"
                  style="letter-spacing: 1px"
                  >Total Orders</q-item-label
                >
              </q-item-section>

              <q-item-section side>
                <q-icon
                  name="o_shopping_cart"
                  class="box_1"
                  size="60px"
                ></q-icon>
              </q-item-section>
            </q-item>
            <q-item class="q-py-xs" style="min-height: unset">
              <q-item-section>
                <div class="progress-base q-my-sm">
                  <div class="progress-bar-1" style="width: 70%"></div>
                </div>
              </q-item-section>
            </q-item>
          </q-card>
        </div>
        <div
          class="col-md-3 col-lg-3 col-sm-12 col-xs-12 box_2"
          style="border-left: 1px solid #efefef"
          v-bind:class="{ 'border-top': $q.platform.is.mobile }"
        >
          <q-card class="no-shadow q-pa-sm">
            <q-item class="q-pb-none q-pt-xs">
              <q-item-section>
                <q-item-label
                  class="text-h4"
                  style="font-weight: 500; letter-spacing: 3px"
                  >1050</q-item-label
                >
                <q-item-label
                  :class="!$q.dark.isActive ? 'text-grey-7' : 'text-white'"
                  style="letter-spacing: 1px"
                  >Total Expenses</q-item-label
                >
              </q-item-section>

              <q-item-section side>
                <q-icon
                  name="o_account_balance_wallet"
                  class="box_2"
                  size="60px"
                ></q-icon>
              </q-item-section>
            </q-item>
            <q-item class="q-py-xs" style="min-height: unset">
              <q-item-section>
                <div class="progress-base q-my-sm">
                  <div class="progress-bar-2" style="width: 40%"></div>
                </div>
              </q-item-section>
            </q-item>
          </q-card>
        </div>
        <div
          class="col-md-3 col-lg-3 col-sm-12 col-xs-12 box_3"
          style="border-left: 1px solid #efefef"
          v-bind:class="{ 'border-top': $q.platform.is.mobile }"
        >
          <q-card class="no-shadow q-pa-sm">
            <q-item class="q-pb-none q-pt-xs">
              <q-item-section>
                <q-item-label
                  class="text-h4"
                  style="font-weight: 500; letter-spacing: 3px"
                  >80 %</q-item-label
                >
                <q-item-label
                  :class="!$q.dark.isActive ? 'text-grey-7' : 'text-white'"
                  style="letter-spacing: 1px"
                  >Total Profit</q-item-label
                >
              </q-item-section>

              <q-item-section side>
                <q-icon
                  name="o_account_balance"
                  class="box_3"
                  size="60px"
                ></q-icon>
              </q-item-section>
            </q-item>
            <q-item class="q-py-xs" style="min-height: unset">
              <q-item-section>
                <div class="progress-base q-my-sm">
                  <div class="progress-bar-3" style="width: 80%"></div>
                </div>
              </q-item-section>
            </q-item>
          </q-card>
        </div>
        <div
          class="col-md-3 col-lg-3 col-sm-12 col-xs-12 box_4"
          style="border-left: 1px solid #efefef"
          v-bind:class="{ 'border-top': $q.platform.is.mobile }"
        >
          <q-card class="no-shadow q-pa-sm">
            <q-item class="q-pb-none q-pt-xs">
              <q-item-section>
                <q-item-label
                  class="text-h4"
                  style="font-weight: 500; letter-spacing: 3px"
                  >720</q-item-label
                >
                <q-item-label
                  :class="!$q.dark.isActive ? 'text-grey-7' : 'text-white'"
                  style="letter-spacing: 1px"
                  >New Customers</q-item-label
                >
              </q-item-section>

              <q-item-section side>
                <q-icon name="o_people" class="box_4" size="60px"></q-icon>
              </q-item-section>
            </q-item>
            <q-item class="q-py-xs" style="min-height: unset">
              <q-item-section>
                <div class="progress-base q-my-sm">
                  <div class="progress-bar-4" style="width: 30%"></div>
                </div>
              </q-item-section>
            </q-item>
          </q-card>
        </div>
      </div>

      <div class="row q-col-gutter-md">
        <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
          <q-card flat bordered class="shadow q-pa-none q-ma-none">
            <q-card-section class="row">
              <div
                :class="!$q.dark.isActive ? 'text-grey-7' : 'text-white'"
                class="text-h6 col-12"
              >
                Sales vs Goals
                <q-btn
                  flat
                  dense
                  icon="fas fa-download"
                  class="float-right"
                  @click="SaveImage('sales_goals')"
                  :color="!$q.dark.isActive ? 'grey-8' : 'white'"
                >
                  <q-tooltip>Download</q-tooltip>
                </q-btn>
              </div>
            </q-card-section>

            <q-separator class="full-width" inset></q-separator>

            <q-card-section>
              <v-chart
                :option="areaChartOption"
                ref="sales_goals"
                :resizable="true"
                style="height: 320px"
              />
            </q-card-section>
          </q-card>
        </div>
        <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
          <q-card flat bordered class="shadow q-pa-none q-ma-none">
            <q-card-section class="row">
              <div
                :class="!$q.dark.isActive ? 'text-grey-7' : 'text-white'"
                class="text-h6 col-12"
              >
                Market Share & Growth
                <q-btn
                  flat
                  dense
                  icon="fas fa-download"
                  class="float-right"
                  @click="SaveImage('market_share')"
                  :color="!$q.dark.isActive ? 'grey-8' : 'white'"
                >
                  <q-tooltip>Download</q-tooltip>
                </q-btn>
              </div>
            </q-card-section>

            <q-separator class="full-width" inset></q-separator>

            <q-card-section>
              <v-chart
                :option="barChartOption"
                ref="market_share"
                :resizable="true"
                style="height: 320px"
              />
            </q-card-section>
          </q-card>
        </div>
      </div>

      <div class="row q-col-gutter-md q-pt-md">
        <div class="col">
          <q-card flat bordered class="shadow q-pa-none q-ma-none">
            <q-card-section>
              <div
                :class="!$q.dark.isActive ? 'text-grey-7' : 'text-white'"
                class="text-h6"
              >
                Key Competitors
                <q-btn
                  flat
                  dense
                  icon="fas fa-download"
                  class="float-right"
                  @click="SaveImage('mixRef')"
                  :color="!$q.dark.isActive ? 'grey-8' : 'white'"
                >
                  <q-tooltip>Download</q-tooltip>
                </q-btn>
              </div>
            </q-card-section>

            <q-separator class="full-width" inset></q-separator>

            <q-card-section>
              <v-chart
                :option="mixOptions"
                ref="mixRef"
                :resizable="true"
                style="height: 320px"
              />
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref, watch, onMounted } from 'vue'
import { use, graphic, number, registerMap } from 'echarts/core'
import { useQuasar } from 'quasar'

import { CanvasRenderer } from 'echarts/renderers'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  GridComponent,
  MarkLineComponent,
  DataZoomComponent,
  DatasetComponent,
  VisualMapComponent,
  TimelineComponent,
  CalendarComponent,
  GeoComponent,
} from 'echarts/components'
import {
  LineChart,
  LinesChart,
  BarChart,
  PictorialBarChart,
  CustomChart,
  PieChart,
  MapChart,
} from 'echarts/charts'

import VChart, { THEME_KEY } from 'vue-echarts'

use([
  CanvasRenderer,
  PieChart,
  VisualMapComponent,
  // TimelineComponent,
  // CalendarComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  GridComponent,
  LineChart,
  BarChart,
  // MarkLineComponent,
  // PictorialBarChart,
  // CustomChart,
  // DataZoomComponent,
  DatasetComponent,
  // GeoComponent,
  // LinesChart,
  // MapChart,
])

function wrapCsvValue(val, formatFn) {
  let formatted = formatFn !== void 0 ? formatFn(val) : val
  formatted =
    formatted === void 0 || formatted === null ? '' : String(formatted)
  formatted = formatted.split('"').join('""')
  return `"${formatted}"`
}

export default {
  name: 'PageIndex',
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: 'light',
  },
  setup() {
    const $q = useQuasar()

    const areaChartOption = {
      title: {},
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: [
          'Function A',
          'Function B',
          'Function C',
          'Function D',
          'Function E',
        ],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['x1', 'x2', 'x3', 'x4', 'x5', 'x6', 'x7'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Function A',
          type: 'line',
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: 'Function B',
          type: 'line',
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: 'Function C',
          type: 'line',
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: 'Function D',
          type: 'line',
          data: [320, 332, 301, 334, 390, 330, 320],
        },
        {
          name: 'Function E',
          type: 'line',
          data: [820, 932, 901, 934, 1290, 1330, 1320],
        },
      ],
    }

    const barChartOption = {
      dataset: {
        source: [
          ['score', 'amount', 'product'],
          [89.3, 58212, 'Matcha Latte'],
          [57.1, 78254, 'Milk Tea'],
          [74.4, 41032, 'Cheese Cocoa'],
          [50.1, 12755, 'Cheese Brownie'],
          [89.7, 20145, 'Matcha Cocoa'],
          [68.1, 79146, 'Tea'],
          [19.6, 91852, 'Orange Juice'],
          [10.6, 101852, 'Lemon Juice'],
          [32.7, 20112, 'Walnut Brownie'],
        ],
      },
      grid: { containLabel: true },
      xAxis: { name: 'amount' },
      yAxis: { type: 'category' },
      visualMap: {
        orient: 'horizontal',
        left: 'center',
        min: 10,
        max: 100,
        text: ['High Score', 'Low Score'],
        // Map the score column to color
        dimension: 0,
        inRange: {
          color: ['#65B581', '#FFCE34', '#FD665F'],
        },
      },
      series: [
        {
          type: 'bar',
          encode: {
            // Map the "amount" column to X axis.
            x: 'amount',
            // Map the "product" column to Y axis
            y: 'product',
          },
        },
      ],
    }

    const mixRef = ref(null)

    onMounted(() => {
      mixRef.value.chart.on('updateAxisPointer', (event) => {
        var xAxisInfo = event.axesInfo[0]
        if (xAxisInfo) {
          var dimension = xAxisInfo.value + 1
          mixRef.value.chart.setOption({
            series: {
              id: 'pie',
              label: {
                formatter: '{b}: {@[' + dimension + ']} ({d}%)',
              },
              encode: {
                value: dimension,
                tooltip: dimension,
              },
            },
          })
        }
      })
    })

    const mixOptions = {
      legend: {},
      tooltip: {
        trigger: 'axis',
        showContent: false,
      },
      dataset: {
        source: [
          ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
          ['Milk Tea', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
          ['Matcha Latte', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
          ['Cheese Cocoa', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
          ['Walnut Brownie', 25.2, 37.1, 41.2, 18, 33.9, 49.1],
        ],
      },
      xAxis: { type: 'category' },
      yAxis: { gridIndex: 0 },
      grid: { top: '55%' },
      series: [
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' },
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' },
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' },
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' },
        },
        {
          type: 'pie',
          id: 'pie',
          radius: '30%',
          center: ['50%', '25%'],
          emphasis: { focus: 'data' },
          label: {
            formatter: '{b}: {@2012} ({d}%)',
          },
          encode: {
            itemName: 'product',
            value: '2012',
            tooltip: '2012',
          },
        },
      ],
    }

    return {
      areaChartOption,
      barChartOption,
      mixOptions,
      mixRef,

      SaveImage(type) {
        const linkSource = type.getDataURL()
        const downloadLink = document.createElement('a')
        document.body.appendChild(downloadLink)
        downloadLink.href = linkSource
        downloadLink.target = '_self'
        downloadLink.download = type + '.png'
        downloadLink.click()
      },
      exportTable() {
        // naive encoding to csv format
        const content = [this.columns.map((col) => wrapCsvValue(col.label))]
          .concat(
            this.data.map((row) =>
              this.columns
                .map((col) =>
                  wrapCsvValue(
                    typeof col.field === 'function'
                      ? col.field(row)
                      : row[col.field === void 0 ? col.name : col.field],
                    col.format
                  )
                )
                .join(',')
            )
          )
          .join('\r\n')
        const status = exportFile('activity.csv', content, 'text/csv')
        if (status !== true) {
          this.$q.notify({
            message: 'Browser denied file download...',
            color: 'negative',
            icon: 'warning',
          })
        }
      },
    }
  },
}
</script>

<style scoped>
.box_1 {
  color: #0dceec;
}
.box_2 {
  color: #fe434f;
}
.box_3 {
  color: #15ca20;
}
.box_4 {
  color: #ff9700;
}

.progress-base {
  height: 8px;
  border-radius: 3px;
  background-color: #e9ecef;
}

.progress-bar-1 {
  height: 8px;
  border-radius: 3px;
  background: #17ead9;
  background: -webkit-linear-gradient(45deg, #17ead9, #6078ea) !important;
  background: linear-gradient(45deg, #17ead9, #6078ea) !important;
}
.progress-bar-2 {
  height: 8px;
  border-radius: 3px;
  background: #f54ea2;
  background: -webkit-linear-gradient(45deg, #f54ea2, #ff7676) !important;
  background: linear-gradient(45deg, #f54ea2, #ff7676) !important;
}

.progress-bar-3 {
  height: 8px;
  border-radius: 3px;
  background: #42e695;
  background: -webkit-linear-gradient(45deg, #42e695, #3bb2b8) !important;
  background: linear-gradient(45deg, #42e695, #3bb2b8) !important;
}
.progress-bar-4 {
  height: 8px;
  border-radius: 3px;
  background: #ffdf40;
  background: -webkit-linear-gradient(45deg, #ffdf40, #ff8359) !important;
  background: linear-gradient(45deg, #ffdf40, #ff8359) !important;
}
</style>
