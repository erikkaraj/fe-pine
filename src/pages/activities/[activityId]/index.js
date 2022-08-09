import { useTranslation } from "react-i18next";
import MainLayout from "../../../components/layouts/MainLayout";
import MainFooter from "../../../components/footer/MainFooter";
import StarRatting from "../../../components/StarRating";
import { BrowserRouter as useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getActivity } from "../../../core/Activity";
import { publicEndpoint } from "../../../axios/axios";
import MoreInfo from "../../../components/buttons/MoreInfo";

export default function Activity() {
  const [t] = useTranslation();
  const ratting = Math.floor(Math.random() * 5);

  let { activityId } = useParams();

  const [activity, setActivity] = useState({});

  useEffect(() => {
    if (activityId > 0) {
      getActivity(activityId).then((res) => setActivity(res));
    }
  }, [activityId]);

  console.log(activity);

  return (
    <MainLayout>
      <div className="flex flex-col py-10 px-32 w-full">
        {/* actvity */}
        <div className="flex flex-col w-full ">
          <h1 className="flex capitalize text-gray-pin4 text-sm">
            {activity?.category ? activity.category.name : ""}
          </h1>
          <h1 className="flex capitalize text-blue-pin font-bold text-2xl">
            {activity?.name}
          </h1>
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-row space-x-2">
              <h1 className="flex capitalize text-gray-pin4 text-sm">
                {t("reviews")} {ratting}
              </h1>
              <StarRatting ratting={ratting} />
            </div>

            <div className="flex flex-row space-x-2">
              <h1 className="flex capitalize text-gray-pin4 text-sm space-x-2">
                <p>{t("share")}</p>
                <img className="h-5 w-5" src="svg/share.svg" alt="share" />
              </h1>
              <h1 className="flex capitalize text-gray-pin4 text-sm space-x-2">
                <p>{t("save")}</p>
                <img
                  className="h-5 w-5"
                  src="svg/gray/bookmarkEmpty.svg"
                  alt="bookmark"
                />
              </h1>
            </div>
          </div>
          {/* images */}
          <div className="flex flex-row pb-6 space-x-6 w-full h-128">
            <div className="w-1/2 h-128 pb-2 rounded-xl">
              <img
                className="w-full h-full rounded-xl shadow-pine"
                src={`${publicEndpoint}storage/activity/${
                  activity?.images?.length > 0
                    ? activity?.images[0].file_path
                    : ""
                }`}
                alt={`img-${activity?.id}`}
                onError={(e) => {
                  e.target.src = "svg/logo.svg";
                  e.target.onError = null;
                }}
              />
            </div>
            <div className="flex flex-wrap w-1/2 h-128 ">
              {activity?.images?.length > 1 &&
                [1, 2, 3, 4].map((el, i) => (
                  <div className="w-1/2 h-1/2 pb-2 pr-2">
                    <img
                      className="rounded-xl w-full h-full bg-gray-pin2"
                      key={i}
                      src={`${publicEndpoint}storage/activity/${activity?.images[el]?.file_path}`}
                      alt={`img-${activity?.id}`}
                      onError={(e) => {
                        e.target.src = "svg/logo.svg";
                        e.target.onError = null;
                      }}
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className="flex w-full justify-end">
            <MoreInfo text={t("watch all")} />
          </div>
          {/* description */}
          <div className="flex flex-row space-x-20 h-208 py-10 w-full">
            <div className="flex flex-col w-3/5">
              <h1 className="flex capitalize text-blue-pin font-bold text-xl pb-8">
                title
              </h1>
              <h1 className="flex text-sm text-gray-pin4 pb-20">
                2 Persona · 1 Krevat Dopjo · 1 Tualet
              </h1>

              <h1 className="flex text-gray-pin4 leading-loose pb-6">
                {activity?.description}
              </h1>
              <h1 className="flex text-gray-pin4 leading-loose">
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?"
              </h1>
            </div>
            {/* contacts */}
            <div className="flex flex-col w-2/5">
              <h1 className="flex text-blue-pin font-bold text-xl pb-10">
                {t("contacts")}
              </h1>
              <div className="flex flex-row pb-10 items-center w-1/2 space-x-12">
                <img
                  src="/assets/img/phone-call-desktop.png"
                  alt="pone"
                  width="45px"
                  height="30px"
                />
                <h1 className="flex text-blue-pin text-xl">
                  {activity.contact_number}
                </h1>
              </div>
              <div className="flex flex-row pb-10 items-center w-1/2 space-x-12">
                <img
                  src="svg/email.svg"
                  alt="email"
                  width="45px"
                  height="30px"
                />
                <h1 className="flex text-blue-pin text-xl">
                  {activity.contact_email}
                </h1>
              </div>
              {/* price */}
              <div className="flex flex-row pb-10 items-center w-2/3 space-x-12">
                <h1 className="flex capitalize text-blue-pin font-bold text-xl">
                  {t("price")}
                </h1>
                <h1 className="flex text-blue-pin text-xl p-4 border-1 border-green-pin w-48 text-center items-center justify-center rounded-xl">
                  {activity.price_person + " "}
                  {t(`${activity.price_person_currency ? "all" : "euro"}`)}
                </h1>
              </div>
              {/* addres */}
              <div className="flex flex-col pb-10 w-2/3 pb-10">
                <h1 className="flex capitalize text-blue-pin font-bold text-xl pb-4">
                  {t("address")}
                </h1>
                <div className="w-full h-64 rounded-xl">
                  <img
                    className="bg-cover bg-grey rounded-xl w-full h-full"
                    src="svg/mapExample.svg"
                    alt="map"
                  />
                </div>
                <h1 className="flex capitalize text-blue-pin font-bold text-lg py-4 underline">
                  Rruga Plazhi, Borsh, Vlorë.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b-2 border-gray-pin2"></div>

        {/* comments */}
        <div className="flex flex-col">
          <div className="flex flex-row py-12 space-x-8 items-center">
            <h1 className="flex flex text-blue-pin font-bold text-2xl">
              {t("reviews")}
            </h1>
            <div className="flex flex-row items-center">
              <h1 className="flex capitalize text-gray-pin4 text-lg pr-2">
                {ratting}
              </h1>
              <StarRatting ratting={ratting} />
            </div>
          </div>

          <div className="flex flex-wrap">
            {[1, 2, 3, 4].map((el, i) => (
              <div key={i} className="flex flex-col w-1/2 pr-12 pb-8">
                <div className="flex flex-row space-x-8 items-center pb-4">
                  <img
                    className="h-16 w-16 bg-grey rounded-lg"
                    src="svg/logo.svg"
                    alt="avatar"
                  />
                  <div className="flex flex-col space-y-2 ">
                    <div className="flex flex-row space-x-12">
                      <h1 className="text-blue-pin font-bold">Filani</h1>
                      <StarRatting />
                    </div>
                    <h1> korrik 2022</h1>
                  </div>
                </div>
                <h1 className="leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis
                </h1>
              </div>
            ))}
          </div>
        </div>
        {/* new comment */}
        <div className="flex flex-col  w-full px-32">
          <div className="flex flex-row pb-4 items-center space-x-6">
            <input
              type="text"
              className="flex border-2 border-gray-pin2 h-10 text-center rounded-lg"
              placeholder={t("your name")}
            />
            <input
              type="email"
              className="flex border-2 border-gray-pin2 h-10 text-center rounded-lg"
              placeholder={"E-mail"}
            />
            <StarRatting />
          </div>
          <textarea
            className="flex border-2 border-gray-pin2  rounded-lg w-full p-10 w-1/2"
            rows={5}
            placeholder={t("your comment")}
          />

          <div className="flex flex-row justify-between py-4 items-center ">
            <div className="flex flex-row space-x-2 items-center">
              <input type="checkbox" />
              <h1>{t("save my name & email")}</h1>
            </div>
            <button className="flex px-4 py-2 rounded-lg bg-green-pin text-white">
              {t("comment")}
            </button>
          </div>
        </div>
        <div className="border-b-2 border-gray-pin2"></div>
        {/* other activities  sugjestions*/}
        <div className="flex flex-col flex-1 items-center h-sreen tiny:py-10">
          <h1 className="text-green-pin text-md font-semibold tracking-widest uppercase">
            {t("suggestions")}
          </h1>
          <h1 className="font-bold text-3xl text-gray-pin-3">
            Akomodime të tjera
          </h1>
          <div className="flex flex-row justify-between space-x-8 py-12 w-3/4 tiny:overflow-x-hide">
            {[1, 2, 3, 4].map((el) => (
              <div key={el} className="flex h-76 w-56 bg-grey rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
      <MainFooter />
    </MainLayout>
  );
}
