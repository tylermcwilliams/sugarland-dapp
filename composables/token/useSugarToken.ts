import { ref, computed } from "@nuxtjs/composition-api";
import useCoingecko from "../useCoingecko";

const SugarPrice = ref(0);
const sugarSupply = ref(0);
const sugarMarketCap = computed(() => {
  return SugarPrice.value * sugarSupply.value;
});
const useSugarToken = () => {
  const { fetchCoinData } = useCoingecko();

  const fetchSugarData = async () => {
    await fetchSugarMarketData()
    //await fetchSugarChartData()
  };

  const fetchSugarMarketData = async () => {
    const sugarland = await fetchCoinData("sugarland")

    SugarPrice.value = sugarland.current_price.usd.toFixed(10);
    sugarSupply.value = sugarland.total_supply
  } 

  return {
    SugarPrice,
    sugarMarketCap,
    sugarSupply,
    fetchSugarData,
  };
};

export default useSugarToken;
