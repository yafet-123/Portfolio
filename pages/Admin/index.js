import Image from "next/image";
import BarChart from "@/components/Admin/Home/BarChart";

export async function getServerSideProps(context){
  const excounts = await prisma.Exhibition.count()
  const necounts = await prisma.news.count()
  const uscounts = await prisma.User.count()
  const wocounts = await prisma.SelectedWorks.count()

  return{
    props:{
      exhibitioncount:JSON.parse(JSON.stringify(excounts)),
      newscount:JSON.parse(JSON.stringify(necounts)),
      usercount:JSON.parse(JSON.stringify(uscounts)),
      Workcount:JSON.parse(JSON.stringify(wocounts)),
    }
  }
}

export default async function AdminHome({exhibitioncount,newscount,usercount,Workcount}) {
  return (
    <section className="mt-32 flex flex-col w-full h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-2 lg:px-10">
        <div className="flex flex-col items-center text-white p-[2rem] rounded-[20px] bg-[#F7F7F7] cursor-pointer shadow-md hover:shadow-xl shadow-inherit overflow-hidden hover:scale-95 transition-transform duration-300" >
          <h1 className="font-poppins font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] tracking-[0.25%] text-black pb-5">User</h1>
          <h2 className="font-normal font-poppins xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] tracking-[0.25%] text-black">{usercount}</h2>
        </div>

        <div className="flex flex-col items-center text-white p-[2rem] rounded-[20px] bg-[#F7F7F7] cursor-pointer shadow-md hover:shadow-xl shadow-inherit overflow-hidden hover:scale-95 transition-transform duration-300" >
          <h1 className="font-poppins font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] tracking-[0.25%] text-black pb-5">Works</h1>
          <h2 className="font-normal font-poppins xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] tracking-[0.25%] text-black">{Workcount}</h2>
        </div>

        <div className="flex flex-col items-center text-white p-[2rem] rounded-[20px] bg-[#F7F7F7] cursor-pointer shadow-md hover:shadow-xl shadow-inherit overflow-hidden hover:scale-95 transition-transform duration-300" >
          <h1 className="font-poppins font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] tracking-[0.25%] text-black pb-5">News</h1>
          <h2 className="font-normal font-poppins xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] tracking-[0.25%] text-black">{newscount}</h2>
        </div>

        <div className="flex flex-col items-center text-white p-[2rem] rounded-[20px] bg-[#F7F7F7] cursor-pointer shadow-md hover:shadow-xl shadow-inherit overflow-hidden hover:scale-95 transition-transform duration-300" >
          <h1 className="font-poppins font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] tracking-[0.25%] text-black pb-5">Exhibition</h1>
          <h2 className="font-normal font-poppins xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] tracking-[0.25%] text-black">{exhibitioncount}</h2>
        </div>
      </div>
      <BarChart work={Workcount} news={newscount} exhibition={exhibitioncount} user={usercount} />
    </section>
  );
}
