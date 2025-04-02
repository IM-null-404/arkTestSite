import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Container from "./components/Container";
import ContentFlexCol from "./components/ContentFlexCol";
import GridBoxes from "./components/GridBoxes";
import ListItems from "./ListItems";

const newContent = [
  {
    subtitle: "Building",
    title: "Your NFT Store",
    p: "We develop a full-function website and NFT store that fits your brand for your NFTs.",
  },
  {
    subtitle: "Selling",
    title: "Your NFT Collections",
    p: "We provide a secure and user-friendly platform with a variety of payment options to sell your NFTs.",
  },
  {
    subtitle: "Growing",
    title: "Your Business with NFTs",
    p: "We offer a range of tools and resources to help you grow your NFT-based business.",
  },
];

const list1 = [
  "NFT Store",
  "NFT Website",
  "NFTs Design",
  "10,000 NFT Collection",
];
const list2 = [
  "Web2/3 Social Login",
  "Credit/Debit Cards Payment",
  "Crypto Payment",
  "Sales Analytics",
];
const list3 = [
  "NFT Utility Redemption",
  "Monthly Campaign",
  "Community Building",
  "Blog Management",
  "Training Session",
];

function Solutions() {
  return (
    <Container marginBottom="5rem">
      <NavBar />
      <div className="flex flex-col justify-center w-full">
        <ContentFlexCol title="NFT Store Solution" titleCss={"h3-small"}>
          Let us take care of every aspect of your NFT business development.
        </ContentFlexCol>
        <ContentFlexCol
          title="Start Your Journey Here."
          src="https://www.arklabs.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbg-solutions.e340f615.webp&w=3840&q=75"
        >
          <ul>
            <li>
              A complete end-to-end solution for merchants and users looking to
              enter the exciting and rapidly growing world of NFTs. Whether you
              are a small business owner, a seasoned entrepreneur, or just
              starting out, we are here to help you every step of the way.
            </li>
            <br />
            <li>
              In recognition of Alibaba Cloud & Octopus Network. We are The{" "}
              <a
                href="https://www.arklabs.tech/blogs/2022-create-alibaba-cloud-global-startup-contest-ark-labs-reaches-semi-final"
                target="_blank"
                className="inline-flex items-center gap-1 text-[#00a172]"
              >
                <span style={{ "--color": "#00a172" }}>Top 50 Finalist</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                  ></path>
                </svg>
              </a>{" "}
              of 2022 Create@ Alibaba Cloud Global Startup Contest
            </li>
          </ul>
        </ContentFlexCol>
        <GridBoxes
          pCss={"p-green"}
          gridCss={`gridRowSpan1 pt-[3rem]`}
          content={newContent}
          btnValue="Contact Us"
        />
        <div
          className={`gridRowSpan1 mt-[2rem] text-[1rem] font-[500] leading-8 text-black`}
        >
          <ListItems content={list1}></ListItems>
          <ListItems content={list2}></ListItems>
          <ListItems content={list3}></ListItems>
        </div>
        <Form />
        <Footer />
      </div>
    </Container>
  );
}

export default Solutions;
