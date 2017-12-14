<template>
  <section class="page">
    <mu-text-field hintText="输入标题" errorText="这是必填项" v-model="newArticle.title"/>
    <mu-text-field hintText="输入内容" icon="comment" errorText="不能一个字都不输入哦" v-model="newArticle.content"/>
    <mu-text-field hintText="输入作者" v-model="newArticle.author"/>
    <mu-raised-button @click="saveBtn" label="发布" class="demo-raised-button" primary/>
  </section>
</template>

<script>
import router from '../router'
export default {
  name: 'New',
  components: {
  },
  data () {
    return {
      // 新增文章数据
      newArticle: {
        title: '',
        content: '',
        author: ''
      }
    }
  },
  methods: {
    saveBtn: function () {
      // 获取接口数据,查看文章的地址接接口,用axios调用
      this.$axios.post('/app/mock/1657/POST//articles', this.newArticle)
        .then((res) => {
        // newArticle的数据使用v-model,双向绑定给接口
          console.log(res.data)
          // this.newArticle = res.data
          router.push('/')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  created () {
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  flex-wrap: wrap;
}
.demo-raised-button {
  margin: 12px;
}
</style>
