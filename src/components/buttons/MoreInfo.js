import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function MoreInfo({ to, text = "more info" }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const navigateTo = (to) => {
    navigate(to);
  };

  return (
    <div className="flex flex-row  items-center capitalize space-x-4 text-green-pin text-tiny item-self-end">
      <h1>{t(`${text}`)}</h1>
      <button>
        <img
          src="/svg/arrowRight.svg"
          alt={t("more info")}
          onClick={() => {
            if (to) navigateTo(`${to}`);
          }}
        />
      </button>
    </div>
  );
}
