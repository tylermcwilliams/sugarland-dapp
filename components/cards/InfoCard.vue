<template>
  <div>
    <!-- <slot></slot> -->
    <h1>{{ title }}</h1>
    <p>{{ detail }}</p>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  name: "InfoCard",
  props: ["title", "detail"],
  setup() {
    return {};
  },
});
</script>





<style scoped>
div {
  display: flex;
  flex-direction: column;
}
h1 {
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
  color: #acacac;
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
  color: #b93cb3 !important;
}
</style>