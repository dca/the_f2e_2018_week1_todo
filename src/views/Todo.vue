<template>
  <el-container>
    <el-header height="76px">
      <Nav />
    </el-header>
    <el-main>
      <div class="todo">
      <TodoList />
    </div>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Nav from '@/components/Nav.vue'; // @ is an alias to /src
import TodoList from '@/components/TodoList.vue'; // @ is an alias to /src

@Component({
  components: {
    Nav,
    TodoList,
  },
})
export default class Home extends Vue {}
</script>


<style lang="scss">

.el-header {
  padding: 0;
  background-color: #4a90e2;
  height: 76px;
}

.el-main {
  width: 620px;
  margin: 0 auto;
}
</style>
