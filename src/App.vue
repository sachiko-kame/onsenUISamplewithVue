<template id="main-page">
<v-ons-page>
  <v-ons-toolbar>
    <div class="center">Title</div>
  </v-ons-toolbar>
  <ons-list v-for="item in items">
    <ons-list-item>
      <sample v-bind:item="item" v-bind:isShow="false"></sample>
    </ons-list-item>
  </ons-list>
</v-ons-page>
</template>

<script>
import sample from './components/Sample.vue';

export default {
  components: {
    sample
  },
  data: function() {
    return {
      items: ["りんご", "トマト", "レモン", "パイナップル", "牛丼", ]
    }
  }

}
</script>


