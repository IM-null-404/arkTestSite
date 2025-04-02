import React from "react";
import Container from "./Container";

const contents = [
  {
    title: "Web3 Consultancy",
    p1: "Guide you through the comprehensive process of Web3 integration",
    p2: "Offer invaluable insights and support you need to succeed in Web3 projects",
    p3: "Provide crucial information on the legal considerations associated with blockchain technology",
  },
  {
    title: "Enterprise Solutions",
    p1: "Customize solutions that seamlessly integrate your business with Web3",
    p2: "Embrace blockchain technology to acquire new customers and elevate engagement",
    p3: "Unlock new markets, boost brand exposure, and position your business for strategic growth by harnessing the power of blockchain",
  },
  {
    title: "Real-World Assets Tokenization",
    p1: "Enhance liquidity by fractionalizing assets, facilitating easier trading and investment opportunities",
    p2: "Mitigate fraud risks and instill trust through transparent and secure transactions",
    p3: "Eliminate geographical barriers, enabling global audiences to access and invest in traditionally illiquid assets",
  },
];

const RowBoxes = () => {
  return (
    <Container>
      {contents.map((content, index) => (
        <div
          className="md:h-[auto] col-span-1 sm:h-[auto] sm:flex flex-col justify-start w-full gap-y-6 border border-gray-200 dark:border-gray-200 pb-[2rem] rounded-lg p-8 "
          key={index}
        >
          <div>
            <h2 className="border-b border-gray-200 dark:border-gray-200 pb-[2rem] w-full text-[1.5rem] font-[500] leading-none text-black">
              {content.title}
            </h2>
          </div>
          <ul className="grey-par" style={{ "--color": "#4a5568" }}>
            <li>{content.p1}</li>
            <br />
            <li>{content.p2}</li>
            <br />
            <li>{content.p3}</li>
          </ul>
        </div>
      ))}
    </Container>
  );
};

export default RowBoxes;
