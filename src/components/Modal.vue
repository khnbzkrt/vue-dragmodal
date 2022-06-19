<template>
  <div
    class="modal"
    :class="{ isOpen: isOpen }"
    @click="closeModal"
    ref="modal"
    :style="state.styleObject"
  >
    <div
      class="modal-content md"
      :class="size"
      @mousedown="modalSelected"
      ref="modalContent"
    >
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
        <span class="modal-close" @click="closeModal"
          ><i class="fas fa-times"></i
        ></span>
      </div>
      <div class="modal-body">
        <div v-if="typeof modalBody == 'object'">
          <component :is="modalBody" />
        </div>
      </div>
      <div class="modal-footer">
        <div v-if="typeof modalFooter == 'object'">
          <component :is="modalFooter" />
        </div>
        <default-footer
          v-if="typeof modalFooter == 'undefined'"
          :onCancel="closeModal"
          :onSubmit="submitModal"
        ></default-footer>
      </div>
    </div>
  </div>
</template>

<script setup>
import DefaultHeader from "./DefaultHeader.vue";
import { defineProps, reactive, ref } from "vue";
import DefaultFooter from "./DefaultFooter.vue";
const modal = ref();
const modalContent = ref();

const state = reactive({
  styleObject: {
    "--opacity": props.bgOpacity != "undefined" ? props.bgOpacity : 0.5,
    "--bg-color": props.bgColor ? props.bgColor : "#333",
    "--cursor-move": props.isDragable ? "move" : "normal",
  },
});

const props = defineProps({
  isOpen: Boolean,
  size: String,
  bgCloseEvent: Boolean,
  bgColor: String,
  bgOpacity: Number,
  modalTitle: Object | String,
  modalFooter: Object,
  modalBody: Object,
  onSubmit: Function,
  isDragable: Boolean,
});

const closeModal = (event) => {
  if (event.target.className.indexOf("fa-times") > -1) {
    modal.value.classList.remove("isOpen");
  }

  if (event.target.className == "cancel") {
    modal.value.classList.remove("isOpen");
  }

  if (
    event.target.classList.value.indexOf("modal") > -1 &&
    props.bgCloseEvent == true
  ) {
    modal.value.classList.remove("isOpen");
  }
};

const submitModal = () => {
  if (typeof props.onSubmit == "function") {
    props.onSubmit();
  }
};

const modalMove = (e) => {
  modalContent.value.style.left = e.clientX + "px";
  modalContent.value.style.top = e.clientY + "px";
};

const modalSelected = (e) => {
  if (props.isDragable) {
    document.body.addEventListener("mousemove", modalMove);
    document.body.addEventListener("mouseup", function () {
      document.body.removeEventListener("mousemove", modalMove);
    });
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
  overflow: hidden;
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
  padding: 20px 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
}

.modal .modal-content:hover {
  cursor: var(--cursor-move);
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
  font-size: 18px;
}

.modal .modal-content .modal-body {
  padding: 20px 0px;
}

.modal .modal-content .modal-footer .cancel,
.submit {
  outline: none;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.modal .modal-content .modal-footer .cancel {
  background: #ddd;
  margin-right: 3px;
}

.modal .modal-content .modal-footer .submit {
  background: rgb(136, 235, 136);
}

.isOpen {
  display: flex;
}
</style>