<template>
  <button
    :type="type"
    :disabled="disabled "
    :style="cssVars"
    class="button"
    @click="click"
    @click.stop="onClick"
  >
    {{ text }}
    <img class="icon_edit" alt="Добавить" src="@/assets/images/edit-icon.svg">
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'button'
    },
    text: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 350
    },
    height: {
      type: Number,
      default: 97
    },
    onClick: {
      type: Function,
      default: () => {}
    },
    click: {
      type: Function,
      default: () => {}
    }

  },
  computed: {
    cssVars () {
      return {
        '--width': this.width + 'px',
        '--height': this.height + 'px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
    @extend %text-small;
    width: var(--width);
    height:  var(--height);
    display: inline-block;
    background-color: #050F28;
    border: none;
    border-radius: 65px;
    cursor: pointer;
    text-align: center;
    transition: all ease .5s;
    color: white;
    font-size: 18px;
}
.button:hover {
  background-color: #88A1DE;
} 
.icon_edit {
  display: none;
}
.button:active {
    transform: scale(.9);
}
@media screen and (max-width: 700px) {
  .button {
    width: 60px;
    height: 60px;
    border-radius: 50%;
}
.icon_edit {
  display: block;
}
}

</style>
