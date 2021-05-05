<template>
  <q-page class="q-pa-md">
    <!-- <div class="row q-gutter-sm"> -->
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-3">
        <v-chart class="chart" :option="optionCircle" />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-3">
        <v-chart class="chart" :option="optionLine" />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-3">
        <v-chart class="chart" :option="optinoBar" />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-3">
        <v-chart class="chart" :option="optionPBar" />
      </div>

      <div class="col-xs-12 col-sm-6 col-md-3">
        <v-chart class="chart" :option="optionCC" />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-3">
        <v-chart class="chart" :option="optionCC2" />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-3">
        <v-chart class="chart" :option="optionMBar" />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-3">col1</div>
      <div class="col-xs-12 col-sm-6 col-md-3">col1</div>
    </div>
  </q-page>
</template>

<script>
import { use, graphic, number } from 'echarts/core'
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
} from 'echarts/components'
import {
  LineChart,
  BarChart,
  PictorialBarChart,
  CustomChart,
  PieChart,
} from 'echarts/charts'
import VChart, { THEME_KEY } from 'vue-echarts'
import { ref, defineComponent } from 'vue'

use([
  CanvasRenderer,
  PieChart,
  VisualMapComponent,
  TimelineComponent,
  CalendarComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  GridComponent,
  LineChart,
  BarChart,
  MarkLineComponent,
  PictorialBarChart,
  CustomChart,
  DataZoomComponent,
  DatasetComponent,
])

export default defineComponent({
  name: 'Charts',
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: 'dark',
  },
  setup() {
    const optionCircle = ref({
      title: {
        text: 'Traffic Sources',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines'],
      },
      series: [
        {
          name: 'Traffic Sources',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            { value: 335, name: 'Direct' },
            { value: 310, name: 'Email' },
            { value: 234, name: 'Ad Networks' },
            { value: 135, name: 'Video Ads' },
            { value: 1548, name: 'Search Engines' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    })

    const optionLine = ref({
      title: {
        text: 'Line chart',
      },
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
    })

    const optinoBar = ref({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
      },
      legend: {
        data: [
          '直接访问',
          '邮件营销',
          '联盟广告',
          '视频广告',
          '搜索引擎',
          '百度',
          '谷歌',
          '必应',
          '其他',
        ],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: '直接访问',
          type: 'bar',
          emphasis: {
            focus: 'series',
          },
          data: [320, 332, 301, 334, 390, 330, 320],
        },
        {
          name: '邮件营销',
          type: 'bar',
          stack: '广告',
          emphasis: {
            focus: 'series',
          },
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: '联盟广告',
          type: 'bar',
          stack: '广告',
          emphasis: {
            focus: 'series',
          },
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: '视频广告',
          type: 'bar',
          stack: '广告',
          emphasis: {
            focus: 'series',
          },
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: '搜索引擎',
          type: 'bar',
          data: [862, 1018, 964, 1026, 1679, 1600, 1570],
          emphasis: {
            focus: 'series',
          },
          markLine: {
            lineStyle: {
              type: 'dashed',
            },
            data: [[{ type: 'min' }, { type: 'max' }]],
          },
        },
        {
          name: '百度',
          type: 'bar',
          barWidth: 5,
          stack: '搜索引擎',
          emphasis: {
            focus: 'series',
          },
          data: [620, 732, 701, 734, 1090, 1130, 1120],
        },
        {
          name: '谷歌',
          type: 'bar',
          stack: '搜索引擎',
          emphasis: {
            focus: 'series',
          },
          data: [120, 132, 101, 134, 290, 230, 220],
        },
        {
          name: '必应',
          type: 'bar',
          stack: '搜索引擎',
          emphasis: {
            focus: 'series',
          },
          data: [60, 72, 71, 74, 190, 130, 110],
        },
        {
          name: '其他',
          type: 'bar',
          stack: '搜索引擎',
          emphasis: {
            focus: 'series',
          },
          data: [62, 82, 91, 84, 109, 110, 120],
        },
      ],
    })

    // Generate data
    var category = []
    var dottedBase = +new Date()
    var lineData = []
    var barData = []

    for (var i = 0; i < 20; i++) {
      var date = new Date((dottedBase += 3600 * 24 * 1000))
      category.push(
        [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-')
      )
      var b = Math.random() * 200
      var d = Math.random() * 200
      barData.push(b)
      lineData.push(d + b)
    }

    const optionPBar = ref({
      backgroundColor: '#0f375f',
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        data: ['line', 'bar'],
        textStyle: {
          color: '#ccc',
        },
      },
      xAxis: {
        data: category,
        axisLine: {
          lineStyle: {
            color: '#ccc',
          },
        },
      },
      yAxis: {
        splitLine: { show: false },
        axisLine: {
          lineStyle: {
            color: '#ccc',
          },
        },
      },
      series: [
        {
          name: 'line',
          type: 'line',
          smooth: true,
          showAllSymbol: true,
          symbol: 'emptyCircle',
          symbolSize: 15,
          data: lineData,
        },
        {
          name: 'bar',
          type: 'bar',
          barWidth: 10,
          itemStyle: {
            barBorderRadius: 5,
            color: new graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#14c8d4' },
              { offset: 1, color: '#43eec6' },
            ]),
          },
          data: barData,
        },
        {
          name: 'line',
          type: 'bar',
          barGap: '-100%',
          barWidth: 10,
          itemStyle: {
            color: new graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(20,200,212,0.5)' },
              { offset: 0.2, color: 'rgba(20,200,212,0.2)' },
              { offset: 1, color: 'rgba(20,200,212,0)' },
            ]),
          },
          z: -12,
          data: lineData,
        },
        {
          name: 'dotted',
          type: 'pictorialBar',
          symbol: 'rect',
          itemStyle: {
            color: '#0f375f',
          },
          symbolRepeat: true,
          symbolSize: [12, 4],
          symbolMargin: 1,
          z: -10,
          data: lineData,
        },
      ],
    })

    var data = [
      [10, 16, 3, 'A'],
      [16, 18, 15, 'B'],
      [18, 26, 12, 'C'],
      [26, 32, 22, 'D'],
      [32, 56, 7, 'E'],
      [56, 62, 17, 'F'],
    ]
    var colorList = [
      '#4f81bd',
      '#c0504d',
      '#9bbb59',
      '#604a7b',
      '#948a54',
      '#e46c0b',
    ]

    data = data.map(function (item, index) {
      return {
        value: item,
        itemStyle: {
          color: colorList[index],
        },
      }
    })

    function renderItem(params, api) {
      var yValue = api.value(2)
      var start = api.coord([api.value(0), yValue])
      var size = api.size([api.value(1) - api.value(0), yValue])
      var style = api.style()

      return {
        type: 'rect',
        shape: {
          x: start[0],
          y: start[1],
          width: size[0],
          height: size[1],
        },
        style: style,
      }
    }

    const optionCC = ref({
      title: {
        text: 'Profit',
        left: 'center',
      },
      tooltip: {},
      xAxis: {
        scale: true,
      },
      yAxis: {},
      series: [
        {
          type: 'custom',
          renderItem: renderItem,
          label: {
            show: true,
            position: 'top',
          },
          dimensions: ['from', 'to', 'profit'],
          encode: {
            x: [0, 1],
            y: 2,
            tooltip: [0, 1, 2],
            itemName: 3,
          },
          data: data,
        },
      ],
    })

    var yearCount = 7
    var categoryCount = 30

    var xAxisData = []
    var customData = []
    var legendData = []
    var dataList = []

    legendData.push('trend')
    var encodeY = []
    for (var i = 0; i < yearCount; i++) {
      legendData.push(2010 + i + '')
      dataList.push([])
      encodeY.push(1 + i)
    }

    for (var i = 0; i < categoryCount; i++) {
      var val = Math.random() * 1000
      xAxisData.push('category' + i)
      var customVal = [i]
      customData.push(customVal)

      for (var j = 0; j < dataList.length; j++) {
        var value =
          j === 0
            ? number.round(val, 2)
            : number.round(
                Math.max(0, dataList[j - 1][i] + (Math.random() - 0.5) * 200),
                2
              )
        dataList[j].push(value)
        customVal.push(value)
      }
    }

    function renderItem(params, api) {
      var xValue = api.value(0)
      var currentSeriesIndices = api.currentSeriesIndices()
      var barLayout = api.barLayout({
        barGap: '30%',
        barCategoryGap: '20%',
        count: currentSeriesIndices.length - 1,
      })

      var points = []
      for (var i = 0; i < currentSeriesIndices.length; i++) {
        var seriesIndex = currentSeriesIndices[i]
        if (seriesIndex !== params.seriesIndex) {
          var point = api.coord([xValue, api.value(seriesIndex)])
          point[0] += barLayout[i - 1].offsetCenter
          point[1] -= 20
          points.push(point)
        }
      }
      var style = api.style({
        stroke: api.visual('color'),
        fill: null,
      })

      return {
        type: 'polyline',
        shape: {
          points: points,
        },
        style: style,
      }
    }

    const optionCC2 = ref({
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: legendData,
      },
      dataZoom: [
        {
          type: 'slider',
          start: 50,
          end: 70,
        },
        {
          type: 'inside',
          start: 50,
          end: 70,
        },
      ],
      xAxis: {
        data: xAxisData,
      },
      yAxis: {},
      series: [
        {
          type: 'custom',
          name: 'trend',
          renderItem: renderItem,
          itemStyle: {
            borderWidth: 2,
          },
          encode: {
            x: 0,
            y: encodeY,
          },
          data: customData,
          z: 100,
        },
      ].concat(
        dataList.map(function (data, index) {
          return {
            type: 'bar',
            animation: false,
            name: legendData[index + 1],
            itemStyle: {
              opacity: 0.5,
            },
            data: data,
          }
        })
      ),
    })

    const optionMBar = ref({
      legend: {},
      tooltip: {},
      dataset: {
        source: [
          ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
          ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
          ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
          ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
          ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1],
        ],
      },
      series: [
        {
          type: 'pie',
          radius: '20%',
          center: ['25%', '30%'],
          // No encode specified, by default, it is '2012'.
        },
        {
          type: 'pie',
          radius: '20%',
          center: ['75%', '30%'],
          encode: {
            itemName: 'product',
            value: '2013',
          },
        },
        {
          type: 'pie',
          radius: '20%',
          center: ['25%', '75%'],
          encode: {
            itemName: 'product',
            value: '2014',
          },
        },
        {
          type: 'pie',
          radius: '20%',
          center: ['75%', '75%'],
          encode: {
            itemName: 'product',
            value: '2015',
          },
        },
      ],
    })

    return {
      optionCircle,
      optionLine,
      optinoBar,
      optionPBar,
      optionCC,
      optionCC2,
      optionMBar,
    }
  },
})
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>
