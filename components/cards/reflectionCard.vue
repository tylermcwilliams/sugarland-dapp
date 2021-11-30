<template>
  <div class="reflectCard">
    <PopFromShadow
      ><div class="dataRefBox">
        <h1 class="singleData">Your $Sugar Details:</h1>

        <div v-if="!active" class="singleData buttonPresent">
          <input
            class="inputText"
            type="text"
            placeholder="Your wallet Address"
          />
          <PopFromShadow>
            <button class="checkButton">Check</button>
          </PopFromShadow>
        </div>

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
    </PopFromShadow>
  </div>
</template> 

<script>
import { defineComponent, ref } from "@nuxtjs/composition-api";
import { useWeb3 } from "@instadapp/vue-web3";
import PopFromShadow from "../atoms/popFromShadow.vue";
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

    return { elementsCard, active };
  },
  components: { PopFromShadow },
});
</script>





<style scoped>
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
  align-items: flex-start;
  text-align: left;
  padding-inline: 50px;
  padding-block: 30px;
}

.singleData {
  display: flex;
  flex-direction: row;
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
  max-height: 490px;
  max-width: 700px;
  display: flex;
  justify-content: center;
  align-items: left;
  padding-block: 20px;
  padding-inline: 20px;
  margin-left: 320px;
}
img {
  max-width: 80px;
  padding-block: 20px;
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
}
</style>