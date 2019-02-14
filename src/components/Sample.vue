<template>
<div>
  <v-ons-button @click="emojiAdd" style="margin: 6px 0">☕️</v-ons-button>
  {{item}}
  <v-ons-button modifier="outline" @click="showChange" style="margin: 6px 0">顔文字表示、非表示</v-ons-button>
  <ons-list v-for="item in childrens">
    <ons-list-item>
      <div>{{item}}</div>
    </ons-list-item>
  </ons-list>
  <div v-if="isShow">
    <div>|ω・`）ちら</div>
    <div>[岩陰]・ω・` )</div>
    <div>|･`ω･)</div>
    <div>[壁]_・。）チラッ</div>
  </div>
  <div v-else>
    <!-- <div>( ･ὢ･ )</div> -->
  </div>
</div>
</template>

<script>
export default {
  props: {
    item: String,
    isShow: Boolean(false),
    childrens:Array
  },
  methods: {
    showChange() {
      this.isShow = !(this.isShow);
    },
    emojiAdd() {
      this.item = this.item + '☕️';
      this.childrens = ["😴", "😴", "😴"]
    }
  }
}
</script>


