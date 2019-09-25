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
      create: {
        path: "/create",
        component: views.Shortener.create
      },
      trackForm: {
        path: "/track",
        exact: true,
        component: views.Shortener.trackForm
      },
      track: {
        path: "/track/:shortenerId",
        component: views.Shortener.track
      },
      inspecForm: {
        path: "/inspect",
        exact: true,
        component: views.Shortener.inspectForm
      },
      inspect: {
        path: "/inspect/:shortenerId",
        component: views.Shortener.inspect
      }
    }
  }
};
