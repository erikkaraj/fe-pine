import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { publicEndpoint } from "../../axios/axios";
import DeleteModal from "../modals/DeleteModal";

export default function ActivityCard({ activity }) {
  const [t] = useTranslation();

  const navigate = useNavigate();

  function DeleteActivity() {
    errorDeleteRef.current.show();
  }
  const errorDeleteRef = useRef();

  const imagePath =
    activity?.images?.length > 0
      ? `${publicEndpoint}storage/activity/${activity?.images[0].file_path}`
      : "";

  return (
    <div className="flex flex-col m-2 ">
      <DeleteModal
        ref={errorDeleteRef}
        content={t("confirm delete activity")}
        activityId={activity?.id}
      />

      <h1 className="text-gray-pin4 text-sm">{activity.category.name}</h1>
      <h2 className="text-blue-pin font-semibold">{activity.name}</h2>
      <img
        className="flex h-48 w-48 rounded-lg bg-gray-pin4"
        src={`${imagePath}`}
        alt={`img-${activity?.id}`}
        onError={(e) => {
          e.target.src = "svg/logo.svg";
          e.target.onError = null;
        }}
      />
      <div className={`flex -mt-12 items-end`}>
        <div className="flex bg-white rounded-lg m-1 w-full h-10 justify-evenly">
          <button
            className="flex flex-row items-center"
            onClick={() => navigate(`activity/${activity.id}/edit`)}
          >
            <img src="/svg/edit.svg" alt={t("edit")} />
            <h2 className="text-blue-pin ml-2">{t("edit")}</h2>
          </button>
          <button
            className="flex flex-row items-center"
            onClick={() => DeleteActivity()}
          >
            <img src="/svg/delete.svg" alt={t("delete")} />
            <h2 className="text-blue-pin ml-2">{t("delete")}</h2>
          </button>
        </div>
      </div>
    </div>
  );
}
