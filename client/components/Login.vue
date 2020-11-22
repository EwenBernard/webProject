<template>
  <div>
    <form @submit.prevent="login">
      <h2>Login</h2>
      <input type="text" v-model="user.email" placeholder="Email" required>
      <input type="text" v-model="user.password" placeholder="Password" required>
      <button type="submit">Submit</button>
    </form>
    <router-link to='/register'>No account? Register</router-link>
  </div>
</template>

<script>
module.exports = {
  name:"Login",
  props: {
  },
  data () {
    return {
        user:{
            email: '',
            password: ''
        },
    }
  },
  async mounted () {
  },
  methods: {
    login(){
      this.$emit('login',this.user)
    },
  }
}
</script>