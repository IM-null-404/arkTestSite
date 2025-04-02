import Container from "./components/Container";
import Hero from "./components/Hero";
import ContentFlexRow from "./components/ContentFlexRow";
import ContentFlexCol from "./components/ContentFlexCol";
import RowBoxes from "./components/RowBoxes";
import Form from "./components/Form";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function Homepage() {
  return (
    <Container marginTop="8rem" marginBottom="5rem">
      <NavBar />
      <div className="flex flex-col justify-center w-full">
        <div>
          <h1 className="global-h1">Leading the</h1>
          <span
            className="lg:text-[3rem] font-[600] uppercase leading-[130%] xs:text-[2.5rem]"
            style={{ "--color": "#00a172" }}
          >
            Pioneer Path in Web3
          </span>
        </div>
        <Hero />
        <ContentFlexRow
          title="ArkLabs"
          p="We connect businesses, supercharge engagement and usher in a new era
            of limitless possibility through the dynamic synergy of Web3 and
            blockchain technology."
        />
        <ContentFlexCol title="Our Expertise">
          <p>
            In a landscape where businesses seek innovative solutions to meet
            evolving customer needs, we specialize in guiding enterprises
            through the intricacies of Web3, ensuring a seamless integration
            that propels them into the future. Recognizing the significant
            growth potential within the Asia Pacific market, we offer expert
            Web3 solutions tailored to the unique dynamics of the region,
            thereby paving the way for strategic business and brand
            transformations.
          </p>
        </ContentFlexCol>
        <RowBoxes />
        <Form />
        <Footer />
      </div>
    </Container>
  );
}

export default Homepage;
