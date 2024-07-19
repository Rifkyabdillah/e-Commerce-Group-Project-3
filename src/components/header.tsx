import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <>
      <div>
        <ul className="flex font-Poppine gap-4 py-10 items-center font-medium">
          <li className="">
            <a href="">
              <Button variant="header" size="header">
                <a href="/"> Home</a>
              </Button>
            </a>
          </li>
          <li>
            <Button variant="header" size="header">
              <a href="/carts">Carts</a>
            </Button>
          </li>
          <li>
            <Button variant="header" size="header">
              <a href="/histori-order">history</a>
            </Button>
          </li>
          <li>
            <Button variant="header" size="header">
              <a href="/purchaser"> Purchaser</a>
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
}
