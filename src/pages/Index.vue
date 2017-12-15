<template>
  <!--index页整个容器-->
  <section>
    <!--顶部工具栏 使用fixed固定在顶部-->
    <div class="top">
      <!-- 菜单栏 -->
      <mu-appbar class="nav" title="Title">
        <!--左侧抽屉开关-->
        <mu-icon-button @click="drawerToggle">
          <i class="material-icons">list</i>
        </mu-icon-button>
        <!--右侧GitHub链接-->
        <mu-flat-button slot="right"/>
          <mu-avatar slot="right" src="https://ws3.sinaimg.cn/large/006tNc79gy1fmhjmu5oqhj308u04fa9z.jpg"/>
          <span>{{user.name}}</span>
        <!-- 右侧注册登录登出 -->
          <mu-icon-menu  icon="more_vert" slot="right">
            <router-link to="/login"> <mu-menu-item title="登录"/></router-link>
             <router-link to="/login"> <mu-menu-item title="注册"/></router-link>
            <router-link  to="/UserInfo"><mu-menu-item title="账户信息"/></router-link>
          </mu-icon-menu>
      </mu-appbar>
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

    <!-- 新建文章 -->
    <!-- to前面不加: 是一个字符串,引用了mu的button组件 -->
    <router-link to="/articles/new"><mu-raised-button label="新建文章" class="demo-raised-button" secondary/></router-link>

    <!--文章列表-->
    <section>
      <!-- 循环文章标题 -->
      <mu-paper class="wrapper2" :zDepth="2" v-for="list in articles" :key="list.id">
        <!-- mu-flex组件 -->
        <mu-flexbox :gutter="8">
          <mu-flexbox-item>
            <!-- 匹配到router/index.js的动态路径参数里 -->
            <!-- 标题链接,使用router-link,通过传入 `to` 属性指定链接,前面要加:,<router-link> 默认会被渲染成一个 `<a>` 标签. !!!这里犯了一个错误,要把文章标题路由跳转到详情页,指定每篇文章的ID,写成了articles.id,错误的根据接口数据来,而不是根据上面循环的来写成list.id -->
            <router-link :to="{path: '/articles/' + list.id}">{{list.title}}</router-link>
          </mu-flexbox-item>
          <mu-flexbox-item>
             <!-- mu-dialog组件 -->
             <mu-raised-button v-on:click="deleteBtn" label="删除文章" @click="open" class="demo-raised-button" secondary/>
             <mu-dialog :open="dialog" title="alert">是否要删除文章
               <mu-flat-button label="确定" slot="actions" primary @click="close"/>
             </mu-dialog>
          </mu-flexbox-item>
        </mu-flexbox>
      </mu-paper>
    </section>
  </section>
</template>

<script>
import router from '../router'
import { mapState, mapActions, mapMutations } from 'vuex'
// import Login from '../component/Login.vue'
// import UserInfo from '../component/UserInfo.vue'
export default {
  name: 'index',
  components: {
    // Login,
    // UserInfo
  },
  data () {
    return {
      dialog: false,
      articles: [], // 文章数据，请求获得
      list_id: '', // 每篇文章Id，请求获得
      isDrawerOpen: false,  // 侧边栏开关
      typeArray: ['HTML', 'CSS', 'Sass', 'Java Script', 'ECMAScript', 'Vue.js', '微信小程序', 'Node.js', 'MongoDB', 'macOS', 'Linux'] // 类型数组，mock数据，后续会从rap2api上取得
    }
  },
  created () {
    // 一个『路径参数』使用冒号 : 标记。当匹配到一个路由时，参数值会被设置到 this.$route.params
    this.list_id = this.$route.params.id
    this.$axios('/app/mock/1657/GET//articles')
      .then((res) => {
        this.articles = res.data.articles
      })
      .catch((error) => {
        console.log(error)
      })
  },
  // store里的mapState方法是在生命周期的computed调用的
  computed: {
    ...mapState([
      'user'
    ])
  },
  // store里的mapActions和mapMutations方法是在生命周期的methods调用的,它们分别是dispatch和commit方法
  methods: {
    ...mapActions([
      'loadUser'
    ]),
    ...mapMutations([
      'setUser'
    ]),
   // 开关抽屉
    drawerToggle () {
      this.isDrawerOpen = !this.isDrawerOpen
    },
   // 跳转到GitHub
    github () {
      window.open('https://github.com/jisuanjixue')
    },
    // 警告弹窗是否关闭
    open () {
      this.dialog = true
    },
    close () {
      this.dialog = false
    },
    deleteBtn: function () {
     // 获取接口数据,查看编辑文章的地址接接口,用axios调用,在页面上显示是否
      this.$axios.delete('/app/mock/1657/DELETE//articles/123321', this.articles)
        .then((res) => {
          // 在console里查看提交更新的状态
          console.log(res.data)
          // 用router.push的方法传到详情页
          router.push('/')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.nav {
  padding: 0 30px;
}
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
.container{
  display: flex;
}
.demo-flat-button {
  margin: 12px;
}
}
</style>
