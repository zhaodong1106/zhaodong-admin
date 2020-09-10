<template>
  <div id="full">
    <div id="loginContainer">
      <h2>破产管理系统</h2>
      <el-form ref="userForm" :model="userForm" :rules="userFormRule">
        <el-form-item prop="name">
          <el-input placeholder="请输入用户名" v-model="userForm.name">
            <i slot="prefix" class="el-input__icon el-icon-user"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="请输入密码" v-model="userForm.password">
            <i slot="prefix" class="el-input__icon el-icon-lock"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="请输入验证码" type="text" >
            <i slot="prefix" class="el-input__icon el-icon-lock"></i>
          </el-input>
        </el-form-item>
        <el-form-item >
          <div style="display: flex;justify-content: space-between">
            <img @click="changeKaptcha" :src="userForm.kaptcha" style="cursor: pointer"/>
            <a @click="changeKaptcha" style="text-decoration: none;cursor: pointer">看不清楚，换一张</a>
          </div>
        </el-form-item>
        <el-form-item>
          <div>{{userForm.phone|numberFormatter(2)}}</div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :loading="1==2" @click="submitForm()" style="width: 30%">登陆</el-button>
          <el-button  v-permission="['EDIT']" type="primary" :loading="1==2" @click="regist()" style="width: 30%">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
    import permission from '@/directive/permission';
    export default {
        name: "Login",
        directives:{permission},
        data:function () {
          return{
            userForm:{
              name:'',
              password:'',
              kaptcha:'',
              phone:15214
            },
            userFormRule:{
              name:[
                {
                  required:true,message:'请输入姓名',trigger:'blur',
                },
                {
                  min:1,max:8,message:'长度最大8个字符',trigger:'blur'
                }
              ]
            }
          }
        },
        mounted(){
          this.getKaptcha();
        },
        methods:{
          submitForm(){
            this.$refs['userForm'].validate((valid)=>{
              if(valid){
                this.$store.commit("setUser",{name:"zhaodong",phone:'15214358494',roles:['ADMIN']})
                alert('submit')
              }else{
                return false;
              }
            })
          },
          regist(){
            this.$store.commit('removeUser');
          },
          getKaptcha(){
            this.$axios.get("http://localhost:8080/api/kaptcha/defaultKaptcha?uuid=2131231")
              .then(res=>{
                console.log(res)
                  this.userForm.kaptcha="data:image/jpeg;base64,"+res.data;
              })
          },
          changeKaptcha(){
            this.getKaptcha();
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
    width: 300px;
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
