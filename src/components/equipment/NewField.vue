<template>
  <div>
    <q-dialog
      v-model="show"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card style="width: 700px; max-width: 80vw">
        <q-card-section>
          <div class="text-h6">新增場域</div>
        </q-card-section>

        <q-card-section class="bg-white text-teal">
          <q-form ref="recordForm" class="q-gutter-md" @submit.prevent="">
            <q-input
              v-model="recordObj.name"
              label="名稱"
              dense
              :rules="[(val) => !!val || '名稱為必填']"
            />
            <q-input
              v-model="recordObj.description"
              label="描述"
              dense
              filled
              autogrow
            />

            <div>
              <q-btn
                label="取消"
                color="primary"
                flat
                class="q-ml-sm"
                v-close-popup
                @click="onCancel"
              />

              <q-btn
                label="新增"
                type="submit"
                color="primary"
                v-close-popup="okClose"
                @click="onNew"
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref, reactive, toRefs, computed, watchEffect } from 'vue'
import { api } from 'boot/axios'
import { date, useQuasar, extend } from 'quasar'
import QuasarNotify from '../../libs/errorNotify'
import { useMutation } from '@vue/apollo-composable'
import { CREATE_FIELD } from '@/libs/GraphConst'

export default {
  props: {
    showAddRow: {
      type: Boolean,
      required: true,
    },
  },
  async setup(props, { emit }) {
    const recordForm = ref(null)
    const okClose = ref(false)
    const { showAddRow } = toRefs(props)

    const show = computed(() => {
      return showAddRow.value
    })

    // watchEffect(() => {
    //   console.log(`showAddRow1 is: ` + props.showAddRow1)
    //   console.log(`showAddRow1 is: ` + showAddRow.value)
    // })

    const { mutate: onCreateClick, onDone } = useMutation(CREATE_FIELD)

    onDone((res) => {
      console.log(res)
      // if (res?.data?.authenticate?.jwtToken) {
      //   setToken(res.data.authenticate.jwtToken)
      //   router.push({ name: 'Home' })
      // }
      resetRecordObj()
      emit('close')
    })

    const recordObj = reactive({
      name: '',
      description: '',
    })
    function resetRecordObj() {
      recordObj.name = ''
      recordObj.description = ''
    }

    return {
      recordForm,
      okClose,
      recordObj,
      show,
      onNew() {
        const validResult = recordForm.value.validate()
        if (!validResult) {
          return
        }
        console.log(recordObj)
        onCreateClick(recordObj)
        // onCreateClick({
        //   name: username.value,
        //   description: password.value,
        // })
      },
      onCancel() {
        resetRecordObj()
        emit('close')
      },
    }
  },
}
</script>

<style scoped></style>
