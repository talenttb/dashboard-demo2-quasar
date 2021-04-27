<template>
  <q-page class="q-pa-sm">
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-3">
        <q-card class="my-card">
          <q-card-section class="bg-green text-white">
            <div class="text-h6 absolute-center">使用中</div>
            <!-- <div class="text-subtitle2">by John Doe</div> -->
          </q-card-section>

          <q-separator />

          <q-list>
            <q-item clickable>
              <q-item-section>
                <q-icon color="primary" name="local_bar" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Bar XYZ</q-item-label>
                <q-item-label caption>Have a drink.</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="red" name="local_gas_station" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Gas Station</q-item-label>
                <q-item-label caption>Fill your gas tank.</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Cinema XYZ</q-item-label>
                <q-item-label caption>Watch a movie.</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-3">col1</div>
      <div class="col-xs-12 col-sm-6 col-md-3">col1</div>
      <div class="col-xs-12 col-sm-6 col-md-3">col1</div>
      <div class="col-xs-12 col-sm-6 col-md-3">col1</div>
      <div class="col-xs-12 col-sm-6 col-md-3">col1</div>
      <div class="col-xs-12 col-sm-6 col-md-3">col1</div>
      <div class="col-xs-12 col-sm-6 col-md-3">col1</div>
      <div class="col-xs-12 col-sm-6 col-md-3">col1</div>
      <div class="col-xs-12 col-sm-6 col-md-3">col1</div>
      <div class="col-xs-12 col-sm-6 col-md-3">col1</div>
      <div class="col-xs-12 col-sm-6 col-md-3">col1</div>
      <div class="col-xs-12 col-sm-6 col-md-3">col1</div>
      <div class="col-xs-12 col-sm-6 col-md-3">col1</div>
    </div>
    <!-- <div class="row q-col-gutter-lg">
      <div class="col-lg-4 col-md-3 col-xs-12 col-sm-12">
        <q-card class="my-card">
          <q-card-section class="bg-primary text-white">
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>

          <q-separator />

          <q-card-actions align="right">
            <q-btn flat>Action 1</q-btn>
            <q-btn flat>Action 2</q-btn>
          </q-card-actions>
        </q-card>
        <q-card class="my-card">
          <q-card-section class="bg-purple text-white">
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>

          <q-card-actions align="around">
            <q-btn flat>Action 1</q-btn>
            <q-btn flat>Action 2</q-btn>
          </q-card-actions>
        </q-card>
      </div>
      <div class="col-lg-4 col-md-3 col-xs-12 col-sm-12">
        <q-card class="my-card">
          <img src="https://cdn.quasar.dev/img/parallax2.jpg" />

          <q-list>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="primary" name="local_bar" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Bar XYZ</q-item-label>
                <q-item-label caption>Have a drink.</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="red" name="local_gas_station" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Gas Station</q-item-label>
                <q-item-label caption>Fill your gas tank.</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Cinema XYZ</q-item-label>
                <q-item-label caption>Watch a movie.</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>
      <div class="col-lg-4 col-md-3 col-xs-12 col-sm-12"></div>
    </div> -->
  </q-page>
</template>

<script>
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
}
</script>

<style scoped></style>
