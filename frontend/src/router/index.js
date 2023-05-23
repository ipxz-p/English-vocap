import { createRouter, createWebHistory } from "vue-router";

function guardMyroute(to, from, next)
{
var isAuthenticated= false;
if(localStorage.getItem("user"))
  isAuthenticated = true;
else
  isAuthenticated= false;
if(isAuthenticated) 
{
  next();
} 
else
{
  next('/login');
}
}

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: () => import("../components/MainPage.vue"),
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("../views/index.vue"),
      },
      {
        path: "/chooseword",
        name: "ChooseWord",
        component: () => import("../components/ChooseWord.vue"),
      },
      {
        path: "/wordset",
        beforeEnter : guardMyroute,
        name: "Wordset",
        component: () => import("../views/Wordset.vue"),
      },
      {
        path: "/wordset/:id",
        beforeEnter : guardMyroute,
        name: "WordByID",
        component: () => import("../views/WordByID.vue"),
      },
      {
        path: "/history",
        beforeEnter : guardMyroute,
        name: "History",
        component: () => import("../views/History.vue"),
      },
      {
        path: "/wishlist",
        beforeEnter : guardMyroute,
        name: "Wishlist",
        component: () => import("../views/Wishlist.vue"),
      },
      {
        path: "/chooseword/play/:id",
        name: "Play",
        component: () => import("../views/Play.vue"),
      },
      {
        path: "/search/:keyword",
        name: "search",
        props: true,
        component: () => import("../views/Search.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/newpassword",
    name: "NewPassword",
    component: () => import("../views/NewPassword.vue"),
  },
  {
    path: "/chooseword/play/:id/flashcard",
    name: "FlashCard",
    component: () => import("../views/FlashCard.vue"),
  },
  
  {
    path: "/chooseword/play/:id/guessinggame",
    name: "GuessingGame",
    component: () => import("../views/GuessingGame.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;