import { userContext } from "@/store/userContext";
import { useContext } from "react";

export default function Topbar() {
  const { user } = useContext(userContext);

  return (
    <header className="flex h-16 items-center justify-end px-6 border-b bg-[#EDEDED]">
      <div className="bg-zinc-200 flex items-center gap-2 px-4 py-1 rounded-lg transition-colors duration-200">
        <div className="size-12 rounded-full overflow-hidden border border-black">
          <img
            src="https://i.pinimg.com/originals/7f/79/55/7f7955a81f8a0a76fb3ebbdbed63477c.jpg"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold">{user.name}</p>
          <p className="text-xs text-gray-500">{user.role?.toUpperCase()}</p>
        </div>
      </div>
    </header>
  );
}
