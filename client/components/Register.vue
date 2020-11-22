<template>
  <div>
    <form @submit.prevent="register()">
      <h2>Register</h2>
      <input type="text" v-model="email" placeholder="Email" required>
      <input type="text" v-model="password" placeholder="Password" required>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
module.exports = {
  name:"Register",
  props: {
  },
  data () {
    return {
        email: '',
        password: ''
    }
  },
  async mounted () {
  },
  methods: {
    register(){
      this.$emit('register', {
        email: this.email,
        password: this.password
      })
    },
  }
}
</script>