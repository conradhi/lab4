import welcome from './components/Welcome.vue'
import sidebar from './components/Sidebar.vue'
import dishes from './components/Dishes.vue'
import recipe from './components/Recipe.vue'
import { modelInstance } from "./components/DinnerModel";
import confirm from './components/Confirm.vue'
import print from './components/Print.vue'


export default [
    {
      path: '/',
      component: welcome
    },
    {
      path: '/dishes',
      components: {
        default: dishes,
        navbar: sidebar,
        props: { model: modelInstance }
      }
    },
    {
      path: '/recipe/:id',
      components:{
        default: recipe,
        navbar: sidebar,
        props: { model: modelInstance }
      }
    },
    {
      path: '/confirm',
      components:{
        default: confirm,
        props: { model: modelInstance }
      }
    },
    {
      path: '/print',
      components:{
        default: print,
        props: { model: modelInstance }
      }
    }
]
