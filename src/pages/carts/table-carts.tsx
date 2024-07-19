import { Button } from "@/components/ui/button";

export default function TableCarts() {
  return (
    <>
      <table className="w-full font-Poppine text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 p-9 border-black border-solid">
        <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-900 dark:text-gray-800 rounded-full">
          <tr className="text-center">
            <th scope="col" className="px-6 py-3">
              Product
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Total Cost
            </th>
            <th scope="col" className="px-6 py-3">
              Amount
            </th>
            <th scope="col" className="px-6 py-3">
              SubTotal
            </th>
            <th scope="col" className="px-6 py-3 ">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2 items-center">
              <img src="https://cdn.pixabay.com/photo/2023/12/04/15/12/soap-8429699_1280.jpg" alt="photo" width={20} />
              sabun
            </td>
            <td className="px-6 py-4">Rp. 2000</td>
            <td className="px-6 py-4">3333</td>
            <td className="px-6 py-4">333</td>
            <td className="px-6 py-4">Rp. 9999</td>
            <td className="px-6 py-4">
              <div className="flex gap-2">
                <Button variant={"hapuscart"} size={"cart"}>
                  hapus
                </Button>
                <Button variant={"editcart"} size={"cart"}>
                  edit
                </Button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
