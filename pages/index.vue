<template>
  <section class="flex-row h-screen w-screen collectionsWrapper">
    <div class="pb-10 py-4">
      <div class="dataBox flex-row">
        <DataTab>
          <h3>Current Price:</h3>
          <span>$ {{ SugarPrice }}</span>
        </DataTab>
        <DataTab>
          <h3>Holders:</h3>
          <span>0.00017230725</span>
        </DataTab>
        <DataTab>
          <h3>Circulating:</h3>
          <span>0.00017230725</span>
        </DataTab>
        <DataTab>
          <h3>Market Cap:</h3>
          <span>0.00017230725</span>
        </DataTab>
      </div>

      <div class="flex-row">
        <ChartCard></ChartCard>
        <NewsCard> </NewsCard>
      </div>
    </div>
  </section>
</template>


<script>
import { defineComponent, ref } from "@nuxtjs/composition-api";
import PopFromShadow from "~/components/atoms/popFromShadow.vue";
import sugarPopup from "~/components/modals/sugarPopup.vue";
import { useModal } from "~/composables/useModal";
import sugPrice from "~/composables/getSugarPrice.ts";

import NuxtSSRScreenSize from "nuxt-ssr-screen-size";
import ChartCard from "~/components/cards/chartCard.vue";

export default defineComponent({
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],

  setup(mixins) {
    const { SugarPrice, getSugarPrice } = sugPrice();

    const { showMintingModal } = useModal(sugarPopup);

    let Details = ref([mixins]);

    return {
      Details,
      showMintingModal,
      NuxtSSRScreenSize,
      mixins,
      SugarPrice,
      getSugarPrice,
    };
  },
  components: { PopFromShadow, ChartCard },
});
</script>

<style>
body {
  background: rgb(38, 29, 76);
  background: linear-gradient(
    115deg,
    rgba(38, 29, 76, 1) 0%,
    rgba(91, 39, 145, 1) 100%
  );
}
div {
  display: flex;
  flex-direction: column;
}
h1 {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-size: 18px;
  line-height: 23px;
  font-weight: 400;
  text-align: center;
  line-height: 1.8;
}
h3 {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-size: 18px;
  line-height: 23px;
  font-weight: 400;
  text-align: center;
  line-height: 1.8;
  color: var(--color-tertiary);
}

p {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-size: 16px;
  line-height: 23px;
  font-weight: 400;
  text-align: center;
  color: var(--color-tertiary);
}

span {
  font-weight: 600;
  font-size: 18px;
  color: var(--color-tertiary);
}

.dataBox {
  margin-block: 40px;
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
  .collectionsWrapper {
    padding-block: 40px;
    margin-inline-start: 390px;
  }
}

@media (min-width: 620px) {
  .wrapper {
    max-width: 485px;
  }
  .collectionsWrapper {
    padding-block: 40px;
    margin-inline-start: 390px;
  }
}
</style>