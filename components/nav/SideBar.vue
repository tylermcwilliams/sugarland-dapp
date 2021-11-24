<template>
  <div class="sideBarWrap" :style="{ width: sidebarWidth }">
    <NuxtLink v-if="!collapsed" to="/"
      ><BananaLogo class="beyBananaLogo" />
      <p class="-mt-4 pb-12">
        $Sugar: <span> ${{ SugarPrice }}</span>
      </p></NuxtLink
    >
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
import sugPrice from "~/composables/getSugarPrice.ts";
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
    const { SugarPrice, getSugarPrice } = sugPrice();
    console.log(" Test ", sugPrice());
    console.log(" Price: ", SugarPrice.value);
    const utilLinks = [
      {
        page: "/",
        title: "Dashboard",
      },
      {
        page: "/swap",
        title: "Sugar Swap",
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
      getSugarPrice();
      console.log("Prova Prezzo", getSugarPrice());
      window.setInterval(() => {
        getSugarPrice();
      }, 20000);
    });

    return {
      utilLinks,
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
span {
  color: #fff;
  margin-left: 5px;
}
a.nuxt-link-exact-active {
  color: #8224e3;
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
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
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
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  line-height: 2.5;
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
}

.custNuxtLink {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 23px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  text-align: center;
  color: #8224e3;
}

@media (min-width: 320px) {
  .copy {
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
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 400;
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