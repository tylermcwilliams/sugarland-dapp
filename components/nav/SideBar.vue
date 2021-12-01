<template>
  <div class="sideBarWrap" :style="{ width: sidebarWidth }">
    <NuxtLink class="containedWidth" to="/"> <SugarLogo /> </NuxtLink>
    <NuxtLink v-if="!collapsed" to="/">
      <p class="-mt-4 pb-12">
        $Sugar: <span> ${{ SugarPrice }}</span>
      </p></NuxtLink
    >

    <!--     <NuxtLink v-if="!collapsed" to="/"
      ><sugarLogo class="sugarLogo" />
      <p class="-mt-4 pb-12">
        $Sugar: <span> ${{ SugarPrice }}</span>
      </p></NuxtLink
    > -->
    <div class="linkWrapper">
      <div class="displayMobile text-left">
        <div v-if="!collapsed" @click="toggleSidebar">
          <NuxtLink
            v-for="link in utilLinks"
            :key="link.title"
            class="p-2 baseStyle self-center text-left"
            :to="link.page"
            >{{ link.title }}</NuxtLink
          >
        </div>
      </div>
      <div class="displayDesktop text-left">
        <div class="text-left" v-if="!collapsed">
          <NuxtLink
            v-for="link in utilLinks"
            :key="link.title"
            class="p-2 baseStyle self-center"
            :to="link.page"
            >{{ link.title }}</NuxtLink
          >
        </div>
        <div class="separatorLine"></div>
      </div>
      <div class="displayDesktop text-left">
        <div class="text-left" v-if="!collapsed">
          <NuxtLink
            v-for="link in otherLinks"
            :key="link.title"
            class="p-2 baseStyle self-center"
            :to="link.page"
            >{{ link.title }}</NuxtLink
          >
        </div>
        <div class="separatorLine"></div>
      </div>
      <div class="displayDesktop text-left">
        <div class="text-left" v-if="!collapsed">
          <NuxtLink
            v-for="link in lastLinks"
            :key="link.title"
            class="p-2 baseStyle self-center"
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
    <div class="flex-row copyWrapper">
      <SocialCard />
    </div>
  </div>
</template>

<script>
import sugPrice from "~/composables/getSugarPrice.ts";
import { defineComponent, onMounted } from "@nuxtjs/composition-api";
import sugarLogo from "~/components/atoms/sugarLogo.vue";

import {
  collapsed,
  closed,
  toggleSidebar,
  sidebarWidth,
  sidebarClose,
} from "~/composables/toggleSidebar.ts";
import SocialCard from "../atoms/socialCard.vue";

export default defineComponent({
  name: "SideBar",
  components: {
    sugarLogo,
    SocialCard,
  },
  setup() {
    const { SugarPrice, getSugarPrice } = sugPrice();

    const utilLinks = [
      {
        page: "/",
        title: "Stats",
      },
      {
        page: "/swap",
        title: "Swap",
      },
      {
        page: "/tracker",
        title: "Reflections",
      },
    ];
    const otherLinks = [
      {
        page: "/collections",
        title: "Mint NFT [SOON]",
      },
      {
        page: "/profile",
        title: "Stake NFT [SOON]",
      },
    ];
    const lastLinks = [
      {
        page: "/governance",
        title: "Governance [SOON]",
      },
      {
        page: "/merch",
        title: "Merch [SOON]",
      },
    ];

    onMounted(() => {
      if (window.innerWidth < 520) {
        toggleSidebar();
      }
      getSugarPrice();
      window.setInterval(() => {
        getSugarPrice();
      }, 20000);
    });

    return {
      utilLinks,
      otherLinks,
      lastLinks,
      collapsed,
      closed,
      toggleSidebar,
      sidebarWidth,
      sidebarClose,
      SugarPrice,
      getSugarPrice,
    };
  },
});
</script>





<style scoped>
.linkWrapper {
  display: flex;
  align-items: flex-start;
}
span {
  margin-left: 5px;
}
a.nuxt-link-exact-active {
  color: var(--color-secondary);
}
div {
  display: flex;
  flex-direction: column;
}

p {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 23px;
  text-align: left;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  color: var(--color-secondary);
}

span {
  font-weight: 500;
  color: var(--color-secondary);
}
.copyWrapper {
  width: 100%;
  align-items: center;
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
  border-color: var(--border-color);
  margin-right: 20px;
  padding-block-start: 20px;
  transition: all ease 0.3s;
  background: rgb(37, 28, 72);
  background: linear-gradient(
    353deg,
    rgba(37, 28, 72, 1) 0%,
    rgba(59, 29, 109, 1) 100%
  );
}

.sugarLogo {
  width: 100%;
  padding-inline: 15px;
  top: 10px;
}

.baseStyle {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: left;
  font-family: "Montserrat", sans-serif;
  line-height: 2.5;
  align-self: start;
}

.closeIcon {
  position: absolute;
  bottom: 10px;
  right: 10px;
  white-space: nowrap;
}
.closeIcon p {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 23px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  text-align: center;
  color: var(--color-secondary) !important;
  cursor: pointer;
}

.custNuxtLink {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-size: 14px;
  line-height: 23px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  text-align: left;
  color: var(--color-secondary);
  align-self: start;
}
.separatorLine {
  width: 150px;
  height: 1px;
  background-color: var(--color-opaque);
  margin-block: 20px;
}

@media (min-width: 320px) {
  .copy {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 23px;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    color: var(--color-secondary) !important;
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
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 23px;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    color: var(--color-secondary) !important;
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