# vue-daily-schedule / Vue week schedule

<div align='center'>

[![VEDR](./src/assets/preview.png)](.)

</div>

### Demo

[Demo here](https://vue-daily-schedule.vercel.app/)

### Install
```
npm install vue-daily-scheduler

# or yarn

yarn add vue-daily-scheduler
```
then, use inside a component
```javascript
import VueSchedule from 'vue-daily-schedule'
export default {
    components: {
        VueSchedule
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
```
use it inside vue template
```html
<template>
    <div>
        <VueSchedule v-model="schedule" />
    </div>
</template>
```

### Contributor
Feel free if you want to submit pull request or an issue.

##### Creator
1. Burhanuddin Ahmad (Layoutting)
2. Oleg Zernov (Awesome draggable funciton)

### License
