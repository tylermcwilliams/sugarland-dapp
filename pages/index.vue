<template>
  <div class="flex-col justify-center items-center h-screen w-screen">
    <div class="pt-1 wrapper insetG">
      <h1>
        Hey!👋 You just landed in the <span class="purple">BeY Verse,</span> BeY
        Studio digital creative hub for blockchain projects.
      </h1>
      <h1 class="pt-10">
        We love tech and art but most of all we love involving awesome people in
        making awesome things.
      </h1>
      <!--       <h1 class="pt-10">
        This is a place where wonderful people in the process of making awesome
        things!
      </h1> -->
      <div class="flex-row py-32 space-x-20 pb-10"></div>
    </div>
  </div>
</template>


<script>
import { defineComponent, ref } from "@nuxtjs/composition-api";
import PopFromShadow from "~/components/atoms/popFromShadow.vue";
import AbyPopup from "~/components/modals/AbyPopup.vue";
import { useModal } from "~/composables/useModal";
/* import { useModal } from "~/composables/useModal"; */

import NuxtSSRScreenSize from "nuxt-ssr-screen-size";

export default defineComponent({
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],

  setup(mixins) {
    const { showMintingModal } = useModal(AbyPopup);

    let Details = ref([mixins]);
    /* console.log(Details.value); */

    return { Details, showMintingModal, NuxtSSRScreenSize, mixins };
  },
  components: { PopFromShadow },
});
</script>

<style>
body {
  background-color: #f1f1f1;
  color: #3a3335;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
}

div {
  display: flex;
  flex-direction: column;
}
h1 {
  font-family: "Inconsolata", monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  font-family: "Inconsolata", monospace;
  font-style: normal;
  font-weight: 200;
  line-height: 23px;
  text-align: center;
  color: #3a3335;
  line-height: 1.8;
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
}

.wrapper {
  max-width: 420px;
}

.purple {
  color: #8224e3;
}

@media (min-width: 320px) {
  .wrapper {
    max-width: 420px;
    padding-inline: 40px;
  }
}

@media (min-width: 620px) {
  .wrapper {
    max-width: 485px;
  }
  .insetG {
    margin-left: 150px;
  }
}
</style>