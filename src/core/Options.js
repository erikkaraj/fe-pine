const AccountMenuList = [
  {
    code: "activities",
    label: "menage activities",
    icon: "menulist",
    show: true,
  },
  { code: "profile", label: "profile security", icon: "gear", show: false },
  { code: "preferred", label: "prefered list", icon: "bookmark", show: false },
  { code: "evaluations", label: "evaluations", icon: "star", show: false },
  { code: "dashboard", label: "Dashboard" }, // needed for the dropdown
];

const DashboardMenuList = [
  { code: "blog", label: "Blog", show: true },
  { code: "events", label: "Events", show: false },
  { code: "activities", label: "Manage Activities", show: false },
  { code: "users", label: "Manage Users", show: false },
  { code: "comments", label: "Manage Comments", show: false },
];

export { AccountMenuList, DashboardMenuList };
