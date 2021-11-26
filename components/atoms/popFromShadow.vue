<template>
  <div class="shadowWrapper">
    <!-- <slot></slot> -->
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  name: "popFromShadow",
  setup() {
    return {};
  },
});
</script>





<style scoped>
.shadowWrapper {
  background: rgba(148, 13, 255, 0.45);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding-block: 5px;
  padding-inline: 12px;
  cursor: pointer;
}
</style>