<script setup>
import CustomHeader from "./components/CustomHeader.vue";
import CustomeFooter from "./components/CustomeFooter.vue";
import ModalBody from "./components/ModalBody.vue";

const testSubmit = () => {
  alert("Submit success");
};
</script>

<template>
  <drag-modal :is-open="true" :modalBody="ModalBody" />
</template>

<style>
</style>
