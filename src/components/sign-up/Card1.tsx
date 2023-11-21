import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Avatar,
  CardFooter,
} from "@nextui-org/react";
import Image from "next/image";

export default function Card1({
  author,
  tweetContent,
}: {
  author: [string, string, string];
  tweetContent: string[];
}) {
  return (
    // <Card className="max-w-[340px] p-2">
    <Card className="p-2">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src={author[0]} />
          <div className="flex flex-col items-start justify-center gap-1">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {author[1]}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              {author[2]}
            </h5>
          </div>
        </div>
        <Image src="/twitter.svg" width={37} height={42} alt="twitter" />
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-white">
        {tweetContent.map((text, idx) => (
          <p key={idx}>{text}</p>
        ))}
      </CardBody>
      <CardFooter />
    </Card>
  );
}
