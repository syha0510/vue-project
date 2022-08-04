<template>
  
  <form class="form-login" @submit.prevent="Login()">
    <el-input type="text" v-model="data.email" placeholder="Email" />
    <span class="error">{{ errors[0].errorEmail }}</span>
    <el-input type="password" v-model="data.password" placeholder="Mật khẩu" />
    <span class="error">{{ errors[1].errorPassword }}</span>
    <el-button type="primary" native-type="submit">Đăng nhập</el-button>
    <span style="margin-top:10px;font-size: 15px;">--Hoặc--</span>
    <router-link to="/register" class="el-button" style="color: #409EFF; border-color: #409EFF;">Đăng ký</router-link>
    
  </form>
 
</template>

<script>

export default {
  components: {
  
  },
  data() {
    return {
      reg: /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
        fullscreenLoading: false,
      data: {
        email: "",
        password: ""
      },
      errors: [
        {
          active: false,
          errorEmail: ""
        },
        {
          active: false,
          errorPassword: ""
        }
      ]
    };
  },
  methods: {
    Login() {
      if (this.data.email == "") {
        this.errors[0].errorEmail = "Email không được phép bỏ trống.";
        this.errors[0].active = true;
      } else if (!this.ValidateEmail(this.data.email)) {
        this.errors[0].errorEmail = "Email không đúng định dạng.";
        this.errors[0].active = true;
      }
      if (this.data.password == "") {
        this.errors[1].errorPassword = "Mật khẩu không được phép bỏ trống.";
        this.errors[1].active = true;
      }
      if (this.errors[0].active == false && this.errors[1].active == false) {
        this.$router.push({ name: "home" });
      }
    },
    ValidateEmail(email) {
      if (this.reg.test(email)) {
        return true;
      }
      return false;
    },
  },
  watch: {
    "data.email"(value) {
      if (value.length >= 0) {
        this.errors[0].errorEmail = "";
        this.errors[0].active = false;
      }
    },
    "data.password"(value) {
      if (value.length >= 0) {
        this.errors[1].errorPassword = "";
        this.errors[1].active = false;
      }
    }
  }
  
};
</script>

<style lang="scss" scoped>
.form-login {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .el-input {
    padding: 2%;
    margin: 3px 0;
    outline: none;
  }
  .el-button{
    margin-top: 3%;
    width: 60%;
    margin-left: 20%;
    border-radius: 25px;
    text-decoration: none;


  }
  
  .error {
    font-size: 12px;
    color: red;
    text-align: left;
    padding-left: 15px;
  }
  
}
</style>