<script lang="ts">
export default {
  name: 'InputTextarea'
};
</script>

<template>
    <textarea />
</template>

<style lang="scss" scoped>
textarea {
    color: $input-color;
    padding: $input-padding;
    border-radius: $input-border-radius;
    border: $input-border-color solid $input-border-size;
    font-size: $input-font-size;
    width: 100%;
    box-sizing: border-box;
}
</style>
