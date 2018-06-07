import Vue from 'vue';
import Router from 'vue-router';
import Home1 from './views/Home.vue';
import About from './views/About.vue';
import Todo from './views/Todo.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todo',
      component: Todo,
    },
    {
      path: '/home1',
      name: 'home1',
      component: Home1,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
