<template>
  <svg
    :class="svgClass"
    aria-hidden="true"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: "",
    },
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
    },
    svgClass() {
      if (this.className) {
        return `svg-icon ${this.className}`;
      }
      return "svg-icon";
    },
  },
};
</script>

<style scoped>
.svg-icon {
  width: 16px;
  height: 16px;
  overflow: hidden;
  vertical-align: -0.15em;
  fill: currentColor;
}
</style>
