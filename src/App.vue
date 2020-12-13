<template>
  <div id="app">
    <div>
      <img alt="Vue logo" src="./assets/logo.png" style="width: 50px; vertical-align: middle">
      <span style="padding: 10px">Vue Daily Scheduler</span>
    </div>
    <h2>Example 1</h2>
    <div style="width: 500px; margin: 0 auto; padding: 20px">
      <schedule 
        v-model="schedule" 
        :dayTable="dayTable"
        bg="#223642"
        bgHover="#84dafc7a"
        bgActive="#84c9fc"
        textColor="#000" 
      />
    </div>
    <div style="margin: 20px; padding: 20px; background-color: gray; color: white">
      <code>{{ JSON.stringify(schedule) }}</code>
    </div>
    <h2>Example 2</h2>
    <span>With customized <code>timeArray</code></span>
    <div style="width: 500px; margin: 0 auto; padding: 20px">
      <schedule 
        v-model="schedule2" 
        :timeArray="timeArray"
      />
    </div>
    <div style="margin: 20px; padding: 20px; background-color: gray; color: white">
      <code>{{ JSON.stringify(schedule2) }}</code>
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
      dayTable:['So','Mo','Tu','We','Th','Fr','Sa'],
      schedule: {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: []
      },
      schedule2: {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: []
      },
      timeArray: ['1AM', '3AM', '6AM', "9AM", '11AM', '3PM', '6PM', '9PM', '11PM']
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
