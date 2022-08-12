<template>
    <div class="container">
        <el-container>
            <form>
                <div class="avatar">
                    <img  v-if="url" :src="url" >
                    <input style="margin-top:50px ;" type="file" @change="changeImg"/>
                    <el-button type="danger" style="margin-top: 15px;" @click="Save()">Lưu</el-button>
                </div>              
            </form>
            <form>
                <div class="profile">
                    <template >
                      
                      <el-tabs type="border-card">
                      <el-tab-pane label="Đổi mật khẩu">
                        <form class="form-login" @submit.prevent="Confirm()">
                            <h2 style="margin-top:-100px;text-align:center;margin-bottom:10px ;">Cập nhật mật khẩu</h2>
                            <el-input type="password" v-model="data.password" placeholder="Mật khẩu mới" />
                            <span class="error">{{ errors[0].errorPassword }}</span>
                            <el-input type="password" v-model="data.repeatpassword" placeholder="Nhập lại mật khẩu" />
                            <span class="error">{{ errors[1].errorRepeatPassword }}</span>
                            <el-button native-type="submit" type="primary">Cập nhật</el-button>
                          </form>
                      </el-tab-pane>
                      <el-tab-pane label="Thông tin">Email</el-tab-pane>
                    </el-tabs>
                  </template>  
                </div>
            </form>
        </el-container>
    </div>
</template>

<script>
   export default {
    data() {
      return {
        url:'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        fullscreenLoading: false,
        data: {
          
          password: "",
          repeatpassword:""
        },
        errors: [
          
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
      Confirm() {
      if (this.data.password == "") {
        this.errors[0].errorPassword = "Mật khẩu không được phép bỏ trống.";
        this.errors[0].active = true;
      } else if (this.data.password != this.data.repeatpassword) {
        this.errors[1].errorRepeatPassword = " Mật khẩu xác nhận không khớp " ;
        this.errors[1].active = true;
      }
     
      if (this.errors[0].active == false && this.errors[1].active == false ) {
         this.open2();
         this.data.password = '';
         this.data.repeatpassword = '';
      }
    },
   
    Save(){
      this.open2();
    },
    open2() {
      this.$message({
        showClose: true,
        message: "Cập nhật thành công",
        type: "success"
      });
    },

    changeImg(e)
     {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
     }
    },
    watch: {
    
    "data.password"(value) {
      if (value.length >= 0) {
        this.errors[0].errorPassword = "";
        this.errors[0].active = false;
      }
    },
    "data.repeatpassword"(value) {
      if (value.length >= 0) {
        this.errors[1].errorRepeatPassword = "";
        this.errors[1].active = false;
      }
    }
  }
  };
</script>

<style lang="scss" scoped>
    .container{
        background-image: url(../assets/bgdep.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: space-between;

        .avatar{
            width: 300px;
            height: 500px;
            border: 1px solid gray;
            border-radius: 5px;
            background-color: white;
            margin-left: 200px;
            margin-top: 80px;

            img{
                width: 200px;
                height:200px;
                margin-top: 20px;
                border-radius: 50%;                
                }
        }
        .profile{
            width: 700px;
            height: 500px;
            border: 1px solid gray;
            border-radius: 5px;
            background-color: white;
            margin-top: 80px;
             margin-left: 30px;

             .el-tab{
                height: 100%;
             }

            .form-login {
          width: 90%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 427px;
         
          .el-input {
            padding: 2%;
            margin: 3px 5%;
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
            padding-left: 8%;
          }
          
        }
             
        }
        
    }
</style>