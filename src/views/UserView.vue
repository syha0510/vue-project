<template>
    <div class="container">
        <el-container>
            
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
                
                <el-form-item label="Mật khẩu" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="Xác nhận " prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">Cập nhật</el-button>
                    <el-button @click="resetForm('ruleForm')">Xóa</el-button>
                </el-form-item>
            </el-form>
        </el-container>
    </div>
</template>

<script>
    export default {
      data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('Please input the age'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('Please input digits'));
          } else {
            if (value < 18) {
              callback(new Error('Age must be greater than 18'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Vui lòng nhập mật khẩu'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Vui lòng nhập lại mật khẩu'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('Mật khẩu không khớp'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.open2();
          } else {
            console.log('error submit!!');
            this.open4();
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      open2() {
        this.$message({
          message: 'Congrats, this is a success message.',
          type: 'success'
        });
      },
      open4() {
        this.$message.error('Oops, this is a error message.');
      }
    }
    }
</script>

<style lang="scss" scoped>
    .container{
        background-image: url(../assets/bgdep.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        height: 100vh;
        .el-form{
            width: 500px;
            height: 400px;
            background-color: aliceblue;
            margin: 3% auto;
            border-radius: 10px;
             line-height: 400px;
        }
        .el-form-item{
            margin-right: 10%;
            margin-top: 10%;
           
        }
    }
</style>