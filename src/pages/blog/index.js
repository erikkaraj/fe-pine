import MoreInfo from "../../components/buttons/MoreInfo";
import MainFooter from "../../components/footer/MainFooter";
import MainLayout from "../../components/layouts/MainLayout";

export default function Blog() {
  return (
    <MainLayout>
      <div className="flex flex-wrap py-24 md:px-28 w-full">
        {[
          {
            id: 1,
            kategoria: "Kategoria",
            title: "Titulli vendoset ketu ne dy linja 42 pixel",
            date: "2022-03-25",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
          },
          {
            id: 2,
            kategoria: "Kategoria",
            title: "Titulli vendoset ketu ne dy linja 32 pixel",
            date: "2022-03-25",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
          },
          {
            id: 3,
            kategoria: "Kategoria",
            title: "Titulli vendoset ketu ne dy linja 32 pixel",
            date: "2022-03-25",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
          },
          {
            id: 4,
            kategoria: "Kategoria",
            title: "Titulli vendoset ketu ne dy linja 32 pixel",
            date: "2022-03-25",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
          },
          {
            id: 5,
            kategoria: "Kategoria",
            title: "Titulli vendoset ketu ne dy linja 32 pixel",
            date: "2022-03-25",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
          },
          {
            id: 6,
            kategoria: "Kategoria",
            title: "Titulli vendoset ketu ne dy linja 32 pixel",
            date: "2022-03-25",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
          },
          {
            id: 7,
            kategoria: "Kategoria",
            title: "Titulli vendoset ketu ne dy linja 32 pixel",
            date: "2022-03-25",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
          },
        ].map((el, index) =>
          index === 0 ? (
            <div
              key={index}
              className="flex flex-col sm:w-full sm:pb-10 sm:h-132 md:flex-row md:space-x-10 md:h-82 md:w-full px-6 pb-24"
            >
              <div className="w-full md:w-2/5 shadow-all bg-gray-pin4 rounded-xl tiny:h-56 md:h-76">
                <img
                  className="flex w-full strech h-full rounded-xl"
                  src="svg/outsideVila.svg"
                  alt="vila"
                />
              </div>
              <div className="w-full md:w-3/5">
                <h1 className="flex text-green-pin uppercase tracking-widest text-sm">
                  {el.kategoria}
                </h1>
                <h1 className="flex tiny:text-3xl md:text-4xl font-extrabold w-3/4">
                  {el.title}
                </h1>
                <h1 className="flex text-tiny text-gray-pin4 py-2">
                  {el.date}
                </h1>
                <h1 className="flex text-sm py-4 w-11/12">{el.description}</h1>
                <MoreInfo to={`blog/${el.id}`} />
              </div>
            </div>
          ) : (
            <div
              key={index}
              className="flex flex-col sm:w-full md:w-1/3 pb-10 h-132 px-6"
            >
              <div className="w-full h-56 shadow-all bg-gray-pin4 rounded-xl">
                <img
                  className="w-full h-56 shadow-all bg-gray-pin4 rounded-xl"
                  src="svg/beachRiviera.svg"
                  alt="vila"
                />
              </div>
              <div className="w-full">
                <h1 className="flex text-green-pin uppercase tracking-widest text-sm py-2">
                  {el.kategoria}
                </h1>
                <h1 className="flex text-3xl font-bold w-full">{el.title}</h1>
                <h1 className="flex text-tiny text-gray-pin4 py-2">
                  {el.date}
                </h1>
                <h1 className="flex text-sm pt-4 mb-4 w-11/12 h-30 overflow-hidden">
                  {el.description}
                </h1>
                <MoreInfo to={`blog/${el.id}`} />
              </div>
            </div>
          )
        )}
      </div>
      <MainFooter />
    </MainLayout>
  );
}
