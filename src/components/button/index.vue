<template>
  <button type="button" :class="classes" @click="onClick">{{ label }}</button>
</template>

<script>
import './style/button.css'
import { reactive, computed } from 'vue'
import { getPreFixName } from '../_util'

export default {
  name: 'my-button',

  props: {
    type: {
      type: String,
      default: 'primary',
    },
    plain: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props)
    let prefix = getPreFixName('button')
    return {
      classes: computed(() => ([
        `${prefix}`,
        props.primary ? `${prefix}--primary` : null,
        !props.primary ? `${prefix}--secondary` : null,
        `${prefix}--${props.size || 'medium'}`
      ])),
      onClick() {
        emit('click')
      }
    }
  }
}
</script>
