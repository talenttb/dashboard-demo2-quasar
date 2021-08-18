<template>
  <Suspense>
    <q-layout view="lHh Lpr lFf">
      <q-header
        elevated
        :class="$q.dark.isActive ? 'header-dark' : 'header-normal'"
      >
        <q-toolbar>
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />

          <q-toolbar-title style="min-width: 50%">
            Smartist App
          </q-toolbar-title>
          <q-space />
          <div class="q-gutter-sm row items-center no-wrap">
            <q-btn
              class="q-mr-xs"
              flat
              round
              @click="$q.dark.toggle()"
              :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"
            />
            <q-btn
              round
              dense
              flat
              color="white"
              :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
              @click="$q.fullscreen.toggle()"
              v-if="$q.screen.gt.sm"
            >
            </q-btn>
            <q-btn round dense flat color="white" icon="notifications">
              <q-badge color="red" text-color="white" floating> 5 </q-badge>
              <q-menu>
                <q-list style="min-width: 100px">
                  <Messages></Messages>
                  <q-card class="text-center no-shadow no-border">
                    <q-btn
                      label="View All"
                      style="max-width: 120px !important"
                      flat
                      dense
                      class="text-indigo-8"
                    ></q-btn>
                  </q-card>
                </q-list>
              </q-menu>
            </q-btn>
            <q-btn round flat>
              <q-avatar size="26px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>
            </q-btn>
          </div>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        bordered
        class="text-white"
        :class="$q.dark.isActive ? 'drawerdark' : 'drawer-normal'"
      >
        <q-list>
          <q-item
            to="/"
            :active="link === 'index'"
            @click="link = 'index'"
            active-class="q-item-no-link-highlighting"
          >
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Dashboard</q-item-label>
            </q-item-section>
          </q-item>

          <q-expansion-item
            icon="share_location"
            label="我的最愛"
            expand-icon-class="text-white"
          >
            <q-list>
              <q-item
                v-for="page in favorites"
                :key="page.name"
                :to="page.route"
                active-class="q-item-no-link-highlighting"
              >
                <q-item-section avatar>
                  <q-icon
                    color="green-5"
                    name="o_push_pin"
                    size="xs"
                    @click.prevent="
                      (e) => {
                        removeFav(e, page.name)
                      }
                    "
                  ></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ page.name }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>

          <!-- <q-item
            to="/Cards"
            :active="link === 'cards'"
            @click="link = 'cards'"
            active-class="q-item-no-link-highlighting"
          >
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Cards</q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            to="/Charts"
            :active="link === 'charts'"
            @click="link = 'charts'"
            active-class="q-item-no-link-highlighting"
          >
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Charts</q-item-label>
            </q-item-section>
          </q-item> -->

          <!-- <q-expansion-item
          icon="pages"
          label="Pages"
          expand-icon-class="text-white"
        >
          <q-list class="q-pl-lg">
            <q-item to="/" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <q-icon name="email" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Login-1</q-item-label>
              </q-item-section>
            </q-item>
            <q-item to="/Lock" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <q-icon name="lock" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Lock Screen</q-item-label>
              </q-item-section>
            </q-item>
            <q-item to="/Lock-2" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <q-icon name="lock" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Lock Screen - 2</q-item-label>
              </q-item-section>
            </q-item>
            <q-item to="/Pricing" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <q-icon name="list" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Pricing</q-item-label>
              </q-item-section>
            </q-item>
            <q-item-label header class="text-weight-bolder text-white"
              >Generic</q-item-label
            >
            <q-item to="/Profile" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <q-icon name="person" />
              </q-item-section>
              <q-item-section>
                <q-item-label>User Profile</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              to="/Maintenance"
              active-class="q-item-no-link-highlighting"
            >
              <q-item-section avatar>
                <q-icon name="settings" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Maintenance</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>
        <q-expansion-item
          icon="map"
          label="Maps"
          expand-icon-class="text-white"
        >
          <q-list class="q-pl-lg">
            <q-item to="/Map" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <q-icon name="map" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Map</q-item-label>
              </q-item-section>
            </q-item>
            <q-item to="/MapMarker" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <q-icon name="location_on" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Map Marker</q-item-label>
              </q-item-section>
            </q-item>
            <q-item to="/StreetView" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <q-icon name="streetview" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Street View</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item> -->

          <!-- 資源及計畫 -->
          <q-expansion-item
            icon="share_location"
            label="資源及計畫"
            expand-icon-class="text-white"
          >
            <q-list class="q-pl-lg">
              <q-expansion-item
                dense-toggle
                icon=""
                label="MRP-物料需求計畫"
                expand-icon-class="text-grey-5"
              >
                <q-list>
                  <q-item active-class="q-item-no-link-highlighting">
                    <q-item-section avatar>
                      <q-icon
                        color="blue-grey-1"
                        name="push_pin"
                        size="xs"
                      ></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <!-- BOM-物料清單 -->
                      <q-item-label>BOM-物料清單</q-item-label>
                      <!-- <q-item
                        to="/Map"
                        active-class="q-item-no-link-highlighting"
                        >BOM-物料清單</q-item
                      > -->
                    </q-item-section>
                  </q-item>
                  <q-separator color="white" inset />
                  <q-item to="/Map" active-class="q-item-no-link-highlighting">
                    <q-item-section avatar>
                      <q-icon
                        color="blue-grey-1"
                        name="push_pin"
                        size="xs"
                      ></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>存貨數量</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-separator color="white" inset />

                  <q-item to="/Map" active-class="q-item-no-link-highlighting">
                    <q-item-section avatar>
                      <q-icon
                        color="blue-grey-1"
                        name="push_pin"
                        size="xs"
                      ></q-icon
                    ></q-item-section>
                    <q-item-section>
                      <q-item-label>訂單</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-expansion-item>

              <q-expansion-item
                dense-toggle
                icon=""
                label="LRP-物流資源計畫"
                expand-icon-class="text-grey-5"
              >
                <q-list>
                  <q-item to="/Map" active-class="q-item-no-link-highlighting">
                    <q-item-section avatar>
                      <q-icon
                        color="blue-grey-1"
                        name="push_pin"
                        size="xs"
                      ></q-icon
                    ></q-item-section>
                    <q-item-section>
                      <q-item-label>MPS-主生產計畫</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator color="white" inset />
                  <q-item to="/Map" active-class="q-item-no-link-highlighting">
                    <q-item-section avatar
                      ><q-icon
                        color="blue-grey-1"
                        name="push_pin"
                        size="xs"
                      ></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>BOM-物料清單</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-expansion-item>

              <q-expansion-item
                dense-toggle
                icon=""
                label="MPS-主生產計畫"
                expand-icon-class="text-grey-5"
              >
                <q-list>
                  <q-item to="/Map" active-class="q-item-no-link-highlighting">
                    <q-item-section avatar
                      ><q-icon
                        color="blue-grey-1"
                        name="push_pin"
                        size="xs"
                      ></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>產品清單（轉錄、上傳）</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator color="white" inset />
                  <q-item to="/Map" active-class="q-item-no-link-highlighting">
                    <q-item-section avatar
                      ><q-icon
                        color="blue-grey-1"
                        name="push_pin"
                        size="xs"
                      ></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>模具資料建檔</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator color="white" inset />
                  <q-item to="/Map" active-class="q-item-no-link-highlighting">
                    <q-item-section avatar>
                      <q-icon
                        color="blue-grey-1"
                        name="push_pin"
                        size="xs"
                      ></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>產品模具對照表</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator color="white" inset />
                  <q-item to="/Map" active-class="q-item-no-link-highlighting">
                    <q-item-section avatar>
                      <q-icon
                        color="blue-grey-1"
                        name="push_pin"
                        size="xs"
                      ></q-icon
                    ></q-item-section>
                    <q-item-section>
                      <q-item-label>APS-先進規劃排程系統</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-expansion-item>

              <q-expansion-item
                dense-toggle
                icon=""
                label="配銷管理系統"
                expand-icon-class="text-grey-5"
              >
                <q-list>
                  <q-item to="/Map" active-class="q-item-no-link-highlighting">
                    <q-item-section avatar>
                      <q-icon
                        color="blue-grey-1"
                        name="push_pin"
                        size="xs"
                      ></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>庫存管理</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator color="white" inset />
                  <q-item to="/Map" active-class="q-item-no-link-highlighting">
                    <q-item-section avatar>
                      <q-icon
                        color="blue-grey-1"
                        name="push_pin"
                        size="xs"
                      ></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>採購進貨管理</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator color="white" inset />
                  <q-item to="/Map" active-class="q-item-no-link-highlighting">
                    <q-item-section avatar>
                      <q-icon
                        color="blue-grey-1"
                        name="push_pin"
                        size="xs"
                      ></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>訂單銷售管理</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator color="white" inset />
                  <q-item to="/Map" active-class="q-item-no-link-highlighting">
                    <q-item-section avatar>
                      <q-icon
                        color="blue-grey-1"
                        name="push_pin"
                        size="xs"
                      ></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>進口作業系統</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator color="white" inset />
                  <q-item to="/Map" active-class="q-item-no-link-highlighting">
                    <q-item-section avatar>
                      <q-icon
                        color="blue-grey-1"
                        name="push_pin"
                        size="xs"
                      ></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>出口作業管理系統</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator color="white" inset />
                  <q-item to="/Map" active-class="q-item-no-link-highlighting">
                    <q-item-section avatar>
                      <q-icon
                        color="blue-grey-1"
                        name="push_pin"
                        size="xs"
                      ></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>傳輸系統</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-expansion-item>

              <q-expansion-item
                dense-toggle
                icon=""
                label="生產/製造管理系統"
                expand-icon-class="text-grey-5"
              >
                <q-list>
                  <q-item to="/Map" active-class="q-item-no-link-highlighting">
                    <q-item-section avatar>
                      <q-icon
                        color="blue-grey-1"
                        name="push_pin"
                        size="xs"
                      ></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>BOM-產品結構</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator color="white" inset />
                  <q-item to="/Map" active-class="q-item-no-link-highlighting">
                    <q-item-section avatar>
                      <q-icon
                        color="blue-grey-1"
                        name="push_pin"
                        size="xs"
                      ></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>SFC-製程管理系統</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator color="white" inset />
                  <q-item to="/Map" active-class="q-item-no-link-highlighting">
                    <q-item-section avatar>
                      <q-icon
                        color="blue-grey-1"
                        name="push_pin"
                        size="xs"
                      ></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>LRP-批次需求計畫</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator color="white" inset />
                  <q-item to="/Map" active-class="q-item-no-link-highlighting">
                    <q-item-section avatar>
                      <q-icon
                        color="blue-grey-1"
                        name="push_pin"
                        size="xs"
                      ></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>製令管理</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator color="white" inset />
                  <q-item to="/Map" active-class="q-item-no-link-highlighting">
                    <q-item-section avatar>
                      <q-icon
                        color="blue-grey-1"
                        name="push_pin"
                        size="xs"
                      ></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>MOC-託外加工管理</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-expansion-item>
            </q-list>
          </q-expansion-item>

          <!-- 製造 -->
          <q-expansion-item
            icon="handyman"
            label="製造"
            expand-icon-class="text-white"
          >
            <q-list class="q-pl-lg">
              <q-expansion-item
                dense-toggle
                icon=""
                label="MMS-物料管理系統"
                expand-icon-class="text-grey-5"
              >
                <q-list class="text-white">
                  <q-item to="/Map" active-class="q-item-no-link-highlighting">
                    <q-item-section avatar>
                      <q-icon
                        color="blue-grey-1"
                        name="push_pin"
                        size="xs"
                      ></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>物料維護</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator color="white" inset />
                  <q-item to="/Map" active-class="q-item-no-link-highlighting">
                    <q-item-section avatar>
                      <q-icon
                        color="blue-grey-1"
                        name="push_pin"
                        size="xs"
                      ></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>線邊倉物料管理</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator color="white" inset />
                  <q-item to="/Map" active-class="q-item-no-link-highlighting">
                    <q-item-section avatar>
                      <q-icon
                        color="blue-grey-1"
                        name="push_pin"
                        size="xs"
                      ></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>生產過站自動扣料</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-expansion-item>

              <!-- WIP-在製品管理系統 -->
              <q-expansion-item
                dense-toggle
                icon=""
                label="WIP-在製品管理系統"
                expand-icon-class="text-grey-5"
              >
                <q-list class="text-white">
                  <q-item to="/Map" active-class="q-item-no-link-highlighting">
                    <q-item-section avatar>
                      <q-icon
                        color="blue-grey-1"
                        name="push_pin"
                        size="xs"
                      ></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>生產批追蹤</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator color="white" inset />
                  <q-item to="/Map" active-class="q-item-no-link-highlighting">
                    <q-item-section avatar>
                      <q-icon
                        color="blue-grey-1"
                        name="push_pin"
                        size="xs"
                      ></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>生產查詢</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator color="white" inset />
                  <q-item to="/Map" active-class="q-item-no-link-highlighting">
                    <q-item-section avatar>
                      <q-icon
                        color="blue-grey-1"
                        name="push_pin"
                        size="xs"
                      ></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>生產工作指示</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator color="white" inset />
                  <q-item to="/Map" active-class="q-item-no-link-highlighting">
                    <q-item-section avatar>
                      <q-icon
                        color="blue-grey-1"
                        name="push_pin"
                        size="xs"
                      ></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>工單進出站管理</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator color="white" inset />
                  <q-item to="/Map" active-class="q-item-no-link-highlighting">
                    <q-item-section avatar
                      ><q-icon
                        color="blue-grey-1"
                        name="push_pin"
                        size="xs"
                      ></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>訂單轉錄</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator color="white" inset />
                  <q-item to="/Map" active-class="q-item-no-link-highlighting">
                    <q-item-section avatar>
                      <q-icon
                        color="blue-grey-1"
                        name="push_pin"
                        size="xs"
                      ></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>製令轉錄</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-expansion-item>

              <!-- LMS-標籤管理系統 -->
              <q-expansion-item
                dense-toggle
                icon=""
                label="LMS-標籤管理系統"
                expand-icon-class="text-grey-5"
              >
                <q-list class="text-white">
                  <q-item to="/Map" active-class="q-item-no-link-highlighting">
                    <q-item-section avatar>
                      <q-icon
                        color="blue-grey-1"
                        name="push_pin"
                        size="xs"
                      ></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>欄位客製化</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator color="white" inset />
                  <q-item to="/Map" active-class="q-item-no-link-highlighting">
                    <q-item-section avatar>
                      <q-icon
                        color="blue-grey-1"
                        name="push_pin"
                        size="xs"
                      ></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>標籤關聯設定</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator color="white" inset />
                  <q-item to="/Map" active-class="q-item-no-link-highlighting">
                    <q-item-section avatar>
                      <q-icon
                        color="blue-grey-1"
                        name="push_pin"
                        size="xs"
                      ></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>出貨追蹤</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-expansion-item>

              <!-- Tool-零配件管理 -->
              <q-expansion-item
                dense-toggle
                icon=""
                label="Tool-零配件管理"
                expand-icon-class="text-grey-5"
              >
                <q-list class="text-white">
                  <q-item to="/Map" active-class="q-item-no-link-highlighting">
                    <q-item-section avatar>
                      <q-icon
                        color="blue-grey-1"
                        name="push_pin"
                        size="xs"
                      ></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>零配件進出與庫存管理</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-expansion-item>

              <!-- CMS-載具管理 -->
              <q-expansion-item
                dense-toggle
                icon=""
                label="CMS-載具管理"
                expand-icon-class="text-grey-5"
              >
                <q-list class="text-white">
                  <q-item to="/Map" active-class="q-item-no-link-highlighting">
                    <q-item-section avatar>
                      <q-icon
                        color="blue-grey-1"
                        name="push_pin"
                        size="xs"
                      ></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>物料維護</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator color="white" inset />
                  <q-item to="/Map" active-class="q-item-no-link-highlighting">
                    <q-item-section avatar>
                      <q-icon
                        color="blue-grey-1"
                        name="push_pin"
                        size="xs"
                      ></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>線邊倉物料管理</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator color="white" inset />
                  <q-item to="/Map" active-class="q-item-no-link-highlighting">
                    <q-item-section avatar>
                      <q-icon
                        color="blue-grey-1"
                        name="push_pin"
                        size="xs"
                      ></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>生產過站自動扣料</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-expansion-item>

              <!-- ALM-警示管理 -->
              <q-expansion-item
                dense-toggle
                icon=""
                label="ALM-警示管理"
                expand-icon-class="text-grey-5"
              >
                <q-list class="text-white">
                  <q-item to="/Map" active-class="q-item-no-link-highlighting">
                    <q-item-section avatar>
                      <q-icon
                        color="blue-grey-1"
                        name="push_pin"
                        size="xs"
                      ></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>通知平台設定</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator color="white" inset />
                  <q-item to="/Map" active-class="q-item-no-link-highlighting">
                    <q-item-section avatar>
                      <q-icon
                        color="blue-grey-1"
                        name="push_pin"
                        size="xs"
                      ></q-icon>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>警報設定</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-expansion-item>
            </q-list>
          </q-expansion-item>

          <!-- 設備 -->
          <q-expansion-item
            icon="sensors"
            label="設備"
            expand-icon-class="text-white"
          >
            <q-list class="q-pl-lg text-white">
              <q-item to="/Map" active-class="q-item-no-link-highlighting">
                <q-item-section avatar>
                  <q-icon
                    color="blue-grey-1"
                    name="push_pin"
                    size="xs"
                  ></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>保養週期設定</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator color="white" inset />
              <q-item
                :to="{ name: 'Maintenance' }"
                active-class="q-item-no-link-highlighting"
              >
                <q-item-section avatar>
                  <q-icon
                    color="blue-grey-1"
                    name="push_pin"
                    size="xs"
                    @click.prevent="
                      (e) => {
                        showProfile(e, '保養歷史記錄', {
                          name: 'Maintenance',
                        })
                      }
                    "
                  ></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>*保養歷史記錄</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator color="white" inset />
              <q-item to="/Map" active-class="q-item-no-link-highlighting">
                <q-item-section avatar>
                  <q-icon
                    color="blue-grey-1"
                    name="push_pin"
                    size="xs"
                  ></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>配件工具整合</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>

          <!-- QC-品質控制 -->
          <q-expansion-item
            icon="manage_search"
            label="QC-品質控制"
            expand-icon-class="text-white"
          >
            <q-list class="q-pl-lg">
              <q-item
                :to="{ name: 'Inspection' }"
                active-class="q-item-no-link-highlighting"
              >
                <q-item-section avatar>
                  <q-icon
                    color="blue-grey-1"
                    name="push_pin"
                    size="xs"
                    @click.prevent="
                      (e) => {
                        showProfile(e, '巡檢記錄即時連線', {
                          name: 'Inspection',
                        })
                      }
                    "
                  ></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>*巡檢記錄即時連線</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator color="white" inset />
              <q-item to="/Map" active-class="q-item-no-link-highlighting">
                <q-item-section avatar>
                  <q-icon
                    color="blue-grey-1"
                    name="push_pin"
                    size="xs"
                  ></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>AQL、Sampling Size...</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>

          <!-- 監控 -->
          <q-expansion-item
            icon="monitor"
            label="監控"
            expand-icon-class="text-white"
          >
            <q-list class="q-pl-lg">
              <q-item
                :to="{ name: 'EquimentOutputStatus' }"
                active-class="q-item-no-link-highlighting"
              >
                <q-item-section avatar>
                  <q-icon
                    color="blue-grey-1"
                    name="push_pin"
                    size="xs"
                    @click.prevent="
                      (e) => {
                        showProfile(e, '機台設備完工計量即時狀態表', {
                          name: 'EquimentOutputStatus',
                        })
                      }
                    "
                  ></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>*機台設備完工計量即時狀態表</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator color="white" inset />
              <q-item
                :to="{ name: 'ForgingMachineActivationRate' }"
                active-class="q-item-no-link-highlighting"
              >
                <q-item-section avatar>
                  <q-icon
                    color="blue-grey-1"
                    name="push_pin"
                    size="xs"
                    @click.prevent="
                      (e) => {
                        showProfile(e, '鍛造機台稼動率', {
                          name: 'ForgingMachineActivationRate',
                        })
                      }
                    "
                  ></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>*鍛造機台稼動率</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator color="white" inset />
              <q-item
                :to="{ name: 'ForgingMachineCurrentStatus' }"
                active-class="q-item-no-link-highlighting"
              >
                <q-item-section avatar>
                  <q-icon
                    color="blue-grey-1"
                    name="push_pin"
                    size="xs"
                    @click.prevent="
                      (e) => {
                        showProfile(e, '鍛造機台即時狀態', {
                          name: 'ForgingMachineCurrentStatus',
                        })
                      }
                    "
                  ></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>*鍛造機台即時狀態</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator color="white" inset />
              <q-item
                :to="{ name: 'TVView' }"
                active-class="q-item-no-link-highlighting"
              >
                <q-item-section avatar>
                  <q-icon
                    color="blue-grey-1"
                    name="push_pin"
                    size="xs"
                    @click.prevent="
                      (e) => {
                        showProfile(e, 'TV畫面', {
                          name: 'TVView',
                        })
                      }
                    "
                  ></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>*TV畫面</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator color="white" inset />
              <q-item to="/Map" active-class="q-item-no-link-highlighting">
                <q-item-section avatar>
                  <q-icon
                    color="blue-grey-1"
                    name="push_pin"
                    size="xs"
                  ></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>SOP/SIP/生產指示即時線上檢視</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator color="white" inset />

              <q-item
                :to="{ name: 'MachineStatusMonitor' }"
                active-class="q-item-no-link-highlighting"
              >
                <q-item-section avatar>
                  <q-icon
                    color="blue-grey-1"
                    name="push_pin"
                    size="xs"
                    @click.prevent="
                      (e) => {
                        showProfile(e, '各項即時數據監控列表', {
                          name: 'MachineStatusMonitor',
                        })
                      }
                    "
                  ></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>*各項即時數據監控列表</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>

          <!-- 報表 -->
          <q-expansion-item
            icon="trending_up"
            label="報表"
            expand-icon-class="text-white"
          >
            <q-list class="q-pl-lg">
              <q-item
                :to="{ name: 'Moulds' }"
                active-class="q-item-no-link-highlighting"
              >
                <q-item-section avatar>
                  <q-icon
                    color="blue-grey-1"
                    name="push_pin"
                    size="xs"
                    @click.prevent="
                      (e) => {
                        showProfile(e, '模具報表', {
                          name: 'Moulds',
                        })
                      }
                    "
                  ></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>*模具報表</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator color="white" inset />
              <q-item
                :to="{ name: 'History' }"
                active-class="q-item-no-link-highlighting"
              >
                <q-item-section avatar>
                  <q-icon
                    color="blue-grey-1"
                    name="push_pin"
                    size="xs"
                    @click.prevent="
                      (e) => {
                        showProfile(e, '歷史資料查詢', {
                          name: 'History',
                        })
                      }
                    "
                  ></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>*歷史資料查詢</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator color="white" inset />

              <q-item
                :to="{ name: 'Traceability' }"
                active-class="q-item-no-link-highlighting"
              >
                <q-item-section avatar>
                  <q-icon
                    color="blue-grey-1"
                    name="push_pin"
                    size="xs"
                    @click.prevent="
                      (e) => {
                        showProfile(e, '生產履歷資料', {
                          name: 'Traceability',
                        })
                      }
                    "
                  ></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>*生產履歷資料</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator color="white" inset />
              <q-item to="/Map" active-class="q-item-no-link-highlighting">
                <q-item-section avatar>
                  <q-icon
                    color="blue-grey-1"
                    name="push_pin"
                    size="xs"
                  ></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>設備OEE報表</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator color="white" inset />
              <q-item
                :to="{ name: 'WorkOrderDairy' }"
                active-class="q-item-no-link-highlighting"
              >
                <q-item-section avatar>
                  <q-icon
                    color="blue-grey-1"
                    name="push_pin"
                    size="xs"
                    @click.prevent="
                      (e) => {
                        showProfile(e, '模具工單日報報表', {
                          name: 'WorkOrderDairy',
                        })
                      }
                    "
                  ></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>*工單日報</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator color="white" inset />
              <q-item
                :to="{ name: 'WorkOrderMachEffective' }"
                active-class="q-item-no-link-highlighting"
              >
                <q-item-section avatar>
                  <q-icon
                    color="blue-grey-1"
                    name="push_pin"
                    size="xs"
                    @click.prevent="
                      (e) => {
                        showProfile(e, '工單效率查詢', {
                          name: 'WorkOrderMachEffective',
                        })
                      }
                    "
                  ></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>*工單效率查詢</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator color="white" inset />
              <q-item
                :to="{ name: 'WorkOrderMachMetrics' }"
                active-class="q-item-no-link-highlighting"
              >
                <q-item-section avatar>
                  <q-icon
                    color="blue-grey-1"
                    name="push_pin"
                    size="xs"
                    @click.prevent="
                      (e) => {
                        showProfile(e, '工單生產狀態查詢', {
                          name: 'WorkOrderMachMetrics',
                        })
                      }
                    "
                  ></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>*工單生產狀態查詢</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator color="white" inset />
              <q-item to="/Map" active-class="q-item-no-link-highlighting">
                <q-item-section avatar>
                  <q-icon
                    color="blue-grey-1"
                    name="push_pin"
                    size="xs"
                  ></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>鍛造機台操作歷程記錄</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>

          <!-- 警報 -->
          <!-- <q-expansion-item
          icon="alarm"
          label="警報"
          expand-icon-class="text-white"
        >
          <q-list class="q-pl-lg">
            <q-item to="/Map" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <q-icon name="map" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Map</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item> -->

          <!-- 人員 -->
          <q-expansion-item
            icon="people"
            label="人員"
            expand-icon-class="text-white"
          >
            <q-list class="q-pl-lg">
              <q-item to="/Map" active-class="q-item-no-link-highlighting">
                <q-item-section avatar>
                  <q-icon
                    color="blue-grey-1"
                    name="push_pin"
                    size="xs"
                  ></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>人員管理</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator color="white" inset />
              <q-item to="/Map" active-class="q-item-no-link-highlighting">
                <q-item-section avatar>
                  <q-icon
                    color="blue-grey-1"
                    name="push_pin"
                    size="xs"
                  ></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>群組權限管理</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator color="white" inset />
              <q-item to="/Map" active-class="q-item-no-link-highlighting">
                <q-item-section avatar>
                  <q-icon
                    color="blue-grey-1"
                    name="push_pin"
                    size="xs"
                  ></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>上班工時設定</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>

          <!-- <q-expansion-item
            icon=""
            label="Sample Sytle"
            expand-icon-class="text-white"
          >
            <q-expansion-item
              dense-toggle
              label="Today"
              :header-inset-level="1"
              :content-inset-level="2"
            >
              <q-card class="bg-teal-2">
                <q-card-section>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem, eius reprehenderit eos corrupti commodi magni quaerat
                  ex numquam, dolorum officiis modi facere maiores architecto
                  suscipit iste eveniet doloribus ullam aliquid.
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-expansion-item
              label="Today"
              :header-inset-level="1"
            >
              <q-card class="bg-teal-2">
                <q-card-section>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem, eius reprehenderit eos corrupti commodi magni quaerat
                  ex numquam, dolorum officiis modi facere maiores architecto
                  suscipit iste eveniet doloribus ullam aliquid.
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-list class="q-pl-lg">
              <q-item to="/Map" active-class="q-item-no-link-highlighting">
                <q-item-section avatar>
                  <q-icon name="map" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Map</q-item-label>
                </q-item-section>
              </q-item>
              <q-expansion-item icon="perm_identity" label="Account settings">
                <q-card class="bg-grey-9">
                  <q-card-section>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quidem, eius reprehenderit eos corrupti commodi magni
                    quaerat ex numquam, dolorum officiis modi facere maiores
                    architecto suscipit iste eveniet doloribus ullam aliquid.
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
            <q-list
              dark
              padding
              bordered
              class="rounded-borders"
              style="max-width: 328px"
            >
              <q-expansion-item icon="perm_identity" label="Account settings">
                <q-card class="bg-grey-9">
                  <q-card-section>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quidem, eius reprehenderit eos corrupti commodi magni
                    quaerat ex numquam, dolorum officiis modi facere maiores
                    architecto suscipit iste eveniet doloribus ullam aliquid.
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-expansion-item icon="signal_wifi_off" label="Wifi settings">
                <q-card class="bg-grey-9">
                  <q-card-section>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quidem, eius reprehenderit eos corrupti commodi magni
                    quaerat ex numquam, dolorum officiis modi facere maiores
                    architecto suscipit iste eveniet doloribus ullam aliquid.
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-expansion-item
                icon="drafts"
                label="Drafts"
                header-class="text-orange"
              >
                <q-card class="bg-grey-9">
                  <q-card-section>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quidem, eius reprehenderit eos corrupti commodi magni
                    quaerat ex numquam, dolorum officiis modi facere maiores
                    architecto suscipit iste eveniet doloribus ullam aliquid.
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
          </q-expansion-item> -->
        </q-list>
      </q-drawer>

      <q-page-container class="bg-grey-2">
        <router-view />
      </q-page-container>
    </q-layout>
  </Suspense>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import Messages from 'components/Messages.vue'
import { useQuasar } from 'quasar'

import { defineComponent, ref, watch, reactive } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    Messages,
    EssentialLink,
  },

  setup() {
    const $q = useQuasar()

    console.log($q.platform)
    console.log($q.version)

    const link = ref('')
    // const useDarkMode = ref(false)

    const leftDrawerOpen = ref(false)
    const favorites = ref([])

    // watch(useDarkMode, (useDarkMode, prevuseDarkMode) => {
    //   // console.log(useDarkMode)
    //   $q.dark.toggle()
    // })

    return {
      leftDrawerOpen,
      showProfile(e, name, route) {
        favorites.value.push({
          name: name,
          route: route,
        })
        $q.notify({
          position: 'top-left',
          type: 'positive',
          message: '已加入我的最愛',
        })
      },
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      removeFav(e, name) {
        favorites.value = favorites.value.filter(function (ele) {
          return ele.name !== name
        })
      },
      link,
      favorites,
    }
  },
})
</script>

<style lang="scss">
.header-dark {
  // background: $primary-dark
  background: $primary-dark linear-gradient(1deg, #1d324a 50%, #2b7e7ecc);
}

.drawer-normal {
  background: $primary;
}
.drawerdark {
  background: $primary-dark;
}
</style>
