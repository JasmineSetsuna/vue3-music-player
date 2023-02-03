<template>
  <div class="login">
    <ElAvatar size="small"></ElAvatar>
    <span class="text-xs" v-if="isLogin">{{ profile.nickname }}</span>
    <span class="text-xs" @click="showLogin = true" v-else>点击登录</span>
  </div>
  <el-dialog
    title="登录"
    width="330px"
    v-model="showLogin"
    show-close="false"
    append
    to
    bdoy
  >
    <div>
      <el-input
        size="large"
        placeholder="手机号码"
        :prefix-icon="Phone"
        v-model="phone"
      ></el-input>
      <el-input
        size="large"
        placeholder="登录密码"
        :prefix-icon="Lock"
        v-model="password"
      ></el-input>
      <button class="button" @click="loginSubmit">登录</button>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Lock, Phone } from "@icon-park/vue-next";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";

const phone = ref("");
const password = ref("");
const { login, checkLogin } = useUserStore();
const { isLogin, showLogin, profile } = storeToRefs(useUserStore());

const loginSubmit = () => {
  login(phone.value, password.value);
};

onMounted(() => {
  checkLogin();
});
</script>

<style scoped lang="scss">
.login {
  width: 102px;
  height: 2rem;
  .text-xs {
    cursor: pointer;
    font-size: 0.75rem;
    line-height: 2rem;
    margin-left: 0.375rem;
    vertical-align: bottom;
  }
}

 .login:hover {
    --tw-text-opacity: 1;
    color: rgb(52 211 153 / var(--tw-text-opacity));
  }
.el-input {
  height: 40px;
  line-height: 10px;
  margin-bottom: 25px;
}
</style>
