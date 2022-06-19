<script setup>
import Modal from "./components/Modal.vue";
import CustomHeader from "./components/CustomHeader.vue";
import CustomeFooter from "./components/CustomeFooter.vue";
import ModalBody from "./components/ModalBody.vue";

const testSubmit = () => {
  alert("Submit success");
};
</script>

<template>
  <Modal
    :is-open="true"
    size="xl"
    :bgCloseEvent="false"
    :modalTitle="CustomHeader"
    :onSubmit="testSubmit"
    :modalBody="ModalBody"
    :bgOpacity="0"
    :isDragable="false"
  />
</template>

<style>
</style>
