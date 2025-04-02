import Container from "./Container";

function GridBoxes({ content = [], gridCss, pCss, btnValue, children }) {
  const gridContent = content;

  return (
    <Container>
      <div className={gridCss}>
        {gridContent.map((item, index) => (
          <div
            className=" h-[auto] md:h-[auto] col-span-1 flex flex-col w-full justify-between gap-y-4 border border-gray-200 dark:border-gray-200 pb-[3rem] rounded-lg p-8"
            key={index}
          >
            <div className="flex flex-col content-start gap-y-4">
              {children}
              <p className={pCss}>{item.subtitle}</p>
              <h2 style={{ "--font-weight": "700" }}>{item.title}</h2>
              <p className="grey-par" style={{ "--color": "#4a5568" }}>
                {item.p}
              </p>
            </div>
            <div className="flex content-end">
              {btnValue && (
                <button
                  className="cursor-pointer h-[2.5rem] bg-black text-white py-[8px] w-[130px]"
                  value={btnValue}
                >
                  {btnValue}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default GridBoxes;
