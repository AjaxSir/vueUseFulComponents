<template>
  <div>
    <list-item :countList="countList" @fromSon="faEmit"></list-item>
    <span>{{ msg }}</span>
    <span v-for="(ele, index) in countList" :key="index">{{ ele.title }}</span>
  </div>
</template>
<script lang="ts">
import ListItem from "@/components/ListItem.vue";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    ListItem
  }
})
export default class product extends Vue {
  private msg: string = `father's text`;
  private count: number = 1;
  private countList: any[] = [
    {
      title: "first",
      id: 1
    }
  ];
  faEmit(msg1: string) {
    this.msg = msg1;
  }
}
</script>
