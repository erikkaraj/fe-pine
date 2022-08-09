import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import React, { useRef, useState } from "react";
import SocialLogin from "../components/login/SocialLogin";
import MainLayout from "./../components/layouts/MainLayout";
import { useNavigate } from "react-router-dom";
import { postUser } from "../core/User";
import SelectList from "../components/input/SelectList";
import { useTranslation } from "react-i18next";
import ErrorModal from "../components/modals/ErrorModal";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);
  const [role, setRole] = useState("");

  const roleOptions = [
    { value: "2", label: "Llogari Biznes" },
    { value: "3", label: "Llogari Personale" },
  ];

  let navigate = useNavigate();
  const [t] = useTranslation();

  const submit = (e) => {
    e.preventDefault();
    postUser(name, email, password, role).then((res) => {
      if (res.message.includes("00013")) {
        errorModalRef.current.show();
      } else {
        navigate("/login");
      }
    });
  };

  const errorModalRef = useRef();

  return (
    <MainLayout>
      <ErrorModal ref={errorModalRef} content={t("email warning")} />

      <div className="flex h-full bg-gray-300 items-center justify-center">
        <div className="container max-w-md  bg-white rounded-lg py-14 px-18 m-8">
          <div className="flex pb-8 justify-center">
            <img
              src="/assets/img/header-desktop-dark.png"
              alt="icon"
              width="150px"
            />
          </div>
          <p className="font-bold">{t("register")}</p>
          <SocialLogin />

          <div className="flex flex-row justify-between">
            <img src="/svg/gray/line.svg" alt="line" />
            <h2 className="text-center text-tiny text-gray-pin3">Ose</h2>
            <img src="/svg/gray/line.svg" alt="line" />
          </div>

          <form onSubmit={submit}>
            <div className="mb-4">
              <h2 className="text-left py-2 text-sm">{t("user name")}</h2>
              <input
                required
                className="shadow outline-none appearance-none border-1 rounded-xl border-green-pin bg-none w-full py-2 px-3 text-grey-darker"
                id="name"
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Emër Mbiemer"
              />
            </div>
            <div className="mb-4">
              <h2 className="text-left py-2 text-sm">{t("email")}</h2>
              <input
                required
                className="shadow outline-none appearance-none border-1 rounded-xl border-green-pin bg-none w-full py-2 px-3 text-grey-darker"
                id="email"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="exmaple@gmail.com"
              />
            </div>
            <div className="mb-6">
              <h2 className="text-left py-2 text-sm">{t("password")}</h2>
              <div className="flex flex-row items-center">
                <input
                  required
                  className="shadow outline-none appearance-none border-1 rounded-xl border-green-pin bg-none w-full py-2 px-3 text-grey-darker"
                  id="password"
                  type={passwordShow ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="*******"
                />
                {passwordShow ? (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setPasswordShow(!passwordShow);
                    }}
                    className="w-6 h-6 -ml-8 "
                  >
                    <EyeIcon stroke="#B5BAD0" />
                  </button>
                ) : (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setPasswordShow(!passwordShow);
                    }}
                    className="w-6 h-6 -ml-8 "
                  >
                    <EyeOffIcon stroke="#B5BAD0" />
                  </button>
                )}
              </div>
            </div>
            <div className="mb-1">
              <SelectList
                placeholder="Lloji i llogarise"
                options={roleOptions}
                value={role ? roleOptions.find((el) => el.label === role) : ""}
                onChange={(target) => {
                  setRole(target.value ? target.value : "");
                }}
              />
            </div>

            <div className="flex flex-row py-4 justify-between text-sm">
              <div className="items-center flex-row flex space-x-2">
                <input type="checkbox" />
                <h2>{t("remember me")}</h2>
              </div>
            </div>

            <div className="flex items-center justify-center ">
              <button
                className="bg-green-pin text-white font-semibold py-2 w-full rounded-md hover:bg-opacity-85"
                type="submit"
                value="submit"
              >
                {t("login")}
              </button>
            </div>

            <div className="flex flex-row py-2 justify-center">
              <h2 className="text-center font-semibold pr-2">
                {t("do u have profile")}
              </h2>
              <button
                className="text-green-pin text-center font-semibold"
                onClick={() => {
                  navigate("/login");
                }}
              >
                {t("login now")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
