<script setup>
import { ref } from 'vue';
    const isInputFocused = ref(false);
    const inputValue = ref('');

    const onInputFocus = () => {
      isInputFocused.value = true;
    };

    const onInputBlur = () => {
      if (!inputValue.value) {
        isInputFocused.value = false;
      }
    };

</script>

<template>
  <div class="input-container">
    <label class="animated-label" :class="{ 'active': isInputFocused }">This is a label</label>
    <span class="input-wrapper">
    <input
      type="text"
      v-model="inputValue"
      @focus="onInputFocus"
      @blur="onInputBlur"
    />
    </span>
    
  </div>
</template>

<style lang="scss" scoped>
.input-container {
  position: relative;
  margin-top: 2.3em;
  width: 100%;

  &.input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 2.3em;
    border-radius: $input-border-radius;
    border: $input-border-color solid $input-border-size;
    transition: border-color 0.2s ease;
  }
}

input {
  background-color: $input-background-color;
  color: $input-color;
  padding: $input-padding;
  border-radius: $input-border-radius;
  border: $input-border-color solid $input-border-size;
  font-size: $input-font-size;
  width: 100%;
  box-sizing: border-box;
}

::placeholder {
  color: $input-placeholder-color;
}

:focus {
  box-shadow: 0 0 10px $input-border-color;
}

label.animated-label {
  position: absolute;
  top: 12px;
  left: 10px;
  z-index: -10;
  transition: transform 0.2s ease, font-size 0.2s ease;
  transform-origin: top left;
}

label.active {
  transform: translateY(-2.3em) translateX(-0.6em) scale(0.8);
  font-size: $input-font-size;
  color: $input-label-color;
}
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InputText'
});
</script>