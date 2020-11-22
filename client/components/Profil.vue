<template>
    <div id="app">
        <h1>Profil</h1>
        <div v-if='modify = false'>
            <h3>First name: {{}}</h3>
            <h3>Last name: {{}}</h3>
            <h3>Email: {{user.email}}</h3>
        </div>
        <div v-if="modify">
            <form @submit.prevent="changeUserInfo">
                <input type="text" v-model="user.email" placeholder="Email" required>
                <button type="submit">Submit</button>
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
            title:'',
            text:'', 
            modify = false
            }
        },
        methods: {
            addAnnonce() {
                this.$emit('add-annonce', {
                    title: this.title,
                    text: this.text
                })
            },

            removeAnnonce(){
                this.$emit('remove-annonce', {
                    title: this.title,
                    text: this.text
                })
            },

            changeUserInfo(){
                this.$emit('change-user-info', user)
            },

            /*async getUserId(){
                const res = await axios.post('/api/me', user)
                this.user = res.data
            }*/
        }
    }         
</script>