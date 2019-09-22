import views from "../views";

export default {
  home: {
    exact: true,
    path: "/",
    component: views.Home
  },
  aboutUs: {
    exact: true,
    path: "/about-us",
    component: views.AboutUs
  },
  shortener: {
    path: "/shortener",
    routes: {
      list: {
        path: "/create",
        component: views.Shortener.create
      },
      detail: {
        path: "/track/:shortenerId",
        component: views.Shortener.track
      }
    }
  }
};
