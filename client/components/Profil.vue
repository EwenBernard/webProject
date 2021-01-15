<template>
    <div id="app">
        <h1>Profil</h1>
        <div v-if="modify == false">
            <h3>First name: Ewen</h3>
            <h3>Last name: Bernard</h3>
            <h3>Email: {{user.email}}</h3>
            <button class="button" @click="modify = true">
                Modifier Profil
            </button>
        </div>
        <div v-if="modify">
            <form @submit.prevent="changeUserInfo">
                <h3>Email:</h3>
                <input type="text" v-model="user.email" placeholder="Email" required>
                <h3>First Name:</h3>
                <input type="text" v-model="user.firstname" placeholder="Email" required>
                <h3>Last Name:</h3>
                <input type="text" v-model="user.lastname" placeholder="Email" required>
                <button type="submit" @click="modify = false">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
    module.exports = {
        name:"Profil",
        props: {
            user: { type: Object }
        },
        data () {
            return {
            modify: false,
            email: '',
            password:'',
            }
        },
        methods: {
            changeUserInfo(){
                this.$emit('change-user-info',{
                    email: this.user.email,
                    password: this.user.password
                })
            },
        }
    }         
</script>