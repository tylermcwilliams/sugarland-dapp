<template>
  <LineChart :style="myStyles" />
</template>

<script>
import LineChart from "~/components/atoms/LineChart.vue";

export default {
  name: "TestChart",
  components: {
    LineChart,
  },
  data() {
    return {
      chartData: {
        Books: 24,
        Magazine: 30,
        Newspapers: 10,
      },
    };
  },

  computed: {
    myStyles() {
      return {
        width: `600px`,
        height: `350px`,
        position: "relative",
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

/* canvas#line-chart {
  width: 500px !important;
} */
</style>
