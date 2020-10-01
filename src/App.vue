<template>
  <div id="app">
    <div>
      <img alt="Vue logo" src="./assets/logo.png" style="width: 50px; vertical-align: middle">
      <span style="padding: 10px">Vue Daily Schedule</span>
    </div>
    <div style="width: 500px; margin: 0 auto; padding: 20px">
      <schedule v-model="schedule" bgHover="black" />
    </div>
    <div style="margin: 20px; padding: 20px; background-color: gray; color: white">
      <code>{{ JSON.stringify(schedule) }}</code>
    </div>
  </div>
</template>

<script>
import Schedule from './components/Schedule'
export default {
  name: 'App',
  components: {
    Schedule
  },
  data () {
    return {
      schedule: {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: []
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
