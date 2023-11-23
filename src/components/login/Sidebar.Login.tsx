import { Input, Link } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";

export default function SidebarLogin() {
  const [name1, setName1] = useState("");

  const [isNameInvalid, setIsNameInvalid] = useState(false);

  const verifyUserInfo = () => {
    if (name1.length === 0) return setIsNameInvalid(true);
    alert("Form fields validated");
  };

  return (
    <div className="bg-sidebar mr-auto min-h-screen w-full p-10 pt-16">
      <div className="m-auto grid max-w-xs gap-8">
        <div>
          <h3>Login</h3>
        </div>
        <div>
          <Input
            type="text"
            label="Email or Mobile Number"
            labelPlacement="outside"
            placeholder="Enter your email ID or mobile no."
            radius="none"
            classNames={{ inputWrapper: "bg-blue-1" }}
            value={name1}
            onValueChange={(newName1) => {
              setIsNameInvalid(false);
              setName1(newName1);
            }}
            isInvalid={isNameInvalid}
            errorMessage={isNameInvalid ? "Please fill this field" : undefined}
          />

          <Button
            color="primary"
            radius="none"
            className="mt-2 w-full font-bold"
            onClick={verifyUserInfo}
          >
            Next
          </Button>
        </div>
        <div className="flex w-full items-center justify-center opacity-50">
          <hr className="w-full" />
          {/* word "hi" is used two times to create empty space around "or", use of multiple &nbsp; resulted in just one space  */}
          <span className="invisible">hi</span>
          <span>or</span>
          <span className="invisible">hi</span>
          <hr className="w-full" />
        </div>
        <Button
          color="primary"
          className="btn-blue-1 mt-2 w-full font-bold"
          radius="none"
          variant="ghost"
        >
          Login with Google
        </Button>

        <div>
          <p className="flex items-center justify-center text-sm">
            <span className="mr-2"> Get RazorpayX mobile app </span>
            <Image
              className="mr-2 inline-block cursor-pointer"
              src="/icons/iosstore.svg"
              width={17}
              height={17}
              alt="ios-store"
              onClick={() =>
                window.open(
                  "https://apps.apple.com/in/app/razorpayx/id1542911810",
                )
              }
            />
            <Image
              className="inline-block cursor-pointer"
              src="/icons/playstore.svg"
              width={17}
              height={17}
              alt="play-store"
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.razorpay.x.app",
                )
              }
            />
          </p>
        </div>

        <hr className="w-full opacity-50" />

        <p className="text-center text-sm">
          Do not have an account?{" "}
          <Link href="/signup" className="blue-2 text-sm hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
