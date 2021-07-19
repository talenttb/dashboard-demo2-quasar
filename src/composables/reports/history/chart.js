import { ref, computed } from 'vue'
import { useQuasar } from 'quasar'
export default function chart(isDarkActive) {
  // const chartOptions = ref({
  //   chart: {
  //     id: 'vuechart-example',
  //   },
  //   xaxis: {
  //     categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
  //   },
  // })

  // const chartSeries = ref([
  //   {
  //     type: 'bar',
  //     name: 'series-1',
  //     data: [30, 40, 35, 50, 49, 60, 70, 91],
  //   },
  //   {
  //     type: 'line',
  //     name: 'series-2',
  //     data: [30, 40, 35, 50, 49, 60, 70, 91],
  //   },
  // ])

  // const $q = useQuasar()
  // console.log($q.dark.isActive)
  const chartOptions = ref({
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false,
      },
    },
    theme: {
      mode: isDarkActive ? 'dark' : 'light',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [5, 7, 5],
      curve: 'straight',
      dashArray: [0, 8, 5],
    },
    title: {
      text: '統計報表',
      align: 'left',
    },
    legend: {
      tooltipHoverFormatter: function (val, opts) {
        return (
          val +
          ' - ' +
          opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
          ''
        )
      },
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6,
      },
    },
    xaxis: {
      categories: [
        '01 Jan',
        '02 Jan',
        '03 Jan',
        '04 Jan',
        '05 Jan',
        '06 Jan',
        '07 Jan',
        '08 Jan',
        '09 Jan',
        '10 Jan',
        '11 Jan',
        '12 Jan',
      ],
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function (val) {
              return val + ' (mins)'
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              return val + ' per session'
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              return val
            },
          },
        },
      ],
    },
    grid: {
      borderColor: '#f1f1f1',
    },
  })
  const chartSeries = ref([
    {
      name: 'Session Duration',
      data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
    },
    {
      name: 'Page Views',
      data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
    },
    {
      name: 'Total Visits',
      data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
    },
  ])

  function changeLinearChart(useDark = false) {
    const max = 90
    const min = 20
    const newData = chartSeries.value[0].data.map(() => {
      return Math.floor(Math.random() * (max - min + 1)) + min
    })

    const colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0']
    console.log(useDark)
    chartOptions.value = {
      ...chartOptions.value,
      ...{
        theme: {
          mode: useDark ? 'dark' : 'light',
        },
        colors: [colors[Math.floor(Math.random() * colors.length)]],
      },
    }

    chartSeries.value = [
      {
        data: newData,
      },
    ]
  }

  return {
    chartOptions,
    chartSeries,
    changeLinearChart,
  }
}
