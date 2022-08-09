import { useState } from "react";
import { useTranslation } from "react-i18next";
import { getUser } from "../../axios/userStore";
import { updateUserProfile } from "../../core/User";

export default function AccountDetails() {
  const user = getUser();

  const [firstName, setFirstName] = useState(user.name);
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirmed, setNewPasswordConfirmed] = useState("");

  const [matchingPassword, setMatchingPassword] = useState(true);

  const [t] = useTranslation();

  const submit = async (e) => {
    e.preventDefault();
    if (newPassword !== newPasswordConfirmed) {
      setMatchingPassword(false);
    } else {
      updateUserProfile({
        payload: {
          name: firstName,
          email: email,
          password: newPassword,
        },
        userId: user.id,
      });
    }
  };

  return (
    <div className="flex w-10/12 flex-col h-full">
      <div className="flex flex-row py-2 items-center">
        <button className="flex w-1/5 m-2 p-2 h-24 w-24 items-center border-1 border-green-pin justify-center rounded-2xl">
          <img src="svg/image.svg" alt="img" />
        </button>
        <h1 className="flex text-green-pin font-semibold">
          {t("change picture")}
        </h1>
      </div>
      <form onSubmit={submit}>
        <div className="w-full flex tiny:flex-col tiny:space-x-0 md:flex-row md:space-x-4 ">
          <div className="mb-4 tiny:w-full md:w-1/2">
            <h2 className="text-left p-2 text-sm">{t("first name")}</h2>
            <input
              className="shadow outline-none appearance-none rounded-xl bg-gray-pin w-full py-2 px-3 text-grey-darker"
              id="firstname"
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="smb"
              value={firstName ? firstName : ""}
            />
          </div>
          <div className="mb-4 tiny:w-full md:w-1/2">
            <h2 className="text-left p-2 text-sm">{t("last name")}</h2>
            <input
              className="shadow outline-none appearance-none rounded-xl bg-gray-pin w-full py-2 px-3 text-grey-darker"
              id="lastname"
              disabled={true}
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              placeholder="smb"
              value={lastName ? lastName : ""}
            />
          </div>
        </div>
        <div className="flex flex-row space-x-4 w-full tiny:flex-col tiny:space-x-0">
          <div className="mb-4 tiny:w-full md:w-1/2">
            <h2 className="text-left p-2 text-sm">{t("email")}</h2>
            <input
              className="shadow outline-none appearance-none rounded-xl bg-gray-pin w-full py-2 px-3 text-grey-darker"
              id="email"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="exmaple@email.com"
              value={email ? email : ""}
            />
          </div>
        </div>
        <div className="flex flex-row space-x-4 w-full tiny:flex-col tiny:space-x-0">
          <div className="mb-4 tiny:w-full md:w-1/2">
            <h2 className="text-left p-2 text-sm">{t("old password")}</h2>
            <input
              className="shadow outline-none appearance-none rounded-xl bg-gray-pin w-full py-2 px-3 text-grey-darker"
              id="password"
              type="password"
              onChange={(e) => setOldPassword(e.target.value)}
              placeholder="*******"
              value={oldPassword ? oldPassword : ""}
            />
          </div>
        </div>
        <div className="w-full flex md:flex-row md:space-x-4 tiny:flex-col tiny:space-x-0">
          <div className="mb-4 tiny:w-full md:w-1/2">
            <h2 className="text-left p-2 text-sm">{t("new password")}</h2>
            <input
              className="shadow outline-none appearance-none rounded-xl bg-gray-pin w-full py-2 px-3 text-grey-darker"
              id="newpassword"
              type="password"
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="*******"
              value={newPassword ? newPassword : ""}
            />
          </div>
          <div className="mb-4 tiny:w-full md:w-1/2">
            <h2 className="text-left p-2 text-sm">
              {t("confirm new password")}
            </h2>
            <input
              className={`shadow outline-none appearance-none rounded-xl ${
                matchingPassword ? "bg-gray-pin" : "bg-red-400"
              }  w-full py-2 px-3 text-grey-darker`}
              id="confirmpassword"
              type="password"
              onChange={(e) => {
                setNewPasswordConfirmed(e.target.value);
                setMatchingPassword(
                  newPassword === e.target.value ? true : false
                );
              }}
              placeholder="*******"
              value={newPasswordConfirmed ? newPasswordConfirmed : ""}
            />
          </div>
        </div>
        <div className="flex justify-end tiny:w-full md:w-1/4">
          <button
            className="bg-green-pin text-white font-semibold  py-2 w-full rounded-md hover:bg-opacity-85"
            type="submit"
          >
            {t("save")}
          </button>
        </div>
      </form>
    </div>
  );
}
