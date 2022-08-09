import { useTranslation } from "react-i18next";
import MoreInfo from "../buttons/MoreInfo";
import SpecialOfferCard from "../cards/SpecialOfferCard";

export default function SpecialOffers() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col bg-gray-pin w-full items-center pb-18">
      <h1 className="text-3xl font-bold pt-16 pb-8">{t("special offer")}</h1>
      <div className="flex tiny:flex-wrap items-center md:flex-row rounded-full border-gray-pin2 py-1 px-2 bg-gray-pin2">
        <h1 className="rounded-full borde-2 borde-gray-pin2 py-2 px-4 bg-gray-pin2 hover:bg-white">
          Acomodim
        </h1>
        <h1 className="rounded-full borde-2 borde-gray-pin2 py-2 px-4 bg-gray-pin2 hover:bg-white">
          Agroturizëm
        </h1>
        <h1 className="rounded-full borde-2 borde-gray-pin2 py-2 px-4 bg-gray-pin2 hover:bg-white">
          Kulinari
        </h1>
        <h1 className="rounded-full borde-2 borde-gray-pin2 py-2 px-4 bg-gray-pin2 hover:bg-white">
          Aktivitete
        </h1>
      </div>

      <div className="flex flex-row justify-between w-full overflow-x-scroll space-x-8 py-12">
        {[1, 2, 3, 4, 5].map((el) => (
          <SpecialOfferCard />
        ))}
      </div>

      <MoreInfo />
    </div>
  );
}
