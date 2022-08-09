import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SelectLanguage from "../header/Language";
import { getUser } from "../../axios/userStore";
import { getCategories } from "../../core/Category";
import i18n from "i18next";
import { AccountMenuList } from "../../core/Options";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #ffffff;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    padding-top: 1.5rem;
    transition: transform 0.5s ease-in-out;

    left: 15%;
    right: 0%;
    top: 6%;
    bottom: 0%;

    li {
      left: 0%;
      right: 0%;
      top: 0%;
      bottom: 0%;
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      color: #1e1e1e;
      text-align: center;
    }

    li > button {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      color: #1e1e1e;
      text-align: center;
    }

    hr {
      width: 60%;
      height: 0px;
      left: 142px;
      top: 290px;
      border: 1px solid #c5d6df;
      margin-left: 20%;
      margin-right: 20%;
    }
  }
`;

const RightNav = ({ open }) => {
  const user = getUser();

  const { t } = useTranslation();

  const navigate = useNavigate();

  const navigateTo = (to) => {
    navigate(to);
  };

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
    <Ul open={open} className="border-1 border-gray-pin3">
      <li>
        <button
          className="capitalize hover:border-green-pin hover:bg-green-pin hover:bg-opacity-15"
          onClick={() => navigateTo("/")}
        >
          {t("home")}
        </button>
      </li>
      <hr />
      <li>
        <button
          className="flex-col space-x-2"
          onClick={() => {
            setShowCategoryDropDown(!showCategoryDropDown);
            setShowUserDropDown(false);
          }}
        >
          <p>{t("categories")}</p>
          {showCategoryDropDown && (
            <div className="flex flex-col space-y-3 mt-4">
              {categoriesTranslated.length > 0 &&
                categoriesTranslated.map((category, i) => (
                  <button
                    key={i}
                    className="pt-2"
                    onClick={() => navigateTo("/categories")}
                  >
                    <h1 className="hover:bg-green-pin hover:bg-opacity-15 p-2 rounded-lg">
                      {category.name}
                    </h1>
                  </button>
                ))}
            </div>
          )}
        </button>
      </li>
      <hr />
      <li>
        <button
          className="hover:border-green-pin hover:bg-green-pin hover:bg-opacity-15"
          onClick={() => navigateTo("/blogs")}
        >
          {t("blog")}
        </button>
      </li>
      <hr />
      {user && user.email !== "" ? (
        <>
          <li>
            <button
              className="rounded-lg px-4 py-1 hover:border-green-pin hover:bg-green-pin hover:bg-opacity-15"
              onClick={() => {
                localStorage.clear();
                navigateTo("/");
              }}
            >
              {t("logout")}
            </button>
          </li>
          <li>
            <button
              className="flex-col space-x-2"
              onClick={() => {
                setShowUserDropDown(!showUserDropDown);
                setShowCategoryDropDown(false);
              }}
            >
              <p className="border-1 rounded-lg px-4 py-1 capitalize border-green-pin bg-green-pin bg-opacity-15">
                {user.name}
              </p>
              {showUserDropDown && (
                <div className="flex flex-col space-y-3 mt-4">
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
                      <h1 className="p-2 ">{t(`${item.label}`)}</h1>
                    </button>
                  ))}
                </div>
              )}
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <button
              className="capitalize hover:border-green-pin hover:bg-green-pin hover:bg-opacity-15"
              onClick={() => navigateTo("/login")}
            >
              {t("login")}
            </button>
          </li>
          <li>
            <button
              className="rounded-lg px-4 py-1 capitalize hover:border-green-pin hover:bg-green-pin hover:bg-opacity-15"
              onClick={() => navigateTo("/register")}
            >
              {t("register profile")}
            </button>
          </li>
        </>
      )}

      <li>
        <div className="justify-center flex pr-4">
          <SelectLanguage />
        </div>
      </li>
    </Ul>
  );
};

export default RightNav;
