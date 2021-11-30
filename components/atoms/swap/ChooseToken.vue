<template>
  <div class="flex justify-center">
    <div>
      <img class="" src="" alt="" />
      <span>Token</span>
      <img class="ChevronDown" src="" alt="" />
    </div>
  </div>
</template>
<script>
import { defineComponent, onMounted, ref } from "@nuxtjs/composition-api";
import listResults from "~/composables/getTokenList";

export default defineComponent({
  name: "ChooseToken",
  setup() {
    const { TokenList, getTokenList } = listResults();

    onMounted(() => {
      getTokenList();
      console.log(TokenList);
    });

    return { TokenList, getTokenList };
  },
});
</script>





<style scoped>
</style>