<template>
  <div class="flying">
    <PopFromShadow class="w-52">
      <ButtonDefault
        v-if="!active"
        placeholder="Connect Your Wallet"
        @clicked="showMintingModal"
      />
      <span v-if="active"> {{ account }}... </span>
    </PopFromShadow>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import { useWeb3 } from "@instadapp/vue-web3";
import { useModal } from "~/composables/useModal";
import LoginPopup from "~/components/modals/LoginPopup.vue";
export default defineComponent({
  name: "LoginCard",
  setup() {
    const { active, account } = useWeb3();
    const { showMintingModal } = useModal(LoginPopup);

    return {
      showMintingModal,
      active,
      account,
    };
  },
});
</script>

<style scoped>
.flying {
  position: absolute;
  right: 50px;
  top: 16px;
  font-size: 12px;
}
</style>
