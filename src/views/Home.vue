<template>
  <div class="home">
    <h1>Chen in Vue Cli Demo</h1>
  </div>
</template>

<script>
import { reqGetText, reqPostText } from "@/api/text_api";
export default {
  name: "home",
  mounted() {
    reqGetText({ name: "chen" });
    reqPostText({ name: "chen" });
  }
};
</script>
