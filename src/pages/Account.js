import { useTranslation } from "react-i18next";
import MainLayout from "../components/layouts/MainLayout";
import MenageActivities from "../components/account/MenageActivities";
import AccountDetails from "../components/account/AccountDetails";
import PreferedList from "../components/account/PreferedList";
import Evaluations from "../components/account/Evaluations";
import { useState } from "react";
import { AccountMenuList } from "../core/Options";
import { getUser } from "../axios/userStore";

export default function Account() {
  const user = getUser();

  const [t] = useTranslation();

  const [menulist, setMenuList] = useState(AccountMenuList);

  function ToggleButtons({ code }) {
    const newMenu = [...menulist];

    newMenu.map((el) => (el.show = el.code === code ? true : false));
    setMenuList(newMenu);
  }

  return (
    <MainLayout>
      <div className="flex md:flex-row tiny:flex-col items-center w-full py-12 px-18">
        <div className="flex flex-col items-center">
          <h1 className="flex text-green-pin font-semibold items-center justify-center pb-8 w-full">
            {t("my account")}
          </h1>
          <div className="flex flex-col tiny:space-y-1 md:space-y-6">
            {menulist
              .filter((menu) => menu.code !== "dashboard")
              .map((menu, index) => (
                <button
                  key={index}
                  onClick={() => {
                    ToggleButtons({ code: menu.code });
                  }}
                  className={`flex items-center border-1  ${
                    menu.show
                      ? "border-green-pin bg-green-pin bg-opacity-15"
                      : "border-gray-pin2"
                  } rounded-lg px-6 py-2 active space-x-4 backdrop-blur-tiny 
                hover:border-green-pin hover:bg-green-pin hover:bg-opacity-15 text-sm`}
                >
                  <img
                    src={`${
                      menu.show
                        ? `svg/green/${menu.icon}.svg`
                        : `svg/gray/${menu.icon}.svg`
                    }`}
                    alt={`${menu.code}`}
                  />
                  <h1 className="h-8 items-center flex">
                    {t(`${menu.label}`)}
                  </h1>
                </button>
              ))}
          </div>
        </div>
        <div className="flex w-full -ml-8 h-screen border-2 border-gray-pin2 items-center justify-center rounded-xl tiny:mt-12 md:mt-0  tiny:overflow-scroll lg:overflow-visible">
          {menulist.find((menu) => menu.code === "activities").show && (
            <MenageActivities user={user} />
          )}
          {menulist.find((menu) => menu.code === "profile").show && (
            <AccountDetails />
          )}
          {menulist.find((menu) => menu.code === "preferred").show && (
            <PreferedList />
          )}
          {menulist.find((menu) => menu.code === "evaluations").show && (
            <Evaluations />
          )}
        </div>
      </div>
    </MainLayout>
  );
}
