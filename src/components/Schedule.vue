<!--

Copyright Sultan Ads 2020.
1. 2020 Burhanuddin Ahmad (Layoutting)
2. 2020 Oleg Zernov (Awesome draggable function)

-->

<template>
  <div class="vws-rule-custom">
    <div class="vws-rule-row">
      <div class="vws-table-rule">
        <div class="vws-table-rule-heading">
            <div class="vws-time-list vws-rule-time-time vws-time-rule opacity-0">Time</div>
            <div class="text-center week-rule">Week</div>
            <div class="text-center">Su</div>
            <div class="text-center">Mo</div>
            <div class="text-center">Tu</div>
            <div class="text-center">We</div>
            <div class="text-center">Th</div>
            <div class="text-center">Fr</div>
            <div class="text-center">Sa</div>
        </div>
        <div class="vws-table-rule-body" id='schelude' ref="draggableArea">
          <div ref="ruleTime" class="vws-rule-time" v-for="(t, idx) in timeArray" :key="idx">
            <div ref="ruleTimeTime" class="vws-time-list vws-rule-time-time vws-time-rule" :data-val="t">{{ t }}</div>
            <div ref="ruleTimeWeek" :class="{'vws-time-list vws-rule-time-week': true, 'active': checkFullWeek(idx)}" @click="toggleWeek(idx, checkFullWeek(idx))"></div>
            <div ref="ruleTimeItem" :class="{'vws-time-list vws-rule-time-item': true, 'active': timetable[0].find(el => el == idx ) != undefined ? true:false}" @click="toggleDay(0, idx)"><span>Su</span></div>
            <div :class="{'vws-time-list vws-rule-time-item': true, 'active': timetable[1].find(el => el == idx ) != undefined ? true:false}" @click="toggleDay(1, idx)"><span>Mo</span></div>
            <div :class="{'vws-time-list vws-rule-time-item': true, 'active': timetable[2].find(el => el == idx ) != undefined ? true:false}" @click="toggleDay(2, idx)"><span>Tu</span></div>
            <div :class="{'vws-time-list vws-rule-time-item': true, 'active': timetable[3].find(el => el == idx ) != undefined ? true:false}" @click="toggleDay(3, idx)"><span>We</span></div>
            <div :class="{'vws-time-list vws-rule-time-item': true, 'active': timetable[4].find(el => el == idx ) != undefined ? true:false}" @click="toggleDay(4, idx)"><span>Th</span></div>
            <div :class="{'vws-time-list vws-rule-time-item': true, 'active': timetable[5].find(el => el == idx ) != undefined ? true:false}" @click="toggleDay(5, idx)"><span>Fr</span></div>
            <div :class="{'vws-time-list vws-rule-time-item': true, 'active': timetable[6].find(el => el == idx ) != undefined ? true:false}" @click="toggleDay(6, idx)"><span>Sa</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/style.css'
export default {
  props: ['value'],
  data () {
    return {
      timeArray: [],
      timetable: {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: []
      },
      dragValue: false,
      dragging: false,
      x: 0,
      y: 0,
      startX: 0,
      startY: 0,
      maxX: 0,
      maxY: 0,
      minX: 1000000,
      minY: 1000000,
      dragWeek: false,
    }
  },
  methods: {
    startDrag(event) {
      console.info(event)
      this.dragging = true;
      this.x = this.y = 0;
      this.startX = this.startY = this.maxY = this.maxX  = 0;
      this.minY = this.minX = 1000000
      let container = {
        height: this.$refs.draggableArea.clientHeight,
        width: this.$refs.draggableArea.clientWidth,
      }
      let item = {
        height: this.$refs.ruleTimeItem[0].clientHeight,
        width: this.$refs.ruleTimeItem[0].clientWidth,
      }
      let time = {
        height: this.$refs.ruleTimeTime[0].clientHeight,
        width: this.$refs.ruleTimeTime[0].clientWidth,
      }
      let week = {
        height: this.$refs.ruleTimeWeek[0].clientHeight,
        width: this.$refs.ruleTimeWeek[0].clientWidth,
      }
      this.data = {container, time, item, week}
      let firstItemX = this.data.time.width + this.data.week.width + 4 + 15
      let day = 6
      for (let i = 0; i < 8; i++) {
        let width = firstItemX + i * this.data.item.width + 2
        if (width > event.layerX && width  < event.layerX  + this.data.item.width) {
          day = i -1
        }
      }
      let timeData = 92
      let j = 1;
      this.$refs.ruleTime.map((one, timeIndex) => {
        if (!one.className.includes('hides')) {
          let height = 48 + j * this.data.item.height + 2
          if (height > event.layerY && height  < event.layerY + this.data.item.height) {
            timeData = timeIndex
          }
          j++
        }
      })
      if (day == -1) {
        this.dragValue = !this.checkFullWeek (timeData)
        this.dragWeek = true;
      } else {
        this.dragValue = this.timetable[day].indexOf(timeData) == -1
        this.dragWeek = false;
      }
      
    },
    stopDrag() {
      this.dragging = false;
    },
    doDrag(event) {
      if (this.dragging ) {
        this.x = event.layerX;
        this.y = event.layerY;
        if (event.layerY > this.maxY) {
          this.maxY = event.layerY
        }
        if (event.layerX > this.maxX) {
          this.maxX = event.layerX
        }
        if (event.layerY < this.minY) {
          this.minY = event.layerY
        }
        if (event.layerX < this.minX) {
          this.minX = event.layerX
        }
        if (!this.startX) {
          this.startX = event.layerX;
          this.startY = event.layerY;;
        }
        let firstItemX = this.data.time.width + this.data.week.width + 4 + 15
        for (let i = 0; i < 8; i++) {
          let width = firstItemX + i * (this.data.item.width + 2)
          let isSetItem = false;
          if (this.startX < this.x) {
            if (width > this.startX && width  < event.layerX  + this.data.item.width ) {
              isSetItem = true;
            }
          } else {
            if (width < this.startX + this.data.item.width && width  > event.layerX   ) {
              isSetItem = true;
            }
          }
          
          let j = 1;
          this.$refs.ruleTime.map((one, timeIndex) => {
            if (!one.className.includes('hides')) {
              let height = 35 + j * (this.data.item.height + 2)
              if (this.startY < this.y) {
                if (height > this.startY && height  < this.y + this.data.item.height) {
                  isSetItem && (this.dragWeek ? this.setWeek (timeIndex, this.dragValue) : this.setDay(i - 1, timeIndex, this.dragValue))
                  
                }
                if ( height > this.startY && height  < this.maxY + this.data.item.height ) {
                  if (this.startX < this.x) {
                    if (this.x < this.maxX && width + this.data.item.width < this.maxX && width > this.x - this.data.item.width && i < 6) {
                      this.setDay(i + 1, timeIndex, !this.dragValue, '1')
                    }
                  } else {
                    if (this.x > this.minX && width  > this.minX - this.data.item.width && width < this.x - this.data.item.width && i < 6) {
                      this.setDay(i , timeIndex, !this.dragValue, '5')
                    }
                  }
                }
                if (this.y < this.maxY) {
                  if (height > this.y + this.data.item.height && height  < this.maxY + this.data.item.height) {
                    isSetItem && this.setDay(i - 1, timeIndex, !this.dragValue, '2')
                  }
                }
              } else {
                if (height - this.data.item.height  < this.startY    && height > this.y ) {
                  isSetItem && (this.dragWeek ? this.setWeek (timeIndex, this.dragValue) : this.setDay(i - 1, timeIndex, this.dragValue))
                  
                }
                
                if ( height - this.data.item.height  < this.startY && height  > this.minY ) {
                  if (this.startX < this.x) {
                    if (this.x < this.maxX && width + this.data.item.width < this.maxX && width > this.x  - this.data.item.width ) {
                      this.setDay(i + 1, timeIndex, !this.dragValue, '3')
                    }
                  } else {
                    if (this.x > this.minX && width > this.minX - this.data.item.width  && width < this.x  - this.data.item.width ) {
                      this.setDay(i , timeIndex, !this.dragValue, '3')
                    }
                  }
                }
                if (this.y > this.minY) {
                  if (height   > this.minY    && height < this.y) {
                    isSetItem && this.setDay(i - 1, timeIndex, !this.dragValue, '4')
                  }
                }
              }
              if (this.startX < this.x) {
                if (this.x < this.maxX) {
                }
              }
              j++
            }
          })
        } 
      }
    },
    toggleWeek (time, status) {
      for (const key in [0,1,2,3,4,5,6]) {
        let indexDay = this.timetable[key].findIndex(el => el == time);
        if (indexDay != -1) {
          if (status) {
            this.timetable[key].splice(indexDay, 1);
          }
        } else {
          this.timetable[key].push(time);
        }
      }
      this.$emit('input', this.timetable);
    },
    setDay (day, time, value, num) {
      if (day < 0) {
        return
      }
      
      let indexDay = this.timetable[day].findIndex(el => el == time);
      // alert(indexDay)
      if (value) {
        if (indexDay != -1) {
          //this.timetable[day].splice(indexDay, 1);
        } else {
          this.timetable[day].push(time);
        }
      } else {
        if (indexDay != -1) {
          this.timetable[day].splice(indexDay, 1);
        } else {
          //this.timetable[day].push(time);
        }
      }
      this.$emit('input', this.timetable);
    },
    setWeek (time, value) {
      for (const key in [0,1,2,3,4,5,6]) {
        let indexDay = this.timetable[key].findIndex(el => el == time);
        if (value) {
          if (indexDay != -1) {
          } else {
            this.timetable[key].push(time);
          }
        } else {
          if (indexDay != -1) {
            this.timetable[key].splice(indexDay, 1);
          } else {
          }
        }
      }
      this.$emit('input', this.timetable);
    },
    toggleDay (day, time) {
      let indexDay = this.timetable[day].findIndex(el => el == time);
      // alert(indexDay)
      if (indexDay != -1) {
        this.timetable[day].splice(indexDay, 1);
      } else {
        this.timetable[day].push(time);
      }
      this.$emit('input', this.timetable);
    },
    checkFullWeek (time) {
      for (const key in this.timetable) {
        if (this.timetable[key].find(el => el == time) == undefined) {
          return false;
        }
      }
      return true;
    },
    setupCustom() {
      const vm = this;
      var x = 60; //minutes interval
      var times = []; // time array
      var tt = 0; // start time
      var ap = ['AM', 'PM']; // AM-PM
      //loop to increment the time and push results in array
      for (var i=0;tt<24*60; i++) {
        var hh = Math.floor(tt/60); // getting hours of day in 0-24 format
        var mm = (tt%60); // getting minutes of the hour in 0-55 format
        times[i] = ("0" + (hh)).slice(-2) + "." + ("0" + (mm)).slice(-2); // pushing data in array in [00:00 - 12:00 AM/PM format]
        tt = tt + x;
      }
      vm.timeArray = times;
    
    },
  },
  mounted () {
    this.setupCustom();
    if (this.value) {
      this.timetable = this.value;
    }
    window.addEventListener('mouseup', this.stopDrag);
  },
  watch: {
    value (val) {
      if (val) {
        this.timetable = val;
      }      
    }
  }
}
</script>