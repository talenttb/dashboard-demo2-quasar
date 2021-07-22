import { ref, onUnmounted, reactive } from 'vue'
import { useQuasar } from 'quasar'

export default function chart(chartRef, isDarkActive) {
  const $q = useQuasar()
  var lastDate = 0
  var data = ref([])
  var TICKINTERVAL = 86400000
  let XAXISRANGE = 777600000
  function getDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0
    while (i < count) {
      var x = baseval
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min

      data.value.push({
        x,
        y,
      })
      lastDate = baseval
      baseval += TICKINTERVAL
      i++
    }
  }

  getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
    min: 10,
    max: 90,
  })

  function getNewSeries(baseval, yrange) {
    var newDate = baseval + TICKINTERVAL
    lastDate = newDate

    for (var i = 0; i < data.value.length - 10; i++) {
      // IMPORTANT
      // we reset the x and y of the data.value which is out of drawing area
      // to prevent memory leaks
      data.value[i].x = newDate - XAXISRANGE - TICKINTERVAL
      data.value[i].y = 0
    }

    data.value.push({
      x: newDate,
      y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min,
    })
  }

  function resetData() {
    // Alternatively, you can also reset the data.value at certain intervals to prevent creating a huge series
    data.value = data.value.slice(data.value.length - 10, data.value.length)
  }

  // :class="$q.dark.isActive ? 'sub-title-dark' : 'sub-title-normal'"

  const chartOptions = reactive({
    chart: {
      id: 'realtime',
      // height: 640,
      type: 'line',
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000,
        },
      },
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    theme: {
      // mode: 'dark',
      mode: isDarkActive ? 'dark' : 'light',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    title: {
      text: 'Dynamic Updating Chart',
      align: 'left',
    },
    markers: {
      size: 0,
    },
    xaxis: {
      type: 'datetime',
      range: XAXISRANGE,
    },
    yaxis: {
      max: 100,
    },
    legend: {
      show: false,
    },
  })

  const chartSeries = ref([
    {
      data: data.value,
    },
  ])

  let timeoutID
  onUnmounted(() => {
    console.log('onUnmounted ')
    clearInterval(timeoutID)
  })

  const loop = function () {
    timeoutID = window.setInterval(function () {
      // console.log(123)
      getNewSeries(lastDate, {
        min: 10,
        max: 90,
      })
      // console.log(123123)

      // chartRef.chart.updateSeries([
      //   {
      //     data: data.value,
      //   },
      // ])
    }, 1000)

    // every 60 seconds, we reset the data.value to prevent memory leaks
    // window.setInterval(function () {
    //   resetData()

    //   chartRef.chart.updateSeries(
    //     [
    //       {
    //         data,
    //       },
    //     ],
    //     false,
    //     true
    //   )
    // }, 10000)
  }

  loop()

  return {
    chartOptions,
    chartSeries,
  }
}
