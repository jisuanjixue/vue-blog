<template>
  <!--index页整个容器-->
  <section>
    <!--顶部工具栏 使用fixed固定在顶部-->
    <div class="top">
      <!--左侧抽屉开关-->
      <mu-icon-button @click="drawerToggle">
        <i class="material-icons">list</i>
      </mu-icon-button>
       <!--右侧GitHub链接-->
      <mu-icon-button>
        <i class="iconfont icon-github"></i>
      </mu-icon-button>
    </div>

    <!--点击抽屉开关打开的侧边菜单-->
    <mu-drawer right :open="isDrawerOpen" @close="drawerToggle">
      <!--标题栏-->
      <mu-appbar class="drawer-header" title="类别"/>
      <mu-list>
        <!--类别List-->
        <mu-list-item v-for="type in typeArray" :title="type" :key="type.id"/>
        <!--关闭栏-->
        <mu-list-item @click="drawerToggle" title="关闭"/>
      </mu-list>
    </mu-drawer>

    <!--头部-->
    <header>
      <div class="avatar"></div>
      <div class="welcome">Welcome to xiaobo's blog</div>
    </header>

    <!--文章列表-->
    <section>
      <article-item v-for="article in articles" :article="article" :key="article.id"></article-item>
    </section>
  </section>
</template>

<script>
import ArticleItem from '../components/ArticleItem'
export default {
  name: 'index',
  components: {
    ArticleItem
  },
  data () {
    return {
      articles: {}, // 文章数据，请求获得
      isDrawerOpen: false,  // 侧边栏开关
      typearray: ['HTML', 'CSS', 'Sass', 'Java Script', 'ECMAScript', 'Vue.js', '微信小程序', 'Node.js', 'MongoDB', 'macOS', 'Linux'] // 类型数组，mock数据，后续会从rap2api上取得
    }
  },
  created () {
    this.$http.get('http://rap2api.taobao.org/app/mock/1657/GET//articles').then(res => { // 请求成功
      if (res.status !== 200) {
         // 输出错误信息
        this.articles = 'status = ' + res.status + ' errorCode = ' + res.body.errorCode
        return
      }
      this.articles = res.body.data
    }, res => { // 请求失败，因为mock数据没有请求失败，所以暂时没有处理
      this.articles = '请求失败'
    })
  },
  methods: {
   // 开关抽屉
    drawerToggle () {
      this.isDrawerOpen = !this.isDrawerOpen
    },
   // 跳转到GitHub
    github () {
      window.open('https://github.com/jisuanjixue')
    }
  }
}
</script>

<style lang="scss" rel="styleshee/tscss" scoped>
.top {
  height: 64px;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: #fff;
  background-color: #2196f3;
}
.drawer-header {
  background-color: #2196f3;
}
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 440px;
  color: #fff;
  background-color: #2196f3;

  .avatar {
    height: 150px;
    width: 150px;
    margin-top: 100px;
    background: url(http://img.hb.aicdn.com/19dd42725e125bb7424785afbddeee41d5eb13931b097-evWO7z_fw658) center no-repeat;
    background-size: cover;
    border-radius: 50%;
    box-shadow: 5px 10px 10px #1565c0;
  }
  .welcome {
    margin-top: 20px;
    font-size: 24px;
    font-family: "Comic Sans MS";
  }
}

/*文章列表*/
.articles {
  margin-top: -100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
