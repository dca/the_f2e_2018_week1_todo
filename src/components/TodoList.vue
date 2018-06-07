<template>
  <div>
    <div class="todo-card"></div>
    <div class="todo-card"></div>
    <TodoListCard />
    <TodoListCard />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Provide, Vue } from 'vue-property-decorator';
import TodoListCard from '@/components/TodoListItem/TodoListCard.vue'; // @ is an alias to /src

@Component({
  components: {
    TodoListCard,
  },
})
export default class TodoList extends Vue {
  //
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
