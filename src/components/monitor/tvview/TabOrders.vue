<template>
  <!-- <div class="row">1</div>
  <div class="row q-mb-md">1</div>

  <div class="row">2</div>
  <div class="row q-mb-md">2</div>

  <div class="row">3</div>
  <div class="row q-mb-md">3</div>

  <div v-for="(value, name, index) in machines" :key="name">
    {{ index }}. {{ name }}: {{ value }}
  </div> -->
  <!-- <q-table
            grid
            title="Treats"
            :rows="[data.orders[item][1]]"
            :columns="columns"
            row-key="order_id"
            hide-header
          >
          </q-table>
           -->
  <div class="row">
    <div
      class="col-4 column items-center"
      v-for="item in data.machines"
      :key="item"
    >
      <div class="row text-weight-bolder" style="font-size: medium">
        機台編號：{{ item }} 已完工：({{
          data.orders[item].filter((ele) => ele.work_status === '已完工')
            .length
        }})
      </div>
      <div class="row text-weight-bold" style="font-size: medium">
        當月平均生產效率：{{
          (
            data.orders[item]
              .filter((ele) => ele.work_status !== '等待中')
              .map((ele) => ele.productivity)
              .reduce((acc, curr) => acc + curr) /
            data.orders[item].filter((ele) => ele.work_status !== '等待中')
              .length
          ).toFixed(2)
        }}
        %
        <!-- data.orders[item].filter((ele) => ele.work_status !== '等待中').length -->
      </div>
      <div class="row">
        <q-table
          dense
          :rows="
            data.orders[item].filter((ele) => ele.work_status !== '已完工')
          "
          :columns="columns"
          row-key="order_id"
          hide-bottom
        >
        </q-table>
      </div>
    </div>
  </div>
  <!-- <div v-for="item in data.machines" :key="item">
    <div class="row text-weight-bolder" style="font-size: xx-large">
      機台編號：{{ item }}
    </div>
    <div class="row q-mb-md">
      <div class="row full-width">
        <div class="col-4 q-pa-sm bg-indigo-2">
          <q-list bordered separator>
            <q-item-label header style="font-size: 1.3rem">已完工</q-item-label>
            <q-item>
              <q-item-section>
                <q-item-label>訂單編號</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ data.orders[item][0].order_id }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>工單編號</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  {{ data.orders[item][0].work_order_id }}
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>品號</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ data.orders[item][0].item_id }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>品名</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  {{ data.orders[item][0].item_name }}</q-item-label
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>完工狀態</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  {{ data.orders[item][0].work_status }}</q-item-label
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>標準小時產量</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  {{ data.orders[item][0].std_output_per_hour }}</q-item-label
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>實際小時產量</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  {{ data.orders[item][0].actual_output_per_hour }}
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>生產效率（%）</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  {{ data.orders[item][0].productivity }}</q-item-label
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>實際生產時間</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  {{ dateUtils.minute2DHM(data.orders[item][0].usage_time) }}
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>用電總量</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  {{ data.orders[item][0].usage_power }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <div class="col-4 q-pa-sm">
          <q-list bordered separator class="running-col">
            <q-item-label header style="font-size: 1.3rem">進行中</q-item-label>
            <q-item>
              <q-item-section>
                <q-item-label>訂單編號</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ data.orders[item][1].order_id }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>工單編號</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  {{ data.orders[item][1].work_order_id }}
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>品號</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ data.orders[item][1].item_id }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>品名</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  {{ data.orders[item][1].item_name }}</q-item-label
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>完工狀態</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  {{ data.orders[item][1].work_status }}</q-item-label
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>標準小時產量</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  {{ data.orders[item][1].std_output_per_hour }}</q-item-label
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>實際小時產量</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  {{ data.orders[item][1].actual_output_per_hour }}
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>生產效率（%）</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  {{ data.orders[item][1].productivity }}</q-item-label
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>實際生產時間</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  {{ dateUtils.minute2DHM(data.orders[item][1].usage_time) }}
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>用電總量</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  {{ data.orders[item][1].usage_power }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <div class="col-4 q-pa-sm">
          <q-list bordered separator>
            <q-item-label header style="font-size: 1.3rem">等待中</q-item-label>
            <q-item>
              <q-item-section>
                <q-item-label>訂單編號</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ data.orders[item][2].order_id }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>工單編號</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  {{ data.orders[item][2].work_order_id }}
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>品號</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ data.orders[item][2].item_id }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>品名</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  {{ data.orders[item][2].item_name }}</q-item-label
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>完工狀態</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  {{ data.orders[item][2].work_status }}</q-item-label
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>標準小時產量</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  {{ data.orders[item][2].std_output_per_hour }}</q-item-label
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>實際小時產量</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  {{ data.orders[item][2].actual_output_per_hour }}
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>生產效率（%）</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  {{ data.orders[item][2].productivity }}</q-item-label
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>實際生產時間</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  {{ dateUtils.minute2DHM(data.orders[item][2].usage_time) }}
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>用電總量</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  {{ data.orders[item][2].usage_power }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import { ref, toRefs } from 'vue'
// import { api } from 'boot/axios'
// import { date, useQuasar } from 'quasar'
import * as dateUtils from '@/libs/dateUtils'

export default {
  async setup() {
    const data = {
      machines: ['A001', 'A002', 'A003', 'A004', 'A005', 'A006', 'A007'],
      orders: {
        A001: [
          {
            order_id: '2201-2020008371',
            work_order_id: '5101-29388294',
            item_id: '22998-37338-A',
            item_name: '（鍛造）圓形直徑67',
            work_status: '已完工',
            produce_output: 508,
            std_output_per_hour: 500,
            actual_output_per_hour: 520,
            productivity: 110,
            usage_time: 637,
            usage_power: 31.17,
          },
          {
            order_id: '2201-2020008371',
            work_order_id: '5101-29388294',
            item_id: '22998-37338-A',
            item_name: '（鍛造）圓形直徑67',
            work_status: '已完工',
            produce_output: 508,
            std_output_per_hour: 500,
            actual_output_per_hour: 520,
            productivity: 110,
            usage_time: 637,
            usage_power: 31.17,
          },
          {
            order_id: '2201-2020008371',
            work_order_id: '5101-29388294',
            item_id: '22998-37338-A',
            item_name: '（鍛造）圓形直徑67',
            work_status: '已完工',
            produce_output: 508,
            std_output_per_hour: 500,
            actual_output_per_hour: 520,
            productivity: 110,
            usage_time: 637,
            usage_power: 31.17,
          },
          {
            order_id: '2201-2020008373',
            work_order_id: '5101-29388295',
            item_id: '22998-37338-A',
            item_name: '（鍛造）圓形直徑67',
            work_status: '進行中',
            produce_output: 508,
            std_output_per_hour: 500,
            actual_output_per_hour: 520,
            productivity: 96,
            usage_time: 637,
            usage_power: 31.17,
          },
          {
            order_id: '2201-20200044531',
            work_order_id: '5101-29388296',
            item_id: '22998-37338-A',
            item_name: '（鍛造）圓形直徑67',
            work_status: '等待中',
            produce_output: null,
            std_output_per_hour: null,
            actual_output_per_hour: null,
            productivity: null,
            usage_time: null,
            usage_power: null,
          },
        ],
        A002: [
          {
            order_id: '3101-2020008',
            work_order_id: '5101-29388294',
            item_id: '22998-37338-A',
            item_name: '（鍛造）圓形直徑67',
            work_status: '已完工',
            produce_output: 508,
            std_output_per_hour: null,
            actual_output_per_hour: 520,
            productivity: null,
            usage_time: 637,
            usage_power: 31.17,
          },
          {
            order_id: '3101-2020009',
            work_order_id: '5101-29388295',
            item_id: '22998-37338-A',
            item_name: '（鍛造）圓形直徑67',
            work_status: '已完工',
            produce_output: 508,
            std_output_per_hour: null,
            actual_output_per_hour: 520,
            productivity: null,
            usage_time: 637,
            usage_power: 31.17,
          },
          {
            order_id: '3101-2020010',
            work_order_id: '5101-29388296',
            item_id: '22998-37338-A',
            item_name: '（鍛造）圓形直徑67',
            work_status: '等待中',
            produce_output: null,
            std_output_per_hour: null,
            actual_output_per_hour: null,
            productivity: null,
            usage_time: null,
            usage_power: null,
          },
        ],
        A003: [
          {
            order_id: 'Acc32-2020001',
            work_order_id: '5101-29388294',
            item_id: '22998-37338-A',
            item_name: '（鍛造）圓形直徑67',
            work_status: '已完工',
            produce_output: 508,
            std_output_per_hour: null,
            actual_output_per_hour: 520,
            productivity: 108,
            usage_time: 637,
            usage_power: 31.17,
          },
          {
            order_id: 'Acc32-2020002',
            work_order_id: '5101-29388295',
            item_id: '22998-37338-A',
            item_name: '（鍛造）圓形直徑67',
            work_status: '進行中',
            produce_output: 508,
            std_output_per_hour: 350,
            actual_output_per_hour: 520,
            productivity: 85,
            usage_time: 637,
            usage_power: 31.17,
          },
          {
            order_id: 'Acc32-2020003',
            work_order_id: '5101-29388296',
            item_id: '22998-37338-A',
            item_name: '（鍛造）圓形直徑67',
            work_status: '等待中',
            produce_output: null,
            std_output_per_hour: null,
            actual_output_per_hour: null,
            productivity: null,
            usage_time: null,
            usage_power: null,
          },
        ],
        A004: [
          {
            order_id: '2201-2020008371',
            work_order_id: '5101-29388294',
            item_id: '22998-37338-A',
            item_name: '（鍛造）圓形直徑67',
            work_status: '已完工',
            produce_output: 508,
            std_output_per_hour: 500,
            actual_output_per_hour: 520,
            productivity: 100,
            usage_time: 637,
            usage_power: 31.17,
          },
          {
            order_id: '2201-2020008371',
            work_order_id: '5101-29388294',
            item_id: '22998-37338-A',
            item_name: '（鍛造）圓形直徑67',
            work_status: '已完工',
            produce_output: 508,
            std_output_per_hour: 500,
            actual_output_per_hour: 520,
            productivity: 90,
            usage_time: 637,
            usage_power: 31.17,
          },
          {
            order_id: '2201-2020008371',
            work_order_id: '5101-29388294',
            item_id: '22998-37338-A',
            item_name: '（鍛造）圓形直徑67',
            work_status: '已完工',
            produce_output: 508,
            std_output_per_hour: 500,
            actual_output_per_hour: 520,
            productivity: 90,
            usage_time: 637,
            usage_power: 31.17,
          },
          {
            order_id: '2201-2020008371',
            work_order_id: '5101-29388294',
            item_id: '22998-37338-A',
            item_name: '（鍛造）圓形直徑67',
            work_status: '已完工',
            produce_output: 508,
            std_output_per_hour: 500,
            actual_output_per_hour: 520,
            productivity: 90,
            usage_time: 637,
            usage_power: 31.17,
          },
          {
            order_id: '2201-2020008371',
            work_order_id: '5101-29388294',
            item_id: '22998-37338-A',
            item_name: '（鍛造）圓形直徑67',
            work_status: '已完工',
            produce_output: 508,
            std_output_per_hour: 500,
            actual_output_per_hour: 520,
            productivity: 95,
            usage_time: 637,
            usage_power: 31.17,
          },
          {
            order_id: '2201-2020008373',
            work_order_id: '5101-29388295',
            item_id: '22998-37338-A',
            item_name: '（鍛造）圓形直徑67',
            work_status: '進行中',
            produce_output: 100,
            std_output_per_hour: 500,
            actual_output_per_hour: 520,
            productivity: 96,
            usage_time: 637,
            usage_power: 31.17,
          },
          {
            order_id: '2201-20200044531',
            work_order_id: '5101-29388296',
            item_id: '22998-37338-A',
            item_name: '（鍛造）圓形直徑67',
            work_status: '等待中',
            produce_output: null,
            std_output_per_hour: null,
            actual_output_per_hour: null,
            productivity: null,
            usage_time: null,
            usage_power: null,
          },
          {
            order_id: '2201-20200044531',
            work_order_id: '5101-293882911',
            item_id: '22998-37338-A',
            item_name: '（鍛造）圓形直徑68',
            work_status: '等待中',
            produce_output: null,
            std_output_per_hour: null,
            actual_output_per_hour: null,
            productivity: null,
            usage_time: null,
            usage_power: null,
          },
          {
            order_id: '2201-20200044531',
            work_order_id: '5101-293882912',
            item_id: '22998-37338-A',
            item_name: '（鍛造）圓形直徑69',
            work_status: '等待中',
            produce_output: null,
            std_output_per_hour: null,
            actual_output_per_hour: null,
            productivity: null,
            usage_time: null,
            usage_power: null,
          },
        ],
        A005: [
          {
            order_id: '2201-2020008371',
            work_order_id: '5101-29388294',
            item_id: '22998-37338-A',
            item_name: '（鍛造）圓形直徑67',
            work_status: '已完工',
            produce_output: 508,
            std_output_per_hour: 500,
            actual_output_per_hour: 520,
            productivity: 115,
            usage_time: 637,
            usage_power: 31.17,
          },
          {
            order_id: '2201-2020008371',
            work_order_id: '5101-29388294',
            item_id: '22998-37338-A',
            item_name: '（鍛造）圓形直徑67',
            work_status: '已完工',
            produce_output: 508,
            std_output_per_hour: 500,
            actual_output_per_hour: 520,
            productivity: 100,
            usage_time: 637,
            usage_power: 31.17,
          },
          {
            order_id: '2201-2020008371',
            work_order_id: '5101-29388294',
            item_id: '22998-37338-A',
            item_name: '（鍛造）圓形直徑67',
            work_status: '已完工',
            produce_output: 508,
            std_output_per_hour: 500,
            actual_output_per_hour: 520,
            productivity: 100,
            usage_time: 637,
            usage_power: 31.17,
          },
          {
            order_id: '2201-2020008373',
            work_order_id: '5101-29388295',
            item_id: '22998-37338-A',
            item_name: '（鍛造）圓形直徑67',
            work_status: '進行中',
            produce_output: 508,
            std_output_per_hour: 500,
            actual_output_per_hour: 520,
            productivity: 96,
            usage_time: 637,
            usage_power: 31.17,
          },
          {
            order_id: '2201-20200044531',
            work_order_id: '5101-29388296',
            item_id: '22998-37338-A',
            item_name: '（鍛造）圓形直徑67',
            work_status: '等待中',
            produce_output: null,
            std_output_per_hour: null,
            actual_output_per_hour: null,
            productivity: null,
            usage_time: null,
            usage_power: null,
          },
        ],
        A006: [
          {
            order_id: '2201-2020008371',
            work_order_id: '5101-29388294',
            item_id: '22998-37338-A',
            item_name: '（鍛造）圓形直徑67',
            work_status: '已完工',
            produce_output: 508,
            std_output_per_hour: 500,
            actual_output_per_hour: 520,
            productivity: 99,
            usage_time: 637,
            usage_power: 31.17,
          },
          {
            order_id: '2201-2020008371',
            work_order_id: '5101-29388294',
            item_id: '22998-37338-A',
            item_name: '（鍛造）圓形直徑67',
            work_status: '已完工',
            produce_output: 508,
            std_output_per_hour: 500,
            actual_output_per_hour: 520,
            productivity: 95,
            usage_time: 637,
            usage_power: 31.17,
          },
          {
            order_id: '2201-2020008371',
            work_order_id: '5101-29388294',
            item_id: '22998-37338-A',
            item_name: '（鍛造）圓形直徑67',
            work_status: '已完工',
            produce_output: 508,
            std_output_per_hour: 500,
            actual_output_per_hour: 520,
            productivity: 93,
            usage_time: 637,
            usage_power: 31.17,
          },
          {
            order_id: '2201-2020008373',
            work_order_id: '5101-29388295',
            item_id: '22998-37338-A',
            item_name: '（鍛造）圓形直徑67',
            work_status: '進行中',
            produce_output: 508,
            std_output_per_hour: 500,
            actual_output_per_hour: 520,
            productivity: 96,
            usage_time: 637,
            usage_power: 31.17,
          },
          {
            order_id: '2201-20200044531',
            work_order_id: '5101-29388296',
            item_id: '22998-37338-A',
            item_name: '（鍛造）圓形直徑67',
            work_status: '等待中',
            produce_output: null,
            std_output_per_hour: null,
            actual_output_per_hour: null,
            productivity: null,
            usage_time: null,
            usage_power: null,
          },
        ],
        A007: [
          {
            order_id: '2201-2020008371',
            work_order_id: '5101-29388294',
            item_id: '22998-37338-A',
            item_name: '（鍛造）圓形直徑67',
            work_status: '已完工',
            produce_output: 508,
            std_output_per_hour: 500,
            actual_output_per_hour: 520,
            productivity: 100,
            usage_time: 637,
            usage_power: 31.17,
          },
          {
            order_id: '2201-2020008371',
            work_order_id: '5101-29388294',
            item_id: '22998-37338-A',
            item_name: '（鍛造）圓形直徑67',
            work_status: '已完工',
            produce_output: 508,
            std_output_per_hour: 500,
            actual_output_per_hour: 520,
            productivity: 100,
            usage_time: 637,
            usage_power: 31.17,
          },
          {
            order_id: '2201-2020008371',
            work_order_id: '5101-29388294',
            item_id: '22998-37338-A',
            item_name: '（鍛造）圓形直徑67',
            work_status: '已完工',
            produce_output: 508,
            std_output_per_hour: 500,
            actual_output_per_hour: 520,
            productivity: 110,
            usage_time: 637,
            usage_power: 31.17,
          },
        ],
      },
    }

    const columns = [
      // { name: 'order_id', label: '訂單編號', field: 'order_id' },
      { name: 'work_order_id', label: '工單編號', field: 'work_order_id' },
      // { name: 'item_id', label: '品號', field: 'item_id' },
      // { name: 'item_name', label: '品名', field: 'item_name' },
      { name: 'work_status', label: '完工狀態', field: 'work_status' },
      { name: 'produce_output', label: '生產數量', field: 'produce_output' },
      // {
      //   name: 'std_output_per_hour',
      //   label: '標準小時產量',
      //   field: 'std_output_per_hour',
      // },
      // {
      //   name: 'actual_output_per_hour',
      //   label: '實際小時產量',
      //   field: 'actual_output_per_hour',
      // },
      {
        name: 'productivity',
        label: '生產效率（%）',
        field: 'productivity',
        format: (val, _) => (val ? `${val} %` : ''),
      },
      // {
      //   name: 'usage_time',
      //   label: '實際生產時間',
      //   field: 'usage_time',
      //   format: (val, row) => dateUtils.minute2DHM(val),
      // },
      // { name: 'usage_power', label: '用電總量', field: 'usage_power' },
    ]

    const rows = [
      {
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
      },
    ]

    return {
      data,
      columns,
      rows,
      dateUtils,
    }
  },
}
</script>

<style lang="scss" scoped>
.running-col {
  border-style: double;
  border-width: 10px;
  border-color: $positive;
}
</style>
