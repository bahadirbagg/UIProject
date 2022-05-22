import "bootstrap/dist/css/bootstrap.min.css";
import { FiUsers } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import { RiSettings5Line } from "react-icons/ri";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { GoPrimitiveDot } from "react-icons/go";

function Menu() {
  return (
    <div className="flex items-center h-screen w-full justify-center">
      <div className="max-w-xs">
        <div className="bg-white shadow-2xl  w-80 rounded-md py-3 border-1  border-gray-200">
          <table class="text-xs my-3 flex items-center ml-3 p-2">
            <tbody>
              <tr>
                <div className=" flex">
                  <div>
                    <button className="text-xl font-bold flex-row no-underline cursor-pointer p-1 text-black-300 hover:text-blue-700">
                      Project
                    </button>
                    <h1 className="  text-gray-400 p-1 text-sm">01/02/2012</h1>
                  </div>
                  <IoEllipsisHorizontal className=" text-gray-400 text-2xl ml-44 flex" />
                </div>
              </tr>
              <tr>
                <button className="flex items-center text-xl font-bold no-underline cursor-pointer p-1 text-black-300  hover:text-blue-800">
                  Amazon Prime
                </button>
                <h1 className="  text-gray-400 p-1 text-sm">
                  Los Angeles, USA
                </h1>
              </tr>
              <tr>
                <button className="flex items-center text-xl font-bold no-underline cursor-pointer p-1 text-black-300  hover:text-blue-800">
                  Software Development
                </button>
                <h1 className="  text-gray-400 p-1 text-sm">
                  Node JS, C#, Linux
                </h1>
              </tr>
              <tr>
                <button className="flex items-center text-xl font-bold no-underline cursor-pointer p-1 text-black-300 hover:text-blue-800">
                  Location
                </button>
                <h1 className="  text-blue-700 p-1 text-sm">View Map</h1>
              </tr>
              <tr>
                <div className="flex">
                  <div>
                    <button className="text-xl font-bold no-underline cursor-pointer p-1 text-black-300 hover:text-blue-800">
                      Harinder Mondi
                    </button>
                    <h1 className="  text-gray-400 p-1 text-sm">
                      Senior Developer
                    </h1>
                  </div>
                  <img
                    className="w-14 h-14 rounded-full ml-14 "
                    src="http://www.gucyetmez.com.tr/wp-content/uploads/2017/03/testy3-1.png"
                    alt="John Doe"
                  />
                </div>
              </tr>
            </tbody>
          </table>
          <div className="border-t-[1px] border-t-gray-200 text-gray-400 ml-5 text-xs font-semibold p-1">
            <div className="flex">
              <GoPrimitiveDot className="text-yellow-400" />
              <h1 className="text-yellow-400 font-bold text-sm  mt-2">
                WAITING FOR APPROVE
              </h1>
            </div>
            <h1 className=" text-gray-400 text-sm ml-3">UNDER DEVELOPMENT</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
