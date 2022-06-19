import DragModal from "./components/Modal.vue";

export default {
  install: (app, options) => {
    app.component("DragModal", DragModal);
  },
};

export { DragModal };
