<template>
  <div class="flying">
    <PopFromShadow class="w-52">
      <ButtonDefault
        placeholder="Connect Your Wallet"
        @clicked="showMintingModal"
      >
      </ButtonDefault
    ></PopFromShadow>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import { useModal } from "~/composables/useModal";
import LoginPopup from "~/components/modals/LoginPopup.vue";
export default defineComponent({
  name: "LoginCard",
  setup() {
    const { showMintingModal } = useModal(LoginPopup);

    return { showMintingModal };
  },
});
</script>





<style scoped>
.flying {
  position: absolute;
  right: 25px;
  top: 25px;
}
</style>