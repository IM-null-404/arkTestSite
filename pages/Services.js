import Container from "./components/Container";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Form from "./components/Form";
import ContentFlexCol from "./components/ContentFlexCol";
import GridBoxes from "./components/GridBoxes";

const contents = [
  {
    subtitle: "Development",
    title: "Smart Contract Deployment",
    p: "Smart contracts are used to create tokens, track transactions, and enforce digital asset ownership and authenticity. Let us handle the technicalities and deploy smart contracts for you!",
  },
  {
    subtitle: "NFT Project",
    title: "NFT Design and Curation",
    p: "Don't worry about NFT design or event planning—we've got you covered! Our creative team crafts unique NFT collections tailored to your preferences. We'll showcase your curated collection through the Metaverse VR gallery.",
  },
  {
    subtitle: "Payment",
    title: "Payment Solution",
    p: "Simplify payments with ease! From fiat to cryptocurrency payments, as long as you accept it all! You can easily manage debit cards, credit cards, and internet banking seamlessly in one integrated solution.",
  },
  {
    subtitle: "Community",
    title: "Community Management",
    p: "Tap into our expertise in managing Web3 communities across platforms like Discord, Telegram, and Twitter. We excel in creating engaging content and implementing effective community management strategies across countries.",
  },
  {
    subtitle: "Community",
    title: "Campaign Promotion",
    p: "Grow your Web3 community with effective campaigns. Having a hard time promoting your campaign? We specialize in designing and promoting airdrop and whitelist campaigns to publicize and hype Web3 projects.",
  },
  {
    subtitle: "Marketing",
    title: "Press Release Distribution",
    p: "Utilize a press release distribution network to build your brand and reach the right audience. Need help writing content? Find us! We write and deliver fully branded news content to target audiences worldwide.",
  },
  {
    subtitle: "Marketing",
    title: "Marketing & Collaboration",
    p: "Elevate your Web3 project with our targeted marketing strategies. Harness the power of KOL collaborations to boost brand awareness and connect with your ideal audience through impactful partnerships.",
  },
  {
    subtitle: "Marketing",
    title: "Digital Asset Exchange Listing",
    p: "Elevate your liquidity and opportunities with the DAX listing. We strategically list your assets on top-tier digital exchanges, opening doors to enhanced market access and growth.",
  },
  {
    subtitle: "Marketing",
    title: "Price Site",
    p: "Facing challenges in listing your Web3 project? We are here to help you list your project on both centralized and decentralized marketplaces and get featured on tracking sites, like CoinMarketCap and CoinGecko.",
  },
];

function Services() {
  return (
    <Container marginBottom="5rem">
      <NavBar />
      <div className="flex flex-col justify-center w-full">
        <ContentFlexCol title="Our Services" titleCss={"h3-small"}>
          e offer a range of services to help businesses achieve optimal
          solutions using web3 technology.
        </ContentFlexCol>
        <GridBoxes gridCss={"grid"} content={contents} />
        <Form />
        <Footer />
      </div>
    </Container>
  );
}

export default Services;
