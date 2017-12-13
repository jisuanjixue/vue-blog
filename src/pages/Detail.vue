<template>
  <section class="page">
    <!--顶部工具栏-->
    <mu-appbar class="app-bar" title="详情页">
      <!--返回按钮-->
      <mu-icon-button icon="arrow_back" slot="left" @click="back"/>
    </mu-appbar>
    <!--文章详情-->
    <section>
      <article-list :article-item="item"></article-list>
    </section>
  </section>
</template>

<script>
import ArticleList from '../components/ArticleList'
export default {
  components: {
    ArticleList
  },
  data () {
    return {
      item: [] // 文章数据，请求获得
    }
  },
  methods: {
    // 后退
    back () {
      window.history.back()
    },
    // 异步请求
    request () {
    }
  },
  created () {
    this.$axios('/app/mock/1657/GET//articles')
      .then((res) => {
        this.item = res.data.articles
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
  }
  .app-bar {
    background-color: #2196f3;
  }
</style>
