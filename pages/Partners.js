import NavBar from "./components/NavBar";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Form from "./components/Form";
import ContentFlexCol from "./components/ContentFlexCol";
import ImgGrid from "./components/ImgGrid";
import Divider from "./components/Divider";

const group1 = [
  "https://www.arklabs.tech/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fpmme75de62vl%2F2x0swIJUiubtSj5DKhlpS1%2F66dec3be9d26624b395e1a7e57fb2c47%2F283976125_128378973187141_1851509180274882762_n.jpg&w=640&q=75",
  "https://www.arklabs.tech/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fpmme75de62vl%2F3GMAukp6BEq86dc7imPJf%2F6057b529558345f87d806d01214c6c89%2Foffchain.png&w=640&q=75",
  "https://www.arklabs.tech/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fpmme75de62vl%2F2MiB3v5ByeZqBDiQYk7aii%2F31742941ffd6a1b2927125f537f522e6%2Faccess.png&w=640&q=75",
];
const group2 = [
  "https://www.arklabs.tech/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fpmme75de62vl%2F6nYIsPqfdRJwNHSZ4GIs8X%2F4532c1f861ceee1d5c98772f41a88525%2Fhomepage.png&w=640&q=75",
  "https://www.arklabs.tech/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fpmme75de62vl%2FsGlWxlBsB5hqbzwPWJRuh%2Faa9a4d7c5a68b0a5b1cbca3f884eee07%2Fwert.png&w=640&q=75",
];
const group3 = [
  "https://www.arklabs.tech/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fpmme75de62vl%2F32IzISbzLypIQdJRJHjLRX%2F1af9a0a794336eaa5b341e78002723db%2Funnamed.png&w=640&q=75",
  "https://www.arklabs.tech/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fpmme75de62vl%2F5H3HllRxg5hyajclzDNRO8%2F4853204c23d7ccfb2172d083d3a00eaf%2Fmw_logo_social.png&w=640&q=75",
];

function Partners() {
  return (
    <Container marginBottom="5rem">
      <NavBar />

      <div className="flex flex-col justify-center w-full">
        <ContentFlexCol title="Our Partners" titleCss={"h3-small"}>
          <p>Explore our trusted network in the blockchain industry.</p>
        </ContentFlexCol>
        <Divider />
        <ImgGrid title="Blockchain Association" content={group1} />
        <ImgGrid title="Payment Solution" content={group2} />
        <ImgGrid title="News & Media" content={group3} />
        <Form />
        <Footer />
      </div>
    </Container>
  );
}

export default Partners;
