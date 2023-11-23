import { XMarkIcon } from "@heroicons/react/24/outline";
import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useState } from "react";
export const companyTypes = [
  {
    label: "Unregistered",
    value: "Unregistered",
  },
  {
    label: "Proprietorship",
    value: "Proprietorship",
  },
  {
    label: "Private Limited",
    value: "Private Limited",
  },
  {
    label: "Partnership",
    value: "Partnership",
  },
  {
    label: "Public Limited",
    value: "Public Limited",
  },
  {
    label: "LLP",
    value: "LLP",
  },
  {
    label: "Trust",
    value: "Trust",
  },
  {
    label: "Society",
    value: "Society",
  },
  {
    label: "NGO",
    value: "NGO",
  },
];

export default function SidebarSignup() {
  const router = useRouter();
  const [name1, setName1] = useState("");
  const [contact1, setContact1] = useState("");
  const [category1, setCategory1] = useState(new Set<string>([]));

  const [isNameInvalid, setIsNameInvalid] = useState(false);
  const [isContactInvalid, setIsContactInvalid] = useState(false);
  const [isCategoryInvalid, setIsCategoryInvalid] = useState(false);

  const verifyUserInfo = () => {
    if (name1.length === 0) return setIsNameInvalid(true);
    if (contact1.length === 0) return setIsContactInvalid(true);
    if (category1.size === 0) return setIsCategoryInvalid(true);
    alert("Form fields validated");
  };

  return (
    <div className="bg-sidebar mr-auto min-h-screen w-full p-10 pt-16">
      <div className="m-auto grid max-w-xs gap-8">
        <div>
          <h3>Set up your account</h3>
          <p className="text-sm">Let&apos;s set up your account details🚀</p>
        </div>
        <Input
          type="text"
          label="Your name"
          labelPlacement="outside"
          placeholder="Enter your full name"
          radius="none"
          classNames={{ inputWrapper: "bg-blue-1" }}
          value={name1}
          onValueChange={(newName1) => {
            setIsNameInvalid(false);
            setName1(newName1);
          }}
          isInvalid={isNameInvalid}
          errorMessage={isNameInvalid ? "Please enter a valid name" : undefined}
        />

        <Input
          type="text"
          label="Contact number"
          labelPlacement="outside"
          placeholder="Set your contact number"
          radius="none"
          classNames={{ inputWrapper: "bg-blue-1" }}
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-small">+91</span>
            </div>
          }
          value={contact1}
          onValueChange={(newContact1) => {
            setIsContactInvalid(false);
            setContact1(newContact1);
          }}
          isInvalid={isContactInvalid}
          errorMessage={
            isContactInvalid ? "Please enter a valid contact number" : undefined
          }
        />

        <Select
          labelPlacement={"outside"}
          label="Business Category"
          placeholder="-- Select Option --"
          className="max-w-xs"
          radius="none"
          popoverProps={{ classNames: { content: "rounded-none" } }} // box of select-items
          classNames={{ trigger: "bg-blue-1" }}
          selectedKeys={category1}
          onSelectionChange={(e) => {
            setIsCategoryInvalid(false);
            setCategory1(e as Set<string>);
          }}
          selectorIcon={
            category1.size > 0 ? (
              <XMarkIcon
                className="h-6 w-6 text-white"
                onClick={() => setCategory1(new Set([]))}
              />
            ) : undefined
          }
          isInvalid={isCategoryInvalid}
          errorMessage={
            isCategoryInvalid ? "Please select a business category" : undefined
          }
        >
          {companyTypes.map((cType) => (
            <SelectItem
              key={cType.value}
              value={cType.value}
              className="rounded-none"
            >
              {cType.label}
            </SelectItem>
          ))}
        </Select>

        <p className="text-sm">
          By signing up you agree to our privacy policy and terms of use.
        </p>
        <div>
          <Button
            color="primary"
            radius="none"
            className="w-full font-bold"
            onClick={verifyUserInfo}
          >
            Continue &nbsp; &gt;
          </Button>
          <div className="mt-2 p-4 text-center">
            <Link
              className="blue-1 text-sm font-bold"
              href="#"
              onClick={() => router.push("/login")}
            >
              Login to a different account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
