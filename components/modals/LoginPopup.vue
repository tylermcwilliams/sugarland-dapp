<template>
  <div v-if="isShown" class="modalBackground" @click.self="close()">
    <div class="absolute top-10 right-10">
      <transition :duration="{ enter: 300, leave: 200 }">
        <p class="cursor-pointer" @click="close()">Close</p>
      </transition>
    </div>
    <div class="modalPopUp z-30">
      <h1 class="modalTitle">Connect your wallet</h1>

      <PopFromShadow class="w-52 self-center">
        <ButtonDefault placeholder="Connect"
          ><img src="~/assets/img/metamask-fox.svg" alt="" /></ButtonDefault
      ></PopFromShadow>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import { useModal } from "~/composables/useModal";
import InputRange from "../atoms/inputRange.vue";
export default defineComponent({
  name: "LoginPopup",
  props: {
    show: { type: Boolean, default: false },
  },
  setup() {
    const { isShown, props, modal, close } = useModal();
    return { isShown, props, modal, close };
  },
  components: { InputRange },
});
</script>

<style scoped>
.modalBackground {
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(55, 55, 55, 0.6);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modalPopUp {
  max-height: 500px;
  max-width: 650px;
  background: #faefef;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 80px;
  /* padding-inline: 120px; */
  border-radius: 30px;
  margin-inline: 20px;
  padding: 75px;
}
.modalTitle {
  padding-top: 20px;
  padding-bottom: 80px;
}
</style>
