<template>
  <div>
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Mupliple Progress Bar Program</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="card">
          <div class="card-content">
            <div class="progress-bars-container" v-if="progressData.bars">
              <div
                class="progress-bar-item"
                :key="`${index}`"
                v-for="(bar, index) in progressData.bars"
              >
                <progress-bar :progress="bar" />
              </div>
              <div class="columns progress-bar-actions">
                <div class="column">
                  <div class="select">
                    <select v-model="activeBar">
                      <option
                        :value="index"
                        :key="`_dd_${index}`"
                        v-for="(bar, index) in progressData.bars"
                      >Progress Bar{{index +1}}</option>
                    </select>
                  </div>
                </div>
                <div class="column">
                  <div class="buttons">
                    <button
                      class="button is-primary"
                      type="button"
                      :key="`btn_${index}`"
                      @click.stop="changeProgressValue(num)"
                      v-for="(num, index) in progressData.buttons"
                    >{{num}}</button>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>Loading...</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import ProgressBar from "@/components/ProgressBar.vue";
import Vue from "vue";

export default {
  name: "home",
  components: {
    ProgressBar
  },
  data() {
    return {
      fetching: false,
      progressData: {},
      activeBar: 0
    };
  },
  async created() {
    await this.fetchProgressBarData();
  },
  methods: {
    changeProgressValue(num) {
      const bars = this.progressData.bars.slice();
      let active_bar = bars[this.activeBar];
      const new_progress = active_bar + num;

      this.progressData.bars[this.activeBar] =
        new_progress < 0 ? 0 : new_progress;
      Vue.set(
        this.progressData.bars,
        this.activeBar,
        new_progress < 0 ? 0 : new_progress
      );
    },
    async fetchProgressBarData() {
      this.fetching = true;
      try {
        this.progressData = await this.$axios("/bars");
        this.fetching = false;
      } catch (err) {
        this.fetching = false;
      }
    }
  }
};
</script>
