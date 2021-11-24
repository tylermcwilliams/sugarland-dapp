<template>
  <section class="flex-row h-screen w-screen">
    <div class="flex-col justify-center items-center">
      <h1 class="mt-8 insetG">Here you can swap your token</h1>
      <div class="collectionsWrapper pb-10 py-4 flex-row">
        <div class="dataBox flex-row">
          <DataTab>
            <h1>Current Price:</h1>
            <span>0.00017230725</span>
          </DataTab>
          <DataTab>
            <h1>Current Price:</h1>
            <span>0.00017230725</span>
          </DataTab>
          <DataTab>
            <h1>Current Price:</h1>
            <span>0.00017230725</span>
          </DataTab>
          <DataTab>
            <h1>Current Price:</h1>
            <span>0.00017230725</span>
          </DataTab>
        </div>
      </div>
    </div>
  </section>
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
  background-color: #251c48;
  color: #ededed;
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
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  text-align: center;
  color: #ededed;
  line-height: 1.8;
}

p {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  text-align: center;
}

.dataBox {
  margin-top: 40px;
}
.wrapper {
  max-width: 420px;
}

.purple {
  color: #9034e5;
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