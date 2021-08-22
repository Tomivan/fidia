<template>
 <div class="login">
   <h3>Stripe</h3>
   <form class="form">
     <h3>Sign in to your account</h3>
     <label>Email</label>
     <input type="text" placeholder="jane.doe@gmail.com" />
     <div class="password">
       <label>Password</label>
       <router-link to="#">Forgot your password?</router-link>
     </div>
     <input type="password" />
     <div class="stay-tuned">
       <input type="checkbox" class="checkbox"><p>Stay signed in for a week</p>
     </div> 
     <button class="continue">Continue</button>
     <p class="sso">Use single sign-on(SSO) instead</p>
   </form>
   <p>Don't have an account? <span>Sign up</span></p>
   <footer>
     <ul>
       <li>&#169; Stripe</li>
       <li>Contact</li>
       <li>Privacy & Terms</li>
     </ul>
   </footer>
 </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    msg: String
  }
}
</script>


<style scoped>
.login{
  background: F7FAFC;
  margin: 3% 0 0 30%;
}
.form{
  background:#fff;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  width: 30vw;
  padding: 2em;
}

input{
  width: 90%;
  height: 4vh;
  margin-top: 2%;
  border: 1px solid #d9dce1;
  border-radius: 5px;
}
input::placeholder{
  padding-left: 1em;
}
.password{
  margin-top: 5%;
}
router-link{
  margin-left: 40%;
  color: #635cff;
}
.stay-tuned{
  margin-top: 5%;
  display: flex;
}
.checkbox{
  height: 2vh;
  width: 3%;
  margin-top: 4.5%;
}
.continue{
  background: #635cff;
  color: #fff;
  border: none;
  border-radius: 5px;
  width: 92%;
  height: 6vh;
}
.sso{
  text-align: center;
  color: #635cff;
  margin-top: 5%;
}
span{
  color:#635cff;
}
ul{
  display: flex;
  margin-left: -5%;
}
li{
  margin-left: 3%;
}
</style>
