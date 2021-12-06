<template>
  <button class="buttonDefault" @click="clicked">{{ placeholder }}</button>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  name: "ButtonDefault",
  props: {
    placeholder: {
      type: String,
      required: true,
    },
  },
  methods: {
    clicked() {
      this.$emit("clicked");
    },
  },
  setup() {
    return {};
  },
});
</script>





<style scoped>
.buttonDefault {
  background: rgba(255, 225, 225, 1);
  background: linear-gradient(179.98deg, #3d2062 0.02%, #431f64 99.98%);
  box-shadow: 0px 24px 74px rgba(37, 0, 84, 0.5);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #fff;
  padding-inline: 25px;
  padding-block: 7px;
  margin-inline: 10px;
}

h1 {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  color: #acacac;
}

button {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-size: 13px;
  line-height: 23px;
  text-align: center;
  font-style: normal;
  font-weight: 400;
}
</style>