<template>
  <div id="full">
    <div id="loginContainer">
      <el-form >
        <el-form-item>
          <el-input placeholder="请输入用户名" v-model="name">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="请输入密码" v-model="password">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Login",
        data:function () {
          return{
            name:'',
            password:''
          }
        }
    }
</script>

<style scoped>
  #loginContainer{
    position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    background-color:aliceblue;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    padding: 50px 50px 30px;
    width: 250px;
  }

  #loginContainer .form-item{
    margin-bottom:10px;
    margin-top:10px;
  }
  #loginContainer .form-item-label{
    position:absolute;
  }
  #full{
    height:100%;
    background-color:#f1f1f1;
  }
</style>
