import MoreInfo from "../buttons/MoreInfo";

export default function Events() {
  return (
    <div className="flex flex-col items-center text-gray-pin-3">
      <h1 className="text-3xl font-bold pt-20">Evente</h1>

      <div className="flex justify-around tiny:px-8 tiny:py-10 tiny:flex-col tiny:space-y-4 md:space-y-0 md:flex-row md:px-32 md:py-20">
        <div className="flex flex-col">
          <h1 className="flex font-bold text-xl">Akomodim</h1>
          <h1 className="md:w-10/12 tiny:w-full ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h1>
          <MoreInfo />
        </div>
        <div className="flex flex-col">
          <h1 className="flex font-bold text-xl">Pikat Kulturore</h1>
          <h1 className="md:w-10/12 tiny:w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h1>
          <MoreInfo />
        </div>
        <div className="flex flex-col">
          <h1 className="flex font-bold text-xl">Transporti</h1>
          <h1 className="md:w-10/12 tiny:w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h1>
          <MoreInfo />
        </div>
      </div>
    </div>
  );
}
