<template>
  <div class="backgroundChart">
    <LineChart :labels="labels" :data="prices" :style="myStyles" />
  </div>
</template>

<script>
import LineChart from "~/components/atoms/LineChart.vue";
import PopFromShadow from "../../atoms/popFromShadow.vue";
import { defineComponent, onMounted, reactive, ref, useFetch } from "@nuxtjs/composition-api";
import useCoingecko from "~/composables/useCoingecko";

export default defineComponent({
  name: "TestChart",
  components: {
    LineChart,
    PopFromShadow,
  },
  setup() {
    const { fetchCoinChart } = useCoingecko();

    const labels = reactive({list:[]});
    const prices = reactive({list:[]});

    useFetch(async () => {
      const chartData = await fetchCoinChart("sugarland");
      const timestamps = []
      prices.list = chartData?.prices.map((e) => {
        timestamps.push(new Date(e[0]).toDateString());
        return e[1].toFixed(10);
      });
      labels.list = timestamps
    });

    return { labels, prices };
  },
  computed: {
    myStyles() {
      return {
        width: `730px`,
        height: `350px`,
        position: "relative",
        color: `white`,
      };
    },
  },
});
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
  background: var(--button-color);
  filter: drop-shadow(0px 23px 19.6721px rgba(0, 0, 0, 0.28));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
}
</style>
