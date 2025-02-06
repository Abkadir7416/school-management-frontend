// import Menu from "@/components/menu";
// import Menu from "@/components/Menu";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex ">
      {/* LEFT  */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 lg:justify-start"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block">school</span>
          
        </Link>
        <Menu />
      </div>
      {/* <div className="w-[30%] md:w-[8%] md:bg-yellow-300 lg:w-[16%] xl:w-[14%] bg-red-200">left</div> */}
      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg[#F7F8FA] overflow-scroll">
        <Navbar />
      </div>
      {/* <div className="w-[70%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-blue-200">right</div> */}
    </div>
  );
}