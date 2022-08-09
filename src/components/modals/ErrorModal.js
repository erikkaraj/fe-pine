import React, { forwardRef, useState, useImperativeHandle } from "react";
import { useTranslation } from "react-i18next";

const ErrorModal = (props, ref) => {
  const [showModal, setShowModal] = useState(false);

  const [t] = useTranslation();

  const { content } = props;

  const show = () => {
    setShowModal(true);
  };

  const hide = () => {
    setShowModal(false);
  };

  useImperativeHandle(ref, () => ({
    show() {
      show();
    },

    hide() {
      hide();
    },
  }));

  return (
    <>
      <div ref={ref}>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 ">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*container*/}
                <div className="rounded-lg shadow-all relative flex flex-col w-full bg-white">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">{t("attention")}</h3>
                    <button
                      className="p-1 ml-auto text-black float-right text-3xl font-semibold"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="text-black h-6 w-6 text-2xl block">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-red-700 text-lg leading-relaxed">
                      {content}
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex pb-6 justify-center">
                    <button
                      className="bg-red-600 rounded-md font-semibold text-white uppercase px-6 py-2 text-sm hover:bg-red-400 ease-linear transition-all duration-300"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      {t("close")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" fixed inset-0 z-40 backdrop-blur-sm backdrop-brightness-50">
              s
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default forwardRef(ErrorModal);
