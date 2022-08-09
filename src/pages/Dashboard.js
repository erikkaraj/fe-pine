import MainLayout from "../components/layouts/MainLayout";
import DashboardHeader from "../components/header/DashboardHeader";
import { DashboardMenuList } from "../core/Options";
import { useState } from "react";
import BlogCreate from "./blog/create";
import CommingSoon from "../components/ComingSoon";

export default function Dashboard() {
  const [openTab, setOpentTab] = useState("blog");

  return (
    <MainLayout>
      <DashboardHeader menuList={DashboardMenuList} setOpentTab={setOpentTab} />
      {openTab === "blog" && <BlogCreate />}
      {openTab === "events" && <CommingSoon />}
      {openTab === "activities" && <CommingSoon />}
      {openTab === "users" && <CommingSoon />}
      {openTab === "comments" && <CommingSoon />}
    </MainLayout>
  );
}
