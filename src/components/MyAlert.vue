<template>
  <div class="q-pa-md q-gutter-sm">
    <!-- <q-btn label="Alert" color="primary" @click="doAlert = true" /> -->

    <q-dialog v-model="doAlert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section class="q-pt-none">{{ msg }} </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref, toRefs } from 'vue'

export default {
  name: 'MyAlert',
  props: {
    o: Object,
  },
  setup(props) {
    // const { alert, showMsg } = toRefs(props)
    // // const { alert } = toRefs(props, 'alert')
    // console.log(999999)
    // console.log(showMsg.value)
    // console.log(showMsg.value !== '')
    // console.log(888888)
    return {
      // doAlert: ref(alert.value),
      // msg: showMsg.value,
      doAlert: ref(false),
      msg: '',
    }
  },
}
</script>

<style scoped></style>
