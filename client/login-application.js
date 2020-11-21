const Login = window.httpVueLoader('./components/Login.vue')
const Register = window.httpVueLoader('./components/Register.vue')

const routes = [
    {path : '/', component: Login},
    {path : '/register', component: Register}
]

const router = new VueRouter({
    routes
})

var app = new Vue({
    router,
    el: '#app',
    data:{
        user: {},
        isConnected: false
    },

    /*async mounted () {
        try {
            const res = await axios.get('/api/me')
            this.user = res.data
            //this.isConnected = true
          } catch (err) {
            if (err.response?.status === 401) {
                console.log('bad')
              //this.isConnected = false
            } else {
                console.log('shit')
              console.log('error', err)
            }
        }
    },*/

    methods: 
    {
        async login(user)
        {
            const res = await axios.post('/api/login', user)
            this.user = res.data
            this.isConnected = true
        },

        async register(user)
        {
            const res = await axios.post('/api/register', user)
            this.user = res.data
            this.isConnected = true
        }
    }
})