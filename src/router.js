import welcome from './components/Welcome.vue'
import sidebar from './components/Sidebar.vue'
import dishes from './components/Dishes.vue'
import selectDish from './components/SelectDish.vue'
import { modelInstance } from "./components/DinnerModel";


export default [
    { path: '/', component: welcome },
    {
      path: '/dishes',
      components: {
        default: dishes,
        navbar: sidebar,
        props: { model: modelInstance }
      }
    },
    {
      path: '/selectDish',
      components: {
        default: selectDish,
        navbar: sidebar
      }
    },
    {
      path: '/blog/:id',
      components:{
        default: selectDish,
        navbar: sidebar
      }
    }
]
