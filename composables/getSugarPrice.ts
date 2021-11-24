import { ref } from "@nuxtjs/composition-api";
import axios from "axios";
const SugarPrice = ref(null);

const sugPrice = () => {
  const getSugarPrice = async () => {
    const price = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=sugarland&vs_currencies=USD"
    );

    SugarPrice.value = price.data["sugarland"].usd.toFixed(10);
  };

  return {
    SugarPrice,
    getSugarPrice,
  };
};

export default sugPrice;
