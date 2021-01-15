<template>
    <form @submit.prevent="login">
      <div class="imgcontainer">
            <img src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.15752-9/138684821_1018511501892458_6537703867276357587_n.png?_nc_cat=106&ccb=2&_nc_sid=ae9488&_nc_ohc=pfeZFAGG4kEAX9g67Mo&_nc_ht=scontent-cdt1-1.xx&oh=aa0eb822785740579e2781c2602bcca0&oe=60270008" alt="Avatar" class="avatar">
      </div>
      
      <div class="container">
        <label for="uname"><b>Email</b></label>
        <input type="text" v-model="user.email" placeholder="Enter Email" name="uname" required>

        <label for="psw"><b>Password</b></label>
        <input type="password" v-model="user.password" placeholder="Enter Password" name="psw" required>

        <button type="submit">Submit</button>
        
      </div>

      <div class="container" style="background-color:#F9F4F3">
        <router-link to='/register' class="psw">No account? Register</router-link>
      </div>

      <footer style="margin: 10px;">
        <div id="footer">
            <a href="https://www.facebook.com" class="social"><img src="https://www.facebook.com/images/fb_icon_325x325.png" /></a>
            <a href="https://www.instagram.com" class="social"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/langfr-220px-Instagram_logo_2016.svg.png" /></a>
            <a href="https://twitter.com" class="social"><img src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" /></a>
            <a href="https://www.snapchat.com" class="social"><img src="https://f.hellowork.com/blogdumoderateur/2016/04/snapchat-logo-600x315.jpg" /></a>
            <a href="https://fr.linkedin.com" class="social"><img src="https://www.avisto.com/wp-content/uploads/2018/10/comment-utiliser-linkedin.jpg" /></a>
            <a href="https://www.youtube.com" class="social"><img src="data:image/png;base64,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" /></a>
        </div>
      </footer>

    </form>

</template>

<script>
module.exports = {
  name:"Login",
  props: {
  },
  data () {
    return {
        user:{
            email: '',
            password: ''
        },
    }
  },
  async mounted () {
  },
  methods: {
    login(){
      this.$emit('login',this.user)
    },
  }
}
</script>

<style>
       form {
            border: 3px solid #f1f1f1;
        }

        input[type=text],
        input[type=password] {
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0;
            display: inline-block;
            border: 1px solid #ccc;
            box-sizing: border-box;
        }

        button {
            background-color: violet;
            font-size: large;
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

        .imgcontainer {
            text-align: center;
            margin: 24px 0 12px 0;
        }

        img.avatar {
            width: 20%;
        }

        .container {
            padding: 16px;
        }

        .psw {
            float: right;
        }

        
        /*//////*/
        /*FOOTER*/
        /*//////*/

        footer {
            position: fixed;
            bottom: 0px;
        }

        .social {
            width: 100%;
            width: 40px;
            height: 40px;
        }

        .social img {
            width: 35px;
            height: 25px;
            padding-left: 10px;
        }
</style>