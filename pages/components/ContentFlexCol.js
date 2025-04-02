import Container from "./Container";
import Image from "next/image";

function ContentFlexCol({ title, titleCss, children, src }) {
  return (
    <Container>
      <div className="flex lg:flex-row sm:flex-col items-start justify-between w-full gap-x-14 sm:gap-y-8 ">
        {src && (
          <Image
            className="h-auto lg:w-[50%] sm:w-auto rounded-xl "
            src={src}
            // src="https://www.arklabs.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbg-solutions.e340f615.webp&w=3840&q=75"
            width={0}
            height={0}
            alt="hero-img"
          />
        )}

        <div className="flex flex-col w-full gap-y-2">
          <h2 className={titleCss}>{title}</h2>
          <div className="text-[1.2rem] font-[500] leading-8 text-black">
            {children}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ContentFlexCol;
