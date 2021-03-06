import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/book-app.vue';
import About from './views/About.vue';
import bookDetails from './views/book-details.vue';
import Contact from './views/Contact.vue';
import Login from './views/Login.vue';
import BookDisplay from './views/book-display.vue'
import BookEditor from './views/book-editor.vue'
import BookCreate from './views/book-create.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about/contact',
      name: 'contact',
      component: About,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/book/:bookId',
      name: 'bookDetails',
      component: bookDetails,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/bookReading/:bookId',
      name: 'bookReading',
      component: BookDisplay,
    },
    {
      path: '/bookEditor/:bookId?',
      name: 'bookEditor',
      component: BookEditor,
    },
    {
      path: '/bookCreate',
      name: 'bookCreate',
      component: BookCreate,
    },
    
  ],
});
