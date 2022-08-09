import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translations/en.json";
import sq from "./translations/sq.json";
import { HashRouter as AppRouter, Route, Routes } from "react-router-dom";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";
import Activity from "./pages/activities/[activityId]";
import ActivityCreate from "./pages/activities/create";
import ActivityEdit from "./pages/activities/[activityId]/edit";
import Blog from "./pages/blog/index";
import BlogPost from "./pages/blog/[blogId]/index";
import BlogCreate from "./pages/blog/create";
import Dashboard from "./pages/Dashboard";

i18next.use(initReactI18next).init({
  resources: {
    en,
    sq,
  },
  lng: "sq",
  fallbackLng: "sq",
  interpolation: {
    escapeValue: false,
  },
});

function App() {
  return (
    <AppRouter>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/activity" component={ActivityCreate} />
        <Route
          exact
          path="/activity/:activityId/edit"
          component={ActivityEdit}
        />
        <Route exact path="/activity/:activityId" component={Activity} />
        <Route exact path="/blogs" component={Blog} />
        <Route exact path="/blog" component={BlogCreate} />
        <Route exact path="/blog/:blogId" component={BlogPost} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Routes>
    </AppRouter>
  );
}

export default App;
