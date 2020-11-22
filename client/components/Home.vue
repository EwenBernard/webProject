<template>
<<<<<<< HEAD
    <div id="app">
        <h1>Annonces</h1>
        <div id="pop-up">
            <button class="button" @click="showModal = true">
                Ajouter une annonce
            </button>
            <transition name="fade" appear>
                <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
            </transition>
            <transition name="slide" appear>
                <div class="modal" v-if="showModal">
                    <form @submit.prevent="addAnnonce">
                        <input type="text" v-model="title" placeholder="Title" required>
                        <input type="text" v-model="text" placeholder="Text" required>
                        <button class="button" type="submit" @click="showModal = false">
                            Add
                        </button>
                    </form>
                </div>
            </transition>
        </div>

        <article v-for= "item in hometext" :key="item.id">
            <h2>{{ item.title }}</h2>
            <p> {{ item.text }}</p>
=======
    <form>
        <div id="app">
            <h1 id="header"><b>title</b></h1>
            <div id="pop-up">
                <button class="button" @click="showModal = true">
                    Ajouter une annonce
                </button>


                <transition name="fade" appear>
                    <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
                </transition>
                <transition name="slide" appear>


                    <div class="modal" v-if="showModal">
                        <form @submit.prevent="addAnnonce">

                            <label for="uname"><b>Titre de l'annonce</b></label>
                            <input type="text" v-model="title" placeholder="Enter Title" required>

                            <label for="psw"><b>Enter Text</b></label>
                            <input type="text" v-model="text" placeholder="Enter Text" required>

                            <button class="button" type="submit">
                                Add
                            </button>
                        </form>
                    </div>
                </transition>
            </div>

        <article v-for= "item in hometext" :key="item.id">
            <div id="contenu">
                <h2>{{ item.title }} - {{ item.userId }}</h2>
                <p> {{ item.text }}</p>
            </div>
>>>>>>> 3ff63c204b815b7c2e386f1c00a2f3237a42064a
        </article>
    </div>
</template>
 
<script>
    module.exports = {
        name:"Home",
        props: {
            hometext: { type: Array},
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

            async getUserId(){
                const res = await axios.post('/api/me', user)
                this.user = res.data
            }
        }
    }         
</script>

<style>
    form {
        border: 3px solid #f1f1f1;
        margin: 10px 0 ;
    }

    input[type=text] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }

    button {
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
    }

    button:hover {
        opacity: 0.8;
    }

    div#contenu {
	    padding: 0 70px 0 100px ;
	    background: url(title_bd.png) no-repeat;
	    background-position-y:center ;
	}

    div#contenu h2 {
        padding-left: 25px ;
        line-height: 25px ;
        font-size: 1.4em ;
        background: url(profil.png) no-repeat left bottom ;
        background-size: 20px 20px;
        color: #9b2 ;
        border-bottom: 1px solid #9b2 ;
    }

    div#contenu p {
        text-align: justify ;
        text-indent: 2em ;
        line-height: 1.7em ;
    }

    div#app {
	width: 60% ;
	margin: 0 auto ;
	text-align: left ;
	border: 2px solid #ab4 ;
	background: #fff ;

	box-shadow: 0 0 1em rgb(209, 207, 207);
    -moz-border-radius: 15px;
    -webkit-border-radius: 15px;
    border-radius: 15px;
    }

    h1#header b {
	width: 30% ;
	height: 45% ;
	display: block ;
	background: url(title.png) no-repeat ;
	background-size: 80% 80%;
	position: relative ;
	left: 350px ;
	top: 15px ;
	text-indent: -5000px ;
    }
</style>