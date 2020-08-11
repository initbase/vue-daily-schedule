# vue-daily-schedule / Vue week schedule

<div align='center'>

[![VEDR](./src/assets/preview.png)](.)

</div>

## Install
```
npm install vue-daily-schedule

# or yarn

yarn add vue-daily-schedule
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