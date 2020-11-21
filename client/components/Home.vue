<template>
    <div id="app">
        <h1>Annonces</h1>
        
    </div>
</template>

<script>
    module.exports = {
        name:"Home",
        props: {
            annonces: { type: Object },
            status: { type: Object },
            user: { type: Object }
        },
        data () {
            return {
            annonce:{
                title:"",
                text:"",
            }, 
            showModal: true,
            status: O
            }
        },
        async mounted () {
        },
        methods: {
            addAnnonce() {
                this.$emit('addAnnonce', this.annonce)
            },

            removeAnnonce(){
                this.$emit('removeAnnonce', this.annonce)
            },

            getUserId(){
                const res = await axios.post('/api/me', user)
                this.user = res.data
            }
        }
    }         
</script>