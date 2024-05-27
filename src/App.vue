<!--
 * @Description: Description
 * @Author: laoyuan
 * @Date: 2024-05-26 16:47:47
-->

<template>
  <router-view />
</template>
<script setup>
import { RouterView } from 'vue-router'
</script>

<style>

#app {
  max-width: 1080px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
  background: linear-gradient(
    180deg,
    rgb(190, 166, 250) -4%,
    rgb(197 213 255) 51%,
    rgb(218 226 255) 78%,
    rgb(255 255 255) 144%
  ),
  rgb(255 255 255);
}
</style>
