import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function MainFooter() {
  const navigate = useNavigate();

  const [t] = useTranslation();

  return (
    <div className="flex flex-row bg-gray-pin text-sm h-84 items-center justify-center">
      <div className="w-1/4 mr-12">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            src="/assets/img/header-desktop-dark.png"
            alt="icon"
            width="150px"
          />
        </button>
        <h1>{t("footer slogan")}</h1>
      </div>
      <div className="flex flex-col text-left capitalize w-1/3 space-y-4">
        <h1 className="text-green-pin">{t("services")}</h1>
        <div className="flex flex-row space-x-12">
          <div className="flex flex-col capitalize">
            <h1>acomodim</h1>
            <h1>bujqesi</h1>
            <h1>bujqesi</h1>
            <h1>pikat kulturore</h1>
          </div>
          <div className="flex flex-col capitalize tiny:hidden">
            <h1>acomodim</h1>
            <h1>bujqesi</h1>
            <h1>bujqesi</h1>
            <h1>pikat kulturore</h1>
          </div>
          <div className="flex flex-col capitalize tiny:hidden">
            <h1>acomodim</h1>
            <h1>bujqesi</h1>
            <h1>bujqesi</h1>
            <h1>pikat kulturore</h1>
          </div>
        </div>
      </div>
      <div className=" flex flex-col text-left capitalize space-y-4">
        <h1 className="text-green-pin">{t("follow us")}</h1>
        <div className="flex flex-row items-center space-x-2">
          <div className="flex flex-col space-y-2">
            <img src="/svg/facebook.svg" alt={t("facebook")} />
            <img src="/svg/twiter.svg" alt={t("twiter")} />
            <img src="/svg/instagram.svg" alt={t("instagram")} />
          </div>
          <div className="flex flex-col space-y-2">
            <h1>facebook</h1>
            <h1>twiter</h1>
            <h1>instagram</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
