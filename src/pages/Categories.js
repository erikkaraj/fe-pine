import { ChevronDownIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CategoryCard from "../components/cards/CategoryCard";
import MainFooter from "../components/footer/MainFooter";
import MainLayout from "../components/layouts/MainLayout";
import SearchBar from "../components/SearchBar";
import { getCategories } from "../core/Category";
import i18n from "i18next";
import ToggleListMap from "../components/buttons/ToggleListMap";
import { getPaginatedAtivities } from "../core/Activity";

export default function Categories() {
  const [t] = useTranslation();

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

  const [paginatedActivities, setPaginatedActivities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [links, setLinks] = useState([]);

  const [loading, setLoading] = useState(true);
  // const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    getPaginatedAtivities({ query: searchTerm, pageNumber: currentPage }).then(
      (res) => {
        setLoading(false);

        setCurrentPage(res.current_page);
        setPaginatedActivities(res.data);

        setLinks(res.links.slice(1, -1));
      }
    );
  }, [searchTerm, currentPage]);

  return (
    <MainLayout>
      <container className="flex flex-col justify-center items-center w-full tiny:pt-18">
        <div className="flex justify-center w-full pt-12 space-x-10">
          <div className="w-1/3">
            <SearchBar
              type="light"
              onChange={(e) => {
                if (e.target.value === "") {
                  setSearchTerm("all");
                  setCurrentPage(1);
                  setPaginatedActivities([]);
                } else {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                  setPaginatedActivities([]);
                }
              }}
            />
          </div>
          <ToggleListMap />
        </div>
        <div className="flex justify-center capitalize space-x-5 tiny:mx-4 tiny:flex-wrap md:flex-row">
          <h1>{t("all items")}</h1>
          {categoriesTranslated.length > 0 &&
            categoriesTranslated.map((category, index) => (
              <h1>{category.name}</h1>
            ))}
          <div className="flex flex-row">
            <h1>{t("more")}</h1>
            <button className="w-6 h-6">
              <ChevronDownIcon stroke="#B5BAD0" />
            </button>
          </div>
        </div>
        <div className="flex rounded-full border-gray-pin2 py-1 px-2 bg-gray-pin2 w-3/4 my-8 items-center capitalize tiny:flex-wrap md:flex-row">
          <img src="svg/filter.svg" alt="filter" />
          <h1 className="rounded-full border-2 border-gray-pin2 pr-8 px-4 bg-gray-pin2">
            {t("filter")}
          </h1>
          {[
            "lowest price",
            "highiest price",
            "new entry",
            "most evalueted",
            "hotels",
            "aparments",
            "rooms",
          ].map((el) => (
            <button
              key={Math.random() * 100}
              className="rounded-full border-2 border-gray-pin2 py-2 px-4 bg-gray-pin2 hover:underline hover:cursor-pointer"
              onClick={() => {
                setSearchTerm({ filter: el });
              }}
            >
              {t(`${el}`)}
            </button>
          ))}
        </div>
        {/* category card */}
        {!loading ? (
          paginatedActivities.length > 0 &&
          paginatedActivities.map((categoryActivity) => (
            <CategoryCard
              categoryActivity={categoryActivity}
              categories={categories}
            />
          ))
        ) : (
          <div className="flex flex-1 w-full h-96 text-green-pin items-center justify-center py-48">
            {t("loading activities")}
          </div>
        )}
        <div className="flex flex-row">
          {links.map((el) => (
            <button
              className={`flex text-green-pin px-2`}
              onClick={() => {
                setLoading(true);
                setPaginatedActivities([]);
                setCurrentPage(el.label);
              }}
            >
              {el.label}
            </button>
          ))}
        </div>
      </container>
      <MainFooter />
    </MainLayout>
  );
}
