<template>
    <div id="app">
        <h1>Entraide</h1>
        <div id="pop-up">
            <button class="button" @click="showModal = true">
                Ajouter une annonce
            </button>
            <transition name="fade" appear>
                <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
            </transition>
            <transition name="slide" appear>
                <div class="modal" v-if="showModal">
                    <form @submit.prevent="addAnnonceEntraide">
                        <input type="text" v-model="title" placeholder="Title" required>
                        <input type="text" v-model="text" placeholder="Text" required>
                        <button class="button" type="submit" @click="showModal = false">
                            Add
                        </button>
                    </form>
                </div>
            </transition>
        </div>

        <article v-for= "item in entraidetext" :key="item.id">
            <h2>{{ item.title }}</h2>
            <p> {{ item.text }}</p>
        </article>
    </div>
</template>

<script>
    module.exports = {
        name:"Home",
        props: {
            entraidetext: { type: Array},
            status: { type: Object },
            user: { type: Object }
        },
        data () {
            return {
            title:'',
            text:'', 
            showModal: false
            }
        },
        async mounted () {
        },
        methods: {
            addAnnonceEntraide() {
                this.$emit('add-annonce-entraide', {
                    title: this.title,
                    text: this.text
                })
            },

            removeAnnonceEntraide(){
                this.$emit('remove-annonce-entraide', {
                    title: this.title,
                    text: this.text
                })
            },

            async getUserId(){
                const res = await axios.post('/api/me', user)
                this.user = res.data
            }
        }
    }         
</script>

<style>
</style>