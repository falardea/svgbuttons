<template>
  <div class="parent">
    <h2>Parent</h2>
    <router-view v-slot="{ Component }">
        <component :is="Component"/>
    </router-view>
  </div>
</template>

<script>

import router from "../router";
import VIEW_NAMES from "../ViewNames"

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
  watch: {
    '$route' (to, from) {
      if (to.name === VIEW_NAMES.ROOT_VIEW_NAME){
        router.push(from.path)
      }
    }
  },
  methods: {
    initializeState() {
      let savedTestState = JSON.parse(localStorage.getItem('testState'))
      if (!savedTestState || !savedTestState.n_buttons){
        router.push(VIEW_NAMES.toPath(VIEW_NAMES.TEST_CONFIG_NAME))
      }
    }
  }
}

</script>
