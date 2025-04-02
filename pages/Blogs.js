import NavBar from "./components/NavBar";
import Container from "./components/Container";
import Footer from "./components/Footer";
import ContentFlexCol from "./components/ContentFlexCol";
import Divider from "./components/Divider";

function Blogs() {
  return (
    <Container marginBottom="5rem">
      <NavBar />

      <div className="flex flex-col justify-center w-full">
        <ContentFlexCol title="Our Blogs" titleCss={"h3-small"}>
          <p>Stay informed about the latest Web3 & blockchain developments.</p>
        </ContentFlexCol>
        <Divider />

        <Footer />
      </div>
    </Container>
  );
}

export default Blogs;
