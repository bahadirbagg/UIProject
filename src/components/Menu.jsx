import "bootstrap/dist/css/bootstrap.min.css";
import { FiUsers } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import { RiSettings5Line } from "react-icons/ri";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Menu() {
  return (
    <div className="flex items-center h-screen w-full justify-center">
      <div className="max-w-xs">
        <div className="bg-white shadow-2xl  w-72 rounded-md py-3 border-1  border-gray-200">
          <div className="photo-wrapper p-2">
            <img
              className="w-14 h-14 rounded-full mx-auto"
              src="http://www.gucyetmez.com.tr/wp-content/uploads/2017/03/testy3-1.png"
              alt="John Doe"
            />
          </div>
          <div className="p-3">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
              John M. Doe
            </h3>
            <div className="border-b-[1px] border-b-gray-200 text-center text-gray-400 text-xs font-semibold">
              <p>john.doe@lenasoftware.com</p>
            </div>
          </div>
          <table class="text-xs my-3 flex items-center p-4">
            <tbody>
              <tr>
                <button className=" flex items-center flex-row no-underline text-lg cursor-pointer p-1 text-black-300 font-normal  hover:text-blue-700">
                  <FiUsers size={20} className="mr-2" />
                  Users
                </button>
              </tr>
              <tr>
                <button className="flex items-center no-underline text-lg cursor-pointer p-1 text-black-300  font-normal hover:text-blue-800">
                  <IoLocationSharp size={20} className="mr-2" /> Locations
                </button>
              </tr>
              <tr>
                <button className="flex items-centerno-underline text-lg cursor-pointer p-1 text-black-300  font-normal hover:text-blue-800">
                  <RiSettings5Line size={20} className="mr-2" />
                  Settings
                </button>
              </tr>
              <tr>
                <button className="flex items-center no-underline text-lg cursor-pointer p-1 text-black-300  font-normal hover:text-blue-800">
                  <AiOutlineCloseCircle size={20} className="mr-2" /> Logout
                </button>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Menu;
