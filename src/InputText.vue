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
    <input
      type="text"
      v-model="inputValue"
      @focus="onInputFocus"
      @blur="onInputBlur"
    />
    <label class="animated-label" :class="{ 'active': isInputFocused }">This is a label</label>
  </div>
</template>

<style lang="scss" scoped>
.input-container {
  position: relative;
  margin-top: 2.3em;
  width: 100%;
}

input {
  background-color: $input-background-color;
  color: $input-color;
  padding: $input-padding;
  border-radius: $input-border-radius;
  border: $input-border-color solid $input-border-size;
  font-size: $input-font-size;
  width: 100%;
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