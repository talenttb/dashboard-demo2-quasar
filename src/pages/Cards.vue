<template>
  <q-page class="q-pa-md">
    <!-- <div class="row q-gutter-sm"> -->
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-3">
        <q-card class="my-card q-ma-xs">
          <q-card-section class="bg-green text-white">
            <div class="text-h6 absolute-center">使用中</div>
          </q-card-section>
          <!-- <q-separator /> -->
          <q-list>
            <q-item>
              <q-item-section avatar> 機台編號 </q-item-section>
              <q-item-section> 95271 </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar> 產品事號 </q-item-section>
              <q-item-section> 5209527 </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar> 品號 </q-item-section>
              <q-item-section> AQQQ9988654 </q-item-section>
            </q-item>
          </q-list>
          <q-separator color="orange" inset />
          <q-card-section>
            <q-linear-progress size="25px" :value="progress1" color="accent">
              <div class="absolute-full flex flex-center">
                <q-badge
                  color="white"
                  text-color="accent"
                  :label="progressLabel1"
                />
              </div>
            </q-linear-progress>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-3">
        <q-card class="my-card q-ma-xs">
          <q-card-section class="bg-red text-white">
            <div class="text-h6 absolute-center">停機</div>
          </q-card-section>
          <q-separator />
          <q-list>
            <q-item>
              <q-item-section avatar> 機台編號 </q-item-section>
              <q-item-section> 95272 </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar> 產品事號 </q-item-section>
              <q-item-section> 5209527 </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar> 品號 </q-item-section>
              <q-item-section> AQQQ9988654 </q-item-section>
            </q-item>
          </q-list>
          <q-separator />
          <q-linear-progress size="25px" :value="progress1" color="warning">
            <div class="absolute-full flex flex-center">
              <q-badge
                color="white"
                text-color="accent"
                :label="progressLabel1"
              />
            </div>
          </q-linear-progress>
        </q-card>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-3">
        <q-card class="my-card q-ma-xs">
          <q-card-section class="bg-green text-white">
            <div class="text-h6 absolute-center">使用中</div>
          </q-card-section>
          <q-separator />
          <q-list>
            <q-item>
              <q-item-section avatar> 機台編號 </q-item-section>
              <q-item-section> 95273 </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar> 產品事號 </q-item-section>
              <q-item-section> 5209527 </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar> 品號 </q-item-section>
              <q-item-section> AQQQ9988654 </q-item-section>
            </q-item>
          </q-list>
          <q-separator />
          <q-linear-progress size="25px" :value="progress1" color="secondary">
            <div class="absolute-full flex flex-center">
              <q-badge
                color="white"
                text-color="accent"
                :label="progressLabel1"
              />
            </div>
          </q-linear-progress>
        </q-card>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-3">
        <q-card class="my-card q-ma-xs">
          <q-card-section class="bg-brown text-white">
            <div class="text-h6 absolute-center">維護中</div>
          </q-card-section>
          <q-separator />
          <q-list>
            <q-item>
              <q-item-section avatar> 機台編號 </q-item-section>
              <q-item-section> 95274 </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar> 產品事號 </q-item-section>
              <q-item-section> 5209527 </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar> 品號 </q-item-section>
              <q-item-section> AQQQ9988654 </q-item-section>
            </q-item>
          </q-list>
          <q-separator />
          <q-linear-progress size="25px" :value="progress1" color="purple">
            <div class="absolute-full flex flex-center">
              <q-badge
                color="white"
                text-color="accent"
                :label="progressLabel1"
              />
            </div>
          </q-linear-progress>
        </q-card>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-3">
        <q-card class="my-card q-ma-xs">
          <q-card-section class="bg-red text-white">
            <div class="text-h6 absolute-center">停機</div>
          </q-card-section>
          <q-separator />
          <q-list>
            <q-item>
              <q-item-section avatar> 機台編號 </q-item-section>
              <q-item-section> 95275 </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar> 產品事號 </q-item-section>
              <q-item-section> 5209527 </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar> 品號 </q-item-section>
              <q-item-section> AQQQ9988654 </q-item-section>
            </q-item>
          </q-list>
          <q-separator />
          <q-linear-progress size="25px" :value="progress1" color="negative">
            <div class="absolute-full flex flex-center">
              <q-badge
                color="white"
                text-color="accent"
                :label="progressLabel1"
              />
            </div>
          </q-linear-progress>
        </q-card>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-3">
        <q-card class="my-card q-ma-xs">
          <q-card-section class="bg-red text-white">
            <div class="text-h6 absolute-center">停機</div>
          </q-card-section>
          <q-list>
            <q-item>
              <q-item-section avatar> 機台編號 </q-item-section>
              <q-item-section> 95276 </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar> 產品事號 </q-item-section>
              <q-item-section> 5209527 </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar> 品號 </q-item-section>
              <q-item-section> AQQQ9988654 </q-item-section>
            </q-item>
          </q-list>
          <q-card-section>
            <q-markup-table dense>
              <thead>
                <tr>
                  <th class="text-left">測試</th>
                  <th class="text-right">Calories</th>
                  <th class="text-right">Fat (g)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-left">Frozen</td>
                  <td class="text-right">159</td>
                  <td class="text-right">6</td>
                </tr>
                <tr>
                  <td class="text-left">Ice</td>
                  <td class="text-right">237</td>
                  <td class="text-right">9</td>
                </tr>
                <tr>
                  <td class="text-left">Eclair</td>
                  <td class="text-right">262</td>
                  <td class="text-right">16</td>
                </tr>
                <tr>
                  <td class="text-left">Cupcake</td>
                  <td class="text-right text-red">305</td>
                  <td class="text-right text-red">3.7</td>
                </tr>
                <tr>
                  <td class="text-left">Gingerd</td>
                  <td class="text-right text-blue">356</td>
                  <td class="text-right text-blue">16</td>
                </tr>
              </tbody>
            </q-markup-table>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-3">
        <q-card class="my-card q-ma-xs">
          <q-card-section class="bg-green text-white">
            <div class="text-h6 absolute-center">使用中</div>
          </q-card-section>
          <q-separator />
          <q-list>
            <q-item>
              <q-item-section avatar> 機台編號 </q-item-section>
              <q-item-section> 95277 </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar> 產品事號 </q-item-section>
              <q-item-section> 5209527 </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar> 品號 </q-item-section>
              <q-item-section> AQQQ9988654 </q-item-section>
            </q-item>
          </q-list>

          <q-card-actions align="center">
            <q-circular-progress
              show-value
              font-size="12px"
              :value="70"
              size="100px"
              :thickness="0.22"
              color="teal"
              track-color="grey-3"
              class="q-ma-md"
            >
              70%
            </q-circular-progress>
          </q-card-actions>
        </q-card>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-3">
        <q-card class="my-card q-ma-xs">
          <q-card-section class="bg-green text-white">
            <div class="text-h6 absolute-center">使用中</div>
          </q-card-section>
          <q-separator />
          <q-list>
            <q-item>
              <q-item-section avatar> 機台編號 </q-item-section>
              <q-item-section> 95278 </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar> 產品事號 </q-item-section>
              <q-item-section> 5209527 </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar> 品號 </q-item-section>
              <q-item-section> AQQQ9988654 </q-item-section>
            </q-item>
          </q-list>
          <q-separator />
          <q-linear-progress
            stripe
            size="25px"
            :value="progress1"
            color="accent"
          >
            <div class="absolute-full flex flex-center">
              <q-badge
                color="white"
                text-color="accent"
                :label="progressLabel1"
              />
            </div>
          </q-linear-progress>
        </q-card>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-3">
        <q-card class="my-card q-ma-xs">
          <q-card-section class="bg-green text-white">
            <div class="text-h6 absolute-center">使用中</div>
          </q-card-section>
          <q-separator />
          <q-list>
            <q-item>
              <q-item-section avatar> 機台編號 </q-item-section>
              <q-item-section> 95279 </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar> 產品事號 </q-item-section>
              <q-item-section> 5209527 </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar> 品號 </q-item-section>
              <q-item-section> AQQQ9988654 </q-item-section>
            </q-item>
          </q-list>
          <q-separator />
          <q-linear-progress size="25px" :value="progress1" color="accent">
            <div class="absolute-full flex flex-center">
              <q-badge
                color="white"
                text-color="accent"
                :label="progressLabel1"
              />
            </div>
          </q-linear-progress>
        </q-card>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-3">col1</div>
      <div class="col-xs-12 col-sm-6 col-md-3">col1</div>
      <div class="col-xs-12 col-sm-6 col-md-3">col1</div>
      <div class="col-xs-12 col-sm-6 col-md-3">col1</div>
      <div class="col-xs-12 col-sm-6 col-md-3">col1</div>
    </div>
  </q-page>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  name: 'Cards',
  // components: {
  //   CardItem: () => import('components/cards/CardItem'),
  //   CardCafe: () => import('components/cards/CardCafe'),
  //   CardCompany: () => import('components/cards/CardCompany'),
  //   CardProfileDark: () => import('components/cards/CardProfileDark'),
  //   CardProfile: () => import('components/cards/CardProfile'),
  //   BasicCard: () => import('../layouts/BasicCard'),
  // },
  // data() {
  //   return {
  //     text:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //     profile_card_data: {
  //       name: 'Pratik Patel',
  //       des: 'Solutions Developer',
  //       avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
  //     },
  //     profile_data: {
  //       name: 'Pratik Patel',
  //       des: '--- Solution Developer, Pune',
  //     },
  //     background_img1: 'linear-gradient(to top, #30cfd0 0%, #330867 100%)',
  //     background_img2:
  //       'linear-gradient(87deg, rgb(45, 206, 137), rgb(45, 206, 204)) !important',
  //   }
  // },
  // created() {
  //   this.profile_data.text = this.text
  // },
  setup() {
    const progress1 = ref(0.3)

    return {
      progress1,
      progressLabel1: computed(() => (progress1.value * 100).toFixed(2) + '%'),
    }
  },
}
</script>

<style scoped></style>
