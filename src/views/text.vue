<!--
 * @Description: 16种性格介绍
 * @Author: laoyuan
 * @Date: 2024-05-26 16:47:47
-->
<template>
  <div class="ui-box">
    <div class="title">
      <router-link class="back" :to="{name: 'home'}">返回首页</router-link>
      MBTI的16种个性类型介绍
    </div>
    <ul class="list">
      <li class="item" v-for="(obj, index) in result" :key="obj.value">
        <div class="name-box">
          <span class="name">{{index + 1}} . {{obj.name}} - </span>
          <span class="type">{{obj.value}}</span>
        </div>
        <p class="des"><span class="blod">人格特点</span>：<span class="ct-color-1">{{obj.content}}</span></p>
        <p class="des"><span class="blod">适合职业</span>：<span class="ct-color-2">{{obj.jobs}}</span></p>
        <p class="des"><span class="blod">优点</span>：<span class="ct-color-2">{{obj.advantage}}</span></p>
        <p class="des"><span class="blod">缺点</span>：<span class="ct-color-2">{{obj.disadvantage}}</span></p>
        <p class="des"><span class="blod">友情和爱情</span>：<span class="ct-color-2">{{obj.friendship}}</span></p>
      </li>
    </ul>
  </div>
</template>


<script setup>
  import result from '../data/result';
</script>
<style scoped>
.ui-box {
  width: 100%;
  height: auto;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  position: relative;
}
.back {
  position: absolute;
  left: 20px;
  top: 10px;
  color: cornflowerblue;
  font-size: 14px;
}
.title {
  font-size: 18px;
  font-weight: bold;
  text-align: center;
}
.list {
  margin-top: 20px;
}
.list .item {
  height: auto;
  overflow: hidden;
  padding: 15px 10px;
  box-shadow: 3px 2px 20px 0 rgba(216, 197, 253, 0.4);
}
.list .type,
.list .name {
  font-size: 18px;
  font-weight: bold;
}
.list .type {
  color: blueviolet;
}
.list .des {
  margin-top: 10px;
}
.list .des .blod {
  font-weight: bold;
}
.list .des .ct-color-1 {
  color: rgb(107, 5, 158);
}
</style>