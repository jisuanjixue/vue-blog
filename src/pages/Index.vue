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
        <mu-list-item v-for="item in typeArray" :title="item" :key="item.id"/>
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
      <!-- 循环文章标题 -->
      <mu-paper class="wrapper2" :zDepth="2" v-for="list in articles" :key="list.id">
        <!--标题-->
        <!-- <div class="title" :link="'/articles/' + articles.id">{{list.title}}</div> -->
         <router-link :to="{path: '/articles/' + articles.id}">{{list.title}}</router-link>
      </mu-paper>
    </section>
  </section>
</template>

<script>
export default {
  name: 'index',
  components: {
  },
  data () {
    return {
      articles: [], // 文章数据，请求获得
      articles_id: '',
      isDrawerOpen: false,  // 侧边栏开关
      typeArray: ['HTML', 'CSS', 'Sass', 'Java Script', 'ECMAScript', 'Vue.js', '微信小程序', 'Node.js', 'MongoDB', 'macOS', 'Linux'] // 类型数组，mock数据，后续会从rap2api上取得
    }
  },
  created () {
    this.articles_id = this.$route.params.articles_id
    this.$axios('/app/mock/1657/GET//articles')
      .then((res) => {
        this.articles = res.data.articles
      })
      .catch((error) => {
        console.log(error)
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

<style lang="scss" rel="stylesheet/scss" scoped>
.title {
  font-size: 24px;
  margin-bottom: 24px;
}
.wrapper2 {
  padding: 24px;
}
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
</style>
