<template>
  <div>
    <form @submit.prevent="register()">
      <h2>Register</h2>
      <input type="text" v-model="user.email" placeholder="Email" required>
      <input type="text" v-model="user.password" placeholder="Password" required>
      <input type="text" v-model="user.firstname" placeholder="First Name" required>
      <input type="text" v-model="user.lastname" placeholder="Last Name" required>
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
        user:{
          email:'',
          password:'',
          firstname:'',
          lastname:''
        },
    }
  },
  async mounted () {
  },
  methods: {
    register(){
      console.log(this.user.firstname)
      console.log(this.user.lastname)
      this.$emit('register', {
        email: this.user.email,
        password: this.user.password,
        firstname: this.user.firstname,
        lastname: this.user.lastname
      })
    },
  }
}
</script>