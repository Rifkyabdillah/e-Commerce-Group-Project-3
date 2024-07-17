import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "../home/header";
import Layout from "@/components/Layout";
import Navbar from "@/components/navbar";
import Carausel from "@/components/carausel";

export default function Purchaser() {
  return (
    <>
      <Layout>
        <Navbar />
        <div className="lg:px-10 md:px-6 sm:px-5">
          <Header />
          <Carausel />
          <div className="flex justify-center pt-6 min-h-screen">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-5">
              <div>
                <Card className="shadow-md shadow-gray-200 lg:w-[300px] md:w-[270px] w-[220px] sm:w-[300px]">
                  <CardHeader>
                    <CardTitle className="font-Roboto">New Order</CardTitle>
                    <CardDescription>Rp 1000 / ian</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-1">
                    <Button className="w-full bg-[#7949FF]">Approve</Button>
                    <Button className="w-full bg-[#7949FF]">Reject</Button>
                  </CardContent>
                  <CardFooter>
                    <Badge className="bg-[#E1FCEF] text-[#14804A] px-6 hover:bg-[#E1FCEF]">Paid</Badge>
                  </CardFooter>
                </Card>
              </div>
              <div>
                <Card className="shadow-md shadow-gray-200 lg:w-[300px] md:w-[270px] w-[220px] sm:w-[300px]">
                  <CardHeader>
                    <CardTitle className="font-Roboto">New Order</CardTitle>
                    <CardDescription>Rp 1000 / ian</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-1">
                    <Button className="w-full bg-[#7949FF]">Approve</Button>
                    <Button className="w-full bg-[#7949FF]">Reject</Button>
                  </CardContent>
                  <CardFooter>
                    <Badge className="bg-[#E1FCEF] text-[#14804A] px-6">Paid</Badge>
                  </CardFooter>
                </Card>
              </div>
              <div>
                <Card className="shadow-md shadow-gray-200 lg:w-[300px] md:w-[270px] w-[220px] sm:w-[300px]">
                  <CardHeader>
                    <CardTitle className="font-Roboto">New Order</CardTitle>
                    <CardDescription>Rp 1000 / ian</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-1">
                    <Button className="w-full bg-[#7949FF]">Approve</Button>
                    <Button className="w-full bg-[#7949FF]">Reject</Button>
                  </CardContent>
                  <CardFooter>
                    <Badge className="bg-[#E1FCEF] text-[#14804A] px-6">Paid</Badge>
                  </CardFooter>
                </Card>
              </div>
              <div>
                <Card className="shadow-md shadow-gray-200 lg:w-[300px] md:w-[270px] w-[220px] sm:w-[300px]">
                  <CardHeader>
                    <CardTitle className="font-Roboto">New Order</CardTitle>
                    <CardDescription>Rp 1000 / ian</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-1">
                    <Button className="w-full bg-[#7949FF]">Approve</Button>
                    <Button className="w-full bg-[#7949FF]">Reject</Button>
                  </CardContent>
                  <CardFooter>
                    <Badge className="bg-[#E1FCEF] text-[#14804A] px-6">Paid</Badge>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
