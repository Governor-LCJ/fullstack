<template>
  <div class="footer">footer</div>
</template>

<script>
import notification from "./notification.js"

export default {
  mounted() {
    setTimeout(() => {
      open({
        title: "title1",
        content: "content1"
      });
    }, 3000);
  }
};
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  color: green;
}
</style>