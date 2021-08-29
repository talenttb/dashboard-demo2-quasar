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
                v-show="isNew"
              />
              <q-btn
                label="修改"
                type="submit"
                color="primary"
                v-close-popup="okClose"
                v-show="!isNew"
                @click="onModify"
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-inner-loading :showing="loading">
      <q-spinner-gears size="50px" color="primary" />
    </q-inner-loading>
  </div>
</template>

<script>
import { ref, reactive, toRefs, computed, watch } from 'vue'
import { useQuasar } from 'quasar'
import QuasarNotify from '../../libs/errorNotify'
import { useQuery, useMutation } from '@vue/apollo-composable'
import {
  CREATE_FIELD,
  UPDATE_FIELD,
  QUERY_FIELD_BY_ID,
} from '@/libs/GraphConst'

export default {
  props: {
    showAddRow: {
      type: Boolean,
      required: true,
    },
    fieldId: {
      type: Number,
      required: false,
    },
  },
  async setup(props, { emit }) {
    const $q = useQuasar()
    const recordForm = ref(null)
    const okClose = ref(false)
    const { showAddRow, fieldId } = toRefs(props)

    const show = computed(() => {
      return showAddRow.value
    })
    const isNew = computed(() => {
      if (fieldId.value && fieldId.value > 0) {
        return false
      }
      return !fieldId.value
    })

    const { mutate: onCreateClick, onDone: onCreateDone } =
      useMutation(CREATE_FIELD)

    onCreateDone((res) => {
      // console.log(res)
      resetRecordObj()
      emit('close')
    })

    const { mutate: onUpdateClick, onDone: onUpdateDone } =
      useMutation(UPDATE_FIELD)

    onUpdateDone((res) => {
      // console.log(res)
      resetRecordObj()
      emit('close')
    })

    const recordObj = reactive({
      id: null,
      name: '',
      description: '',
    })
    function resetRecordObj() {
      recordObj.id = null
      recordObj.name = ''
      recordObj.description = ''
    }

    const queryOptions = ref({
      enabled: false,
      fetchPolicy: 'network-only',
    })
    const { refetch, onError, onResult, loading } = useQuery(
      QUERY_FIELD_BY_ID,
      () => ({
        id: fieldId.value,
      }),
      queryOptions
    )

    onError((error) => {
      QuasarNotify($q, '發生錯誤，請稍後。')
    })

    onResult((res) => {
      if (!res.loading && res.data) {
        // console.log(res.data.field)
        recordObj.name = res.data.field.name
        recordObj.description = res.data.field.description
        queryOptions.value.enabled = false
      }
    })

    watch(isNew, (value, _) => {
      if (show.value && !value && !queryOptions.value.enabled) {
        queryOptions.value.enabled = true
        refetch()
      }
    })

    return {
      recordForm,
      okClose,
      recordObj,
      show,
      isNew,
      loading,
      onNew() {
        const validResult = recordForm.value.validate()
        if (!validResult) {
          return
        }
        onCreateClick(recordObj)
        // onCreateClick({
        //   name: username.value,
        //   description: password.value,
        // })
      },
      onModify() {
        const validResult = recordForm.value.validate()
        if (!validResult) {
          return
        }
        recordObj.id = props.fieldId
        console.log(props.fieldId)
        console.log(recordObj)
        onUpdateClick(recordObj)
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
