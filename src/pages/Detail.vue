<template>
  <section class="page">
    <!--顶部工具栏-->
    <mu-appbar class="app-bar" title="详情页">
      <!--返回按钮-->
      <mu-icon-button icon="arrow_back" slot="left" @click="back"/>
    </mu-appbar>
    <!--文章详情-->
    <section>
      <!-- 文章的编辑和ID的显示 -->
      <mu-flexbox>
        <mu-flexbox-item><h1>{{ $route.params.id }}</h1></mu-flexbox-item>
        <mu-flexbox-item>
          <router-link to="/articles/edit"><mu-raised-button label="编辑文章" class="demo-raised-button" secondary/></router-link>
        </mu-flexbox-item>
      </mu-flexbox>
      <!--使用Muse-UI的纸张控件-->
      <mu-paper class="wrapper2" :zDepth="2">
        <!--标题-->
        <div class="title">{{article.title}}</div>
        <!--简介-->
        <div class="intro">{{article.content}}</div>
        <!--额外信息-->
        <div class="extra">
          <span class="type">{{article.author}}</span>
        </div>
      </mu-paper>
    </section>
  </section>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      article: {} // 文章数据，请求获得,这里是个对象,一片文章就是一个对象,不能用数组
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
    // 获取接口数据,查看文章的地址接接口,用axios调用
    this.$axios('/app/mock/1657/GET//articles/100001')
      .then((res) => {
        // article的数据由上面的接口提供,下面的res.data,会错误的写成res.data.article,因为提供的对象没有字段了,所以后面不加
        this.article = res.data
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
