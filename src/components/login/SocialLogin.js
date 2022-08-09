import { GoogleLogin } from "react-google-login";
import { google, facebook } from "../../core/Login";
import GoogleLoginButton from "./GoogleLoginButton";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

export default function SocialLogin() {
  const responseGoogle = ({ tokenId }) => {
    google(tokenId);
  };

  const responseFacebook = (res) => {
    facebook(res.accessToken);
  };

  return (
    <div className="flex flex-row w-full item-center justify-center space-x-4 py-4">
      <div className="flex flex-1 items-center justify-between">
        <GoogleLogin
          clientId="942100922079-sp5o9iavfckmia0re19q4ptvpubhv4q7.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          render={(renderProps) => (
            <GoogleLoginButton
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            />
          )}
        />
      </div>
      <div className="flex flex-1 items-center justify-between">
        <FacebookLogin
          appId="617526752888648"
          fields="name,email,picture"
          callback={responseFacebook}
          render={(renderProps) => (
            <button
              className="flex flex-row space-x-2 font-semibold shadow-md py-2 px-8 w-full rounded-lg hover:bg-gray-pin2"
              onClick={() => renderProps.onClick()}
            >
              <img src="/svg/loginFacebook.svg" alt="facebook" />
              <h1>Facebook</h1>
            </button>
          )}
        />
      </div>
    </div>
  );
}
