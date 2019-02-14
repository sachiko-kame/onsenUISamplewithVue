<template id="main">
  <v-ons-navigator swipeable
    :page-stack="pageStack"
    @push-page="pageStack.push($event)"
  ></v-ons-navigator>
</template>


<script>
import first from './components/First.vue';

export default {
  data: function() {
    return {
      pageStack: [first]
    }
  }

}
</script>


