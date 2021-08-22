<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center">
        <div
          id="particles-js"
          :class="$q.dark.isActive ? 'dark_gradient' : 'normal_gradient'"
        ></div>
        <q-btn
          color="white"
          class="absolute-top-right"
          flat
          round
          @click="$q.dark.toggle()"
          :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"
        />
        <q-card
          class="login-form"
          v-bind:style="
            $q.platform.is.mobile ? { width: '80%' } : { width: '30%' }
          "
        >
          <q-card-section>
            <q-avatar
              size="74px"
              class="absolute"
              style="top: 0; right: 25px; transform: translateY(-50%)"
            >
            </q-avatar>
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">Log in to Dashboard</div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input filled v-model="username" label="Username" lazy-rules />

              <q-input
                type="password"
                filled
                v-model="password"
                label="Password"
                lazy-rules
              />

              <div>
                <q-btn
                  label="Login"
                  type="button"
                  color="primary"
                  @click="login"
                />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref, watch, onMounted } from 'vue'
import { getToken, setToken } from '@/libs/auth'
import { MutGetJWT, QueryLogin, GET_ANNMNTS } from '@/libs/GraphConst'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
import {
  useQuery,
  useResult,
  useMutation,
  useLazyQuery,
} from '@vue/apollo-composable'
import gql from 'graphql-tag'
import QuasarNotify from '../libs/errorNotify'

export default {
  setup() {
    const $q = useQuasar()
    const router = useRouter()

    const username = ref('guest')
    const password = ref('guest')

    if (getToken()) {
      router.push({ name: 'Home' })
    }

    // const { mutate: onLoginClick, onDone } = useMutation(MutGetJWT)

    // onDone((res) => {
    //   if (res?.data?.authenticate?.jwtToken) {
    //     setToken(res.data.authenticate.jwtToken)
    //     router.push({ name: 'Home' })
    //   }
    //   // console.log(res.data.authenticate.jwtToken)
    // })

    // console.log(QueryLogin)
    // const { result, load: getJWT, called } = useLazyQuery({ query: QueryLogin })
    // const { result, load: getJWT, called, onError } = useLazyQuery(QueryLogin)
    // const { result, load: getJWT, called } = useLazyQuery(GET_ANNMNTS)
    // const {
    //   result,
    //   load: getJWT,
    //   called,
    // } = useLazyQuery(gql`
    //   query Login($password: String!, $username: String!) {
    //     jwtToken: login(password: $password, username: $username)
    //   }
    // `)

    // const { result, load: getJWT } = useLazyQuery(gql`
    //   query list {
    //     list
    //   }
    // `)
    // const list = useResult(result, [])

    // const { getJWT, result } = useLazyQuery(QueryLogin)
    // console.log(called)
    // const repositories =
    // useResult(result, [], (data) => {
    //   console.log(called)
    //   console.log('---')
    //   console.table(data)
    //   console.log('---')
    //   // return data.announcements
    // })

    // onError((error) => {
    //   // logErrorMessages(error)
    //   // console.log(error.graphQLErrors)
    //   console.log(error)
    //   QuasarNotify($q, '發生錯誤，請稍後。')
    // })

    const queryOptions = ref({
      enabled: false,
    })
    const { result, refetch, onError, onResult } = useQuery(
      QueryLogin,
      () => ({
        username: username.value,
        password: password.value,
      }),
      queryOptions
    )
    onError((error) => {
      // logErrorMessages(error)
      // console.log(error.graphQLErrors)
      // console.log(error.networkError)
      QuasarNotify($q, '發生錯誤，請稍後。')
    })
    // useResult(result, [], (data) => {
    //   console.log('---')
    //   // console.table(data)
    //   console.log('---')
    //   return data
    // })
    onResult((queryResult) => {
      console.log(queryResult)
      console.log(queryResult.data)
      console.log(queryResult.loading)
      console.log(queryResult.networkStatus)
      console.log(queryResult.stale)
    })

    onMounted(() => {
      particlesJS('particles-js', {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: '#ffffff',
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000',
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: 'img/github.svg',
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'grab',
            },
            onclick: {
              enable: true,
              mode: 'push',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      })
    })

    return {
      username,
      password,
      login() {
        // console.log('login')
        if (!queryOptions.value.enabled) {
          queryOptions.value.enabled = true
          return
        }
        refetch()

        // onLoginClick({
        //   username: username.value,
        //   password: password.value,
        // })
        // getJWT({
        //   variables: {
        //     username: username.value,
        //     password: password.value,
        //   },
        // })
        // getJWT({
        //   username: username.value,
        //   password: password.value,
        // })
      },
    }
  },
}
</script>
<style>
#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}
.normal_gradient {
  background: linear-gradient(145deg, rgb(74, 94, 137) 15%, #b61924 70%);
}
.dark_gradient {
  background: linear-gradient(145deg, rgb(11, 26, 61) 15%, #4c1014 70%);
}
.login-form {
  position: absolute;
}
</style>
