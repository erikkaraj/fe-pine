import { forwardRef } from "react";
import Select from "react-select";

const SelectList = ({ inputTitle, placeholder, value, ...props }, ref) => {
  const customStyles = {
    // STYLE OF THE INPUT
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      border: 0,
      borderRadius: 10,
    }),
    //STYLE OF THE DROPDOWN
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? "#00EF78"
          : isFocused
          ? "#F7F7F7"
          : undefined,
        color: isDisabled ? "#F7F7F7" : isSelected ? "#fff" : data.color,

        ":active": {
          ...styles[":active"],
          backgroundColor: !isDisabled
            ? isSelected
              ? data.color
              : "#F7F7F7"
            : undefined,
        },
      };
    },
    input: (styles) => ({ ...styles }),
    placeholder: (styles) => ({ ...styles }),
    singleValue: (styles, { data }) => ({ ...styles }),
  };
  return (
    <>
      <div className="w-full ">
        <span className="text-gray-600 text-md mt-2">{inputTitle}</span>

        <div className="shadow outline-none appearance-none border-1 rounded-xl border-green-pin bg-none w-full text-grey-darker">
          <Select
            classNamePrefix="select"
            placeholder={placeholder}
            isClearable
            styles={customStyles}
            {...props}
            ref={ref}
          />
        </div>
      </div>
    </>
  );
};
export default forwardRef(SelectList);
