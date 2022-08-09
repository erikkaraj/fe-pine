import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import { useNavigate } from "react-router-dom";
import { useMatomo } from "@datapunt/matomo-tracker-react";

const Nav = styled.nav`
  width: 90%;
  height: 55px;
  display: flex;

  @media (max-width: 768px) {
    img {
      width: 428px;
    }
  }
`;

const Navbar = (user) => {
  const navigate = useNavigate();

  const navigateTo = (to) => {
    navigate(to);
  };

  const { trackPageView, trackEvent } = useMatomo();

  // Track page view
  React.useEffect(() => {
    trackPageView({
      customDimensions: [
        {
          id: 1,
          value: user?.user?.id,
        },
        {
          id: 2,
          value: user?.user?.email,
        },
      ], // optional
    });
  }, [trackPageView]);

  const handleOnClick = () => {
    // Track click on button
    trackEvent({ category: "navbar", action: "click-event" });
  };

  return (
    <Nav>
      <div className="flex justify-center w-1/3 pt-2">
        <button onClick={(() => navigateTo("/"), { handleOnClick })}>
          <img
            src="/assets/img/header-desktop-light.png"
            alt="icon"
            width="100px"
          />
        </button>
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
