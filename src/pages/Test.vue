<template>
  <q-page class="q-pa-md">
    <div>
      <q-btn push color="secondary" label="查詢" @click="changeClick" />
    </div>
    <div>
      result: {{ resultQL }} <br />
      loading: {{ loadingQL }} <br />
      error: {{ errorQL }}<br />
    </div>
    <div>
      result: {{ result }} <br />
      data: {{ data }} <br />
      loading: {{ loading }} <br />
      error: {{ error }}<br />
    </div>
  </q-page>
</template>

<script>
import { ref, onUnmounted, onMounted } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { useRouter } from 'vue-router'

export default {
  name: 'Test',
  setup() {
    const router = useRouter()

    const type = ref('123')

    const line1 = ref(null)
    const line2 = ref(null)
    const line3 = ref(null)
    const line4 = ref(null)
    const resultQL = ref(null)
    const loadingQL = ref(null)
    const errorQL = ref(null)
    const color = ref('black')
    const showing = ref(false)
    const myText = ref('有人闖入')

    onMounted(() => {
      console.log('[onMounted]')
      // loadData()
      // console.log('ref: ', content.value.outerHTML)
      // console.log('-------------')
      // window.addEventListener('resize', this.resizeHandler);
    })

    onUnmounted(() => {
      console.log('onUnmounted ')
      // clearInterval(timeoutID)
    })

    const { data, result, loading, error } = useQuery(
      gql`
        query MyQuery($id: BigInt!) {
          account(id: $id) {
            id
            isAdmin
            nodeId
            passwordHash
            test2Role
            testRole
            userName
            userRole
          }
        }
      `,
      {
        id: 1,
      }
    )

    // if (error.value) {
    //   console.log(error.value)
    // }

    // const loadData = () => {
    //   const { data, result, loading, errors } = useQuery(
    //     gql`
    //       query MyQuery($id: BigInt!) {
    //         account(id: $id) {
    //           id
    //           isAdmin
    //           nodeId
    //           passwordHash
    //           test2Role
    //           testRole
    //           userName
    //           userRole
    //         }
    //       }
    //     `,
    //     {
    //       id: 1,
    //     }
    //   )

    //   if (loading) {
    //     loadingQL.value = loading.value
    //     // console.log('loading')
    //     console.log(loading.value)
    //     // return
    //   }
    //   if (errors) {
    //     errorQL.value = errors.value
    //     // console.log('errors')
    //     console.log(errors.value)
    //     // return
    //   }

    //   resultQL.value = result.value
    //   // console.log('result')
    //   console.log(result.value)

    //   console.log(data)
    //   // router.push({ name: 'Login' })
    // }

    // const { result, loading, error } = useQuery(gql`
    //   query getAnnmnts {
    //     announcements {
    //       nodes {
    //         beginAt
    //         content
    //         deletedAt
    //         endAt
    //         id
    //       }
    //     }
    //   }
    // `)

    // return { /* your other items, */ result, loading, error }

    // var timeoutID = window.setInterval(() => {
    //   showing.value = !showing.value
    //   myText.value = myText.value.length > 10 ? '有人闖入' : `!${myText.value}!`
    //   console.log(999)
    // }, 1000)

    return {
      type,
      line1,
      line2,
      line3,
      line4,
      color,
      showing,
      myText,
      changeClick() {
        showing.value = !showing.value
      },
      circle1Clicked(e) {
        e.currentTarget.setAttribute('fill', '#ff00cc')
        console.log(888)
      },
      circle2Clicked(e) {
        // e.currentTarget.setAttribute('fill', '#ff00cc')
        console.log(e.parentElement.querySelector('circle'))
      },
      resultQL,
      loadingQL,
      errorQL,
      result,
      loading,
      error,
      data,
    }
  },
}
</script>

<style scoped>
svg {
  width: 100vw;
  height: 400px;
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
