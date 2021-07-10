<template>
  <q-page class="q-pa-md">
    <div>
      <q-btn push color="secondary" label="查詢" @click="changeClick" />
    </div>
    <div>
      <!-- <svg viewBox="0 0 500 500">
        <defs>
          <pattern
            id="p-fire"
            viewBox="0 0 300 300"
            patternUnits="userSpaceOnUse"
            width="250"
            height="300"
            x="0"
            y="0"
          >
            <image
              xlink:href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/giphy-downsized%20(1).gif"
              width="480"
              height="480"
            />
          </pattern>
        </defs>

        <text
          x="50%"
          y="250"
          fill="url(#p-fire)"
          font-family="Erica One"
          font-size="140"
          stroke="white"
          text-anchor="middle"
        >
          {{ type }}
        </text>
      </svg> -->
    </div>
    <!-- <div>
      <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <image
          href="https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/SVG/Element/image/mdn_logo_only_color.png"
          height="200"
          width="200"
        />
      </svg>
    </div> -->
    <div>
      <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <image
          href="~assets/Snipaste_2021-07-07_19-55-52.png"
          height="500"
          width="500"
        />
        <!-- <circle
          id="circle1"
          cx="0"
          cy="0"
          r="20"
          fill="red"
          @click="circle1Clicked"
        />
        <circle
          id="circle2"
          cx="0"
          cy="0"
          r="20"
          fill="green"
          @click="circle2Clicked"
        /> -->
        <!-- <rect x="50" y="135" width="310" height="66" /> -->
        <!-- <line x1="50" x2="360" y1="135" y2="201" />
        <line x1="10" x2="500" y1="50" y2="150" /> -->
        <!-- :storke="color" -->
        <!-- stroke="black" -->
        <!-- storke="rgb(81, 255, 0);" -->
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
    </div>
    <!-- <div>
      <svg viewBox="0 0 40 300">
        <image
          href="~assets/Snipaste_2021-07-07_19-55-52.png"
          x="0"
          y="0"
          height="500"
          width="500"
        />

        <circle
          id="circle1"
          cx="0"
          cy="0"
          r="20"
          fill="red"
          @click="circle1Clicked"
        />
        <circle
          id="circle2"
          cx="0"
          cy="0"
          r="20"
          fill="green"
          @click="circle2Clicked"
        />
        <rect x="0" y="0" width="30" height="30" />
        <text x="0" y="0">I love SVG</text>
      </svg>
    </div> -->
  </q-page>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
export default {
  name: 'Test',
  setup() {
    const type = ref('123')

    const line1 = ref(null)
    const line2 = ref(null)
    const line3 = ref(null)
    const line4 = ref(null)
    const color = ref('black')
    const showing = ref(false)
    const myText = ref('有人闖入')
    onMounted(() => {
      console.log('[onMounted]')
      // console.log('ref: ', content.value.outerHTML)
      // console.log('-------------')
      // window.addEventListener('resize', this.resizeHandler);
    })

    var timeoutID = window.setInterval(() => {
      showing.value = !showing.value
      myText.value = myText.value.length > 10 ? '有人闖入' : `!${myText.value}!`
    }, 1000)

    return {
      type,
      line1,
      line2,
      line3,
      line4,
      color,
      showing,
      myText,
      changeClick() {
        showing.value = !showing.value
      },
      circle1Clicked(e) {
        e.currentTarget.setAttribute('fill', '#ff00cc')
        console.log(888)
      },
      circle2Clicked(e) {
        // e.currentTarget.setAttribute('fill', '#ff00cc')
        console.log(e.parentElement.querySelector('circle'))
      },
    }
  },
}
</script>

<style scoped>
svg {
  width: 100vw;
  height: 400px;
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
