import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getCategories } from "../../core/Category";
import { getUser } from "../../axios/userStore";
import SelectLanguage from "./Language";
import i18n from "i18next";
import { AccountMenuList } from "../../core/Options";
import Burger from "../navigation/Burger";

export default function MainHeader() {
  const navigate = useNavigate();

  const navigateTo = (to) => {
    navigate(to);
  };

  const user = getUser();

  const { t } = useTranslation();

  const [showCategoryDropDown, setShowCategoryDropDown] = useState(false);
  const [showUserDropDown, setShowUserDropDown] = useState(false);

  const [categories, setCategories] = useState([]);
  const [categoriesTranslated, setCategoriesTranslated] = useState([]);
  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  useEffect(() => {
    setCategoriesTranslated(
      categories.filter((category) => category.translation === i18n.language)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories, i18n.language]);

  return (
    <>
      <nav className="flex md:flex-row flex-col sm:h-32 md:h-18 tiny:h-18 fixed bg-blue-pin items-center text-white w-full z-50">
        <div className="visible md:hidden lg:hidden xl:hidden sm:hidden w-full">
          {/* <Navbar /> */}
          <div className="flex h-18 justify-center w-1/3 items-center">
            <button onClick={() => navigateTo("/")}>
              <img
                src="/assets/img/header-desktop-light.png"
                alt="icon"
                width="100px"
              />
            </button>
          </div>
          <Burger />
        </div>
        <div className="invisible md:visible lg:visible xl:visible sm:visible flex justify-center  w-1/3">
          <button onClick={() => navigateTo("/")}>
            <img
              src="/assets/img/header-desktop-light.png"
              alt="icon"
              width="100px"
            />
          </button>
        </div>
        <div className="invisible md:visible lg:visible xl:visible sm:visible flex flex-row space-x-12 justify-center w-1/3">
          <button
            className="flex border-1 border-blue-pin rounded-lg px-4 py-1 capitalize hover:border-green-pin hover:bg-green-pin hover:bg-opacity-15"
            onClick={() => navigateTo("/")}
          >
            {t("home")}
          </button>
          <button
            className="flex flex-row border-1 border-blue-pin items-center space-x-2 rounded-lg px-4 py-1 capitalize hover:border-green-pin hover:bg-green-pin hover:bg-opacity-15"
            onClick={() => {
              setShowCategoryDropDown(!showCategoryDropDown);
              setShowUserDropDown(false);
            }}
          >
            <p>{t("categories")}</p>
            <div className="flex flex-col">
              <img src="svg/arrowDown.svg" alt="arrowDown" />
              {showCategoryDropDown && (
                <div className="flex flex-col space-y-3 divide-y-1 divide-gray-pin4 z-50 fixed mt-4 bg-gray-pin text-gray-pin4 border-1 border-green-pin py-2 px-6 rounded-lg ">
                  {categoriesTranslated.length > 0 &&
                    categoriesTranslated.map((category, i) => (
                      <button
                        key={i}
                        className="pt-2"
                        onClick={() => navigateTo("/categories")}
                      >
                        <h1>{category.name}</h1>
                      </button>
                    ))}
                </div>
              )}
            </div>
          </button>
          <button
            className="flex border-1 border-blue-pin rounded-lg px-4 py-1 capitalize hover:border-green-pin hover:bg-green-pin hover:bg-opacity-15"
            onClick={() => navigateTo("/blogs")}
          >
            {t("blog")}
          </button>
        </div>

        {/* loged user or login */}
        <div className="invisible md:visible lg:visible xl:visible sm:visible flex flex-row sm:justify-end space-x-8  w-1/3">
          {user && user.email !== "" ? (
            <>
              <button
                className="flex border-1 border-blue-pin rounded-lg px-4 py-1 capitalize hover:border-green-pin hover:bg-green-pin hover:bg-opacity-15"
                onClick={() => {
                  localStorage.clear();
                  navigateTo("/");
                }}
              >
                {t("logout")}
              </button>
              <button
                className="flex border-1 rounded-lg px-4 py-1 capitalize border-green-pin bg-green-pin bg-opacity-15 text-sm"
                onClick={() => {
                  setShowUserDropDown(!showUserDropDown);
                  setShowCategoryDropDown(false);
                }}
              >
                <p>{user.name}</p>
                <div className="flex flex-col">
                  {showUserDropDown && (
                    <div className="flex flex-col space-y-3 divide-y-1 divide-gray-pin4 z-50 fixed mt-4 bg-gray-pin text-gray-pin4 border-1 border-green-pin py-2 px-6 rounded-lg ">
                      {AccountMenuList.map((item, i) => (
                        <button
                          key={i}
                          className="pt-2"
                          onClick={() => {
                            item.code === "dashboard"
                              ? navigateTo("/dashboard")
                              : navigateTo("/account");
                          }}
                        >
                          <h1>{t(`${item.label}`)}</h1>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </button>
            </>
          ) : (
            <>
              <button
                className="flex border-1 border-blue-pin rounded-lg px-4 py-1 capitalize hover:border-green-pin hover:bg-green-pin hover:bg-opacity-15"
                onClick={() => navigateTo("/login")}
              >
                {t("login")}
              </button>
              <button
                className="flex border-1 border-blue-pin rounded-lg px-4 py-1 capitalize hover:border-green-pin hover:bg-green-pin hover:bg-opacity-15"
                onClick={() => navigateTo("/register")}
              >
                {t("register profile")}
              </button>
            </>
          )}
          <div className="justify-center flex pr-4">
            <SelectLanguage />
          </div>
        </div>
      </nav>
    </>
  );
}
