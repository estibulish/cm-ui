// import CmDialog from "./index.vue";
import CmModal from "./modal.vue";
import { createApp, h } from "vue";

interface Options {
  title: string,
  content: string,
  ModalType: string,
  onOk: () => any,
  cancel: () => any,
  overlay: boolean,
  overlayClosable: boolean,
}

interface Method {
  [key: string]: (options: Options) => any
}

const Modal: Method = {}

const method = ['info','success','error','warning','confirm']

// options = {
//   title: "我是标题",
//   content: "我是内容",
//   ModalType: item,
//   onOk: () => {},
//   cancel: () => {},
//   overlay: true,
//   overlayClosable: true,
// }

method.map((item: string) => {
  Modal[item] = (options) => {
    const { title, content, onOk, cancel, overlay, overlayClosable } = options;
    const div = document.createElement("div");
    document.body.appendChild(div);
    const close = () => {
      app.unmount();
      div.remove();
      document.body.style.overflow = 'auto'
    };
  
    const foo = h("div");
    const app = createApp({
      render() {
        return h(
          CmModal,
          {
            modelValue: true,
            "onUpdate:modelValue": (newVisible: boolean) => {
              if (newVisible === false) close()
            },
            ModalType: item,
            onOk,
            cancel,
            overlay,
            overlayClosable,
          },
          {
            title,
            content: content,
          }
        );
      },
    });
  
    app.mount(div);
  };
})


export default Modal 
