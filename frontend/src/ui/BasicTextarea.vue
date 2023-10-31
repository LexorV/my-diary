<template>
  <div class="container">
    <p :class="[{ 'message': errMessage }, 'message-invisible' ]">
      {{ errMessage }}
    </p>
    <textarea
      autocomplete="false"
      :class="[{ 'err-textarea': errMessage }, 'textarea' ]"
      :placeholder="placeholder"
      :style="cssVars"
      :name="name"
      :value="value"
      @input="onChange"
    />
    <div class="textarea-action">
      <slot name="action" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Текст'
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Текст'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: Number,
      default: 166
    },
    color: {
      type: String,
      default: '#F3F3F3'
    },
    errMessage: {
      type: String,
      default: ''
    },
    onChange: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    cssVars () {
      return {
        '--width': this.width,
        '--height': this.height + 'px',
        '--color': this.color
      }
    }
  }
}
</script>

<style lang="scss"  scoped>
  .textarea {
    width: var(--width);
    height: var(--height);
    border-radius: 30px;
    padding: 25px 50px 25px 25px;
    border: none;
    background-color: var(--color);
    box-sizing: border-box;
    transition: all ease .8s;
    background-color: #F3F3F3;
    white-space: pre-line;
  }
  .err-textarea{
    outline: 1px solid #ca0c0c ;

  }
  .container{
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .message-invisible {
    display: none;
    transition: all ease .8s;
  }
  .message{
    display: flex;
    margin-top: 10px;
    color: #FF832A;
  }
  .textarea-action {
    position: absolute;
    top: 20px;
    right: 20px;
  }

</style>
