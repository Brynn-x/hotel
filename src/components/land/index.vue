<template>
  <div>
    <el-dialog class="title" :visible.sync="dialogVisible" width="30%">

      <el-tabs v-model="currentIndex" @tab-click="handleClick">
        <el-tab-pane label="登陆" name="0"></el-tab-pane>
        <el-tab-pane label="用户注册" name="1"></el-tab-pane>
      </el-tabs>

      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" v-if="currentIndex === '0'">
        <el-form-item label="用户名" prop="name2">
          <el-input type="name" v-model="ruleForm2.name" auto-complete="on"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm2.pass" auto-complete="on">
            <el-button slot="append" icon="el-icon-question" @click="open"></el-button>
          </el-input>
        </el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">登陆</el-button>
      </el-form>

      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" v-else>
        <el-form-item label="用户名" prop="name2" >
          <el-input type="name" v-model="ruleForm2.name" auto-complete="on"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm2.pass" auto-complete="on"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="on"></el-input>
        </el-form-item>
        <el-form-item prop="email" label="邮箱">
          <el-input v-model="ruleForm2.email"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" prop="checkPhone">
          <el-input type="phone" v-model="ruleForm2.checkPhone" auto-complete="on"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
          <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
      </el-form>

    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      var validatePass1 = (rule, value, callback) => {
        console.log(value);
        if (!value || value === '') {
          callback(new Error('请输入用户名'));
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var validatePass3 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入手机号，手机号码与邮箱至少输入一项'));
        } else if ( /^1[0-9]{10}$/.test(value)) {
          callback();
        } else {
            callback(new Error('请输入正确的手机号!'));
        }
      };
      return {
        dialogVisible: true,
        ruleForm2: {
          name: '',
          pass: '',
          checkPass: '',
          email: '',
          checkPhone: ''
        },
        rules2: {
          name2:[
            { validator: validatePass1, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          checkPhone: [
            { validator: validatePass3, trigger: 'blur' }
          ],
          email: [
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
          ]
        },
        currentIndex: '0',
      };
    },
    methods: {
      handleClick(tab) {
        console.log(tab.index);
        this.currentIndex = tab.index + '';
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      open() {
        this.$message('忘记密码？请联系管理员');
      }
    },
  }
</script>

<style lang="stylus">
.title
  text-align center
  .el-tabs__header
    margin-bottom 40px
  .el-tabs__nav
    width 100%
    .el-tabs__item
      width 50%
  .el-form-item__label
    width 75px !important
    text-align left
  .el-form-item__content
    margin-left 75px !important
  .el-dialog__body
    padding 30px 60px
    .el-form-item__label:before
      content: ''
    .el-button--primary
     margin 20px 0 0 20px
</style>
