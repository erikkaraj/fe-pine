import { useTranslation } from "react-i18next";
import ActivityCreateEdit from "../../../components/activitiy/ActivityCreateEdit";
import MainLayout from "../../../components/layouts/MainLayout";

export default function ActivityEdit() {
  const [t] = useTranslation();
  return (
    <MainLayout>
      <div className="flex tiny:flex-col md:flex-row p-10">
        <div className="md:w-1/2 md:visible tiny:invisible tiny:w-0 tiny:h-0">
          <div className="flex flex-row px-12 space-x-4">
            <h1 className="text-blue-pin2">{t("activity type")}</h1>
            <img src="svg/arrowRight2.svg" alt="arrow" />
            <h1 className="text-blue-pin2">{t("activity details")}</h1>
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
        <div className="tiny:w-full md:w-1/2"></div>
        <div className="tiny:w-full md:w-1/2">
          <ActivityCreateEdit />
        </div>
      </div>
    </MainLayout>
  );
}
