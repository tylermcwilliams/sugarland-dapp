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
  background-color: var(--button-color);
  color: var(--color-tertiary);
  padding-inline: 25px;
  padding-block: 7px;
  border-radius: 10px;
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