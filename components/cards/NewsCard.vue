<template>
  <div class="newsCard">
    <h1>Sugarland News</h1>
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
  height: 350px;
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  border-radius: 10px;
  box-shadow: 0px 2px 20px -2px #53378d;
  /* border: 1px solid rgba(255, 255, 255, 0.18); */
  padding-inline: 30px;
  padding-block: 20px;
  margin-inline: 20px;
  margin-block: 40px;
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
  font-weight: 300;
  color: #fff;
  opacity: 0.8;
}
</style>