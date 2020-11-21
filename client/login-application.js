const Login = window.httpVueLoader('./components/Login.vue')
const Register = window.httpVueLoader('./components/Register.vue')

const Home = window.httpVueLoader('.components/Home.vue')
const Entraide = window.httpVueLoader('.components/Entraide.vue')
const Plan = window.httpVueLoader('.components/Plan.vue')
const Profil = window.httpVueLoader('.components/Profil.vue')



const routes = [
    {path : '/', component: Login},
    {path : '/register', component: Register},
    {path : '/home', component: Home},
    {path : '/entraide', component: Entraide},
    {path : '/plan', component: Plan},
    {path : '/profil', component: Profil}
]

const router = new VueRouter({
    routes
})

var app = new Vue({
    router,
    el: '#app',
    data:{
        user: {},
        homeText:[],
        entraideText:[],
        planText:[],
        isConnected: false,
    },

    async mounted (){
        const res = await axios.get('/api/home')
        this.homeText = res.data

        try {
            const res = await axios.get('/api/me')
            this.user = res.data
            this.isConnected = true
          } catch (err) {
            if (err.response?.status === 401) {
                console.log('bad')
                this.isConnected = false
            } else {
                console.log('shit')
              console.log('error', err)
            }
        }
    },

    methods: 
    {
        async login(user)
        {
            const res = await axios.post('/api/login', user)
            this.user = res.data
            this.isConnected = true
            this.$router.push('/home')
        },

        async register(user)
        {
            const res = await axios.post('/api/register', user)
            this.user = res.data
            this.isConnected = true
            this.$router.push('/home')
        },

        async addAnnonce(annonce) {
            const res = await axios.post('api/home', {annonce, userId: this.user.id})
        }

    }
})