import "bootstrap/dist/css/bootstrap.min.css";
import { BiChevronRight } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { RiNotification3Fill } from "react-icons/ri";
import { FiInbox } from "react-icons/fi";

function Navigation() {
  return (
    <div className="flex items-center justify-between w-full h-auto bg-white border-2 text-sm text-black py-4 px-4">
      <div className="flex items-center">
        <div className="mr-4">
          <img
            className="w-10 h-10"
            src="https://www.linkpicture.com/q/lena.png"
            type="image"
          />
        </div>

        <div className="flex items-center justify-center">
          <button className="flex ml-8 font-semibold no-underline  text-2xl text-black-300   hover:text-blue-700">
            Projects
          </button>
          <BiChevronRight className="ml-4 text-4xl  text-gray-500" />
          <button className="ml-4 font-semibold p-2 no-underline  text-2xl text-black-300   hover:text-blue-700">
            P216674
          </button>
        </div>
      </div>
      <div className="flex items-center  divide-x-2">
        <div className="flex ">
          <FiInbox className="text-2xl text-gray-500 mr-7 hover:text-gray-700" />
          <RiNotification3Fill className="text-2xl mr-7 text-gray-500 hover:text-gray-700" />
        </div>
        <div className="p-2 flex items-center hover:text-gray-400">
          <img
            className="flex ml-6 mr-3 w-8  h-8 rounded-full"
            src="http://www.gucyetmez.com.tr/wp-content/uploads/2017/03/testy3-1.png"
            alt="John Doe"
          />
          <h1 className="flex text-base mt-2">John M Doe</h1>
          <BsChevronDown className="ml-4 text-black" />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
