<!--
 * @Description: 性格测试结果
 * @Author: laoyuan
 * @Date: 2024-05-26 16:56:56
-->
<template>
  <div class="ui-result">
    <span class="title">测试结果</span>
    <div class="time">用时：{{ formatTime(timeCount) }}</div>
    <div class="result-box">
      <div class="type">你的性格属于：<span class="red">{{currentData.name}}</span></div>
      <p class="des"><span class="blod">人格特点</span>：<span class="ct-color-1">{{currentData.content}}</span></p>
      <p class="des"><span class="blod">适合职业</span>：<span>{{currentData.jobs}}</span></p>
      <p class="des"><span class="blod">优点</span>：<span>{{currentData.advantage}}</span></p>
      <p class="des"><span class="blod">缺点</span>：<span>{{currentData.disadvantage}}</span></p>
      <p class="des"><span class="blod">友情和爱情</span>：<span>{{currentData.friendship}}</span></p>
    </div>
    <router-link class="back" :to="{name: 'home'}">返回首页重测</router-link>
  </div>
</template>
<script setup>
  import { useRoute, RouterLink } from 'vue-router';
  import { ref } from 'vue';
  import result from '../data/result';

  const route = useRoute();
  // 或者传参的数据
  const { type, timeCount } = route.query;
  const currentData = ref();
  result.filter((item) => {
    if (item.value === type) {
      currentData.value = item;
    }
  });

  // 将时间格式化为 hh:mm:ss 的形式
  function formatTime(time) {
    let hour = Math.floor(time / 3600)
    let minute = Math.floor((time - hour * 3600) / 60)
    let second = Math.floor(time - hour * 3600 - minute * 60)
    if (minute == 0) {
      return `${second.toString().padStart(2, '0')}秒`
    }
    return `${minute.toString().padStart(2, '0')}分${second.toString().padStart(2, '0')}秒`
  }
</script>
<style scoped>
  .ui-result {
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
  }
  .title {
    font-size: 26px;
    font-weight: bold;
    background-image: linear-gradient(to right, var(--bg-gradient-stops));
    --bg-gradient-from: #07d086;
    --bg-gradient-to: rgb(0 255 161 / 0);
    --bg-gradient-stops: var(--bg-gradient-from), var(--bg-gradient-to);
    --bg-gradient-to: #06defb;
    margin-bottom: 10px;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  .result-box {
    margin-top: 30px;
  }
  .red {
    color: blueviolet;;
    font-weight: bold;
    font-size: 18px;
  }
  .des {
    margin-top: 15px;
    text-align: left;
    color: #333;
    line-height: 1.8;
  }
  .img {
    width: 300px;
    height: 300px;
    background: url('../assets/images/result.webp');
  }
  .blod {
    font-weight: bold;
  }
  .ct-color-1 {
    color: rgb(96, 4, 142);
  }
  .back {
    color: #06defb;
    text-align: center;
    margin-top: 20px;
  }
</style>