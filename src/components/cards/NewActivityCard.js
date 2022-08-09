import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function NewActivityCard() {
  const [t] = useTranslation();
  const navigate = useNavigate();

  const navigateTo = (to) => {
    navigate(to);
  };

  return (
    <div className="flex flex-col m-2 ">
      <h1 className="text-white text-sm">t</h1>
      <h2 className="text-white font-semibold">t</h2>
      <div className="flex flex-col h-48 w-48 border-1 border-gray-pin4 rounded-lg items-center justify-center ">
        <button>
          <img
            src="/svg/addCircle.svg"
            alt={t("edit")}
            onClick={() => {
              navigateTo("/activity");
            }}
          />
        </button>
        <h1 className="text-green-pin w-1/2 text-center">
          {t("add activity")}
        </h1>
      </div>
    </div>
  );
}
