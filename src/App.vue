<script setup>
import Modal from "./components/Modal.vue";
import Deneme from "./components/deneme.vue";
</script>

<template>
  <Modal :is-open="true" size="xl" :bgCloseEvent="false" :modalTitle="Deneme" />
</template>

<style>
</style>
