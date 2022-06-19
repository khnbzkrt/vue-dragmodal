<template>
  <div class="footer-button">
    <button class="cancel" @click="onCancel">Cancel</button>
    <button class="submit" @click="onSubmit">Submit</button>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  onCancel: Function,
  onSubmit: Function,
});
</script>

<style>
.footer-button {
  display: flex;
  justify-content: flex-end;
}
</style>