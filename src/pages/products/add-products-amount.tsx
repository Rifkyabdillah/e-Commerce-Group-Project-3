import Layout from "@/components/Layout";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Tambahstok from "../../components/input-tambah";

export default function AddProductAmount() {
  return (
    <Layout>
      <Navbar />
      <div className="container mx-auto px-4 lg:px-10 md:px-6 sm:px-5 pt-10">
        <div>
          <a href=" /product">
            <Button className="py-3" variant={"return"} size={"return"}>
              Return
            </Button>
          </a>
        </div>
        <Tambahstok />
      </div>
    </Layout>
  );
}
