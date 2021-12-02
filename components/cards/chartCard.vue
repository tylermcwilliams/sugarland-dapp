<template>
  <div class="backgroundChart">
    <LineChart :style="myStyles" />
  </div>
</template>

<script>
import LineChart from "~/components/atoms/LineChart.vue";
import PopFromShadow from "../atoms/popFromShadow.vue";

export default {
  name: "TestChart",
  components: {
    LineChart,
    PopFromShadow,
  },
  data() {
    return {};
  },

  computed: {
    myStyles() {
      return {
        width: `690px`,
        height: `350px`,
        position: "relative",
        color: `white`,
      };
    },
  },
};
</script>



<style>
#app {
  font-family: "Montserrat", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--color-secondary);
  margin-top: 60px;
}
canvas#line-chart {
  background-color: transparent;
  border-radius: 20px;
  padding: 25px;
}

.backgroundChart {
  background: rgba(91, 39, 146, 0.3);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 10px;
  box-shadow: 0px 7px 31px -2px #3b2162;
  border-radius: 10px;
}
</style>
