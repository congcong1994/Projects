<template>
  <div class="demo">
    <video-player
      class="video-player vjs-custom-skin"
      ref="videoPlayer"
      :playsinline="true"
      :options="playerOptions"
      @play="onPlayerPlay($event)"
      @pause="onPlayerPause($event)"
      @ended="onPlayerEnded($event)"
      @waiting="onPlayerWaiting($event)"
      @playing="onPlayerPlaying($event)"
      @loadeddata="onPlayerLoadeddata($event)"
      @timeupdate="onPlayerTimeupdate($event)"
      @canplay="onPlayerCanplay($event)"
      @canplaythrough="onPlayerCanplaythrough($event)"
      @statechanged="playerStateChanged($event)"
      @ready="playerReadied"
    ></video-player>
  </div>
</template>
<script>
export default {
  data() {
    return {
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
        autoplay: false, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/webm", // 这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
            src:
              "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm" // url地址
          }
        ],
        poster: "../assets/logo.png", // 你的封面地址
        notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true // 全屏按钮
        },
        fullscreen: {
          options: { navigationUI: "show" }
        }
      }
    };
  },
  mounted() {
    console.log("this is current player instance object", this.player);
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  },
  methods: {
    onPlayerPlay: function(e) {
      // console.log(e);
    },
    onPlayerPause: function(e) {
      console.log(e);
    },
    onPlayerEnded: function(e) {
      console.log(e);
    },
    onPlayerWaiting: function(e) {
      console.log(e);
    },
    onPlayerPlaying: function(e) {
      console.log(e);
    },
    onPlayerLoadeddata: function(e) {
      console.log(e);
    },
    onPlayerTimeupdate: function(e) {
      console.log(e);
    },
    onPlayerCanplay: function(e) {
      console.log(e);
    },
    onPlayerCanplaythrough: function(e) {
      console.log(e);
    },
    playerStateChanged: function(e) {
      console.log(e);
    },
    playerReadied: function() {}
  }
};
</script>
<style scoped>
.demo {
  display: inline-block;
  width: 100%;
  height: 300px;
  text-align: center;
  line-height: 100px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 4px;
}

.demo:hover {
  display: block;
}
</style>
