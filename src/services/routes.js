import Login from "views/Login";
import Prospect from "views/Prospect";

var routes = [
  {
    path: '/prospects',
    name: 'Prospects',
    icon: 'ni ni-bullet-list-67 text-red',
    component: Prospect,
    layout: '/admin',
    isVisible: true
  },
  {
    path: '/login',
    name: 'Login',
    icon: 'ni ni-key-25 text-info',
    component: Login,
    layout: '/auth',
    isVisible: false
  }
];

export default routes;
