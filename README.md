# vue daily schedule

<div align='center'>

[![VEDR](./src/assets/preview.png)](.)

Vue daily schedule is a custom Vue2 component to manage repeated schedule. It's a straightforward scheduler component you can use.

</div>

### Demo

[Demo here](https://vue-daily-schedule.vercel.app/)

### Install
Node
```
npm install vue-daily-scheduler

# or yarn

yarn add vue-daily-scheduler
```
Browser
```html
<link href="https://unpkg.com/vue-daily-scheduler@latest/dist/vue-schedule.min.css" ref="stylesheet" />
<script src="https://unpkg.com/vue-daily-scheduler@latest/dist/vue-schedule.min.js"></script>
```

then, use inside a component
```javascript
import 'vue-daily-scheduler/dist/vue-schedule.min.css'
import VueSchedule from 'vue-daily-scheduler'
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

### Props
|Props|Desc|Type|Default|
|---|---|---|---|
|`bg`|Block scheduler bacground color|`String`|`#223642`|
|`bgHover`|Block scheduler bacground color when on hover|`String`|`#84dafc7a`|
|`bgActive`|Block scheduler bacground color when active|`String`|`#84c9fc`|
|`textColor`|Text color inside block scheduler|`String`|`#000`|
#### Example
```html
<template>
    <div>
        <VueSchedule 
            v-model="schedule" 
            bg="red"
            bgHover="gray"
            bgActive="black"
            textColor="#fff"
        />
    </div>
</template>
```

### Contributor
Feel free if you want to submit pull request or an issue.

##### Creator
1. Burhanuddin Ahmad (Layoutting) <a href="https://github.com/burhanahmeed"><img src="https://github.com/burhanahmeed.png" width="30"/></a>

2. Oleg Zernov (Awesome draggable functions)

### License
 MIT
