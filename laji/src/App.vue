<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  html, body {
    font-size: 14px;
    line-height: 1.3;
    color: #333;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
  html .pure-g [class *="pure-u"] {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
  ul, ol { list-style: none; }
  em { font-style: normal; }
</style>

<script>
  export default {
    name: 'app'
  }
</script>
