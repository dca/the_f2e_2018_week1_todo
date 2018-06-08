<template>
  <div>
    <TodoListCard />
    <TodoListCard />
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



  .edit-icon {
    font-size: 24px;
  }
</style>
