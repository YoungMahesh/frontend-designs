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
    // here, card is occupying around 90% of width, width in pixel is determined
    //   the slider width which is defined in the global-class named: `w-slider`
    <Card
      className="bg-blue-2 border-blue-1 m-auto h-52 w-11/12 p-3 pb-0"
      radius="sm"
    >
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src={author[0]} />
          <div className="flex flex-col items-start justify-center gap-1">
            <h4 className="text-small font-semibold leading-none">
              {author[1]}
            </h4>
            <h5 className="text-small tracking-tight text-default-600">
              {author[2]}
            </h5>
          </div>
        </div>
        <Image src="/twitter.svg" width={37} height={42} alt="twitter" />
      </CardHeader>
      <CardBody className="px-3 py-2 text-small text-white">
        {tweetContent.map((text, idx) => (
          <p key={idx}>{text}</p>
        ))}
      </CardBody>
      <CardFooter />
    </Card>
  );
}
