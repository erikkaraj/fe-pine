import MainFooter from "../components/footer/MainFooter";
import MainLayout from "../components/layouts/MainLayout";
import SearchBar from "../components/SearchBar";
import { useTranslation } from "react-i18next";
import Events from "../components/home/Events";
import MoreInfo from "../components/buttons/MoreInfo";
import { useEffect, useState } from "react";
import { getCategories } from "../core/Category";
import { useNavigate } from "react-router-dom";
import i18n from "i18next";
import SpecialOffers from "../components/home/SpecialOffers";

export default function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();

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
    <div className="w-full">
      <MainLayout>
        <div className="w-full">
          {/* search and categories */}
          <div className="flex flex-1 items-center justify-center h-screen bg-cover bg-home-pattern">
            <div className="flex flex-col items-center">
              <h1 className="justify-center w-3/4 text-center md:text-5xl tiny:text-3xl font-bold text-white">
                {t("slogan")}
              </h1>
              <h1 className="pt-4 pb-12 text-white ">{t("search quote")} </h1>
              <SearchBar type="dark" />

              <div className="flex w-full tiny:flex-wrap md:flex-row text-white space-x-4 justify-center text-tiny">
                {categoriesTranslated.map((category, i) => (
                  <button
                    key={i}
                    className="flex flex-col space-y-2 items-center justify-between"
                    onClick={() => navigate("/categories")}
                  >
                    <div className="flex flex-col space-y-2 items-center justify-between">
                      <div className="border-1 border-green-pin bg-green-pin bg-opacity-15 m-4 rounded-xl h-full hover:bg-opacity-25">
                        <img
                          src={`svg/${category.code}.svg`}
                          alt={`${category.code}`}
                          onError={(e) => {
                            e.target.src = "svg/map.svg";
                            e.target.onError = null;
                          }}
                        />
                      </div>
                      <h1 key={i}>{category.name}</h1>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* events */}
          <Events />
          {/* special offers */}
          <SpecialOffers />
          <div className="flex md:flex-row tiny:flex-col w-full h-sreen ">
            <div className="flex items-center tiny:w-full tiny:m-auto md:w-1/2 md:py-20 ">
              <img
                className="tiny:mx-3 tiny:h-64 md:h-full tiny:mb-4 rounded-xl shadow-pine"
                src="svg/beachDay.svg"
                alt="beach"
              />
            </div>
            <div className="flex flex-col tiny:w-full tiny:px-3 md:w-1/2 md:py-20">
              <h2 className="text-green-pin text-md font-semibold tracking-widest uppercase pb-8">
                {t("acomodation")}
              </h2>
              <div className="flex flex-col w-2/3">
                <h2 className="font-bold w-3/4 text-gray-pin3 tiny:text-base sm:text-xl md:text-2xl lg:text-3xl ">
                  {t("acomodation quote")}
                </h2>
                <h1 className="py-4">{t("acomotation text")}</h1>
              </div>

              <MoreInfo />
            </div>
          </div>
          <div className="flex flex-col flex-1 items-center h-sreen tiny:py-10">
            <h1 className="text-green-pin text-md font-semibold tracking-widest uppercase ">
              {t("opinion")}
            </h1>
            <h1 className="font-bold text-3xl text-gray-pin-3">
              {t("most ratted")}
            </h1>
            <div className="flex flex-row justify-between space-x-8 py-12 w-1/2 tiny:overflow-x-hide">
              {[1, 2, 3].map((el) => (
                <div
                  key={el}
                  className="flex h-76 w-56 bg-grey rounded-lg"
                ></div>
              ))}
            </div>
          </div>

          <div className="flex md:flex-row tiny:flex-col-reverse w-full h-sreen py-12 space-y-10">
            <div className="flex flex-col tiny:w-full tiny:px-3 md:w-1/2 py-20 tiny:pl-10">
              <h2 className="text-green-pin text-md font-semibold tracking-widest uppercase pb-8">
                {t("culinari")}
              </h2>
              <div className="flex flex-col w-9/12 ">
                <h2 className="font-bold md:text-3xl w-3/4 text-gray-pin-3 tiny:text-base sm:text-xl md:text-2xl lg:text-3xl">
                  {t("culinari quote")}
                </h2>
                <h1 className="py-4 w-9/12">{t("culinari text")}</h1>
              </div>
              <MoreInfo />
            </div>
            <div className="flex items-center w-full md:w-1/2 ">
              <img
                className="tiny:mx-3 tiny:h-64 md:h-full tiny:mb-4 rounded-xl shadow-pine"
                src="svg/allForOne.svg"
                alt="triple"
              />
            </div>
          </div>
        </div>
      </MainLayout>
      <MainFooter />
    </div>
  );
}
