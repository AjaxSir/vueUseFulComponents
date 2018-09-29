<template>
  <div style='height:371;width:659px;margin:0 auto' id="dplayer" v-loading.body="loading" element-loading-text="等待建立视频连接"></div>
</template>

<script>
  require('../../../node_modules/dplayer/dist/DPlayer.min.css')
  import DPlayer from 'DPlayer'
  export default {
    props: {
      autoplay: {
        type: Boolean,
        default: false
      },
      theme: {
        type: String,
        default: '#FADFA3'
      },
      loop: {
        type: Boolean,
        default: true
      },
      lang: {
        type: String,
        default: 'zh'
      },
      screenshot: {
        type: Boolean,
        default: false
      },
      hotkey: {
        type: Boolean,
        default: true
      },
      preload: {
        type: String,
        default: 'auto'
      },
      contextmenu: {
        type: Array
      },
      logo: {
        type: String
      },
      loading: {
        type: Boolean,
        default: true
      },
      video: {
        type: Object,
        required: true,
        validator(value) {
          return typeof value.url === 'string'
        }
      }
    },
    data() {
      return {
        dp: null
      }
    },
    mounted() {
      const player = this.dp = new DPlayer({
        element: this.$el,
        autoplay: true,
        theme: this.theme,
        loop: this.loop,
        lang: this.lang,
        screenshot: this.screenshot,
        hotkey: false,
        preload: this.preload,
        contextmenu: this.contextmenu,
        logo: this.logo,
        video: {
          url: this.video.url,
          pic: this.video.pic,
          type: this.video.type
        }
      })
    },
    created() {
      this.set1()
    },
    methods: {
      set1() {
        setInterval(() => {
          // console.log(this.video.url)
        }, 1000)
      },
      play() {
        console.log(1)
      }
    },
    watch: {
      '$route'() {
        this.video.url = this.$route.query.match
        // console.log(this.video.url)
      },
      'video.url'() {
        // this.video.url
        console.log(this.video.url)
        this.dp.switchVideo({
          url: this.video.url,
          pic: 'http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg'
          // thumbnails: 'second.jpg'
        })
        this.dp.play()
      }
    }
  }
</script>
<style type="text/css" media="screen">
  .dplayer-controller {
    display:none;
  }
</style>
