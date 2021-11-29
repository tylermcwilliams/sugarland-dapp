<template>
  <PopFromShadow>
    <LineChart :style="myStyles" />
  </PopFromShadow>
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
        width: `800px`,
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
  color: #8224e3;
  margin-top: 60px;
}
canvas#line-chart {
  background-color: transparent;
  border-radius: 20px;
  padding: 25px;
}
</style>
