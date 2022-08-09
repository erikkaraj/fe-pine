import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function ActivityCategory({
  categories,
  selectedCategory,
  setSelectedTab = () => {},
  setSelectedCategory = () => {},
}) {
  const [t] = useTranslation();
  let navigate = useNavigate();

  return (
    <div className="flex flex-col md:p-12 space-y-8">
      {categories.length > 0
        ? categories.map((category, index) => (
            <button
              key={index}
              className={`flex flex-row rounded-xl border-1 ${
                selectedCategory?.code === category.code
                  ? "bg-green-pin bg-opacity-15"
                  : ""
              } border-green-pin w-1/2 py-4 px-8 items-center justify-between hover:bg-green-pin hover:bg-opacity-15`}
              onClick={() => {
                setSelectedCategory(category);
              }}
            >
              <h1 className="flex text-graypin3">{category.name}</h1>
              <img
                src={`svg/${category.code}.svg`}
                alt={`${category.code}`}
                onError={(e) => {
                  e.target.src = "svg/map.svg";
                  e.target.onError = null;
                }}
              />
            </button>
          ))
        : ""}
      <div className="flex flex-row justify-between items-center">
        <button
          className="flex font-semibold rounded-lg py-2 w-32 h-12 items-center justify-center bg-gray-pin2"
          onClick={() => {
            navigate(-1);
          }}
        >
          <h1>{t("back")}</h1>
        </button>
        <button
          className="flex font-semibold rounded-lg py-2 w-32 h-12 items-center justify-center bg-green-pin text-white"
          onClick={() => {
            if (selectedCategory) {
              setSelectedTab("activity");
            }
          }}
        >
          <h1>{t("continue")}</h1>
        </button>
      </div>
    </div>
  );
}
