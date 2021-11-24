<template>
  <section class="flex-row h-screen w-screen">
    <div class="flex-col justify-center items-center">
      <div class="collectionsWrapper pb-10 py-12">
        <PresenceFullCard
          class="collectionCard"
          v-for="Preview in Previews"
          :key="Preview.id"
        >
          <img class="imgCollection" :src="Preview.image" alt="" />
          <div class="text-left py-4 pb-8">
            <ul class="text-left">
              <li>
                Name:
                <span class="text-white">{{ Preview.collectionName }}</span>
              </li>
              <li>
                Util:
                <span class="text-white">{{ Preview.artistName }} </span>
              </li>
              <li>
                Type:
                <span class="text-white">{{ Preview.collectionType }}</span>
              </li>
            </ul>
          </div>
          <PopFromShadow class="w-52 self-center">
            <button-default
              placeholder="Discover Collection"
              @clicked="showMintingModal"
          /></PopFromShadow>
        </PresenceFullCard>
      </div>
      <div class="flex-col align-middle"></div>
    </div>
  </section>
</template>


<script>
import { defineComponent, ref } from "@nuxtjs/composition-api";
import PopFromShadow from "~/components/atoms/popFromShadow.vue";
import PopFromShadow1 from "~/components/atoms/popFromShadow.vue";
import IncreaseMass from "~/components/modals/IncreaseMass.vue";
import { useModal } from "~/composables/useModal";
import PresenceFullCard from "~/components/cards/PresenceFullCard.vue";

export default defineComponent({
  setup() {
    const { showMintingModal } = useModal(IncreaseMass);

    let Previews = ref([
      {
        id: "1",
        image: "https://dinopixel.com/preload/0520/pixel-key.png",
        collectionName: "NFT Governance Key",
        artistName: "Access to Sugar Governance",
        collectionType: "Ultra Rare",
      },
      {
        id: "2",
        image:
          "https://www.sugarlandcoin.com/wp-content/uploads/2021/11/Box.png",
        collectionName: "NFT Box",
        artistName: "Random NFT from Sugarland",
        collectionType: "Rare",
      },
    ]);
    return { Previews, showMintingModal };
  },
  components: { PopFromShadow, PopFromShadow1, PresenceFullCard },
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
  font-family: "Inconsolata", monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  text-align: center;
  font-family: "Inconsolata", monospace;
  font-style: normal;
  font-weight: 200;
  text-align: center;
}

p {
  font-family: "Inconsolata", monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  font-weight: 200;
  line-height: 23px;
  text-align: center;
  color: #8224e3;
}
li {
  padding-block: 5px;
}
ul {
  font-family: "Inconsolata", monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 23px;
  text-align: center;
  font-weight: 200;
  text-align: center;
  color: rgba(255, 255, 255, 0.688);
}

.imgCollection {
  width: 150px;
}

@media (min-width: 320px) {
  .collectionCard {
    max-width: 400px;
    margin-block: 40px;
    margin-inline: 40px;
  }
  .collectionsWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

@media (min-width: 620px) {
  .collectionCard {
    max-width: 400px;
    margin-block: 40px;
    margin-inline: 50px;
  }
  .collectionsWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-inline-start: 280px;
  }
}
</style>