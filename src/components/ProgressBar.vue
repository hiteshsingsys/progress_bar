<template>
  <div class="progress-bar-wrapper" :style="{height: `${height}px`}">
    <div
      :class="{
            'progress-bar': true,
            zero: animatedNumber <= 0 ? true : false,
            completed: animatedNumber === max.toFixed(0) ? true : false,
            over: animatedNumber > max ? true : false
        }"
      :style="{width: `${animatedNumber}%`}"
    >
      <span class="progress-bar-text vertical-center">{{animatedNumber}}%</span>
    </div>
  </div>
</template>
<script>
import { TweenLite } from "gsap/TweenMax";
export default {
  name: "progress-bar",
  props: {
    height: {
      type: Number,
      default: () => 30
    },
    progress: {
      type: Number,
      default: () => 0
    },
    max: {
      type: Number,
      default: () => 100
    },
    speed: {
      type: Number,
      default: () => 0.5
    }
  },
  computed: {
    /**
     * To convert the value in Integer.
     */
    animatedNumber: function() {
      return this.tweenedProgress.toFixed(0);
    }
  },
  methods: {
    changeValueInInterval(newValue) {
      TweenLite.to(this.$data, this.speed, { tweenedProgress: newValue });
    }
  },
  data() {
    return {
      tweenedProgress: 0
    };
  },
  watch: {
    progress: {
      immediate: true,
      handler(newValue) {
        this.changeValueInInterval(newValue);
      }
    }
  }
};
</script>
