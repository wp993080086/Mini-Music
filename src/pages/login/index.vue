<script setup lang="ts">
import { reactive, ref } from 'vue'
import userApi from '@/servers/api/user'
import { Toast } from '@/utils/toast'
import { userInfoStoreModule } from '@/store/index'
import { sleep, setStorage, switchTab } from '@/utils'
import PInput from '@/components/input/index.vue'

/*
 登录方式切换
*/
const isPhoneLogin = ref(true)
const handleChangeloginType = () => {
  isPhoneLogin.value = !isPhoneLogin.value
}

/*
 获取验证码
 登录
*/
const userInfoStore = userInfoStoreModule()
const userAccount = reactive({
  phone: '',
  password: '',
  captcha: ''
})
const countDown = ref(60)
const verificationLoading = ref(false)
const isGetVerification = ref(false)
const loginLoading = ref(false)
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
  try {
    const param = JSON.parse(JSON.stringify(userAccount))
    isPhoneLogin.value ? delete param.password : delete param.captcha
    if (!param.phone) return
    if (isPhoneLogin.value) {
      if (!param.captcha) return
    } else {
      if (!param.password) return
    }
    loginLoading.value = true
    const res = await userApi.phoneLogin(param)
    loginLoading.value = false
    if (res.code === 200) {
      const cookie = res.cookie
      const token = res.token
      const userInfo = res.profile
      userInfoStore.setUserCookie(cookie)
      userInfoStore.setUserToken(token)
      userInfoStore.setUserInfo(userInfo)
      await setStorage('cookie', cookie)
      await setStorage('token', token)
      await setStorage('userInfo', userInfo)
      Toast('登录成功', { icon: 'success' })
      await sleep(1000)
      switchTab('../home/index')
    }
  } catch (error) {
    loginLoading.value = false
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
        :placeholder-style="'color: #ffffff;'"
        :trim="true"
        :border="false"
        clearable
        :maxlength="20"
      />
      <template v-if="!isPhoneLogin">
        <p-input
          type="password"
          placeholder="请输入密码"
          v-model:value="userAccount.password"
          :placeholder-style="'color: #ffffff;'"
          :trim="true"
          :border="false"
          clearable
          :maxlength="20"
        />
      </template>
      <template v-else>
        <view class="verification_code_box">
          <view class="verification_code_ipt">
            <p-input
              type="text"
              placeholder="请输入验证码"
              v-model:value="userAccount.captcha"
              :placeholder-style="'color: #ffffff;'"
              :trim="true"
              :border="false"
              clearable
              :maxlength="20"
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
      <u-button plain ripple ripple-bg-color="#a0cfff" @click="userLogin" :loading="loginLoading">
        登录
      </u-button>
    </view>
  </view>
</template>

<style scoped lang="scss">
.login_box {
  display: flex;
  align-items: center;
  flex-direction: column;
  @include set_w_h(all, all);
  padding: 0rpx 64rpx;
  background-color: #409eff;
  .music_img_box {
    @include set_w_h(360, 332);
    margin-top: 12vh;
    margin-bottom: 60rpx;
  }
  .account_box {
    @include set_w_h(all, auto);
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
      @include flex_c;
      @include set_w_h(all, 100);
      .verification_code_ipt {
        width: calc(100% - 220rpx);
      }
      .verification_code_btn_box {
        @include flex_c;
        justify-content: flex-end;
        @include set_w_h(220, all);
        border-bottom: 2rpx solid #ffffff;
        & ::v-deep .u-btn {
          color: #409eff;
          @include set_w_h(200, 70);
          background-color: #ffffff;
          padding: 0;
          font-size: 26rpx;
        }
        .verification_code_dwon {
          @include flex_c;
          @include set_w_h(200, 70);
          background-color: #ffffff;
          color: #409eff;
          font-size: 28rpx;
          border-radius: 10rpx;
        }
      }
    }
  }
  .chenge_text_box {
    @include set_w_h(all, 120);
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
