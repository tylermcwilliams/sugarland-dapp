<template>
  <div class="reflectCard">
    <div class="dataRefBox">
      <h1 class="singleData">Your $Sugar Details:</h1>

      <div class="singleData buttonPresent">
        <input
          class="inputText"
          type="text"
          placeholder="Your wallet Address"
        />
        <div class="buttonsReflections">
          <ButtonDefault
            v-if="!active"
            placeholder="Connect Your Wallet"
            @clicked="showMintingModal"
          />
          <ButtonDefault v-else placeholder="You like Sugar, heh?" />
          <ButtonDefault placeholder="Check from address" />
        </div>
      </div>

      <div class="resutsWrapper">
        <div class="singleData">
          <h2>Current Tokens:</h2>
          <span class="numbersData">{{ elementsCard.CurrentBalance }}</span>
        </div>
        <div class="singleData">
          <h2>Total Purchased till date:</h2>
          <span class="numbersData">{{ elementsCard.TotalPurchased }}</span>
        </div>
        <div class="singleData">
          <h2>Total Sold till date:</h2>
          <span class="numbersData">{{ elementsCard.TotalSold }}</span>
        </div>
        <div class="singleData">
          <h2>Total Reflections Earned:</h2>
          <span class="numbersData">{{ elementsCard.TotalReflections }}</span>
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
import { defineComponent, ref } from "@nuxtjs/composition-api";
import { useWeb3 } from "@instadapp/vue-web3";
import PopFromShadow from "../atoms/popFromShadow.vue";
import ButtonDefault from "~/components/atoms/ButtonDefault.vue";
import LoginPopup from "~/components/modals/LoginPopup.vue";
import { useModal } from "~/composables/useModal";
export default defineComponent({
  name: "reflectionCard",

  setup(props) {
    const { active } = useWeb3();
    const elementsCard = ref({
      CurrentBalance: 10000,
      TotalPurchased: 10000,
      TotalSold: 10000,
      TotalReflections: 10000,
    });
    const { showMintingModal } = useModal(LoginPopup);

    return { elementsCard, active, ButtonDefault, showMintingModal };
  },
  components: { PopFromShadow },
});
</script>





<style scoped>
.resutsWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.buttonsReflections {
  display: flex;
  flex-direction: row;
  margin-block: 20px;
}
.buttonPresent {
  display: flex;
  flex-direction: row;
  margin-left: 5px;
  font-size: 12px;
}
.inputText {
  outline: none;
  padding-block: 7px;
  padding-inline: 20px;
  border-radius: 10px;
  color: #9034e5;
  margin-right: 10px;
  margin-left: -5px;
}

.inputText:active {
  outline: none;
}
.dataRefBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  padding-inline: 50px;
  padding-block: 30px;
}

.singleData {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  margin-block: 5px;
  padding-block: 10px;
  padding-inline: 20px;
}

.numbersData {
  padding-inline: 10px;
}

.reflectCard {
  max-height: 800px;
  width: 650px;
  display: flex;
  justify-content: center;
  align-items: center;

  padding-inline: 40px;
  margin-left: 320px;
  background: rgba(91, 39, 146, 0.3);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 10px;
  box-shadow: 0px 7px 31px -2px #3b2162;
}
img {
  max-width: 80px;
  padding-block: 20px;
}

h1 {
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  text-align: left;
  font-style: normal;
  padding-bottom: 20px;
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
  font-weight: 600;
  font-size: 18px;
  color: var(--color-tertiary);
  line-height: 23px;
  text-align: center;
  font-style: normal;
  padding-top: 5px;
}
</style>

4