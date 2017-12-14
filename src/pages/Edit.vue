<template>
  <section class="page">
    <mu-text-field hintText="输入标题" errorText="这是必填项" v-model="editArticle.title"/>
    <mu-text-field hintText="输入内容" icon="comment" errorText="不能一个字都不输入哦" v-model="editArticle.content"/>
    <mu-text-field hintText="输入作者" v-model="editArticle.author"/>
    <mu-raised-button @click="submitBtn" label="发布" class="demo-raised-button" primary/>
  </section>
</template>

<script>
import router from '../router'
export default {
  name: 'Edit',
  components: {
  },
  data () {
    return {
      // 编辑文章数据
      editArticle: {
        title: '',
        content: '',
        author: ''
      }
    }
  },
  methods: {
    submitBtn: function () {
      // 获取接口数据,查看编辑文章的地址接接口,用axios调用,然后把修改的数据用put到接口里
      this.$axios.put('/app/mock/1657/PUT//articles/123321/edit', this.editArticle)
        .then((res) => {
        // editArticle的数据使用v-model,双向绑定给接口
          // 在console里查看提交更新的状态
          console.log(res.data)
          // 用router.push的方法传到详情页
          router.push('/articles/:id')
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
