<template>
  <div class="container">
    <label class="label">

     <span class="title">{{ title }}</span> 
      <span :class="[{ 'message': errMessage }, 'message-invisible' ]">
      {{ errMessage }}
    </span>
    <input
      autocomplete="false"
      :type="inputType"
      :class="[{ 'err-input': errMessage }, 'input' ]"
      :placeholder="placeholder"
      :style="cssVars"
      :name="name"
      :value="value"
      @input="onChange"
    >
  </label>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: 'title'
    },
    title: {
      type: String,
      default: 'Загловок'
    },
    inputType: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    width: {
      type: [Number, String],
      default: '100%'
    },
    height: {
      type: Number,
      default: 80
    },
    color: {
      type: String,
      default: '#F6F6F6'
    },
    onChange: {
      type: Function,
      default: () => {}
    },
    errMessage: {
      type: String,
      default: ''
    }
  },
  computed: {
    cssVars () {
      return {
        '--width': this.width + 'px',
        '--height': this.height + 'px',
        '--color': this.color
      }
    }
  }
}
</script>

<style lang="scss"  scoped>
  .input {
    width: var(--width);
    height: var(--height);
    border-radius: 15px;
    padding-left: 21px;
    background-color: var(--color);
    border: none;
    font-style: normal;
    box-sizing: border-box;
    transition: all ease .8s;
  }
  .err-input {
    outline: 1px solid #ca0c0c ;

  }
 
  .container{
    display: flex;
    width: var(--width);
    flex-direction: column;
    position: relative;
  }
  .message-invisible {
    position:absolute;
    transition: all ease .8s;
    top: 39px;
    left: 0;
    z-index: -1;
  }
  .label {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
  }
  .title {
    text-align: left;
    gap: 2px;
  }
  .message{
    position: absolute;
    color: #ca0c0c;
    z-index: 0;
    top: 66px;
    @media screen and (max-width: $maxWidth) {
      font-size: 18px;
    }
  }

</style>
