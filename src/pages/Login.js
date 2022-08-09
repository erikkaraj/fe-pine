import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import SocialLogin from "../components/login/SocialLogin";
import { login } from "../core/Login";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);

  const [t] = useTranslation();

  const submit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  let navigate = useNavigate();

  return (
    <>
      <MainLayout>
        <div className="flex h-full bg-gray-300 items-center justify-center">
          <div className="container max-w-md  bg-white rounded-lg py-14 px-18 m-8">
            <div className="flex pb-8 justify-center">
              <img
                src="/assets/img/header-desktop-dark.png"
                alt="icon"
                width="150px"
              />
            </div>
            <p className="font-bold">Hyr në llogari</p>

            <SocialLogin />
            <div className="flex flex-row justify-between">
              <img src="/svg/gray/line.svg" alt="line" />
              <h2 className="text-center text-tiny text-gray-pin3">Ose</h2>
              <img src="/svg/gray/line.svg" alt="line" />
            </div>

            {error && (
              <div
                className="relative py-3 pl-4 pr-10 leading-normal text-red-700 bg-red-100 rounded-lg my-4"
                role="alert"
              >
                <p></p>
                <button
                  className="absolute inset-y-0 right-0 flex items-center mr-4"
                  onClick={() => setError(false)}
                >
                  <span>
                    <svg
                      className="w-4 h-4 fill-current"
                      role="button"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            )}

            <form onSubmit={submit}>
              <div className="mb-4">
                <h2 className="text-left py-2 text-sm">{t("email")}</h2>
                <input
                  className="shadow outline-none appearance-none border-1 rounded-xl border-green-pin bg-none w-full py-2 px-3 text-grey-darker"
                  id="email"
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="exmaple@email.com"
                />
              </div>
              <div className="mb-6">
                <h2 className="text-left py-2 text-sm">{t("password")}</h2>
                <div className="flex flex-row items-center">
                  <input
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

                <div className="flex flex-row pt-4 justify-between text-sm">
                  <div className="items-center flex-row flex space-x-2">
                    <input type="checkbox" />
                    <h2>Me mbaj mend</h2>
                  </div>
                  <h2>Ke harruar fjalekalimin?</h2>
                </div>
              </div>
              <div className="flex items-center justify-center ">
                <button
                  className="bg-green-pin text-white font-semibold py-2 w-full rounded-md hover:bg-opacity-85"
                  type="submit"
                >
                  {t("login")}
                </button>
              </div>

              <div className="flex flex-row py-2 justify-center">
                <h2 className="text-center font-semibold pr-2">
                  Nuk ke nje llogari?
                </h2>
                <button
                  className="text-green-pin text-center font-semibold"
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Regjistrohu Tani
                </button>
              </div>
            </form>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Login;
