import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translations/en.json";
import sq from "./translations/sq.json";
import { HashRouter as BrowserRouter, Route, Routes } from "react-router-dom";
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/activity" element={<ActivityCreate />} />
        <Route path="/activity/:activityId/edit" element={<ActivityEdit />} />
        <Route path="/activity/:activityId" element={<Activity />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blog" element={<BlogCreate />} />
        <Route path="/blog/:blogId" element={<BlogPost />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
