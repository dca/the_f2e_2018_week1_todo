<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#4A90E2"
    text-color="#00408B"
    active-text-color="#fff"
    height="76px">
      <el-menu-item index="my_tesk">My Tasks</el-menu-item>
      <el-menu-item index="in_progress">In Progress</el-menu-item>
      <el-menu-item index="completed">Completed</el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { Component, Prop, Provide, Vue } from 'vue-property-decorator';

@Component
export default class NavComponent extends Vue {
  @Provide() activeIndex: string = 'my_tesk';

  private handleSelect(key: string, keyPath: any): void {
    this.activeIndex = key;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .el-menu {
    margin: 0 auto;
    width: 660px;
    height: 76px;
  }
  .el-menu-item {
    width: 220px;
    height: 100%;
    line-height: 76px;
    font-family: 'Roboto-Medium';
    font-size: 24px;
    color: #FFFFFF;
    text-align: center;
  }
  .el-menu-item.is-active {
    border-bottom-color: #00408B !important;
    border-bottom-width: 5px;
  }
</style>
