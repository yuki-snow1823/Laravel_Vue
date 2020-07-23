<template>
  <div>
    <header>
      <Navbar />
    </header>
    <main>
      <div class="container">
        <Message /> <!-- ★ 追加 -->
        <RouterView />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
  import {
    NOT_FOUND,
    UNAUTHORIZED,
    INTERNAL_SERVER_ERROR
  } from './util'
  import Navbar from './components/Navbar.vue'
  import Message from './components/Message.vue' // ★ 追加
  import Footer from './components/Footer.vue'

  export default {
    components: {
      Message, // ★ 追加
      Navbar,
      Footer
    },
    computed: {
      errorCode() {
        return this.$store.state.error.code
      }
    },
    watch: {
      errorCode: {
        async handler(val) {
          if (val === INTERNAL_SERVER_ERROR) {
            this.$router.push('/500')
          } else if (val === UNAUTHORIZED) {
            await axios.get('/api/refresh-token')
            this.$store.commit('auth/setUser', null)
            this.$router.push('/login')
          } else if (val === NOT_FOUND) {
            this.$router.push('/not-found')
          }
        },
        immediate: true
      },
      $route() {
        this.$store.commit('error/setCode', null)
      }
    }
  }

</script>
