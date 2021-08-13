<template>
  <q-page>
    <q-tabs
      v-model="tab"
      class="text-grey text-bolder"
      active-color="primary"
      indicator-color="primary"
      align="justify"
    >
      <q-tab name="productions" label="即時生產" />
      <q-tab name="costs" label="即時耗能" />
      <q-tab name="machines" label="設備稼動率" />
      <q-tab name="orders" label="工單狀況" />
      <q-tab name="realtime_infos" label="工廠即時資訊" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="productions">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-3">
            <q-card class="my-card q-ma-xs" @click="estimateClick">
              <q-card-section class="bg-negative text-white">
                <div class="text-h6 absolute-center">停機</div>
              </q-card-section>

              <q-list dense padding>
                <q-item>
                  <q-item-section> 機台編號： </q-item-section>
                  <q-item-section> 95276 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 製令單號： </q-item-section>
                  <q-item-section> 5823-189488810 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 品號： </q-item-section>
                  <q-item-section> AQQQ9988654 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 品名： </q-item-section>
                  <q-item-section> 150圓盤（鍛胚） </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 完工件數： </q-item-section>
                  <q-item-section> 720 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 生產件數： </q-item-section>
                  <q-item-section> 3030 </q-item-section>
                </q-item>
                <q-item> </q-item>
                <q-item>
                  <q-item-section avatar> 預計完工剩餘時間： </q-item-section>
                  <q-item-section class="text-bold">
                    1 小時 35 分鐘
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 目前 / 目標 (小時產量)： </q-item-section>
                </q-item>
                <q-item>
                  <q-linear-progress size="25px" value="0" color="negative">
                    <div class="absolute-full flex flex-center">
                      <q-badge
                        color="white"
                        text-color="accent"
                        label="0 / 360"
                      />
                    </div> </q-linear-progress
                ></q-item>
              </q-list>
            </q-card>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-3">
            <q-card class="my-card q-ma-xs" @click="estimateClick">
              <q-card-section class="bg-positive text-white">
                <div class="text-h6 absolute-center">稼動</div>
              </q-card-section>

              <q-list dense padding>
                <q-item>
                  <q-item-section> 機台編號： </q-item-section>
                  <q-item-section> 3144423 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 製令單號： </q-item-section>
                  <q-item-section> 133-189938 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 品號： </q-item-section>
                  <q-item-section> AQCG1998654 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 品名： </q-item-section>
                  <q-item-section> 199 尖刀2 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 完工件數： </q-item-section>
                  <q-item-section> 70 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 生產件數： </q-item-section>
                  <q-item-section> 1300 </q-item-section>
                </q-item>
                <q-item> </q-item>
                <q-item>
                  <q-item-section avatar> 預計完工剩餘時間： </q-item-section>
                  <q-item-section class="text-bold">
                    2 小時 8 分鐘
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 目前 / 目標 (小時產量)： </q-item-section>
                </q-item>
                <q-item>
                  <q-linear-progress size="25px" value="1" color="secondary">
                    <div class="absolute-full flex flex-center">
                      <q-badge
                        color="white"
                        text-color="accent"
                        label="180 / 180"
                      />
                    </div> </q-linear-progress
                ></q-item>
              </q-list>
            </q-card>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-3">
            <q-card class="my-card q-ma-xs" @click="estimateClick">
              <q-card-section class="bg-positive text-white">
                <div class="text-h6 absolute-center">稼動</div>
              </q-card-section>

              <q-list dense padding>
                <q-item>
                  <q-item-section> 機台編號： </q-item-section>
                  <q-item-section> 922883 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 製令單號： </q-item-section>
                  <q-item-section> 133-189488810 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 品號： </q-item-section>
                  <q-item-section> AQQG9988654 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 品名： </q-item-section>
                  <q-item-section> 100圓盤（鍛胚） </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 完工件數： </q-item-section>
                  <q-item-section> 350 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 生產件數： </q-item-section>
                  <q-item-section> 470 </q-item-section>
                </q-item>
                <q-item> </q-item>
                <q-item>
                  <q-item-section avatar> 預計完工剩餘時間： </q-item-section>
                  <q-item-section class="text-bold"> 25 分鐘 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 目前 / 目標 (小時產量)： </q-item-section>
                </q-item>
                <q-item>
                  <q-linear-progress size="25px" value="0.9" color="secondary">
                    <div class="absolute-full flex flex-center">
                      <q-badge
                        color="white"
                        text-color="accent"
                        label="110 / 120"
                      />
                    </div> </q-linear-progress
                ></q-item>
              </q-list>
            </q-card>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-3">
            <q-card class="my-card q-ma-xs" @click="estimateClick">
              <q-card-section class="bg-positive text-white">
                <div class="text-h6 absolute-center">稼動</div>
              </q-card-section>

              <q-list dense padding>
                <q-item>
                  <q-item-section> 機台編號： </q-item-section>
                  <q-item-section> 922883 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 製令單號： </q-item-section>
                  <q-item-section> 133-189488810 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 品號： </q-item-section>
                  <q-item-section> AQQG9988654 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 品名： </q-item-section>
                  <q-item-section> 100圓盤（鍛胚） </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 完工件數： </q-item-section>
                  <q-item-section> 350 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 生產件數： </q-item-section>
                  <q-item-section> 470 </q-item-section>
                </q-item>
                <q-item> </q-item>
                <q-item>
                  <q-item-section avatar> 預計完工剩餘時間： </q-item-section>
                  <q-item-section class="text-bold"> 25 分鐘 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 目前 / 目標 (小時產量)： </q-item-section>
                </q-item>
                <q-item>
                  <q-linear-progress size="25px" value="0.9" color="secondary">
                    <div class="absolute-full flex flex-center">
                      <q-badge
                        color="white"
                        text-color="accent"
                        label="110 / 120"
                      />
                    </div> </q-linear-progress
                ></q-item>
              </q-list>
            </q-card>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-3">
            <q-card class="my-card q-ma-xs" @click="estimateClick">
              <q-card-section class="bg-positive text-white">
                <div class="text-h6 absolute-center">稼動</div>
              </q-card-section>

              <q-list dense padding>
                <q-item>
                  <q-item-section> 機台編號： </q-item-section>
                  <q-item-section> 922883 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 製令單號： </q-item-section>
                  <q-item-section> 133-189488810 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 品號： </q-item-section>
                  <q-item-section> AQQG9988654 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 品名： </q-item-section>
                  <q-item-section> 100圓盤（鍛胚） </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 完工件數： </q-item-section>
                  <q-item-section> 350 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 生產件數： </q-item-section>
                  <q-item-section> 470 </q-item-section>
                </q-item>
                <q-item> </q-item>
                <q-item>
                  <q-item-section avatar> 預計完工剩餘時間： </q-item-section>
                  <q-item-section class="text-bold"> 25 分鐘 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 目前 / 目標 (小時產量)： </q-item-section>
                </q-item>
                <q-item>
                  <q-linear-progress size="25px" value="0.96" color="secondary">
                    <div class="absolute-full flex flex-center">
                      <q-badge
                        color="white"
                        text-color="accent"
                        label="114 / 120"
                      />
                    </div> </q-linear-progress
                ></q-item>
              </q-list>
            </q-card>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-3">
            <q-card class="my-card q-ma-xs" @click="estimateClick">
              <q-card-section class="bg-accent text-white">
                <div class="text-h6 absolute-center">待機</div>
              </q-card-section>

              <q-list dense padding>
                <q-item>
                  <q-item-section> 機台編號： </q-item-section>
                  <q-item-section> 95276 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 製令單號： </q-item-section>
                  <q-item-section> 5823-189488810 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 品號： </q-item-section>
                  <q-item-section> AQQQ9988654 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 品名： </q-item-section>
                  <q-item-section> 150圓盤（鍛胚） </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 完工件數： </q-item-section>
                  <q-item-section> 720 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 生產件數： </q-item-section>
                  <q-item-section> 3030 </q-item-section>
                </q-item>
                <q-item> </q-item>
                <q-item>
                  <q-item-section avatar> 預計完工剩餘時間： </q-item-section>
                  <q-item-section class="text-bold">
                    1 小時 35 分鐘
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 目前 / 目標 (小時產量)： </q-item-section>
                </q-item>
                <q-item>
                  <q-linear-progress size="25px" value="0" color="negative">
                    <div class="absolute-full flex flex-center">
                      <q-badge
                        color="white"
                        text-color="accent"
                        label="0 / 360"
                      />
                    </div> </q-linear-progress
                ></q-item>
              </q-list>
            </q-card>
          </div>
        </div>
      </q-tab-panel>

      <q-tab-panel name="costs">
        <div class="row">
          <div class="col-xs-12 col-sm-3 col-md-2">
            <q-card class="my-card q-ma-xs" @click="estimateClick">
              <q-card-section class="bg-positive text-white">
                <div class="text-h6 absolute-center">正常</div>
              </q-card-section>
              <q-list dense padding>
                <q-item>
                  <q-item-section> 設備編號： </q-item-section>
                  <q-item-section> RS0083 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 用電量： </q-item-section>
                  <q-item-section> 204 瓩</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 電壓： </q-item-section>
                  <q-item-section> 654 伏特</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 電流： </q-item-section>
                  <q-item-section> 203 安培</q-item-section>
                </q-item>
              </q-list>
            </q-card>
          </div>
          <div class="col-xs-12 col-sm-3 col-md-2">
            <q-card class="my-card q-ma-xs" @click="estimateClick">
              <q-card-section class="bg-positive text-white">
                <div class="text-h6 absolute-center">正常</div>
              </q-card-section>
              <q-list dense padding>
                <q-item>
                  <q-item-section> 設備編號： </q-item-section>
                  <q-item-section> RS0083 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 用電量： </q-item-section>
                  <q-item-section> 204 瓩</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 電壓： </q-item-section>
                  <q-item-section> 654 伏特</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 電流： </q-item-section>
                  <q-item-section> 203 安培</q-item-section>
                </q-item>
              </q-list>
            </q-card>
          </div>
          <div class="col-xs-12 col-sm-3 col-md-2">
            <q-card class="my-card q-ma-xs" @click="estimateClick">
              <q-card-section class="bg-positive text-white">
                <div class="text-h6 absolute-center">正常</div>
              </q-card-section>
              <q-list dense padding>
                <q-item>
                  <q-item-section> 設備編號： </q-item-section>
                  <q-item-section> RS0083 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 用電量： </q-item-section>
                  <q-item-section> 204 瓩</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 電壓： </q-item-section>
                  <q-item-section> 654 伏特</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 電流： </q-item-section>
                  <q-item-section> 203 安培</q-item-section>
                </q-item>
              </q-list>
            </q-card>
          </div>
          <div class="col-xs-12 col-sm-3 col-md-2">
            <q-card class="my-card q-ma-xs" @click="estimateClick">
              <q-card-section class="bg-negative text-white">
                <div class="text-h6 absolute-center">警示</div>
              </q-card-section>
              <q-list dense padding>
                <q-item>
                  <q-item-section> 設備編號： </q-item-section>
                  <q-item-section> RS0083 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 用電量： </q-item-section>
                  <q-item-section> 0 瓩</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 電壓： </q-item-section>
                  <q-item-section> 0 伏特</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 電流： </q-item-section>
                  <q-item-section> 0 安培</q-item-section>
                </q-item>
              </q-list>
            </q-card>
          </div>
          <div class="col-xs-12 col-sm-3 col-md-2">
            <q-card class="my-card q-ma-xs" @click="estimateClick">
              <q-card-section class="bg-positive text-white">
                <div class="text-h6 absolute-center">正常</div>
              </q-card-section>
              <q-list dense padding>
                <q-item>
                  <q-item-section> 設備編號： </q-item-section>
                  <q-item-section> RS0083 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 用電量： </q-item-section>
                  <q-item-section> 204 瓩</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 電壓： </q-item-section>
                  <q-item-section> 654 伏特</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 電流： </q-item-section>
                  <q-item-section> 203 安培</q-item-section>
                </q-item>
              </q-list>
            </q-card>
          </div>
          <div class="col-xs-12 col-sm-3 col-md-2">
            <q-card class="my-card q-ma-xs" @click="estimateClick">
              <q-card-section class="bg-positive text-white">
                <div class="text-h6 absolute-center">正常</div>
              </q-card-section>
              <q-list dense padding>
                <q-item>
                  <q-item-section> 設備編號： </q-item-section>
                  <q-item-section> RS0083 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 用電量： </q-item-section>
                  <q-item-section> 204 瓩</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 電壓： </q-item-section>
                  <q-item-section> 654 伏特</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 電流： </q-item-section>
                  <q-item-section> 203 安培</q-item-section>
                </q-item>
              </q-list>
            </q-card>
          </div>
          <div class="col-xs-12 col-sm-3 col-md-2">
            <q-card class="my-card q-ma-xs" @click="estimateClick">
              <q-card-section class="bg-positive text-white">
                <div class="text-h6 absolute-center">正常</div>
              </q-card-section>
              <q-list dense padding>
                <q-item>
                  <q-item-section> 設備編號： </q-item-section>
                  <q-item-section> RS0083 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 用電量： </q-item-section>
                  <q-item-section> 204 瓩</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 電壓： </q-item-section>
                  <q-item-section> 654 伏特</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 電流： </q-item-section>
                  <q-item-section> 203 安培</q-item-section>
                </q-item>
              </q-list>
            </q-card>
          </div>
          <div class="col-xs-12 col-sm-3 col-md-2">
            <q-card class="my-card q-ma-xs" @click="estimateClick">
              <q-card-section class="bg-positive text-white">
                <div class="text-h6 absolute-center">正常</div>
              </q-card-section>
              <q-list dense padding>
                <q-item>
                  <q-item-section> 設備編號： </q-item-section>
                  <q-item-section> RS0083 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 用電量： </q-item-section>
                  <q-item-section> 204 瓩</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 電壓： </q-item-section>
                  <q-item-section> 654 伏特</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 電流： </q-item-section>
                  <q-item-section> 203 安培</q-item-section>
                </q-item>
              </q-list>
            </q-card>
          </div>
          <div class="col-xs-12 col-sm-3 col-md-2">
            <q-card class="my-card q-ma-xs" @click="estimateClick">
              <q-card-section class="bg-negative text-white">
                <div class="text-h6 absolute-center">警示</div>
              </q-card-section>
              <q-list dense padding>
                <q-item>
                  <q-item-section> 設備編號： </q-item-section>
                  <q-item-section> RS0083 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 用電量： </q-item-section>
                  <q-item-section> 0 瓩</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 電壓： </q-item-section>
                  <q-item-section> 0 伏特</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 電流： </q-item-section>
                  <q-item-section> 0 安培</q-item-section>
                </q-item>
              </q-list>
            </q-card>
          </div>
          <div class="col-xs-12 col-sm-3 col-md-2">
            <q-card class="my-card q-ma-xs" @click="estimateClick">
              <q-card-section class="bg-positive text-white">
                <div class="text-h6 absolute-center">正常</div>
              </q-card-section>
              <q-list dense padding>
                <q-item>
                  <q-item-section> 設備編號： </q-item-section>
                  <q-item-section> RS0083 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 用電量： </q-item-section>
                  <q-item-section> 204 瓩</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 電壓： </q-item-section>
                  <q-item-section> 654 伏特</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 電流： </q-item-section>
                  <q-item-section> 203 安培</q-item-section>
                </q-item>
              </q-list>
            </q-card>
          </div>
          <div class="col-xs-12 col-sm-3 col-md-2">
            <q-card class="my-card q-ma-xs" @click="estimateClick">
              <q-card-section class="bg-positive text-white">
                <div class="text-h6 absolute-center">正常</div>
              </q-card-section>
              <q-list dense padding>
                <q-item>
                  <q-item-section> 設備編號： </q-item-section>
                  <q-item-section> RS0083 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 用電量： </q-item-section>
                  <q-item-section> 204 瓩</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 電壓： </q-item-section>
                  <q-item-section> 654 伏特</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 電流： </q-item-section>
                  <q-item-section> 203 安培</q-item-section>
                </q-item>
              </q-list>
            </q-card>
          </div>
          <div class="col-xs-12 col-sm-3 col-md-2">
            <q-card class="my-card q-ma-xs" @click="estimateClick">
              <q-card-section class="bg-positive text-white">
                <div class="text-h6 absolute-center">正常</div>
              </q-card-section>
              <q-list dense padding>
                <q-item>
                  <q-item-section> 設備編號： </q-item-section>
                  <q-item-section> RS0083 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 用電量： </q-item-section>
                  <q-item-section> 204 瓩</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 電壓： </q-item-section>
                  <q-item-section> 654 伏特</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 電流： </q-item-section>
                  <q-item-section> 203 安培</q-item-section>
                </q-item>
              </q-list>
            </q-card>
          </div>
          <div class="col-xs-12 col-sm-3 col-md-2">
            <q-card class="my-card q-ma-xs" @click="estimateClick">
              <q-card-section class="bg-positive text-white">
                <div class="text-h6 absolute-center">正常</div>
              </q-card-section>
              <q-list dense padding>
                <q-item>
                  <q-item-section> 設備編號： </q-item-section>
                  <q-item-section> RS0083 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 用電量： </q-item-section>
                  <q-item-section> 204 瓩</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 電壓： </q-item-section>
                  <q-item-section> 654 伏特</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 電流： </q-item-section>
                  <q-item-section> 203 安培</q-item-section>
                </q-item>
              </q-list>
            </q-card>
          </div>
          <div class="col-xs-12 col-sm-3 col-md-2">
            <q-card class="my-card q-ma-xs" @click="estimateClick">
              <q-card-section class="bg-positive text-white">
                <div class="text-h6 absolute-center">正常</div>
              </q-card-section>
              <q-list dense padding>
                <q-item>
                  <q-item-section> 設備編號： </q-item-section>
                  <q-item-section> RS0083 </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 用電量： </q-item-section>
                  <q-item-section> 204 瓩</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 電壓： </q-item-section>
                  <q-item-section> 654 伏特</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section> 電流： </q-item-section>
                  <q-item-section> 203 安培</q-item-section>
                </q-item>
              </q-list>
            </q-card>
          </div>
        </div>
      </q-tab-panel>

      <q-tab-panel name="machines"> <TabMachines></TabMachines> </q-tab-panel>

      <q-tab-panel name="orders"> <TabOrders></TabOrders> </q-tab-panel>

      <q-tab-panel name="realtime_infos">
        <TabRealtime></TabRealtime>
      </q-tab-panel>

      <q-tab-panel name="mails" class="q-pa-none">
        <q-splitter v-model="splitterModel" style="height: 250px">
          <template v-slot:before>
            <q-tabs v-model="innerTab" vertical class="text-teal">
              <q-tab name="innerMails" icon="mail" label="mail123" />
              <q-tab name="innerAlarms" icon="alarm" label="Alarms" />
              <q-tab name="innerMovies" icon="movie" label="Movies" />
            </q-tabs>
          </template>

          <template v-slot:after>
            <q-tab-panels
              v-model="innerTab"
              animated
              transition-prev="slide-down"
              transition-next="slide-up"
            >
              <q-tab-panel name="innerMails">
                <div class="text-h4 q-mb-md">Mails</div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                  praesentium cumque magnam odio iure quidem, quod illum numquam
                  possimus obcaecati commodi minima assumenda consectetur culpa
                  fuga nulla ullam. In, libero.
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                  praesentium cumque magnam odio iure quidem, quod illum numquam
                  possimus obcaecati commodi minima assumenda consectetur culpa
                  fuga nulla ullam. In, libero.
                </p>
              </q-tab-panel>

              <q-tab-panel name="innerAlarms">
                <div class="text-h4 q-mb-md">Alarms</div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                  praesentium cumque magnam odio iure quidem, quod illum numquam
                  possimus obcaecati commodi minima assumenda consectetur culpa
                  fuga nulla ullam. In, libero.
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                  praesentium cumque magnam odio iure quidem, quod illum numquam
                  possimus obcaecati commodi minima assumenda consectetur culpa
                  fuga nulla ullam. In, libero.
                </p>
              </q-tab-panel>

              <q-tab-panel name="innerMovies">
                <div class="text-h4 q-mb-md">Movies</div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                  praesentium cumque magnam odio iure quidem, quod illum numquam
                  possimus obcaecati commodi minima assumenda consectetur culpa
                  fuga nulla ullam. In, libero.
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                  praesentium cumque magnam odio iure quidem, quod illum numquam
                  possimus obcaecati commodi minima assumenda consectetur culpa
                  fuga nulla ullam. In, libero.
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                  praesentium cumque magnam odio iure quidem, quod illum numquam
                  possimus obcaecati commodi minima assumenda consectetur culpa
                  fuga nulla ullam. In, libero.
                </p>
              </q-tab-panel>
            </q-tab-panels>
          </template>
        </q-splitter>
      </q-tab-panel>

      <q-tab-panel name="alarms">
        <div class="text-h6">Alarms</div>
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
          <image
            href="~assets/Snipaste_2021-07-07_19-55-52.png"
            height="500"
            width="500"
          />
          <line
            :ref="line1"
            v-if="showing"
            x1="50"
            y1="135"
            x2="360"
            y2="135"
            style="stroke: rgb(255, 0, 0); stroke-width: 2"
          />
          <line
            :ref="line2"
            v-if="showing"
            x1="50"
            y1="135"
            x2="50"
            y2="201"
            style="stroke: rgb(255, 0, 0); stroke-width: 2"
          />
          <line
            :ref="line3"
            v-if="showing"
            x1="50"
            y1="201"
            x2="360"
            y2="201"
            style="stroke: rgb(255, 0, 0); stroke-width: 2"
          />
          <line
            :ref="line4"
            v-if="showing"
            x1="360"
            y1="201"
            x2="360"
            y2="135"
            style="stroke: rgb(255, 0, 0); stroke-width: 2"
          />

          <text x="150" y="100" style="font: italic 20px serif; fill: red">
            {{ myText }}
          </text>
        </svg>
      </q-tab-panel>

      <q-tab-panel name="movies">
        <div class="q-pa-md" v-show="showData">
          <apexchart
            height="640"
            ref="chartRef"
            :options="chartOptions"
            :series="chartSeries"
          ></apexchart>
        </div>
      </q-tab-panel>
    </q-tab-panels>

    <q-inner-loading :showing="loadingAnimate">
      <q-spinner-gears size="50px" color="primary" />
    </q-inner-loading>
  </q-page>
</template>

<script>
import { ref, reactive, onMounted, computed, onUnmounted } from 'vue'
import { api } from 'boot/axios'
import { useQuasar } from 'quasar'
import QuasarNotify from '../../libs/errorNotify'
import VueApexCharts from 'vue3-apexcharts'
import TabMachines from 'components/monitor/tvview/TabMachines.vue'
import TabOrders from 'components/monitor/tvview/TabOrders.vue'
import TabRealtime from 'components/monitor/tvview/TabRealtime.vue'
import chart from '@/composables/monitor/forging-machine-current-status/chart'

export default {
  name: 'TVView',
  components: {
    apexchart: VueApexCharts,
    TabMachines,
    TabOrders,
    TabRealtime,
  },
  setup() {
    const $q = useQuasar()

    const loadingAnimate = ref(false)
    const showData = ref(false)
    const tab = ref('orders')
    const chartRef = ref(null)

    const loadData = async () => {
      loadingAnimate.value = true
      showData.value = false

      // let response = await api.get('/api/work_orders').catch((err) => {
      //   QuasarNotify($q, err.message)
      //   return { data: '123123' }
      // })
      loadingAnimate.value = false
      showData.value = true
    }

    onMounted(() => {
      loadData()
    })

    onUnmounted(() => {
      // console.log('onUnmounted ')
      // clearInterval(timeoutID)
      // clearInterval(timeoutID2)
    })

    // var timeoutID = window.setInterval(() => {
    //   showing.value = !showing.value
    //   myText.value = myText.value.length > 10 ? '有人闖入' : `!${myText.value}!`
    // }, 1000)

    // var timeoutID2 = window.setInterval(() => {
    //       productions
    // costs
    // machines
    // orders
    // realtime_infos
    //   const tabList = ['mails', 'alarms', 'movies']
    //   let nextIdx = tabList.indexOf(tab.value) + 1
    //   if (nextIdx >= tabList.length) {
    //     nextIdx = 0
    //   }
    //   tab.value = tabList[nextIdx]
    //   console.log('timeout2')
    // }, 5000)

    const line1 = ref(null)
    const line2 = ref(null)
    const line3 = ref(null)
    const line4 = ref(null)
    const color = ref('black')
    const showing = ref(false)
    const myText = ref('有人闖入')

    const { chartOptions, chartSeries } = chart(chartRef)

    return {
      showData,
      loadingAnimate,

      estimateClick() {},

      chartRef,
      chartOptions,
      chartSeries,

      tabModel: ref('one'),

      tab,
      innerTab: ref('innerMails'),
      splitterModel: ref(20),

      line1,
      line2,
      line3,
      line4,
      color,
      showing,
      myText,
    }
  },
}
</script>

<style scoped>
svg {
  width: 50vw;
  height: 500px;
}

@media screen and (min-width: 701px) and (max-width: 950px) {
  svg {
    height: 300px;
  }
}

@media screen and (max-width: 700px) {
  svg {
    margin-top: 150px;
    height: 100px;
  }
}
</style>
<style lang="sass"></style>
