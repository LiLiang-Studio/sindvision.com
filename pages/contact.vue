<template>
  <ui-main :banner="{ src: '/images/banner-1.jpg', title, subTitle: '携手现在，定义未来！' }">
    <div class="page-contact">
      <div class="clearfix inner">
        <div class="leftbox">
          <h3 class="title">
            保持联系
          </h3>
          <p class="desc">
            我们热切期待您的来访与咨询。
          </p>
          <dl>
            <dt>
              <b>北京</b>
            </dt>
            <dd>
              <i class="fa fa-map-marker fa-fw" /> 北京市海淀区志新路15号三层311 <br>
              <i class="fa fa-envelope fa-fw" /> support@sindvision.com <br><br>
            </dd>
            <dt>
              <b>郑州</b>
            </dt>
            <dd>
              <i class="fa fa-map-marker fa-fw" /> 郑州市高新区科学大道升龙又一城A座10楼93号 <br>
              <i class="fa fa-envelope fa-fw" /> support@sindvision.com
            </dd>
          </dl>
        </div>
        <div>
          <h3 class="title">
            需要帮助？
          </h3>
          <p class="desc">
            请填写如下表单快速与我们联系，我们将尽快回复您。
          </p>
          <ul class="form">
            <li>
              <label>您的名字 (必填)</label>
              <input v-model="form.name" type="text" maxlength="20">
            </li>
            <li>
              <label>您的邮箱 (必填)</label>
              <input v-model="form.email" type="text" maxlength="50">
            </li>
            <li>
              <label>主题 (必填)</label>
              <input v-model="form.topic" type="text" maxlength="50">
            </li>
            <li>
              <label>您的留言 (必填)</label>
              <textarea v-model="form.content" rows="6" maxlength="300" />
            </li>
            <li>
              <button class="btn" @click="submit">
                发送
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div v-if="loading" class="spinbox">
        <i class="fa fa-spinner fa-pulse fa-2x" />
      </div>
    </div>
  </ui-main>
</template>

<script>
import { stringify } from 'qs'
import UiMain from '@/components/Main.vue'
export default {
  components: { UiMain },
  data () {
    return {
      title: '商务合作',
      form: {},
      loading: false
    }
  },
  methods: {
    submit () {
      const trim = value => (value || '').trim()
      const emailReg = /^[A-Za-z0-9\u4E00-\u9FA5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      const form = {
        name: trim(this.form.name),
        email: trim(this.form.email),
        topic: trim(this.form.topic),
        content: trim(this.form.content)
      }
      let msg
      if (!form.name) {
        msg = '请输入您的名字'
      } else if (!form.email) {
        msg = '请输入您的邮箱'
      } else if (!emailReg.test(form.email)) {
        msg = '邮箱格式不正确'
      } else if (!form.topic) {
        msg = '请输入主题'
      } else if (!form.content) {
        msg = '请输入您的留言'
      }
      if (msg) {
        return window.alert(msg)
      }
      this.loading = true
      this.$axios.post('/ccas/portal/leave/message/save', stringify(form)).then(({ data }) => {
        if (data.ok) {
          window.alert('提交成功')
          this.form = {}
        } else {
          window.alert(data.info)
        }
      }).catch((e) => {
        window.alert(e.message)
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss">
.page-contact {
  padding: 3.5rem $contentPadding;
  .inner {
    max-width: $contentWidth;
    margin: 0 auto;
    > div {
      float: left;
      width: 50%;
      padding: 1rem 0;
    }
    .leftbox {
      padding-right: 1rem;
    }
    @media screen and (max-width: 600px) {
      > div {
        width: 100%;
      }
    }
    .title {
      font-size: 2.3rem;
      color: #202020;
      margin-bottom: 1.3rem;
    }
    .desc {
      font-size: 1.1rem;
      color: #5d5f64;
      margin-bottom: 1rem;
    }
    dt {
      font-size: 1.1rem;
      color: #202020;
      margin-bottom: .5rem;
    }
    dd {
      font-size: 1rem;
      color: #5d5f64;
      line-height: 1.6;
    }
    .form {
      list-style: none;
      li {
        margin-bottom: 1rem;
        label {
          display: block;
          font-size: 1.1rem;
          color: #5d5f64;
          margin-bottom: 5px;
        }
        input, textarea {
          width: 100%;
          padding: 8px 15px;
          border: 1px solid #e8eaf0;
        }
        input {
          height: 48px;
        }
        .btn {
          @include gradBtn;
          border: none;
          padding: 13px 29px;
          cursor: pointer;
          font-weight: bold;
          outline: none;
        }
      }
    }
  }
  .spinbox {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 5;
    background-color: rgba(255, 255, 255, .7);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
