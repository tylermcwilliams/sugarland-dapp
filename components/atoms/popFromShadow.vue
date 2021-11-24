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
  background: rgba(112, 106, 254, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding-block: 5px;
  padding-inline: 12px;
  cursor: pointer;
}
</style>