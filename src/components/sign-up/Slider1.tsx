import React, {
  Component,
  type MouseEventHandler,
  type CSSProperties,
} from "react";
import Slider from "react-slick";
import Card1 from "./Card1";
// import { ArrowLeftIcon } from "@heroicons/react/24/outline";

function SampleNextArrow({
  className,
  style,
  onClick,
}: {
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLDivElement>;
}) {
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}

function SamplePrevArrow({
  className,
  style,
  onClick,
}: {
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLDivElement>;
}) {
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}

export default class Slider1 extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 4000,
      autoplay: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

    return (
      <Slider {...settings} className="">
        <Card1
          author={["/avtars/user-1.png", "jani", "@abhayjani4"]}
          tweetContent={[
            "Just tried RazorpayX & what a beautiful smooth experience it is to do payout via links.",
            "Same process on any bank would take 15 more steps & OTP entering 5 times.",
          ]}
        />
        <Card1
          author={["/avtars/user-2.png", "Saumya Shah", "@saumyashah6"]}
          tweetContent={[
            "I paid TDS earlier this month using RazorpayX Tax payments.",
            "I am never visiting the TIN-NSDL TDS payment portal ever again in my life.",
          ]}
        />
        <Card1
          author={["/avtars/user-3.png", "Shivam Dewan", "@shivamdwn"]}
          tweetContent={[
            "RazorpayX is so well designed! Doing payouts, tax, payroll stuff has never been easier, great job!",
          ]}
        />
      </Slider>
    );
  }
}
