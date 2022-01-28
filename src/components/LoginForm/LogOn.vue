<template>
  <Form 
    class="logon" 
    ref="f" 
    v-slot="{ errors }"
  >
    <label for="account">账号</label>
    <Field
      type="text"
      id="account"
      name="account"
      placeholder="请输入8-20位以内的数字或字母"
      :rules="checkAccount"
      v-model.trim="user.account"
    />
    <div class="form_error">
      {{ errors.account }}
    </div>
    <label for="password">密码</label>
    <Field
      type="password"
      id="password"
      name="password"
      placeholder="请输入8-20位以内的数字或字母"
      :rules="checkPassword"
      v-model.trim="user.pwd"
    />
    <div class="form_error">
      {{ errors.pwd }}
    </div>
    <div
      class="logon_form_button"
      @click="logon"
    >
      注册
    </div>
  </Form>
</template>

<script setup>
import { ref,reactive } from 'vue';
import { useStore } from 'vuex';
import { Form, Field } from 'vee-validate';
import Message from '@/components/ShowMessage';
import api from '@/api';

const store=useStore();
const f=ref(null);

const user=reactive({
  account:null,
  pwd:null
});

const checkAccount=(value)=>{
  if(!value) return;
  if (!/^\w{8,20}$/.test(value)) return '需要8-20位以内的数字或字母';
  return true;
};
const checkPassword=(value)=>{
  if(!value) return;
  if (!/^\w{8,20}$/.test(value)) return '需要8-20位以内的数字或字母';
  return true;
};

const logon=async()=>{
  const valid = await f.value.validate();
  if(valid){
    const res=await api.register(user);
    if(res.code===2000){
      Message.success(res.message);
      store.commit('handleLoginFormClose');
    }else{
      Message.error(res.message);
    }
  }
};

</script>

<style lang="scss" scoped>
.logon {
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  label {
    font-size: 18px;
    margin-top: 15px;
  }
  input {
    height: 44px;
    padding-left: 10px;
    margin-top: 15px;
    line-height: 44px;
    border: 1px solid #dddddd;
    border-radius: 2px;
  }
  .form_error{
    height: 14px;
    font-size: 14px;
    color: red;
  }
  .logon_form_button{
    margin: 38px 0px;
    font-size: 18px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    background-color: rgb(0, 73, 184);
    cursor: pointer;
  }
}
</style>