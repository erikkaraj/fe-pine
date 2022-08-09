import React from "react";

const GoogleLoginButton = ({ onClick, disabled, loading }) => {
  const _onClick = (e) => {
    if (!loading) {
      onClick(e);
    }
  };

  return (
    <button
      className="flex flex-row space-x-2  font-semibold shadow-md py-2 px-8 w-full rounded-lg hover:bg-gray-pin2"
      onClick={_onClick}
      disabled={loading || disabled}
    >
      <img src="/svg/google.svg" alt="google" />
      <h1>Google</h1>
    </button>
  );
};

export default GoogleLoginButton;
