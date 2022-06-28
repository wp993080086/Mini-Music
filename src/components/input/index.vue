<script lang="ts" setup>
import { watch, ref, onMounted } from 'vue'

interface Props {
  value: string
}

const props = withDefaults(defineProps<Props>(), {
  value: ''
})
// 输入框值
const iptValue = ref('')
// 是否显示清除按钮
const closeVisible = ref(false)

onMounted(() => {
  iptValue.value = props.value
})

const emit = defineEmits(['focusFunc', 'blurFunc', 'update:value'])

// 清空value
const closeValue = () => {
  iptValue.value = ''
  emit('update:value', '')
}
// 获得焦点
const focusFunc = () => {
  if (iptValue.value.length > 0) {
    closeVisible.value = true
  }
  emit('focusFunc')
}
// 失去焦点
const blurFunc = () => {
  emit('blurFunc')
  setTimeout(() => {
    closeVisible.value = false
  }, 500)
}
// 监听value
watch(iptValue, (newVal: string) => {
  closeVisible.value = newVal.length > 0
  emit('update:value', iptValue.value)
})
</script>

<template>
  <view class="ipt_box">
    <view class="ipt">
      <u-input
        :password-icon="closeVisible"
        v-bind="$attrs"
        v-model="iptValue"
        @focus="focusFunc"
        @blur="blurFunc"
      />
    </view>
    <view class="ipt_r">
      <u-icon
        name="close-circle"
        color="#ffffff"
        size="48"
        v-if="closeVisible"
        @click="closeValue"
      />
    </view>
  </view>
</template>

<style lang="scss" scoped>
.ipt_box {
  display: flex;
  @include set_w_h(all, auto);
  .ipt {
    width: calc(100% - 80rpx);
  }
  .ipt_r {
    @include flex_c;
    width: 80rpx;
  }
}
</style>
