<template>
  <div class="swapCard">
    <PopFromShadow
      ><div class="InnerSwap">
        <h1 class="singleDataSwap">Swap</h1>

        <ChooseToken></ChooseToken>
        <!-- Primo Input -->
        <div class="singleDataSwap">
          <input class="inputText" type="text" placeholder="0.00" />
        </div>

        <!-- icona cambio -->
        <div class="swapInvert">
          <img
            src="https://s2.svgbox.net/materialui.svg?ic=swap_vertical_circle&color=fff"
            width="25"
            height="25"
          />
        </div>

        <!-- Secondo Input -->
        <div class="singleDataSwap mb-8">
          <input class="inputText" type="text" placeholder="0.00" />
        </div>

        <button v-if="!active" class="buttonPresent buttonDefault">Connect Wallet</button>
        <button v-else class="buttonPresent buttonDefault">Swap</button>
      </div>
    </PopFromShadow>
  </div>
</template> 

<script>
import { defineComponent, ref } from "@nuxtjs/composition-api";
import { useWeb3 } from "@instadapp/vue-web3";
import PopFromShadow from "~/components/atoms/popFromShadow.vue";
import ChooseToken from "./ChooseToken.vue";

export default defineComponent({
  name: "SwapInputs",

  setup(props) {
    const { active } = useWeb3();

    return { active };
  },
  components: { PopFromShadow, ChooseToken },
});
</script>





<style scoped>
.buttonDefault {
  background-color: var(--border-color);
  padding-inline: 25px;
  padding-block: 7px;
  border-radius: 10px;
}
.swapInvert {
  margin-block: 10px;
}
.singleDataSwap {
  padding-block: 10px;
}
.InnerSwap {
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.buttonPresent {
  display: flex;
  flex-direction: row;
  font-size: 14px;
}
.inputText {
  outline: none;
  padding-block: 7px;
  padding-inline: 20px;
  border-radius: 10px;
  color: #9034e5;
  margin-right: 10px;
}

.inputText:active {
  outline: none;
}

h1 {
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  text-align: left;
  font-style: normal;
  line-height: 23px;
}
h2 {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  text-align: left;
  font-style: normal;
  line-height: 23px;

  white-space: nowrap;
}

span {
  font-size: 14px;
  line-height: 23px;
  text-align: center;
  font-style: normal;
  font-weight: 200;
  line-height: 23px;
  text-align: center;
  color: #fff !important;
}

@media (min-width: 320px) {
  .swapCard {
    margin-left: 50px;
  }
}
@media (min-width: 620px) {
  .swapCard {
    margin-left: 280px;
  }
}
</style>