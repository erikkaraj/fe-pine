import MainHeader from "../header/MainHeader";

export default function MainLayout({ children }) {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
}
