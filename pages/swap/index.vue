<template>
  <section class="flex-row h-screen w-screen">
    <div class="flex-col justify-center items-center">
      <h1 class="mt-8 insetG">Here you can swap your token</h1>
      <div class="collectionsWrapper pb-10 py-4"></div>
      <div class="flex-col align-middle"></div>
    </div>
  </section>
</template>



<script>
import { defineComponent, ref } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    return {};
  },
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
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  text-align: center;
}

p {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  font-weight: 400;
  line-height: 23px;
  text-align: center;
  color: #8224e3;
}
li {
  padding-block: 5px;
}
ul {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 23px;
  text-align: center;
  font-weight: 400;
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
  .insetG {
    margin-top: 120px;
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
  .insetG {
    margin-left: 280px;
    margin-top: 50px;
  }
}
</style>