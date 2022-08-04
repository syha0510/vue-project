<template>
  <form class="form-login" @submit.prevent="Register()">
    <el-input type="text" v-model="data.email" placeholder="Email" />
    <span class="error">{{ errors[0].errorEmail }}</span>
    <el-input type="text" v-model="data.name" placeholder="Họ và tên" />
    <span class="error">{{ errors[1].errorName }}</span>
    <el-input type="password" v-model="data.password" placeholder="Mật khẩu" />
    <span class="error">{{ errors[2].errorPassword }}</span>
    <el-input type="password" v-model="data.repeatpassword" placeholder="Nhập lại mật khẩu" />
    <span class="error">{{ errors[3].errorRepeatPassword }}</span>
    <el-button native-type="submit" style="color: #409EFF; border-color: #409EFF;">Đăng ký</el-button>
    <span style="margin-top:10px;font-size: 15px;">--Hoặc--</span>
    <router-link to="/login" class="el-button" id="login" >Đăng nhập</router-link>
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
        name:"",
        password: "",
        repeatpassword:""
      },
      errors: [
        {
          active: false,
          errorEmail: ""
        },
        {
          active: false,
          errorName: ""
        },
        {
          active: false,
          errorPassword: ""
        },
        {
          active: false,
          errorRepeatPassword: ""
        }
      ]
    };
  },
  methods: {
    Register() {
      if (this.data.email == "") {
        this.errors[0].errorEmail = "Email không được phép bỏ trống.";
        this.errors[0].active = true;
      } else if (!this.ValidateEmail(this.data.email)) {
        this.errors[0].errorEmail = "Email không đúng định dạng.";
        this.errors[0].active = true;
      }
      if (this.data.name == "") {
        this.errors[1].errorName = "Họ và tên không được phép bỏ trống.";
        this.errors[1].active = true;
      }
      if (this.data.password == "") {
        this.errors[2].errorPassword = "Mật khẩu không được phép bỏ trống.";
        this.errors[2].active = true;
      } else if (this.data.password != this.data.repeatpassword) {
        this.errors[3].errorRepeatPassword = " Mật khẩu xác nhận không khớp " ;
        this.errors[3].active = true;
      }
     
      if (this.errors[0].active == false && this.errors[1].active == false && this.errors[2].active == false && this.errors[3].active == false) {
         this.open2();
         this.data.email = '';
         this.data.name = '';
         this.data.password = '';
         this.data.repeatpassword = '';
      }
    },
    ValidateEmail(email) {
      if (this.reg.test(email)) {
        return true;
      }
      return false;
    },
    open2() {
      this.$message({
        showClose: true,
        message: " Đăng kí thành công ! Vui lòng đăng nhập lại .",
        type: "success"
      });
    }
  },
  watch: {
    "data.email"(value) {
      if (value.length >= 0) {
        this.errors[0].errorEmail = "";
        this.errors[0].active = false;
      }
    },
    "data.name"(value) {
      if (value.length >= 0) {
        this.errors[1].errorName = "";
        this.errors[1].active = false;
      }
    },
    "data.password"(value) {
      if (value.length >= 0) {
        this.errors[2].errorPassword = "";
        this.errors[2].active = false;
      }
    },
    "data.repeatpassword"(value) {
      if (value.length >= 0) {
        this.errors[3].errorRepeatPassword = "";
        this.errors[3].active = false;
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


  }
  #login{
    background-color: #409EFF;
    color: white;
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