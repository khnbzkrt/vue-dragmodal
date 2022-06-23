<template>
  <h2 class="modal-title">
    {{ modalTitle }}
  </h2>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  modalTitle: String,
});
</script>

<style>
.modal-title {
  width: 100%;
  color: rgb(99, 96, 96);
}
</style>