<template>
  <div class="headerWrap z-50">
    <slot></slot>
  </div>
</template>
<script>
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  name: "HeaderBar",
  setup() {
    return {};
  },
});
</script>





<style scoped>
.headerWrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 70px;
  border-block-end: solid 1px #382b6a;
  background-color: #251c48;
}
</style>