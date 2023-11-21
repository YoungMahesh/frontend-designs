import Image from "next/image";
import Slider1 from "./Slider1";

export default function AdSignup() {
  return (
    <div className="bg-x hidden place-items-center lg:grid">
      <div>
        <div className="m-auto flex flex-col items-center">
          <Image
            src={"/razorpayX.svg"}
            width={155}
            height={32}
            alt="RazorpayX"
            className="mb-4"
          />
          <h2 className="mb-2">Banking made awesome</h2>
          <h2 className="">for startups</h2>
        </div>
        <div className="w-slider mt-10 text-white">
          <Slider1 />
        </div>
        <div className="m-auto mt-20 flex flex-col items-center">
          <p className="text-sm">Loved by top startups ❤️</p>
          <Image
            src={"/loved-by-startups.png"}
            width={420}
            height={32}
            alt="loved-by-startups"
            className="mb-4"
          />
        </div>
      </div>
      <img
        className="bg-gradient-1"
        src="/backgrounds/gradient-1.svg"
        alt="gradient-1"
      />
    </div>
  );
}
