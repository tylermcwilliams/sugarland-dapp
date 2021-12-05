<template>
  <div class="backgroundChart">
    <LineChart :style="myStyles" />
  </div>
</template>

<script>
import { onMounted } from "@nuxtjs/composition-api";
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
  background: rgb(121, 32, 196);
  background: linear-gradient(
    302deg,
    rgba(121, 32, 196, 1) 0%,
    rgba(172, 103, 230, 1) 79%
  );
  border-radius: 10px;
  box-shadow: 0px 2px 20px -2px #53378d;
  border-radius: 10px;
}
</style>
