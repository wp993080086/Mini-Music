<script setup lang="ts">
import { reactive } from 'vue'
import PInput from '@/components/input/index.vue'

const userAccount = reactive({
  phone: '',
  password: ''
})
// 按钮样式
const btnStyle = {
  backgroundColor: '#ffffff',
  color: '#409eff'
}
</script>

<template>
  <view class="login_box">
    <view class="account_box">
      <p-input
        type="text"
        placeholder="请输入手机号"
        v-model:value="userAccount.phone"
        :pStyle="'color: #ffffff;'"
      />
      <p-input
        type="password"
        placeholder="请输入密码"
        v-model:value="userAccount.password"
        :pStyle="'color: #ffffff;'"
      />
    </view>
    <view class="btn_box">
      <u-button plain :ripple="true" :custom-style="btnStyle" ripple-bg-color="#a0cfff">
        登录
      </u-button>
    </view>
  </view>
</template>

<style scoped lang="scss">
.login_box {
  @include center();
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 0rpx 64rpx;
  background-color: #409eff;
  background-image: url('../../static/images/login_bg.png');
  background-repeat: no-repeat;
  background-size: 100%;
  .account_box {
    width: 100%;
    height: auto;
    margin-bottom: 80rpx;
    & ::v-deep .ipt_box {
      border-bottom: 2rpx solid #ffffff;
    }
    & ::v-deep .u-input__input {
      height: 98rpx !important;
      line-height: 98rpx !important;
      color: #ffffff;
    }
    & ::v-deep .u-icon__icon {
      font-size: 48rpx !important;
      color: #ffffff !important;
    }
  }
  .btn_box {
    width: 100%;
    & ::v-deep .u-btn {
      width: 100% !important;
    }
  }
}
</style>
