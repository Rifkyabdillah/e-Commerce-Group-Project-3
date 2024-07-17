import ButtomMudal from "../basket/modalBasket";
import ButtomMudalOrder from "../history/modalHistoryorder";

export default function Header() {
  return (
    <>
      <div>
        <ul className="flex gap-4 py-10 items-center font-medium">
          <li>
            <a href="" className="py-2 px-11  rounded-lg hover:bg-[#FF6F00]  hover:text-white transition-colors duration-300">
              Home
            </a>
          </li>
          <li>
            <ButtomMudal />
          </li>
          <ButtomMudalOrder />
          <li>
            <a href="" className="py-2 px-10  rounded-lg hover:text-white transition-colors duration-300 hover:bg-[#FF6F00]">
              Purchaser
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
