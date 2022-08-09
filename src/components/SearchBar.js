import { SearchIcon } from "@heroicons/react/outline";
import { useMemo } from "react";

const SearchBar = ({ type, onChange }) => {
  const searchType = useMemo(() => {
    switch (type) {
      case "dark":
        return "bg-green-pin bg-opacity-25 text-white";
      case "light":
        return "text-black";
      default:
        return "";
    }
  }, [type]);

  return (
    <div
      className={`${
        type === "dark" ? "w-1/2" : "w-full"
      } flex place-self-center pb-14`}
    >
      <input
        className={`h-10 w-full border-2 border-green-pin px-4 rounded-full text-sm ${searchType}`}
        type="text"
        onChange={onChange}
        placeholder="Kerko..."
      />
      <SearchIcon className="h-6 -ml-10 mt-2 text-green-pin" />
    </div>
  );
};
export default SearchBar;
