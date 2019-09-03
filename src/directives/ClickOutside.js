export default {
  bind: (el, binding, vnode) => {

    window.event = (event) => {
      
      if (!el.contains(event.target)) {
        vnode.context[binding.expression](event);
      }
    };

    document.addEventListener('click', window.event)
    document.addEventListener('touchstart', window.event)
  },
  unbind: () => {

    document.removeEventListener('click', window.event)
    document.removeEventListener('touchstart', window.event)
  },
}