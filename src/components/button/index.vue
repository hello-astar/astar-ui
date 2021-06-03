<template>
  <button type="button" :class="classes" @click="onClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import './style/button.css'
import { reactive, computed, defineComponent } from 'vue'
import { getPreFixName } from '../_util'

interface ButtonProps {
  type: string,
  plain?: boolean,
  size?: string,
  disabled?: boolean
}

export default defineComponent({
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
      validator: function (value: string): boolean {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  emits: ['click'],

  setup(props: ButtonProps, { emit }) {
    props = reactive(props)
    let prefix = getPreFixName('button')
    return {
      classes: computed(() => ([
        `${prefix}`,
        `${prefix}--${props.type}`,
        `${prefix}--${props.size || 'medium'}`
      ])),
      onClick() {
        emit('click')
      }
    }
  }
})
</script>
