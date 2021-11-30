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
  background: var(--bg-tertiary);
  border-radius: 10px;
  padding-block: 5px;
  padding-inline: 12px;
  cursor: pointer;
}
</style>