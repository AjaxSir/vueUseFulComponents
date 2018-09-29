引入视频的组件
<d-player  ref="player" :loading='videoLoading' :video="video"   :contextmenu="contextmenu"></d-player> // :type='ty'
<script>
data() {
return {
	video: {
        url: 'rtmp://192.168.3.99/live/mystream',
        pic: 'http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg',
        type: 'hls'
      } / /视频源
	  contextmenu: [
        {
          text: 'GitHub',
          link: 'https://github.com/MoePlayer/vue-dplayer'
        }
      ] // 自定义右键菜单
	  更多配置查看 http://dplayer.js.org/#/zh-Hans/?id=api
}}</script>
