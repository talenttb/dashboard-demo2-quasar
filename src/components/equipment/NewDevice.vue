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
          <div class="text-h6">新增裝置</div>
        </q-card-section>

        <q-card-section class="bg-white text-teal">
          <q-form ref="recordForm" class="q-gutter-md" @submit.prevent="">
            <q-input
              v-model="recordObj.mfr_order_id"
              label="製令工單"
              dense
              readonly
            />
            <q-input v-model="recordObj.item_id" label="品號" dense readonly />

            <q-select
              filled
              v-model="recordObj.inspect_item"
              :options="['自主檢查', '協同檢查']"
              label="巡檢項目"
              stack-label
              dense
              options-dense
              :rules="[(val) => (val && val.length > 0) || '請填寫巡檢項目']"
            />

            <q-select
              filled
              v-model="recordObj.inspect_method"
              :options="['定期檢查', '臨時檢查']"
              label="巡檢方式"
              stack-label
              dense
              options-dense
              :rules="[(val) => (val && val.length > 0) || '請填寫巡檢方式']"
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

export default {
  props: {
    showAddRow: {
      type: Boolean,
      required: true,
    },
  },
  async setup(props, { emit }) {
    const okClose = ref(false)
    const { showAddRow } = toRefs(props)
    // console.log(props)
    // console.log(props.showAddRow1)
    // console.log(showAddRow)
    // console.log(showAddRow1)
    const show = computed(() => {
      return showAddRow.value
    })

    // watchEffect(() => {
    //   console.log(`showAddRow1 is: ` + props.showAddRow1)
    //   console.log(`showAddRow1 is: ` + showAddRow.value)
    // })

    const recordObj = reactive({
      mfr_order_id: null,
      item_id: null,
      inspect_item: null,
      inspect_method: null,
      inspected_at: null,
      inspection_content: null,
      produce_member: null,
      self_inspected_member: null,
      inspected_member: null,
    })
    function resetRecordObj() {
      // recordObj.mfr_order_id = null
      // recordObj.item_id = null
      recordObj.inspect_item = null
      recordObj.inspect_method = null
      recordObj.inspected_at = null
      recordObj.inspection_content = null
      recordObj.produce_member = null
      recordObj.self_inspected_member = null
      recordObj.inspected_member = null
    }

    return {
      okClose,
      recordObj,
      show,
      onNew() {
        const validResult = recordForm.value.validate()
        if (!validResult) {
          return
        }

        okClose.value = validResult

        recordObj.inspect_item = 3
        recordObj.inspect_item = '自主2'
        recordObj.inspect_method = '自主2'
        recordObj.inspected_at = '2021-07-05T21:57:58.211+08:00'
        recordObj.inspection_content = ''
        recordObj.produce_member = ''
        recordObj.self_inspected_member = ''
        recordObj.inspected_member = ''

        imRows.value.push(extend(true, {}, recordObj))
        resetRecordObj()
        emit('close')
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
