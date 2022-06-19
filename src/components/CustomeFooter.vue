<template>
  <div class="bg">
    <button @click="testCustom">Cancel</button>
    <button>Submit</button>
  </div>
</template>

<script setup>
const testCustom = () => {
  alert("success");
};
</script>

<style>
.bg {
  width: 100%;
  background-color: red;
}
</style>