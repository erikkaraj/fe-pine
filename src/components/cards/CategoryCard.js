import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { publicEndpoint } from "../../axios/axios";
import StarRatting from "../StarRating";

export default function CategoryCard({ categoryActivity, categories }) {
  const navigate = useNavigate();

  const imagePath =
    categoryActivity?.images?.length > 0
      ? `${publicEndpoint}storage/activity/${categoryActivity?.images[0].file_path}`
      : "";

  const [preferred, setPreferred] = useState(false);

  return (
    <div className="flex w-3/4 pb-6 abosolute tiny:flex-col tiny:space-y-4 tiny:h-128 md:h-64 xl:h-84 md:flex-row md:space-x-4 md:space-y-0">
      <div className="flex bg-blue-200 rounded-xl h-full tiny:w-full md:w-2/5 bg-cover">
        <img
          className="flex rounded-lg w-full"
          src={`${imagePath}`}
          alt={`img-${categoryActivity?.id}`}
          onError={(e) => {
            e.target.src = "svg/logo.svg";
            e.target.onError = null;
          }}
        />
        <button
          className="-ml-8 mt-4 z-10 relative h-6 w-6"
          onClick={() => {
            setPreferred(!preferred);
          }}
        >
          {preferred ? (
            <img src="svg/bookmarkFull.svg" alt="bookmark" />
          ) : (
            <img src="svg/bookmarkEmpty.svg" alt="bookmark" />
          )}
        </button>
      </div>
      <button
        className="flex md:w-3/5 md:h-full bg-gray-pin2 rounded-xl md:py-8 md:px-12 flex-col tiny:w-full tiny:p-4"
        onClick={() => navigate(`activity/${categoryActivity.id}`)}
      >
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-col">
            <h1 className="flex text-gray-pin4 text-tiny">
              {categoryActivity?.category_id &&
                categories.length > 0 &&
                categories.find((el) => el.id === categoryActivity.category_id)
                  .name}
            </h1>
            <h1 className="flex capitalize font-bold">
              {categoryActivity.name}
            </h1>
          </div>
          <img
            src="/assets/img/phone-call-desktop.png"
            alt="phone"
            width="45px"
            height="30px"
          />
        </div>

        <div className="flex flex-row">
          <StarRatting ratting={Math.floor(Math.random() * 6) + 1} />
        </div>
        <div className="flex flex-row w-full justify-between items-center">
          <h1 className="flex text-tiny py-4 w-3/4 tiny:h-24 tiny:overflow-hidden">
            {categoryActivity.description}
          </h1>
          <div className="flex flex-col items-end justify-end">
            <h1 className="flex text-2xl text-blue-pin font-semibold">
              {categoryActivity.price}
            </h1>
            <h1 className="flex uppercase text-sm text-gray-pin4 font-semibold">
              all/nata
            </h1>
          </div>
        </div>
        <h1 className="flex text-sm text-gray-pin4">
          2 Persona · 1 Krevat Dopjo · 1 Tualet
        </h1>
      </button>
    </div>
  );
}
