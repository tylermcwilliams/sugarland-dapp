<template>
  <div class="reflectCard">
    <div class="dataRefBox">
      <h1 class="singleData">Check your $Sugar Details:</h1>

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

          <ButtonDefault placeholder="Check from address" />
        </div>
      </div>

      <div class="resutsWrapper">
        <div class="dataBox">
          <DataTab>
            <h3>Current Tokens:</h3>
            <span>{{ elementsCard.CurrentBalance }}</span>
          </DataTab>
          <DataTab>
            <h3>Total Purchased till date:</h3>
            <span>{{ elementsCard.TotalPurchased }}</span>
          </DataTab>
          <DataTab>
            <h3>Total Sold till date:</h3>
            <span>{{ elementsCard.TotalSold }}</span>
          </DataTab>
          <DataTab>
            <h3>Total Reflections Earned:</h3>
            <span>{{ elementsCard.TotalReflections }}</span>
          </DataTab>
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

    return {
      elementsCard,
      active,
      ButtonDefault,
      showMintingModal,
    };
  },
  components: { PopFromShadow },
});
</script>





<style scoped>
.dataBox {
  margin-block: 20px;
}
.resutsWrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
h3 {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
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
@media (min-width: 320px) {
  .reflectCard {
    max-height: 800px;
    width: 950px;
    display: flex;
    justify-content: center;
    align-items: center;

    padding-inline: 40px;
    margin-left: 0;
  }
  .buttonsReflections {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-block: 20px;
    width: 350px;
  }
}
@media (min-width: 520px) {
  .reflectCard {
    max-height: 800px;
    width: 950px;
    display: flex;
    justify-content: center;
    align-items: center;

    padding-inline: 40px;
    margin-left: 320px;
  }
  .buttonsReflections {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-block: 20px;
    width: 550px;
  }
}
</style>

