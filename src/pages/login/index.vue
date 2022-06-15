<script setup lang="ts">
import { reactive, ref } from 'vue'
import PInput from '@/components/input/index.vue'
import userApi from '@/servers/api/user'
import { Toast, Loading } from '@/utils/toast'
import { IPhoneLogin } from '@/servers/api/user/user'

const userAccount = reactive({
  phone: '',
  password: '',
  captcha: ''
})
const isPhoneLogin = ref(true)
// 切换登录方式
const handleChangeloginType = () => {
  isPhoneLogin.value = !isPhoneLogin.value
}

const countDown = ref(60)
const verificationLoading = ref(false)
const isGetVerification = ref(false)
// 获取验证码
const getVerificationCode = async () => {
  if (!userAccount.phone) {
    Toast('手机号不能为空', { icon: 'error' })
    return
  }
  verificationLoading.value = true
  countDown.value = 60
  try {
    const res = await userApi.sendCaptcha({
      phone: userAccount.phone
    })
    console.log(res)
    if (res.code === 200) {
      isGetVerification.value = true
      const timer = setInterval(() => {
        countDown.value--
        if (countDown.value <= 0) {
          countDown.value = 0
          verificationLoading.value = false
          isGetVerification.value = false
          clearInterval(timer)
        }
      }, 1000)
    }
  } catch (error) {
    console.log(error)
    verificationLoading.value = false
  }
}
// 登录
const userLogin = async () => {
  Loading.show()
  try {
    const param = JSON.parse(JSON.stringify(userAccount))
    isPhoneLogin.value ? delete param.password : delete param.captcha
    const res = await userApi.phoneLogin(param)
    Loading.hide()
    console.log(res)
    if (res.code === 200) {
      Toast('登录成功', { icon: 'success' })
    }
  } catch (error) {
    Loading.hide()
  }
}
</script>

<template>
  <view class="login_box">
    <view class="music_img_box">
      <!-- <image src="../../static/images/music.gif" /> -->
      <image src="https://video-public.canva.cn/VAEwgVS_MEw/v/59f9ee8c1a.gif" />
    </view>
    <view class="account_box">
      <p-input
        type="text"
        placeholder="请输入手机号"
        v-model:value="userAccount.phone"
        :pStyle="'color: #ffffff;'"
      />
      <template v-if="!isPhoneLogin">
        <p-input
          type="password"
          placeholder="请输入密码"
          v-model:value="userAccount.password"
          :pStyle="'color: #ffffff;'"
        />
      </template>
      <template v-else>
        <view class="verification_code_box">
          <view class="verification_code_ipt">
            <p-input
              type="text"
              placeholder="请输入验证码"
              v-model:value="userAccount.captcha"
              :pStyle="'color: #ffffff;'"
            />
          </view>
          <view class="verification_code_btn_box">
            <template v-if="!isGetVerification">
              <u-button
                plain
                :ripple="true"
                ripple-bg-color="#a0cfff"
                :loading="verificationLoading"
                @click="getVerificationCode"
              >
                获取验证码
              </u-button>
            </template>
            <view class="verification_code_dwon" v-else>
              {{ countDown <= 9 ? '0' : '' }}{{ countDown }}s
            </view>
          </view>
        </view>
      </template>
    </view>
    <view class="chenge_text_box">
      <text class="chenge_text" @click="handleChangeloginType">
        {{ isPhoneLogin ? '密码登录' : '验证码登录' }}
      </text>
    </view>
    <view class="btn_box">
      <u-button plain :ripple="true" ripple-bg-color="#a0cfff" @click="userLogin"> 登录 </u-button>
    </view>
  </view>
</template>

<style scoped lang="scss">
.login_box {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 0rpx 64rpx;
  background-color: #409eff;
  .music_img_box {
    width: 360rpx;
    height: 332rpx;
    margin-top: 12vh;
    margin-bottom: 60rpx;
  }
  .account_box {
    width: 100%;
    height: auto;
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
    .verification_code_box {
      @include center();
      width: 100%;
      height: 100rpx;
      .verification_code_ipt {
        width: calc(100% - 220rpx);
      }
      .verification_code_btn_box {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 220rpx;
        height: 100%;
        border-bottom: 2rpx solid #ffffff;
        & ::v-deep .u-btn {
          color: #409eff;
          width: 200rpx;
          background-color: #ffffff;
          padding: 0;
          height: 70rpx;
          font-size: 26rpx;
        }
        .verification_code_dwon {
          @include center();
          background-color: #ffffff;
          color: #409eff;
          font-size: 28rpx;
          width: 200rpx;
          height: 70rpx;
          border-radius: 10rpx;
        }
      }
    }
  }
  .chenge_text_box {
    width: 100%;
    height: 120rpx;
    text-align: right;
    .chenge_text {
      color: #ffffff;
      line-height: 120rpx;
    }
  }
  .btn_box {
    width: 100%;
    & ::v-deep .u-btn {
      width: 100% !important;
      height: 100rpx;
      background-color: #ffffff;
      color: #409eff;
      font-size: 32rpx;
    }
  }
}
</style>
