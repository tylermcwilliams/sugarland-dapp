<template>
  <div class="newsCard">
    <h1>Sugar News</h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id dolorum,
      facilis perspiciatis quo est quasi! Dolor sit amet consectetur adipisicing
      elit. Id dolorum, facilis perspiciatis quo est quasi!
    </p>
    <slot></slot>
  </div>
</template> 

<script>
import { defineComponent, ref } from "@nuxtjs/composition-api";
import PopFromShadow from "../atoms/popFromShadow.vue";
export default defineComponent({
  name: "PresenceFullCard",

  setup(props) {
    const Previews = ref([]);
    return { Previews };
  },
  components: { PopFromShadow },
});
</script>





<style scoped>
.newsCard {
  max-height: 490px;
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(91, 39, 146, 0.3);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 10px;
  box-shadow: 0px 7px 31px -2px #3b2162;
  /* border: 1px solid rgba(255, 255, 255, 0.18); */
  padding-inline: 30px;
  padding-block: 20px;
  margin-inline: 20px;
}
img {
  max-width: 80px;
  padding-block: 20px;
}

h1 {
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  margin-block-end: 20px;
}

p {
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  color: var(--color-secondary) !important;
}
</style>