<template>
  <div>
    <q-table
      title="裝置清單"
      :rows="deviceRows"
      :columns="deviceCols"
      no-data-label="此場域沒有裝置"
      row-key="id"
      :loading="loading"
      :visible-columns="deviceVisibleCols"
      :filter="deviceFilter"
      hide-pagination
    >
      <template v-slot:top>
        <q-btn color="primary" label="新增裝置" @click="onNewDeviceClicked" />
        <q-space />
        <q-input
          borderless
          dense
          debounce="300"
          color="primary"
          v-model="deviceFilter"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-checkbox
              v-model="props.expand"
              @click="
                () => {
                  selectDevice(props)
                }
              "
            />
            <!-- <q-toggle dense v-model="props.expand"></q-toggle>
            <q-btn
              dense
              round
              flat
              :icon="props.expand ? 'arrow_drop_up' : 'arrow_drop_down'"
              @click="props.expand = !props.expand"
            ></q-btn>
            <q-toggle
              v-model="props.expand"
              checked-icon="add"
              unchecked-icon="remove"
              :label="`Index: ${props.row.index}`"
            /> -->
          </q-td>
          <q-td key="name" :props="props">{{ props.row.name }}</q-td>
          <q-td key="about" :props="props">{{ props.row.about }}</q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props" class="myclass">
          <q-td colspan="100%">
            <!-- {{ props.row.properties.nodes[0] }} -->
            <q-table
              :rows="props.row.properties.nodes"
              :columns="devicePropertyCols"
              :visible-columns="devicePropertyVisibleCols"
              :pagination="initialPagination"
              :rows-per-page-options="[0]"
            >
              <template v-slot:body="props">
                <q-tr :props="props">
                  <q-td key="name" :props="props">{{ props.row.name }}</q-td>
                  <q-td key="unit" :props="props">{{ props.row.unit }}</q-td>
                  <q-td key="lolo" :props="props">{{ props.row.lolo }}</q-td>
                  <q-td key="lo" :props="props">{{ props.row.lo }}</q-td>
                  <q-td key="hi" :props="props">{{ props.row.hi }}</q-td>
                  <q-td key="hihi" :props="props">{{ props.row.hihi }}</q-td>
                  <q-td key="about" :props="props">{{ props.row.about }}</q-td>
                  <q-td key="actions" :props="props">
                    <q-btn
                      color="primary"
                      label="編輯"
                      @click="onEditDeviceProperty(props.row)"
                      size="sm"
                      no-caps
                    ></q-btn>
                    <q-btn
                      color="negative"
                      label="刪除"
                      @click="onDeleteDeviceProperty(props.row)"
                      size="sm"
                      no-caps
                    ></q-btn>
                  </q-td>
                </q-tr>
              </template>
            </q-table>
          </q-td>
        </q-tr>
      </template>
      <!--
        properties {
            nodes {
         -->
    </q-table>
  </div>
  <NewDevice
    v-show="showNewDevice"
    :showAddRow="showNewDevice"
    @close="closeNewDevice"
  ></NewDevice>
</template>

<script>
import { ref, reactive, toRef, watchEffect } from 'vue'
import { api } from 'boot/axios'
import { date, useQuasar, extend } from 'quasar'
import QuasarNotify from '../../libs/errorNotify'
import { QUERY_FIELD_DEVICES } from '@/libs/GraphConst'
import { useQuery, useResult } from '@vue/apollo-composable'
import NewDevice from 'components/equipment/NewDevice.vue'

export default {
  components: {
    NewDevice,
  },
  props: {
    fieldId: {
      type: Number,
    },
  },
  async setup(props, { emit }) {
    const $q = useQuasar()

    const fieldSelected = ref([])
    const deviceVisibleCols = ['name', 'about']
    const deviceCols = [
      {
        name: 'id',
        label: '#',
        field: 'id',
      },
      {
        name: 'fieldId',
        label: '#',
        field: 'fieldId',
      },
      {
        name: 'name',
        required: true,
        label: '裝置名稱',
        align: 'left',
        field: 'name',
        sortable: true,
      },
      {
        name: 'type',
        align: 'left',
        label: '類型',
        field: 'type',
        sortable: true,
      },
      {
        name: 'about',
        align: 'left',
        label: '關於',
        field: 'about',
        sortable: true,
      },
    ]
    const devicePropertyVisibleCols = [
      'name',
      'unit',
      'lolo',
      'lo',
      'hi',
      'hihi',
      'about',
      'actions',
    ]

    const devicePropertyCols = [
      {
        name: 'id',
        label: '#',
        field: 'id',
      },
      {
        name: 'deviceId',
        label: '#',
        field: 'deviceId',
      },
      {
        name: 'name',
        required: true,
        label: '名稱',
        align: 'left',
        field: 'name',
        sortable: true,
      },
      {
        name: 'unit',
        align: 'left',
        label: '單位',
        field: 'unit',
        sortable: true,
      },
      {
        name: 'type',
        align: 'left',
        label: '類型',
        field: 'type',
        sortable: true,
      },
      {
        name: 'lolo',
        align: 'left',
        label: '極低值',
        field: 'lolo',
        sortable: true,
      },
      {
        name: 'lo',
        align: 'left',
        label: '低值',
        field: 'lo',
        sortable: true,
      },
      {
        name: 'hi',
        align: 'left',
        label: '高值',
        field: 'hi',
        sortable: true,
      },
      {
        name: 'hihi',
        align: 'left',
        label: '極高值',
        field: 'hihi',
        sortable: true,
      },
      {
        name: 'about',
        align: 'left',
        label: '關於',
        field: 'about',
        sortable: true,
      },
      {
        name: 'actions',
        label: 'Actions',
        field: 'actions',
      },
    ]
    // const loading = false
    const deviceFilter = ref('')

    const showNewDevice = ref(false)

    const queryFieldId = ref(0)

    const queryOptions = ref({
      enabled: false,
      fetchPolicy: 'cache-and-network',
    })
    const { result, refetch, onError, loading } = useQuery(
      QUERY_FIELD_DEVICES,
      () => ({
        id: queryFieldId.value,
      }),
      queryOptions
    )

    onError((error) => {
      QuasarNotify($q, '發生錯誤，請稍後。')
    })

    const deviceRows = useResult(result, [], (data) => {
      // console.log('---')
      // console.table(data)
      // console.log('---')
      return data.field.devices.nodes
    })

    watchEffect(() => {
      // console.log(`fieldId is: ` + props.fieldId)
      if (props.fieldId) {
        queryFieldId.value = props.fieldId
        queryOptions.value.enabled = true
      }
    })

    return {
      deviceRows,
      deviceCols,
      deviceVisibleCols,
      loading,
      deviceFilter,
      devicePropertyCols,
      devicePropertyVisibleCols,
      fieldSelected,
      selectDevice(selectedRow) {
        console.log('click')
        console.log(selectedRow.expand)
        console.log(selectedRow.key)
        console.log(selectedRow.row)
        console.log(selectedRow.row.properties.nodes)
      },
      onEditDeviceProperty(d) {
        console.log(d)
      },
      onDeleteDeviceProperty(d) {
        console.log(d.name)
      },
      initialPagination: ref({
        rowsPerPage: 0,
      }),
      showNewDevice,
      onNewDeviceClicked() {
        showNewDevice.value = true
      },
      closeNewDevice() {
        showNewDevice.value = false
        refetch()
      },
    }
  },
}
</script>

<style scoped></style>
