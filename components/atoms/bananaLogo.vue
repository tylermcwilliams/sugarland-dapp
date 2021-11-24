<template>
  <div class="flex justify-center">
    <img
      class="logoBanana"
      src="https://beystudio.it/wp-content/uploads/2020/12/DIGITAL.svg"
      alt=""
    />
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  name: "logoBanana",
  setup() {
    return {};
  },
});
</script>





<style scoped>
.logoBanana {
  margin-block: 12px;
  margin-block-end: 33px;
  cursor: pointer;
  transform-style: preserve-3d;
  animation: rotate3d 5s linear infinite;
}

@keyframes rotate3d {
  0% {
    transform: perspective(1000px) rotateY(0deg);
  }

  100% {
    transform: perspective(1000px) rotateY(360deg);
  }
}
</style>