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
  border-bottom-width: 1px;
  border-bottom-color: var(--border-color);
  background-color: var(--bg);
}
</style>