<!--
 * @Description: 首页
 * @Author: laoyuan
 * @Date: 2024-05-26 16:47:47
-->
<template>
  <!-- 题目列表 -->
  <div class="home-box">
    <div class="home-title">MBTI性格测试<span class="des" @click="onLink">16种性格简介</span></div>
    <div class="number">
      <p>题目数量：<span class="num">{{ questionList.length }}</span></p>
      <p class="des">要求：每题考虑的时间不得超过10秒钟</p>
    </div>
    <section class="ui-list">
      <div class="item">
        <div class="title">第{{ currentIndex + 1}}题：{{currentQuestion.question}}</div>
        <ul class="options">
          <li :class="['anser', selectIndex === index ?  'active' : '']" v-for="(v, index) in currentQuestion.options" :key="v.value" @click="onSelect(index, v.value)">{{ v.text }}</li>
        </ul>
      </div>
    </section>
    <div class="btn-box" @click="onSubmit" v-if="currentIndex === questionList.length - 1">提交</div>
  </div>
</template>


<script setup>
import { ref, computed } from "vue";
import questionList from "../data/question";
import { useRouter } from "vue-router";

const router = useRouter();

// 当前题目索引
const currentIndex = ref(0);

// 当前题目
const currentQuestion = computed(() => {
  return questionList[currentIndex.value];
});

// 当前选中的答案索引
const selectIndex = ref(-1);

// 选中的答案列表
const selectAnswerList = [];


// 选择函数
let timer = null;
let timeCount = 0;
// 最后一个题目选择的答案
let lastSelectValue;
const onSelect = (index, value) => {
  console.log("onSelect", index, value, currentIndex.value)
  selectIndex.value = index;
  clearInterval(timer);
  timer = setInterval(() => {
    timeCount++;
  }, 1000);
  // 最后一题的时候就不跳转下一题目了, 最后一题的答案，在提交的时候再插入到答案列表中(为了最后一题可以修改答案)
  if (currentIndex.value === questionList.length -1) {
    lastSelectValue = value
  } else {
    setTimeout(() => {
      selectAnswerList.push(value);
      selectIndex.value = -1;
      currentIndex.value++;
    }, 600)
  }
};

// 计算结果
const onHandleResult = (answerList) => {
  // 检查答案列表是否为空
  if (answerList.length === 0) {
    return;
  }
  // 检查答案列表是否包含有效的类型
  const validTypes = ['E', 'I', 'S', 'N', 'T', 'F', 'J', 'P']
  answerList.forEach((item) => {
    if (!validTypes.includes(item)) {
      return;
    }
  })
  // 使用 reduce 方法来统计每种类型的答案的个数
  const counts = answerList.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1
    return acc
  }, {})
  console.log('counts', counts);
  // 计算结果
  const types = [['E', 'I'], ['S', 'N'], ['T', 'F'], ['J', 'P']]
  const result = types.map(t => counts[t[0]] > counts[t[1]] ? t[0] : t[1]).join('')
  return result
};


// 提交函数
const onSubmit = () => {
  selectAnswerList.push(lastSelectValue);
  const result = onHandleResult(selectAnswerList);
  router.push({ path: '/result', query: { type: result, timeCount } });
  clearInterval(timer);
};

// 跳转介绍页面
const onLink = () => {
  router.push({ path: '/text' });
};

</script>
<style scoped>
.home-box {
  width: 100%;
  height: 92%;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
}
.home-title {
  font-size: 22px;
  text-align: center;
  color: blueviolet;
  font-weight: bold;
  position: relative;
}
.home-title .des {
  color: deepskyblue;
  position: absolute;
  right: 0px;
  top: 35px;
  font-size: 14px;
  cursor: pointer;
}
.home-box .number {
  font-size: 18px;
  margin-top: 25px;
}
.home-box .number .num {
  color: blueviolet;
}
.home-box .number .des {
  color: rgb(134, 132, 135);
  font-size: 14px;
}
.ui-list {
  margin-top: 30px;
  min-height: 200px;
  box-shadow: 3px 2px 20px 0 rgba(226,212,255,.40);
  padding-bottom: 5px;
}
.ui-list .item {
  margin: 30px 15px;
}
.ui-list .title {
  font-size: 18px;
  margin-bottom: 30px;
  padding-top: 15px;
}
.options .anser {
  --width: 4px;
  background: #f4f3ff linear-gradient(270deg, #946ffa, #c9b1f9) 0 0 / var(--width) 100% no-repeat;
  border-radius: 4px;
  padding: 12px 15px;
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 20px;
}

.options .active {
  background: #946ffa;
  color: #fff;
  transition: all 0.3s ease-in;
}
.btn-box {
  width: 150px;
  height: 46px;
  background: #946ffa;
  color: #fff;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  cursor: pointer;
  margin: 20px auto;
}
</style>