<script setup lang="ts">
const model = defineModel();
defineProps<{ id: string; }>();
</script>
<template>
  <label class="switch">
    <input type="checkbox" :id="$props.id" v-model="model">
    <span class="slider round"></span>
  </label>
</template>
<style scoped>
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  scale: 0.7;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: transform .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  scale: 0.9;
  background-color: white;
  transition: transform .4s;
}

input:checked+.slider {
  background-color: #2196F3;
}

input:focus+.slider {
  outline: 4px solid black;
}

input:checked+.slider:before {
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>