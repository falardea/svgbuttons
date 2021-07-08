<template>
  <div class="parent">
    <h2>Parent</h2>
    <router-view v-slot="{ Component }">
        <component
            :is="Component"
            :test-state="testState"
            v-on:page-change="setConfig($event)"/>
    </router-view>
  </div>
</template>

<script>

export default {
  name: 'AxialRatio',
  data: function() {
    return {
      testState: {}
    }
  },
  methods: {
    setConfig(event){
      console.log("page change: ", event)
      if (event.source === "TestSetup"){
        this.testState = {n_buttons: event.config.n_buttons}
      }

    }
  }
}


</script>
