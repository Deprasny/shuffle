import { FaInstagram, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";

export function Footer() {
  return (
    <div className="bg-black  font-normal">
      <div className="max-w-[1320px] mx-auto  py-4 border-t border-white">
        <div className="flex justify-between items-center text-white">
          <div className="flex items-center gap-6">
            <span className=" text-sm">@Shuffle Inc</span>
            <div className="flex items-center gap-4">
              <select className="bg-transparent text-sm  outline-none cursor-pointer">
                <option value="en">English</option>
                <option value="id">Indonesia</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-8 text-sm ">
            <a
              href="#"
              className="hover:text-gray-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-gray-300"
            >
              Term of Use
            </a>
            <a
              href="#"
              className="hover:text-gray-300"
            >
              Purchase Terms
            </a>
            <a
              href="#"
              className="hover:text-gray-300"
            >
              Cookie Settings
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-white hover:text-gray-300"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300"
            >
              <FaTiktok className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300"
            >
              <FaXTwitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300"
            >
              <FaYoutube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
