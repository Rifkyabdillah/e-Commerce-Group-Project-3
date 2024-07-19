import { Comboboxstok } from "@/components/combobox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { RxCross2 } from "react-icons/rx";
import PaginationTable from "@/components/paginat";

function Stok(props) {
  const { children } = props;
  return (
    <>
      <div className="p-9 bg-slate-50 rounded-xl shadow-lg shadow-slate-300">
        <div className="pt-2 flex justify-between items-center py-4">
          <h2 className="font-Poppine text-[20px] font-semibold">Semua data product</h2>
          <div className="flex gap-2">
            <div>
              <Input type="search" placeholder="search" />
            </div>
            <div>
              <Comboboxstok />
            </div>
          </div>
        </div>
        <div className="bg-slate-400 rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">{children}</table>
        </div>
        <div className="flex justify-between flex-row-reverse">
          <div className="pt-2">
            <PaginationTable />
          </div>
        </div>
      </div>
    </>
  );
}

const Thead = () => {
  return (
    <thead className="text-xs text-gray-700  dark:bg-gray-900 dark:text-gray-800 rounded-full">
      <tr className="text-gray-200">
        <th scope="col" className="px-6 py-3 text-center">
          Nama Product
        </th>
        <th scope="col" className="px-6 py-3 text-center">
          Stok
        </th>
        <th scope="col" className="px-6 py-3 text-center">
          Descripsi
        </th>
        <th scope="col" className="px-6 py-3 text-center">
          Price
        </th>
        <th scope="col" className="px-6 py-3 text-center">
          Image Profile
        </th>
        <th scope="col" className="px-6 py-3 text-center">
          Aksi
        </th>
      </tr>
    </thead>
  );
};

const Tbody = () => {
  return (
    <tbody className="text-black font-Poppine">
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">sabunx</td>
        <td className="px-6 py-4">7</td>
        <td className="px-6 py-4">lorem</td>
        <td className="px-6 py-4">3.00</td>
        <td className="px-6 py-4">
          <img src="" alt="photo" />
        </td>
        <td className="px-6 py-4">
          <Link to="/edit-product">
            <Button variant={"editproduct"} size={"product"}>
              edit
            </Button>
          </Link>
          <Button
            variant={"hapusproduct"}
            size={"cart"}
            onClick={() =>
              toast("Data Sabun terhapus", {
                description: "Sunday, December 03, 2023 at 9:00 AM",
                action: {
                  label: <RxCross2 size={20} />,
                  onClick: () => console.log("Undo"),
                },
              })
            }
          >
            hapus
          </Button>
        </td>
      </tr>
    </tbody>
  );
};

Stok.Tbody = Tbody;
Stok.Thead = Thead;

export default Stok;
