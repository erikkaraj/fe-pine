import MainFooter from "../../../components/footer/MainFooter";
import MainLayout from "../../../components/layouts/MainLayout";

export default function Blog() {
  return (
    <MainLayout>
      <div className="flex flex-1 pt-20 md:px-56 w-full items-center">
        <div className="flex flex-col w-full pb-10 px-6">
          <div className="w-full">
            <h1 className="flex text-green-pin uppercase tracking-widest text-sm py-2">
              kategoria
            </h1>
            <h1 className="flex text-4xl font-bold w-full">
              Titulli vendoset ketu ne dy linja 42 pixel
            </h1>
            <img
              className=" w-full bg-gray-pin4 rounded-xl my-6"
              src="svg/beachRiviera.svg"
              alt="vila"
            />
            <div className="flex flex-col px-6">
              <h1 className="flex text-tiny text-gray-pin4 ">2022-03-25</h1>
              <h1 className="flex text-xl font-bold w-full text-blue-pin">
                Nen titulli vendoset ketu 26 pixel
              </h1>
              <h1 className="flex text-sm pt-4 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis
              </h1>
              <h1>
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
              <img
                className="w-full h-full bg-gray-pin4 rounded-xl my-6"
                src="svg/beachRiviera.svg"
                alt="vila"
              />
              <h1>
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est.
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* sugestions */}
      <div className="flex flex-col w-full items-center ">
        <h1 className="flex text-green-pin uppercase tracking-widest text-sm py-2">
          sugjerime
        </h1>
        <h1 className="flex text-xl font-bold text-blue-pin m-auto">
          Lajme te ngjashme
        </h1>
        <div className="flex flex-row w-full h-132 items-center justify-around py-10">
          <button>
            <img src="svg/circleArrowLeft.svg" alt="left" />
          </button>
          <div className="flex w-3/5 space-x-4">
            <div className="w-full rounded-xl shadow-xl">
              <div className="bg-gray-pin4 h-48 rounded-t-xl ">
                <img
                  className="h-full w-full rounded-t-xl"
                  src="svg/nightCandles.svg"
                  alt="fisrt"
                />
              </div>
              <div>
                <h1 className="flex text-tiny text-gray-pin4 px-3 pt-3">
                  2022-03-25
                </h1>
                <h1 className="flex text-xl font-bold w-full text-blue-pin px-3 pb-3">
                  Titulli vendoset ketu ne dy ose tre linja 26 pixel
                </h1>
              </div>
            </div>
            <div className="w-full rounded-xl shadow-xl ">
              <div className="bg-gray-pin4 h-48 rounded-t-xl">
                <img
                  className="h-full w-full rounded-t-xl"
                  src="svg/outsideTable.svg"
                  alt="fisrt"
                />
              </div>
              <div>
                <h1 className="flex text-tiny text-gray-pin4 px-3 pt-3">
                  2022-03-25
                </h1>
                <h1 className="flex text-xl font-bold w-full text-blue-pin px-3 pb-3">
                  Titulli vendoset ketu ne dy ose tre linja 26 pixel
                </h1>
              </div>
            </div>
          </div>
          <button>
            <img src="svg/circleArrowRight.svg" alt="left" />
          </button>
        </div>
      </div>
      <MainFooter />
    </MainLayout>
  );
}
