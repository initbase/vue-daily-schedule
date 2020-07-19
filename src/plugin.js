import Schedule from "./components/Schedule.vue";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("vue-schedule", Schedule);
}

const plugin = {
  install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

Schedule.install = install;

export default Schedule;
