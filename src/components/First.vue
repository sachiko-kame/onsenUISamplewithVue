<template id="first">
  <v-ons-page>
  <v-ons-toolbar>
    <div class="center">Title</div>
  </v-ons-toolbar>
  <ons-list v-for="item in items">
    <ons-list-item>
      <sample v-bind:item="item" v-bind:isShow="false"></sample>
    </ons-list-item>
  </ons-list>
  <v-ons-button @click="hello" modifier="large" style="margin: 6px 0">HelloWorldへ</v-ons-button>
  <v-ons-button @click="otherWindow" modifier="large" style="margin: 6px 0">別画面へ</v-ons-button>
</v-ons-page>
</template>

<script>
import hello from './HelloWorld.vue'
import second from './Second.vue'
import sample from './Sample.vue';

export default {
  components: {
    sample
  },
  data: function() {
    return {
      items: ["りんご", "トマト", "レモン", "パイナップル", "牛丼", ]
    }
  },
  methods: {
    hello(){
      console.log('hello');
      this.$emit('push-page', hello);
    },
    otherWindow(){
      console.log('otherWindow');
      this.$emit('push-page', second);
    }
  }

}
</script>


