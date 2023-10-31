<template>
  <div class="container">
    <span class="title">{{ title }}</span> 
    <span :class="[{ 'message': errMessage }, 'message-invisible' ]">
      {{ errMessage }}
    </span>
    <textarea
      autocomplete="false"
      :class="[{ 'err-textarea': errMessage }, 'textarea' ]"
      :placeholder="placeholder"
      :style="cssVars"
      :name="name"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
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
    title: {
      type: String,
      default: 'Заметка'
    },
    placeholder: {
      type: String,
      default: ''
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
  emits: ['update:value'],
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
    border-radius: 4px;
    padding: 25px 50px 25px 25px;
    border: none;
    background-color: var(--color);
    box-sizing: border-box;
    transition: all ease .8s;
    background-color: #F3F3F3;
    white-space: pre-line;
    @extend %text-small
  }
  .err-textarea{
    outline: 1px solid #ca0c0c ;
  }
  .title {
    text-align: left;
    gap: 2px;
    @extend %text-small
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
