<template>
  <div class="about">
    <h1>Calculate story points</h1>
    <p>Use this form to calculate the story points.</p>

    <form>
      <div class="horizontal">
        <div class="input-group">
          <label>Risk</label>
          <select v-model="risk">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div class="input-group">
          <label>Effort</label>
          <select v-model="effort">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div class="input-group">
          <label>Complexity</label>
          <select v-model="complexity">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>

      <h2 style="text-align: right">Story Points: {{ points }}</h2>
    </form>
  </div>
</template>

<script setup lang="ts">
import { Size, calculateStoryPoints } from '@/logic/points';
import { computed, ref } from 'vue';


const risk = ref<Size>("low");
const effort = ref<Size>("low");
const complexity = ref<Size>("low");

const points = computed(() => {
  return calculateStoryPoints(risk.value, effort.value, complexity.value);
})

</script>

<style scoped>
form {
  margin-top: 2rem;
}

.horizontal {
  display: flex;
  justify-content: space-between;
  gap: 16px;
}

.horizontal > div {
  width: 100%;
}

.input-group > label {
  display: block;
  font-size: 1rem;
  font-weight: bold;
}

.input-group > select {
  display: block;
  padding: 8px 16px;
  margin-top: 8px;
  margin-bottom: 16px;
  margin-right: 8px;
  width: 100%;
  font-size: 1rem;
}

</style>
