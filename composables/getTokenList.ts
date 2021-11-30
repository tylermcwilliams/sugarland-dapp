import { ref } from "@nuxtjs/composition-api";
import axios from "axios";
const TokenList = ref(null);

const listResults = () => {
  const getTokenList = async () => {
    const price = await axios.get("https://tokens.swipe.org");

    TokenList.value = price;
  };

  return {
    TokenList,
    getTokenList,
  };
};

export default listResults;
