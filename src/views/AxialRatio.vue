<template>
  <div class="parent">
    <h2>Parent</h2>
    <router-view v-slot="{ Component }">
        <component :is="Component"/>
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
  created() {
    this.initializeState()
  },
  methods: {
    initializeState() {
      let initTestState = {
        n_buttons: 2
      }

      let savedTestState = JSON.parse(localStorage.getItem('testState'))
      if (!savedTestState || !savedTestState.n_buttons){
        localStorage.setItem('testState', JSON.stringify(initTestState))
      }
    }
  }
}


</script>
