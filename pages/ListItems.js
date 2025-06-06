function ListItems({ content = [] }) {
  return (
    <div>
      <ul className="flex flex-col content-start pl-[1rem]">
        <p>Includes:</p>

        {content.map((item, index) => (
          <li className="inline-flex items-center gap-1" key={index}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"></path>
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListItems;
