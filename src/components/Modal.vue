<template>
  <div
    class="modal"
    :class="{ isOpen: isOpen }"
    @click="closeModal"
    ref="modal"
    :style="state.styleObject"
  >
    <div class="modal-content md" :class="size">
      <div class="modal-header">
        <div v-if="typeof modalTitle == 'object'">
          <component :is="modalTitle" />
        </div>
        <default-header
          v-if="typeof modalTitle == 'string'"
          :modalTitle="modalTitle"
        ></default-header>
        <default-header
          v-if="typeof modalTitle == 'undefined'"
          modalTitle="Modal Title"
        ></default-header>
        <span class="modal-close" @click="closeModal">x</span>
      </div>
      <div class="modal-body">Body</div>
      <div class="modal-footer">Footer</div>
    </div>
  </div>
</template>

<script setup>
import DefaultHeader from "./DefaultHeader.vue";
import { defineProps, reactive, ref } from "vue";
const modal = ref();

const state = reactive({
  styleObject: {
    "--opacity": props.bgOpacity ? props.bgOpacity : 0.5,
    "--bg-color": props.bgColor ? props.bgColor : "#333",
  },
});

const props = defineProps({
  isOpen: Boolean,
  size: String,
  bgCloseEvent: Boolean,
  bgColor: String,
  bgOpacity: Number,
  modalTitle: Object | String,
});

const closeModal = (event) => {
  if (event.target.className == "modal-close") {
    modal.value.classList.remove("isOpen");
  }

  if (
    event.target.classList.value.indexOf("modal") > -1 &&
    props.bgCloseEvent == true
  ) {
    modal.value.classList.remove("isOpen");
  }
};
</script>

<style>
.modal {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: none;
  justify-content: center;
  align-items: center;
}

.modal:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: var(--opacity);
  background: var(--bg-color);
}

.modal .modal-content {
  background: #fff;
  padding: 40px;
  position: relative;
  z-index: 1;
}

.modal .modal-content.md {
  width: 25%;
  min-height: 10%;
}

.modal .modal-content.lg {
  width: 45%;
  min-height: 10%;
}

.modal .modal-content.xl {
  width: 65%;
  min-height: 10%;
}

.modal .modal-content.xxl {
  width: 85%;
  min-height: 10%;
}

.modal .modal-content.full {
  width: 100%;
  height: 100vh;
  min-height: 10%;
}

.modal .modal-content .modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.modal .modal-content .modal-header .modal-close {
  cursor: pointer;
  font-weight: bold;
  color: #333;
  font-size: 22px;
}

.modal .modal-content .modal-body {
  padding: 20px 0px;
}

.modal .modal-content .modal-footer {
  padding: 20px 0px;
}

.isOpen {
  display: flex;
}
</style>