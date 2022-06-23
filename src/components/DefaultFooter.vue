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

.footer-button .cancel,
.submit {
  outline: none;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.footer-button .cancel {
  margin-right: 5px;
  background: #f5f5f5;
  color: rgb(121, 119, 119);
}

.footer-button .cancel:hover {
  background: #e2e2e2;
}

.footer-button .submit {
  background: #ccfaf2;
  color: rgb(11, 143, 136);
}

.footer-button .submit:hover {
  background: #bbeae2;
}
</style>