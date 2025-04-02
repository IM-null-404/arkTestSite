import Container from "./Container";
function ContentFlexRow({ title, p }) {
  return (
    <Container>
      <div
        className="flex flex-row justify-between w-full gap-x-8 border-b
      border-gray-200
      dark:border-gray-200 pb-[3rem]"
      >
        <div className="w-full">
          <h2 className="text-[2rem] font-[500] sentencecase leading-none text-black">
            {title}
          </h2>
        </div>
        <div className="w-full">
          <p className="text-[1.2rem] font-[500] sentencecase leading-8 text-black">
            {p}
          </p>
        </div>
      </div>
    </Container>
  );
}

export default ContentFlexRow;
