<template>
  <div
    class="
      bg-gray-1000
      min-h-screen
      flex flex-wrap
      sm:flex-nowrap
      overflow-x-hidden
    "
  >
    <HeaderBar>
      <NuxtLink to="/"><BananaLogo class="beyBananaLogo" /> </NuxtLink>
      <LoginCard class="fixedUP"
    /></HeaderBar>

    <div @click="toggleSidebar" class="burgerMenu">
      <h1 v-if="!collapsed" class="opclText">close menu</h1>
      <h1 v-else class="opclText">open menu</h1>
    </div>

    <SideBar class="fixed sm:relative w-80 min-h-screen z-20" />
    <div class="w-full">
      <Modal class="z-50" />
      <Nuxt class="p-3 sm:p-8" />
    </div>
  </div>
</template>
<script>
import { defineComponent } from "@nuxtjs/composition-api";
import BananaLogo from "~/components/atoms/bananaLogo.vue";
import { useModal } from "~/composables/useModal";
import {
  collapsed,
  closed,
  toggleSidebar,
  sidebarWidth,
  sidebarClose,
} from "~/composables/toggleSidebar.ts";
import HeaderBar from "~/components/nav/HeaderBar.vue";
export default defineComponent({
  components: {
    BananaLogo,
    HeaderBar,
  },
  setup() {
    const { showMintingModal } = useModal();

    return {
      showMintingModal,
      collapsed,
      closed,
      toggleSidebar,
      sidebarWidth,
      sidebarClose,
    };
  },
});
</script>

<style scoped>
.beyBananaLogo {
  width: 170px;
  margin-left: 50px;
}
body {
  overflow-x: hidden;
}
@media (min-width: 320px) {
  .burgerMenu {
    position: absolute;
    top: 30px;
    left: 30px;
    width: 30px;
    height: 30px;
    z-index: 40;
    opacity: 0.7;
  }
}
@media (min-width: 620px) {
  .burgerMenu {
    position: absolute;
    top: 30px;
    left: 30px;
    width: 30px;
    height: 30px;
    z-index: 40;
    opacity: 0.7;
    display: none;
  }
}
.opclText {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 23px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  text-align: center;
  color: #8224e3 !important;
  cursor: pointer;
  white-space: nowrap;
  text-align: center;
}
</style>