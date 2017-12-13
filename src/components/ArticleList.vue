<template>
  <!--使用Muse-UI的纸张控件-->
  <mu-paper class="wrapper2" :zDepth="2">
    <!--标题-->
    <div class="title">{{item.title}}</div>
    <!--简介-->
    <div class="intro">{{item.content}}</div>
    <!--额外信息-->
    <div class="extra">
      <span class="type">{{item.author}}</span>
    </div>
  </mu-paper>
</template>

<script>
export default {
  // 定义从父控件继承的props
  props: ['articleItem'],
  data () {
    return {
      item: this.articleItem
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .wrapper2 {
    padding: 24px;
  }
  .title {
    font-size: 24px;
    margin-bottom: 24px;
  }
  .intro {
    font-size: 16px;
    margin-bottom: 16px;
  }
  .type {
    font-size: 12px;
    margin-bottom: 16px;
  }
</style>

