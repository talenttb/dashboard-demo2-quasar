<template>
  <q-page padding style="padding-top: 66px">
    <div class="q-pa-md">
      <q-table
        ref="fieldTblRef"
        :rows="fieldRows"
        :columns="fieldHeaders"
        row-key="id"
        selection="single"
        v-model:selected="fieldSelected"
        hide-bottom
        :loading="loading"
        :filter="fieldFilter"
        :visible-columns="fieldVisibleHeaders"
      >
        <template v-slot:top>
          <q-btn color="primary" label="新增場域" @click="onNewFieldClicked" />
          <q-space />
          <q-input
            borderless
            dense
            debounce="300"
            color="primary"
            v-model="fieldFilter"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>

        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td auto-width @click="props.selected = true">
              <q-checkbox v-model="props.selected" />
            </q-td>
            <q-td key="name" :props="props">{{ props.row.name }}</q-td>
            <q-td key="desc" :props="props">{{ props.row.description }}</q-td>
            <q-td key="devices" :props="props">{{
              props.row.deviceCount
            }}</q-td>

            <!-- <q-td key="actions" :props="props">{{ props.row.name }}</q-td> -->

            <q-td key="actions" :props="props">
              <q-btn
                color="primary"
                label="編輯"
                @click="onEditField(props.row)"
                size="sm"
                no-caps
              ></q-btn>
              <q-btn
                color="negative"
                label="刪除"
                @click="onDeleteField(props.row)"
                size="sm"
                no-caps
              ></q-btn>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>

    <div class="q-pa-md" v-show="fieldSelected[0]">
      <DeviceList :fieldId="fieldSelected[0]?.id"></DeviceList>
    </div>

    <!-- place QPageSticky at end of page -->
    <q-page-sticky expand position="top">
      <q-toolbar
        class="text-white"
        :class="$q.dark.isActive ? 'sub-title-dark' : 'sub-title-normal'"
      >
        <q-avatar> </q-avatar>
        <q-toolbar-title>設備管理</q-toolbar-title>
      </q-toolbar>
    </q-page-sticky>
  </q-page>

  <NewField
    v-show="showNewField"
    :showAddRow="showNewField"
    :fieldId="fieldActionId"
    @close="closeNewField"
  ></NewField>
</template>

<script>
import { ref, reactive, computed, readonly } from 'vue'
import { api } from 'boot/axios'
import { date, useQuasar } from 'quasar'
import QuasarNotify from '../../libs/errorNotify'
import { QUERY_FIELDS, DELETE_FIELD } from '@/libs/GraphConst'
import NewField from 'components/equipment/NewField.vue'
import DeviceList from 'components/equipment/DeviceList.vue'
import { useQuery, useResult, useMutation } from '@vue/apollo-composable'

export default {
  components: {
    NewField,
    DeviceList,
  },
  setup() {
    const $q = useQuasar()
    const fieldTblRef = ref(null)
    const fieldSelected = ref([])
    const fieldActionId = ref(null)
    const showNewField = ref(false)
    // const loading = ref(false)
    const fieldFilter = ref('')

    function onFieldSelection({ rows, added, evt }) {
      // if (rows.length === 0 || fieldTblRef.value === void 0) {
      //   return
      // }
      // console.log(rows[0].id)
      // console.log(added)
      // console.log(evt)
      // const row = rows[0]
      // if (added) {
      // } else {
      //   imTableShow.value = false
      //   recordObj.mfr_order_id = null
      //   recordObj.item_id = null
      // }
    }

    const fieldHeaders = [
      {
        name: 'id',
        label: '#',
        field: 'id',
      },
      {
        name: 'name',
        required: true,
        label: '場域名稱',
        align: 'left',
        field: 'name',
        // format: (val) => `${val}`,
        sortable: true,
      },
      {
        name: 'desc',
        align: 'left',
        label: '描述',
        field: 'desc',
        sortable: true,
      },
      {
        name: 'devices',
        label: '設備數量',
        align: 'left',
        field: (row) => row.deviceCount,
        sortable: true,
      },
      {
        name: 'actions',
        label: 'Actions',
        field: 'actions',
      },
    ]

    const fieldVisibleHeaders = ['name', 'desc', 'devices', 'actions']

    const queryOptions = ref({
      enabled: true,
      fetchPolicy: 'cache-and-network',
    })
    const { result, refetch, onError, onResult, loading } = useQuery(
      QUERY_FIELDS,
      null,
      queryOptions
    )

    onError((error) => {
      QuasarNotify($q, '發生錯誤，請稍後。')
    })

    const fieldRows = useResult(result, [], (data) => {
      // console.log('---')
      // console.table(data)
      // console.table(data.fields.nodes)
      // console.table(data.fields.nodes.filter((item) => !item.deletedAt))
      // console.log('---')
      return data.fields.nodes.filter((item) => !item.deletedAt)
    })

    const { mutate: onFieldDeleted, onDone: onDeletedDone } =
      useMutation(DELETE_FIELD)

    onDeletedDone((res) => {
      console.log(res)
    })

    return {
      fieldFilter,
      fieldSelected,
      onFieldSelection,
      fieldActionId,
      fieldTblRef,
      fieldHeaders,
      fieldVisibleHeaders,
      fieldRows,
      loading,
      showNewField,
      onNewFieldClicked() {
        showNewField.value = true
      },
      closeNewField() {
        fieldActionId.value = null
        showNewField.value = false
        refetch()
      },
      onUpdatedClicked(row) {
        console.log(row)
        console.log(editItem.value)
      },
      onEditField(d) {
        showNewField.value = true
        fieldActionId.value = d.id
        // console.log(d)
      },
      onDeleteField(d) {
        const timeStamp = +new Date()
        const dt = date.formatDate(timeStamp, 'YYYY-MM-DDTHH:mm:ss.SSSZ')
        console.log(dt)
        $q.dialog({
          title: 'Confirm',
          message: `是否刪除 ${d.name} ？`,
          cancel: true,
          persistent: true,
        })
          .onOk(() => {
            onFieldDeleted({
              id: d.id,
              deletedAt: dt,
            })
          })
          .onOk(() => {
            refetch()
          })
          .onCancel(() => {
            console.log('>>>> Cancel')
          })
          .onDismiss(() => {
            // console.log('I am triggered on both OK and Cancel')
          })
        // showNewField.value = true
        // fieldActionId.value = d.id
        // console.log(d.name)
      },
      selectField(selectedRow) {
        // props.expand
        // fieldSelected.id = null
        // if (selectedRow.expand) {
        //   // fieldSelected = selectedRow
        //   fieldSelected.id = selectedRow.row.id
        // }
        // console.log('click')
        // console.log(selectedRow.expand)
        console.log(selectedRow)

        // fieldRows.value.forEach((ele) => {
        //   console.log(ele)
        // })
        // console.log(fieldTblRef)
        // console.log(selectedRow.key)
        // console.log(selectedRow.row)
        // console.log(selectedRow.row.properties.nodes)
      },
    }
  },
}
</script>

<style lang="sass" scoped></style>
