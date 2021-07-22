<template>
  <q-page padding style="padding-top: 66px">
    <div class="q-pa-md" :class="$q.dark.isActive ? 'query-section--dark' : ''">
      <div class="row">
        <q-select
          rounded
          outlined
          v-model="queryMach"
          :options="['EQ-01', 'EQ-02', 'EQ-03', 'EQ-04', 'EQ-05']"
          label="機台清單"
          style="min-width: 300px"
          ref="queryMachRef"
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
      </div>

      <div class="row">
        <q-btn push color="secondary" label="查詢" @click="loadData" />
      </div>
    </div>

    <div class="q-pa-md">
      <q-table
        title="Treats"
        ref="tableRef"
        :rows="rows"
        :columns="headers"
        row-key="name"
        :rows-per-page-options="[0]"
        :pagination="initialPagination"
      >
        <template v-slot:top>
          <q-btn color="primary" label="新增記錄" @click="addRow" />
        </template>

        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="name" :props="props">
              <span v-if="addingRow && !props.row.name">
                <q-input v-model="editItem.name" label="Name" />
              </span>
              <span v-else>{{ props.row.name }}</span>
            </q-td>
            <q-td key="calories" :props="props">
              <span v-if="addingRow && !props.row.name">
                <q-input
                  v-model="editItem.calories"
                  type="number"
                  label="Calories"
                />
              </span>
              <span v-else>{{ props.row.calories }}</span>
            </q-td>
            <q-td key="fat" :props="props">
              <!-- <div class="text-pre-wrap">{{ props.row.fat }}</div> -->
              <span v-if="addingRow && !props.row.name">
                <q-input
                  v-model="editItem.fat"
                  type="number"
                  label="Fat"
                  step="0.1"
                />
              </span>
              <span v-else>{{ props.row.fat }}</span>
            </q-td>
            <q-td key="carbs" :props="props">
              <span v-if="addingRow && !props.row.name">
                <q-input v-model="editItem.carbs" type="number" label="Carbs" />
              </span>
              <span v-else>{{ props.row.carbs }}</span>
            </q-td>
            <q-td key="protein" :props="props">
              <span v-if="addingRow && !props.row.name">
                <q-input
                  v-model="editItem.protein"
                  type="number"
                  label="Protein"
                />
              </span>
              <span v-else>{{ props.row.protein }}</span>
            </q-td>
            <q-td key="sodium" :props="props">
              <span v-if="addingRow && !props.row.name">
                <q-input
                  v-model="editItem.sodium"
                  type="number"
                  label="Sodium"
                />
              </span>
              <span v-else>{{ props.row.sodium }}</span>
            </q-td>
            <q-td key="calcium" :props="props">
              <span v-if="addingRow && !props.row.name">
                <q-select
                  v-model="editItem.calcium"
                  :options="['high', 'median', 'low']"
                  label="Calcium"
                />
              </span>
              <span v-else>{{ props.row.calcium }}</span>
            </q-td>
            <q-td key="iron" :props="props">
              <span v-if="addingRow && !props.row.name">
                <!-- <q-input v-model="editItem.iron" type="number" label="Iron" /> -->
                <q-select
                  v-model="editItem.iron"
                  :options="['high', 'median', 'low']"
                  label="Iron"
                />
              </span>
              <span v-else>{{ props.row.iron }}</span>
            </q-td>

            <q-td key="actions" :props="props">
              <q-btn
                color="blue"
                label="Update"
                @click="onUpdatedClicked(props.row)"
                size="sm"
                no-caps
              ></q-btn>
              <q-btn color="red" label="Delete" size="sm" no-caps></q-btn>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>

    <q-inner-loading :showing="visible">
      <q-spinner-gears size="50px" color="primary" />
    </q-inner-loading>

    <!-- place QPageSticky at end of page -->
    <q-page-sticky expand position="top">
      <q-toolbar
        class="text-white"
        :class="$q.dark.isActive ? 'sub-title-dark' : 'sub-title-normal'"
      >
        <q-avatar> </q-avatar>
        <q-toolbar-title>保養歷史記錄</q-toolbar-title>
      </q-toolbar>
    </q-page-sticky>
  </q-page>
</template>

<script>
import { ref, computed, readonly } from 'vue'
import { api } from 'boot/axios'
import { date, useQuasar } from 'quasar'
import QuasarNotify from '../../libs/errorNotify'

export default {
  name: 'EquimentOutputStatus',
  setup() {
    const $q = useQuasar()
    const visible = ref(false)
    const queryMach = ref(null)
    const tableRef = ref(null)
    const addingRow = ref(false)

    const defaultItem = readonly({
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
      sodium: 0,
      calcium: '',
      iron: '',
    })

    const editItem = ref(Object.assign({}, defaultItem))

    const loadData = async () => {
      // console.log(queryDate.value)
      visible.value = true
      // showSimulatedReturnData.value = false

      // let response = await api.get('/api/moulds').catch((err) => {
      //   QuasarNotify($q, err.message)
      //   return { data: '123123' }
      // })
      visible.value = false
      // showSimulatedReturnData.value = true
      // rows.value = response.data
      // myTitle.value = `報表 - ${queryDate.value}`
      // console.table(response.data)
    }
    const headers = [
      {
        name: 'name',
        required: true,
        label: 'Dessert (100g serving)',
        align: 'left',
        field: (row) => row.name,
        format: (val) => `${val}`,
        sortable: true,
      },
      {
        name: 'calories',
        align: 'left',
        label: 'Calories',
        field: 'calories',
        sortable: true,
      },
      {
        name: 'fat',
        label: 'Fat (g)',
        align: 'left',
        field: 'fat',
        sortable: true,
      },
      { name: 'carbs', label: 'Carbs (g)', align: 'left', field: 'carbs' },
      {
        name: 'protein',
        label: 'Protein (g)',
        align: 'left',
        field: 'protein',
      },
      { name: 'sodium', label: 'Sodium (mg)', align: 'left', field: 'sodium' },
      {
        name: 'calcium',
        label: 'Calcium (%)',
        align: 'left',
        field: 'calcium',
        sortable: true,
        sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
      },
      {
        name: 'iron',
        label: 'Iron (%)',
        align: 'left',
        field: 'iron',
        sortable: true,
        sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
      },
      {
        name: 'actions',
        label: 'Actions',
        field: 'actions',
      },
    ]

    const rows = ref([
      {
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: '14%',
        iron: '1%',
      },
      {
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        sodium: 54,
        calcium: '12%',
        iron: '6%',
      },
    ])

    return {
      visible,
      queryMach,
      loadData,

      defaultItem,
      editItem,

      tableRef,
      initialPagination: {
        page: 1,
        rowsPerPage: 0,
      },
      headers,
      rows,
      addingRow,
      addRow() {
        rows.value.push(Object.assign({}, defaultItem))
        addingRow.value = true
      },
      onUpdatedClicked(row) {
        console.log(row)
        console.log(editItem.value)
      },
    }
  },
}
</script>

<style lang="sass" scoped>
.q-table tbody td
    font-size: 16px
</style>
