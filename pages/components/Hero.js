import Container from "./Container";
import Image from "next/image";

function Hero() {
  return (
    <Container>
      <div className="flex flex-col justify-center w-full ">
        <Image
          className="h-auto w-full object-scale-down rounded-xl "
          src="https://www.arklabs.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbg-hero.a668046b.png&w=1920&q=75"
          width={0}
          height={0}
          alt="hero-img"
        />
      </div>
    </Container>
  );
}

export default Hero;
