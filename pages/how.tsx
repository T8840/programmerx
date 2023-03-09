import Layout from "@/components/Layout";
import Link from "next/link";
import HoverText from "@/components/HoverText";
import Input from "@/components/form/Input";

const How = () => {
  return (
    <Layout>
      <div className="w-full overflow-y-hidden relative">
        <h1 className="text-center text-4xl font-medium mb-5">HOW TO EARN A JOB</h1>
      </div>

      <div className="flex-auto border-t-2 transition duration-500 ease-in-out  border-gray-300"></div>

      <div className="mt-5 text-2xl  text-red-700 text-center">
        **Important** Some Course Need You Pay The Tuition.
      </div>
      <div className=" flex flex-col items-center  ">
        <HoverText descriptiontext="Go to deschool select what course you want to learn"
        imagdescription="/images/selectcourse.jpeg" 
   
      />
        <HoverText descriptiontext="Finished the series course you will get the certicate NFT"
        imagdescription="/images/getfinishednft.jpeg" 
   
      />
     <HoverText descriptiontext="Then you can go to JobMarket to change work NFT"
        imagdescription="/images/randombox.png" 
   
      />
    <div className="mt-5 text-2xl  text-blue-700 text-center">
     Some work NFT need more deschool certicate NFTs.
    </div>
     
    <div className="mt-5 text-2xl  text-blue-700 text-center">
     Our staff will contact you immedialy when you change work NFT.
    </div>
       
    <div className="mt-5 text-2xl  text-blue-700 text-center">
     The rarer work NFT you get ,the more salary work you will earn.
    </div> 
    <div>
      <p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </p>
      <p></p>
      <p></p>
    </div> 
      </div>
    </Layout>
  );
};

export default How;
