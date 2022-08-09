import React, { useState } from "react";

export default function ToggleListMap() {
  const [switchButton, setSwitchButton] = useState("list");

  return (
    <div className="flex rounded-full bg-gray-pin h-10 flex-row">
      <div
        className={`flex rounded-full w-14 pl-3 justify-center transition-all duration-500 ${
          switchButton === "list" ? "bg-green-pin " : ""
        }`}
      >
        <button className="w-10 h-10" onClick={() => setSwitchButton("list")}>
          <img src="/svg/gray/list.svg" alt="list" />
        </button>
      </div>
      <div
        className={`flex rounded-full w-14 pl-3 justify-center transition-all duration-500 ${
          switchButton === "map" ? "bg-green-pin " : ""
        }`}
      >
        <button className="w-10 h-10" onClick={() => setSwitchButton("map")}>
          <img src="/svg/gray/map.svg" alt="map" />
        </button>
      </div>
    </div>
  );
}
