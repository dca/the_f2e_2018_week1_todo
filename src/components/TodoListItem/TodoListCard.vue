<template>
  <el-card class="todo-card" shadow="never" :body-style="{ padding: '0px', 'padding-top': '24px', background: getCardHeaderColor, height: '102px' }">
    <el-row v-on:click="handleCompleted">
      <el-col :span="3"><div class="mycheckbox" v-bind:class="{ complated: isComplated }" v-on:click="handleCompleted"><font-awesome-icon :icon="['fas', 'check']" /></div></el-col>
      <el-col :span="17">
        <span class="title" v-bind:class="{ complated: isComplated }" v-on:click="handleCompleted">
          {{ title }}
        </span>
      </el-col>
      <el-col :span="2" class="edit-icon">
        <font-awesome-icon :icon="['far', 'star']" v-show="!isStared" v-on:click="handleStared" />
        <font-awesome-icon :icon="['fas', 'star']" v-show="isStared" v-on:click="handleStared" class="star" />
      </el-col>
      <el-col :span="2" class="edit-icon">
        <font-awesome-icon :icon="['fas', 'pencil-alt']" />
      </el-col>
    </el-row>
    <el-row class="task-quick-info">
      <el-col :span="21" :offset="3">
        <font-awesome-icon class="fa" :icon="['fas', 'calendar-alt']" /> 5/14
        <font-awesome-icon class="fa" :icon="['far', 'file']" />
        <font-awesome-icon class="fa" :icon="['far', 'comments']" />
      </el-col>
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
  @Provide() private title: string = 'Type Something Here…';
  @Provide() private isComplated: boolean = false;
  @Provide() private isStared: boolean = false;

  private handleCompleted(key: string, keyPath: any): void {
    this.isComplated = !this.isComplated;
  }

  private handleStared(key: string, keyPath: any): void {
    this.isStared = !this.isStared;
  }

  get getCardHeaderColor(): string {
    return this.isStared ? '#FFF2DC' : '#F2F2F2';
  }
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

  .mycheckbox {
    width: 24px;
    height: 24px;
    background-color: #FFF;
    margin: 0 auto;
    color: #FFF;

    &.complated {
      background: #4A90E2;
      border-radius: 2px;
      font-size: 14px;
      text-align: center;
      line-height: 24px;
    }
  }

  .star {
    color: #F5A623;
  }

  .title {
    font-family: 'Roboto Medium';
    font-size: 24px;
    color: #000;
    &.complated {
      text-decoration: line-through;
      font-family: Roboto-Medium;
      font-size: 24px;
      color: #9B9B9B;
    }
  }

  .task-quick-info {
    margin-top: 16px;
    font-size: 16px;
    line-height: 18px;
    color: #757575;

    .fa {
      font-size: 18px;
      margin-left: 8px;
      margin-right: 8px;
    }
  }

  .edit-icon {
    font-size: 24px;
  }
</style>
