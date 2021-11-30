<template>
  <div class="swapWrapper">
    <PopFromShadow class="w-52 self-center">
      <slot></slot>
    </PopFromShadow>
  </div>
</template> 

<script>
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  name: "DataTab",

  setup() {
    return {};
  },
});
</script>





<style scoped>
img {
  max-width: 80px;
  padding-block: 20px;
}

div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
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
  color: var(--color-tertiary);
}

p {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 23px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  color: var(--color-tertiary);
}
.dataBoxWrapp {
  width: 220px;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  padding-inline: 30px;
  padding-block: 15px;
}

.swapWrapper {
  margin-inline: 20px !important;
}

.purple {
  color: var(--color-secondary) !important;
}
.swapWrapper {
  max-width: 450px;
}
</style>