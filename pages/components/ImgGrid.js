import Image from "next/image";

function ImgGrid({ title, content = [] }) {
  return (
    <div className="flex flex-col mt-[3rem] mb-[0.5rem]">
      <p>{title}</p>
      <div className={`gridRowSpan1 justify-start pt-[0.5rem]`}>
        {content.map((item, index) => (
          <Image
            className="w-[auto] h-[auto] max-w-[18rem] rounded-lg"
            src={item}
            key={index}
            width={0}
            height={0}
            alt={index}
          />
        ))}
      </div>
    </div>
  );
}

export default ImgGrid;
