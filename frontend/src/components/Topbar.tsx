import { MdKeyboardArrowDown } from "react-icons/md";

export default function Topbar() {
  return (
    <div className="bg-[#ededed] h-[4.5rem] w-full shadow-md flex items-center">
      <div className="flex flex-row items-center p-2 pr-5 gap-4 absolute right-0">
        <div className="bg-[#7C7B7D] w-[2px] h-[2rem]"></div>
        <img src="/dp.png" alt="" className="rounded-full w-[3rem] h-[3rem]"/>
        <div>
          <p className="text-[#7C7B7D] text-lg font-semibold">Harnoor Singh Aulakh</p>
          <p className="text-[#B5B5B5] text-sm">Doctor</p>
        </div>
        <MdKeyboardArrowDown className="text-[#000000] text-2xl"/>
      </div>
    </div>
  );
}
