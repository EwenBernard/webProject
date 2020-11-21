<template>
    <div id="app">
        <h1>Annonces</h1>
        <article v-for= "item in annonce">
            <h2>{{ item.nameActivite }} - {{ item.nameUser }}</h2>
            <p> {{ item.message }}</p>
        </article>
        <div id="pop-up">
            <button class="button" @click="showModal = true">
                X
            </button>
            <transition name="fade" appear>
                <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
            </transition>
            <transition name="slide" appear>
                <div class="modal" v-if="showModal">
                    <b>Annonce</b>
                    <input placeholder="Description"></input>
                    <button class="button" @click="showModal = false">
                        X
                    </button>
                </div>
            </transition>
        </div>
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