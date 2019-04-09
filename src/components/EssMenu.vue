<template>
  <div class="ess menu" v-click-outside="clickOutside">
    
    <slot name="trigger"/>

    <div class="ess content" style="width: auto;" v-show="active">
      <slot name="content" />
    </div>

  </div>
</template>

<script>

import Popper from "popper.js";
import generateHash from "random-hash";

import EssCard from "./EssCard";

export default {
  name: "EssMenu",
  props: {
    placement: {
      type: String,
      default: "bottom"
    },
    offset: {
      type: String,
      default: `0, 10` // x, y
    }
  },
  components: {
    EssCard
  },
  data() {
    return {
      active: false,
      triggerEl: null,
      contentEl: null,
    };
  },
  computed: {
    modifiers() {
      return {
        flip: {
          behavior: ["left", "right", "top", "bottom"]
        },
        offset: {
          enabled: true,
          offset: this.offset
        }
      };
    }
  },
  mounted() {
    
    this.$nextTick().then(() => {
      
      this.triggerEl = this.$el.querySelector('[ess-menu-trigger]');
      this.contentEl = this.$el.querySelector(`.ess.content`);

      if (this.triggerEl) {
        this.triggerEl.addEventListener("click", this.toogle);
      }
    });
  },
  methods: {
    updatePopper() {
      
      new Popper(this.triggerEl, this.contentEl, {
        placement: this.placement,
        modifiers: this.modifiers,
      });
    },
    clickOutside() {
      
      this.active = false;
    },
    toogle() {
      
      this.active = !this.active;
      
      this.updatePopper();
    },
  },
  beforeDestroy() {
    
    if (this.triggerEl) {
      this.triggerEl.removeEventListener("click", this.toogle);
    }
  }
};
</script>
