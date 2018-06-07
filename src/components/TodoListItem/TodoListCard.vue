<template>
  <el-card class="todo-card" shadow="never" :body-style="{ padding: '0px', 'padding-top': '24px', background: '#FFF2DC', height: '102px' }">
    <el-row>
      <el-col :span="3"><el-checkbox></el-checkbox> </el-col>
      <el-col :span="17"><span class="title">{{ title }}</span></el-col>
      <el-col :span="2" class="edit-icon"><font-awesome-icon :icon="['far', 'star']" /></el-col>
      <el-col :span="2" class="edit-icon"><font-awesome-icon :icon="['fas', 'pencil-alt']" /></el-col>
      <!-- <span class="title">{{ title }}</span>
      <font-awesome-icon :icon="['fas', 'star']" />
      <font-awesome-icon :icon="['far', 'star']" />
      <font-awesome-icon :icon="['fas', 'calendar-alt']" />
      <font-awesome-icon :icon="['far', 'file']" />
      <font-awesome-icon :icon="['far', 'comments']" />
      <font-awesome-icon :icon="['fas', 'pencil-alt']" /> -->

    </el-row>
  </el-card>
</template>

<script lang="ts">
import { Component, Prop, Provide, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class TodoListCard extends Vue {
  @Provide() title: string = 'Type Something Here…';
}
</script>

<style scoped lang="scss">
  $radius: 3px;

  .todo-card {
    width: 100%;
    height: 102px;
    background: #FFF2DC;
    margin: 0;
    margin-bottom: 8px;
    border-radius: $radius;
    -webkit-border-radius: $radius;
    -moz-border-radius: $radius;
  }

  .title {
    font-family: 'Roboto Medium';
    font-size: 24px;
    color: #000;
  }
  .edit-icon {
    font-size: 24px;
  }
</style>
