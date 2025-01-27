const links = [
  {
    name: "Dashboard",
    img: "/sidebar/dashboard.png",
  },
  {
    name: "OPD",
    img: "/sidebar/opd.png",
  },
  {
    name: "OPD Log",
    img: "/sidebar/opdLog.png",
  },
  {
    name: "Medical Waste",
    img: "/sidebar/waste.png",
  },
  {
    name: "Rest",
    img: "/sidebar/rest.png",
  },
  {
    name: "Training",
    img: "/sidebar/training.png",
  },
];

export default function Sidebar() {
  return (
    <div className="w-[18%] relative h-screen bg-[#2A3F54] text-white flex flex-col">
      <div className="flex flex-row items-center text-3xl">
        <img src="/sidebar/thapar_logo.png" alt="" className="pt-5 pl-2" />
        <h1 className="font-semibold">Thapar Care</h1>
      </div>
      <div className="flex flex-col items-start text-sm">
        <h1 className="text-xl px-7 py-1">Main Menu</h1>
        {links.map((link) => (
          <div className="group flex flex-row justify-between w-full">
            <div className="flex flex-row justify-start gap-5 w-full group-hover:gap-8 transition-all duration-200 hover:cursor-pointer px-7 py-3 hover:bg-[#354a5d]">
              <img src={link.img} alt="" className="" />
              <p>{link.name}</p>
            </div>
            <div className="group-hover:bg-[#15bc9d] w-[4px]"></div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 flex flex-row justify-start gap-5 w-full hover:cursor-pointer px-7 py-4 hover:bg-[#354a5d]">
        <img src="./sidebar/logout.png" alt="" className="" />
        <p>logout</p>
      </div>
    </div>
  );
}
