<template>
  <q-page class="q-pa-md">
    <!-- <div class="row q-gutter-sm"> -->
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-3"></div>
      <div class="col-xs-12 col-sm-6 col-md-3"></div>
      <div class="col-xs-12 col-sm-6 col-md-3"></div>
      <div class="col-xs-12 col-sm-6 col-md-3"></div>
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
  name: 'Charts',
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
