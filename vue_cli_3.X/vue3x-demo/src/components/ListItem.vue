<template>
  <div>
    <span>2</span>
    <span v-for="(item, index) in list" :key="index">{{ item }}</span>
    <br />
    <span>{{ count }}</span>
    <el-button @click="add">add</el-button>
    <br />
    <span v-for="(ele, index) in countList" :key="'ele.id' + index">{{
      ele.title
    }}</span>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Emit, Prop } from "vue-property-decorator";

@Component
export default class ListItem extends Vue {
  @Prop() private countList!: any[];
  @Emit("fromSon") send(val: string) {}
  private list: number[] = [1, 2, 4];
  private count: number = 1;
  add() {
    this.count += 1;
    this.send(`${this.count}+son`);
  }
}
</script>
