<template>
  <button @click="clicked">{{ placeholder }}</button>
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
h1 {
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
  color: #acacac;
}

button {
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
  color: #fff !important;
}
</style>