import { useEffect, useState } from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import ActivityCategory from "../../components/activitiy/ActivityCategory";
import ActivityCreateEdit from "../../components/activitiy/ActivityCreateEdit";
import MainFooter from "../../components/footer/MainFooter";
import MainLayout from "../../components/layouts/MainLayout";
import { getCategories } from "../../core/Category";

export default function ActivityCreate() {
  const [t] = useTranslation();

  const [selectedTab, setSelectedTab] = useState("category");
  const [selectedCategory, setSelectedCategory] = useState("");

  const [categories, setCategories] = useState([]);
  const [categoriesTransalated, setCategoriesTransalated] = useState([]);
  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  useEffect(() => {
    setCategoriesTransalated(
      categories.filter((category) => category.translation === i18n.language)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories, i18n.language]);

  return (
    <MainLayout>
      <div className="flex tiny:flex-col md:flex-row p-10">
        <div className="md:w-1/2 md:visible tiny:invisible tiny:w-0 tiny:h-0">
          <div className="flex flex-row px-12 space-x-4">
            <h1 className="text-blue-pin2">{t("activity type")}</h1>
            <img src="svg/arrowRight2.svg" alt="arrow" />
            <h1
              className={
                selectedTab !== "category" ? `text-blue-pin2` : "text-gray-pin4"
              }
            >
              {t("activity details")}
            </h1>
            <img src="svg/arrowRight2.svg" alt="arrow" />
            <h1 className="text-gray-pin4">{t("publish")}</h1>
          </div>
          <div className="flex flex-col p-12 ">
            <h1 className="text-3xl font-bold">{t("add new activity")}</h1>
            <h2 className="text-sm w-1/2">{t("select fields")}</h2>
          </div>
          <div className="flex px-12 border-1 border-gray-pin2">
            <img src="/svg/sofa.svg" alt="img" />
          </div>
        </div>
        <div className="tiny:w-full md:w-1/2">
          {selectedTab === "category" ? (
            <ActivityCategory
              categories={categoriesTransalated}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          ) : (
            <ActivityCreateEdit
              setSelectedTab={setSelectedTab}
              selectedCategory={selectedCategory}
            />
          )}
        </div>
      </div>
      <MainFooter />
    </MainLayout>
  );
}
