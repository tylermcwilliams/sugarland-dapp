<template>
  <div class="sideBarWrap" :style="{ width: sidebarWidth }">
    <NuxtLink v-if="!collapsed" to="/"
      ><BananaLogo class="beyBananaLogo" />
      <!-- <p class="-mt-8 pb-12">BeY Verse</p> --></NuxtLink
    >
    <div class="displayMobile">
      <div v-if="!collapsed" @click="toggleSidebar">
        <NuxtLink
          v-for="link in utilLinks"
          :key="link.title"
          class="p-2 baseStyle self-center place-self-center"
          :to="link.page"
          >{{ link.title }}</NuxtLink
        >
      </div>
    </div>
    <div class="displayDesktop">
      <div v-if="!collapsed">
        <NuxtLink
          v-for="link in utilLinks"
          :key="link.title"
          class="p-2 baseStyle self-center place-self-center"
          :to="link.page"
          >{{ link.title }}</NuxtLink
        >
      </div>
    </div>

    <div class="flex-row copyWrapper">
      <!--  <span class="closeIcon"><p></p></span> -->
      <a
        v-if="!collapsed"
        class="copy"
        target="_blank"
        href="https://www.sugarlandcoin.com/"
        ><!-- <strong>Sugarland</strong> --></a
      >
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from "@nuxtjs/composition-api";
import BananaLogo from "~/components/atoms/bananaLogo.vue";
import {
  collapsed,
  closed,
  toggleSidebar,
  sidebarWidth,
  sidebarClose,
} from "~/composables/toggleSidebar.ts";
export default defineComponent({
  name: "SideBar",
  components: {
    BananaLogo,
  },
  setup() {
    const utilLinks = [
      {
        page: "/",
        title: "Dashboard",
      },
      {
        page: "/collections",
        title: "NFT Collections",
      },
      {
        page: "/profile",
        title: "Governance",
      },
    ];
    onMounted(() => {
      if (window.innerWidth < 520) {
        toggleSidebar();
      }
    });

    return {
      utilLinks,
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
a.nuxt-link-exact-active {
  color: #8224e3;
}
div {
  display: flex;
  flex-direction: column;
}

p {
  font-family: "Inconsolata", monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  font-family: "Inconsolata", monospace;
  font-style: normal;
  font-weight: 200;
  line-height: 23px;
  text-align: center;
  color: #8224e3 !important;
}
.copyWrapper {
  width: 100%;
}

.sideBarWrap {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  height: 100vh;
  border-style: solid;
  border-right-width: 1px;
  border-color: #8424e326;
  margin-right: 20px;
  background-color: #251c48;
  padding-block-start: 120px;
  transition: all ease 0.3s;
}

.beyBananaLogo {
  width: 100%;
  padding-inline: 15px;
  top: 10px;
}

.baseStyle {
  font-family: "Inconsolata", monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  font-family: "Inconsolata", monospace;
  font-style: normal;
  font-weight: 200;
  line-height: 23px;
  text-align: center;
  color: #ededed;
}

.closeIcon {
  position: absolute;
  bottom: 10px;
  right: 10px;
  white-space: nowrap;
}
.closeIcon p {
  font-family: "Inconsolata", monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 23px;
  text-align: center;
  font-family: "Inconsolata", monospace;
  font-style: normal;
  font-weight: 200;
  line-height: 23px;
  text-align: center;
  color: #8224e3 !important;
  cursor: pointer;
}

.custNuxtLink {
  font-family: "Inconsolata", monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 23px;
  text-align: center;
  font-family: "Inconsolata", monospace;
  font-style: normal;
  font-weight: 200;
  line-height: 23px;
  text-align: center;
  color: #8224e3;
}

@media (min-width: 320px) {
  .copy {
    font-family: "Inconsolata", monospace;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 23px;
    text-align: center;
    font-family: "Inconsolata", monospace;
    font-style: normal;
    font-weight: 200;
    line-height: 23px;
    text-align: center;
    color: #8224e3 !important;
    position: absolute;
    bottom: 10px;
    left: 30px;
    white-space: nowrap;
  }
  .displayMobile {
    display: flex;
  }
  .displayDesktop {
    display: none;
  }
}

@media (min-width: 620px) {
  .copy {
    font-family: "Inconsolata", monospace;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 23px;
    text-align: center;
    font-family: "Inconsolata", monospace;
    font-style: normal;
    font-weight: 200;
    line-height: 23px;
    text-align: center;
    color: #8224e3 !important;
    position: absolute;
    bottom: 10px;
    left: 25%;
    white-space: nowrap;
  }
  .displayMobile {
    display: none;
  }
  .displayDesktop {
    display: flex;
  }
}
</style>