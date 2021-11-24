<template>
  <div>
    <div class="presenceBox">
      <img class="sigylImg" :src="image" alt="" />
    </div>
    <h1>{{ title }}</h1>
    <p>
      $ABY Generated: <span class="purple"> {{ detail }}</span>
    </p>
  </div>
</template> 

<script>
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  name: "PresenceCard",
  props: ["image", "title", "detail"],
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
  font-size: 14px;
  line-height: 23px;
  text-align: center;
  font-family: "Inconsolata", monospace;
  font-style: normal;
  font-weight: 200;
  line-height: 23px;
  text-align: center;
  color: #acacac;
}
.presenceBox {
  height: 120px;
  width: 120px;
  background: #f1f1f1;
  box-shadow: 10px 10px 70px #505050, -10px -10px 70px #151515;
  border-radius: 60px;
}

.purple {
  color: #8224e3 !important;
}
</style>