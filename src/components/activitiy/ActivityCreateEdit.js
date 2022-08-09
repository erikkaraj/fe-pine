import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  getActivity,
  postActivity,
  postActivityImages,
  putActivity,
} from "../../core/Activity";
import { getUser } from "../../axios/userStore";
import { BrowserRouter as useParams } from "react-router-dom";
import { publicEndpoint } from "../../axios/axios";

export default function ActivityCreateEdit({
  selectedCategory,
  setSelectedTab = () => {},
}) {
  const [t] = useTranslation();
  let navigate = useNavigate();

  let { activityId } = useParams();

  const user = getUser();

  const [activity, setActivity] = useState({
    category_id: selectedCategory?.id,
    sub_category_id: "",
    name: "",
    people_count: "",
    elements: [{ id: "", label: "" }],
    description: "",
    contact_number: "",
    contact_email: "",
    price: "",
    price_night: "",
    price_night_currency: "",
    price_person: "",
    price_person_currency: "",
    ofer_night_count: "",
    ofer_night_price: "",
    ofer_night_currency: "",
    user_id: user.id,
    images: [{}],
  });

  useEffect(() => {
    if (activityId) {
      getActivity(activityId).then((res) => setActivity(res));
    }
  }, [activityId]);

  function addRemoveElement(el) {
    const _elements = [...activity.elements];

    const elementIndex = _elements.findIndex((item) => item.id === el.id);
    if (elementIndex >= 0) {
      _elements.splice(elementIndex, 1);
    } else {
      _elements.push(el);
    }

    setActivity({ ...activity, elements: _elements });
  }

  function saveActivity() {
    if (activityId) {
      putActivity({ payload: activity, activityId: activityId }).then(
        navigate("/account")
      );
      [...selectedFiles].map((file) =>
        postActivityImages({ payload: file, activityId: activityId })
      );
    } else {
      postActivity({ payload: activity }).then((res) => {
        navigate("/account");
        [...selectedFiles].map((file) =>
          postActivityImages({ payload: file, activityId: res.id })
        );
      });
    }
  }

  const [selectedFiles, setSelectedFiles] = useState([]);

  return (
    <div className="flex flex-col md:p-12 space-y-8">
      <div className="flex flex-row rounded-xl border-1 border-green-pin w-1/2 py-4 px-8 items-center justify-between">
        <h1 className="flex text-graypin3">
          {activity?.category ? activity.category.name : selectedCategory?.name}
        </h1>
        <img
          src={`svg/${selectedCategory?.code}.svg`}
          alt={`${selectedCategory?.code}`}
          onError={(e) => {
            e.target.src = "svg/map.svg";
            e.target.onError = null;
          }}
        />
      </div>
      {/* sub category */}
      <div>
        <h1 className="text-gray-pin3 font-extrabold pl-10 pb-4">
          {t("category")}
        </h1>
        <div className="flex md:flex-wrap tiny:flex-row">
          {[
            { id: 1, label: "Dhomë" },
            { id: 2, label: "shtepi" },
            { id: 3, label: "hotel" },
            { id: 4, label: "resort" },
          ].map((el, index) => (
            <button
              key={index}
              className={`flex md:w-1/5 m-2 p-2 border-1 border-green-pin justify-center rounded-lg capitalize  ${
                activity.sub_category_id === el.id
                  ? "bg-green-pin bg-opacity-15"
                  : ""
              }`}
              onClick={() => {
                setActivity({ ...activity, sub_category_id: el.id });
              }}
            >
              <h1>{el.label}</h1>
            </button>
          ))}
        </div>
      </div>
      {/* name */}
      <div>
        <h1 className="text-gray-pin3 font-extrabold pl-10 pb-4">
          {t("activity name")}
        </h1>
        <input
          type="text"
          className="flex w-full border-1 border-gray-pin4 rounded-md h-10 p-2 text-center"
          value={activity?.name}
          onChange={(e) => {
            setActivity({ ...activity, name: e.target.value });
          }}
        />
      </div>
      {/* elements */}
      <div>
        <h1 className="text-gray-pin3 font-extrabold pl-10 pb-4">
          {t("space")}
        </h1>
        <div className="flex md:flex-wrap tiny:flex-row  tiny:overflow-x-scroll w-full">
          {[
            { id: 1, label: "Dhomë gjumi 1" },
            { id: 2, label: "Dhomë gjumi 2" },
            { id: 3, label: "Dhomë gjumi 3" },
            { id: 4, label: "Sallon ndenje" },
            { id: 5, label: "Tualet" },
            { id: 6, label: "Ballkon" },
            { id: 7, label: "Papafingo" },
          ].map((el, index) => (
            <button
              key={index}
              className={`flex md:w-1/5 tiny:w-full m-2 p-2 border-1 border-green-pin justify-center rounded-lg capitalize active hover:bg-green-pin hover:bg-opacity-15  ${
                activity.elements.findIndex((item) => item.id === el.id) >= 0
                  ? "bg-green-pin bg-opacity-15"
                  : ""
              }`}
              onClick={() => {
                addRemoveElement(el);
              }}
            >
              <h1>{el.label}</h1>
            </button>
          ))}
        </div>
      </div>
      {/* people count */}
      <div>
        <h1 className="text-gray-pin3 font-extrabold pl-10 pb-4">
          {t("ppl count")}
        </h1>
        <input
          type="number"
          className="flex flex-1 tiny:w-full md:w-1/4 border-1 border-gray-pin4 rounded-md h-10 p-2"
          value={activity?.people_count}
          onChange={(e) => {
            setActivity({ ...activity, people_count: e.target.value });
          }}
        />
      </div>
      {/* description */}
      <div>
        <h1 className="text-gray-pin3 font-extrabold pl-10 pb-4">
          {t("description")}
        </h1>
        <textarea
          value={activity?.description}
          onChange={(e) => {
            setActivity({ ...activity, description: e.target.value });
          }}
          className="flex flex-1 w-full border-1 border-gray-pin4 rounded-md p-12"
          rows={8}
          name="message"
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      </div>
      {/* add photo */}
      <div>
        <div className="flex flex-row pl-4 pb-4 space-x-2">
          <img src="svg/smallPlus.svg" alt="plus" />
          <h1 className="text-gray-pin3 font-extrabold">{t("add photo")}</h1>
        </div>
        <div className="flex flex-wrap">
          {activity &&
            activity?.images?.length > 0 &&
            activity.images.map((image, i) => (
              <button className="flex w-1/5 m-2 p-2 h-24 w-24 items-center border-1 border-gray-pin2 justify-center rounded-2xl">
                <img
                  src={`${publicEndpoint}storage/activity/${image.file_path}`}
                  alt="img"
                />
              </button>
            ))}
          {selectedFiles.length > 0 &&
            [...selectedFiles].map((file) => (
              <button className="flex w-1/5 m-2 p-2 h-24 w-24 items-center border-1 border-gray-pin2 justify-center rounded-2xl">
                <img src={URL.createObjectURL(file)} alt="img" />
              </button>
            ))}
          <label
            htmlFor="icon-button-file"
            className="flex flex-col w-1/5 m-2 p-2 h-24 w-24 items-center border-1 border-gray-pin2 justify-center rounded-2xl hover:cursor-pointer"
          >
            <img src="svg/plus.svg" alt="img" />
            <h1 className="flex text-gray-pin2">{t("add")}</h1>
          </label>
          <input
            multiple
            type="file"
            accept="image/*"
            id="icon-button-file"
            className="invisible hidden"
            onChange={(e) => setSelectedFiles(e.target.files)}
          />
        </div>
      </div>
      <div>
        <div className="flex flex-row pl-4 pb-4 space-x-2">
          <img src="svg/smallPlus.svg" alt="plus" />
          <h1 className="text-gray-pin3 font-extrabold">{t("positioning")}</h1>
        </div>
        <input
          type="text"
          className="flex flex-1 w-full border-1 border-gray-pin4 rounded-md h-10 text-center p-2"
        />
      </div>

      {/* contact /email */}
      <div>
        <div className="flex flex-row pl-4 pb-4 space-x-2">
          <img src="svg/smallPlus.svg" alt="plus" />
          <h1 className="text-gray-pin3 font-extrabold">{t("contacts")}</h1>
        </div>
        <div className="space-y-2">
          <div className="flex flex-row items-center justify-between">
            <h1 className="p-2 w-1/4">{t("number")}</h1>
            <input
              type="number"
              className="flex flex-1 w-3/4 border-1 border-gray-pin4 rounded-md h-10 p-2"
              value={activity?.contact_number}
              onChange={(e) => {
                setActivity({ ...activity, contact_number: e.target.value });
              }}
            />
          </div>
          <div className="flex flex-row items-center justify-between">
            <h1 className="p-2 w-1/4">{t("email")}</h1>
            <input
              type="text"
              className="flex flex-1 w-3/4 border-1 border-gray-pin4 rounded-md h-10 p-2"
              value={activity?.contact_email}
              onChange={(e) => {
                setActivity({ ...activity, contact_email: e.target.value });
              }}
            />
          </div>
        </div>
      </div>
      {/* price */}
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row pl-4 pb-4 space-x-2">
          <img src="svg/smallPlus.svg" alt="plus" />
          <h1 className="text-gray-pin3 font-extrabold">{t("price")}</h1>
        </div>
        <div className="flex tiny:flex-col md:flex-row justify-start space-x-4 items-center tiny:h-32 md:h-12 tiny:pb-8">
          <div className="flex flex-row items-center space-x-4 w-24">
            <input type="checkbox" />
            <h1>{t("night")}</h1>
          </div>
          <input
            type="number"
            className="rounded-lg border-1 h-10 w-28 border-gray-pin4"
            value={activity?.price_night}
            onChange={(e) => {
              setActivity({ ...activity, price_night: e.target.value });
            }}
          />
          <div className="flex flex-row space-x-4">
            <div className="flex flex-row items-center space-x-4">
              <input
                type="checkbox"
                checked={activity?.price_night_currency === 1 ? true : false}
                onChange={() => {
                  setActivity({
                    ...activity,
                    price_night_currency: 1,
                  });
                }}
              />
              <h1>{t("euro")}</h1>
            </div>
            <div className="flex flex-row items-center space-x-4">
              <input
                type="checkbox"
                checked={activity?.price_night_currency === 0 ? true : false}
                onChange={() => {
                  setActivity({
                    ...activity,
                    price_night_currency: 0,
                  });
                }}
              />
              <h1>{t("all")}</h1>
            </div>
          </div>
        </div>
        <div className="flex tiny:flex-col md:flex-row justify-start space-x-4 items-center tiny:h-32 md:h-12 tiny:pb-8">
          <div className="flex flex-row items-center space-x-4 w-24">
            <input type="checkbox" />
            <h1>{t("person")}</h1>
          </div>
          <input
            type="number"
            className="rounded-lg border-1 h-10 w-28 border-gray-pin4"
            value={activity?.price_person}
            onChange={(e) => {
              setActivity({ ...activity, price_person: e.target.value });
            }}
          />
          <div className="flex flex-row space-x-4">
            <div className="flex flex-row items-center space-x-4">
              <input
                type="checkbox"
                checked={activity?.price_person_currency === 1 ? true : false}
                onChange={() => {
                  setActivity({
                    ...activity,
                    price_person_currency: 1,
                  });
                }}
              />
              <h1>{t("euro")}</h1>
            </div>
            <div className="flex flex-row items-center space-x-4">
              <input
                type="checkbox"
                checked={activity?.price_person_currency === 0 ? true : false}
                onChange={() => {
                  setActivity({
                    ...activity,
                    price_person_currency: 0,
                  });
                }}
              />
              <h1>{t("all")}</h1>
            </div>
          </div>
        </div>
      </div>
      {/* offer */}
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row pl-4 pb-4 space-x-2">
          <img src="svg/smallPlus.svg" alt="plus" />
          <h1 className="text-gray-pin3 font-extrabold">{t("offer")}</h1>
        </div>
        <div className="flex tiny:flex-col md:flex-row justify-start space-x-4 items-center tiny:h-32 md:h-12 tiny:pb-8">
          <div className="flex flex-row items-center space-x-4 pr-8">
            <h1>{t("night")}</h1>
            <p>x</p>
            <input
              type="number"
              className="rounded-lg border-1 h-10 w-18 border-gray-pin4"
              value={activity?.ofer_night_count}
              onChange={(e) => {
                setActivity({ ...activity, ofer_night_count: e.target.value });
              }}
            />
          </div>
          <input
            type="number"
            className="rounded-lg border-1 h-10 w-28 border-gray-pin4"
            value={activity?.ofer_night_price}
            onChange={(e) => {
              setActivity({ ...activity, ofer_night_price: e.target.value });
            }}
          />
          <div className="flex flex-row space-x-4">
            <div className="flex flex-row items-center space-x-4">
              <input type="checkbox" />
              <h1>{t("euro")}</h1>
            </div>
            <div className="flex flex-row items-center space-x-4">
              <input type="checkbox" />
              <h1>{t("all")}</h1>
            </div>
          </div>
        </div>
      </div>
      {/* accept conditions */}
      <div className="flex flex-row space-x-2 ">
        <input type="checkbox" className="flex mt-1" />
        <h1 className="flex text-gray-pin3">
          Po, unë miratoj menagjimin e të dhënave personale të pin-e. Të dhënat
          e shënuara do të mblidhen dhe procesohen vetëm për qëllimet e
          lartpërmendura.
        </h1>
      </div>
      <div className="flex flex-row space-x-2 ">
        <input type="checkbox" className="flex mt-1" />
        <h1 className="flex text-gray-pin3">
          Po, unë pajtohem me qëllimin dhe kushtet të pin-e. Politikat e
          privatësisë në faqen e pin-e.
        </h1>
      </div>
      <div></div>
      {/* buttons */}
      <div className="flex flex-row justify-between items-center">
        <button
          className="flex font-semibold rounded-lg py-2 w-32 h-12 items-center justify-center bg-gray-pin2"
          onClick={() => {
            if (activityId) {
              navigate(-1);
            } else {
              setSelectedTab("category");
            }
          }}
        >
          <h1>{t("back")}</h1>
        </button>
        <button
          className="flex font-semibold rounded-lg py-2 w-32 h-12 items-center justify-center bg-green-pin text-white"
          onClick={() => {
            saveActivity();
          }}
        >
          <h1>{t("save")}</h1>
        </button>
      </div>
    </div>
  );
}
