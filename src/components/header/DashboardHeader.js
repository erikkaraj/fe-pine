export default function DashboardHeader({ menuList, setOpentTab = () => {} }) {
  return (
    <div className="flex w-full bg-blue-pin2 text-white h-12 pt-24">
      <ul className="flex flex-row w-full justify-center items-end space-x-8">
        {menuList.length > 0 &&
          menuList.map((item, i) => (
            <li key={i}>
              <button
                className="hover:bg-blue-pin hover:bg-opacity-15 px-2 rounded-lg"
                onClick={() => setOpentTab(item.code)}
              >
                {item.label}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
