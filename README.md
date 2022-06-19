# vue-dragmodal

This package is dragable modal for Vue.js

## Setup

```sh
npm install vue-dragmodal
```

## Configs

 Option | Type | Values | Description 
 --- | --- | --- | ---
 isOpen | boolean | `true` or `false` | If you want open the modal, you can set `true`
size | string |  `md`, `lg`, `xl`, `xxl` or `full` | Modal width size
bgCloseEvent | boolean | `true` or `false`| If you want to close when modal background clicked, you can set this value as `true`
bgColor | string | `css colors`| You can set custom background color the modal
bgOpacity | number | `number values`| You can set opacity for `bgColor`
modalTitle | - | `string` or `vue template`| You can customize your Modal Title
modalBody | - | `string` or `vue template`| You can customize your Modal Body
modalFooter | - | `string` or `vue template`| You can customize your Modal Footer
onSubmit | function | - | You can set onSubmit function for default Modal Footer buttons
isDragable | boolean | `true` or `false` | You can activate dragable mode to Modal. Set `true` for activation

## Example
---
``` vue
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
```

### Dependencies
---
* FontAwesome 5.15.4 (import with url your css file)

### Keywords
---
modal, vue-modal, vue, dragable-modal, dragable