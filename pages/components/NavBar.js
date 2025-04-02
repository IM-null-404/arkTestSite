let navCurrent =
  "font-[500] tracking-[.025em] block py-2 px-2 text-white bg-[#00a172] rounded-sm md:bg-transparent md:text-[#00a172] md:p-0 md:dark:text-[#00a172]";

let navDefault =
  "font-[500] tracking-[.025em] block py-2 px-2 text-gray-900 rounded-sm hover:bg-[#00a172] md:hover:bg-transparent md:hover:text-[#00a172] md:p-0 md:dark:hover:text-[#00a172] dark:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-[#00a172]";

function NavBar() {
  return (
    <nav
      className=" 
      bg-white
      fixed
      w-full
      z-20
      top-0
      start-0
      border-b
      border-gray-200
      dark:border-gray-200
      h-[4rem]
      w-[100vw]"
    >
      <div className="mr-auto ml-auto max-w-screen-xl flex flex-wrap items-center justify-between h-full w-[65vw] xs:w-[85vw] xs:items-start xs:pt-[1rem]">
        <a
          href="Homepage"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <p className=" font-[Open_Sans] uppercase leading-none text-black font-[600] tracking-[.15em]">
            ARKLABS
          </p>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
            <li>
              <a href="Homepage" className={navCurrent} aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="Services" className={navDefault}>
                Services
              </a>
            </li>
            <li>
              <a href="Solutions" className={navDefault}>
                Solutions
              </a>
            </li>
            <li>
              <a href="Partners" className={navDefault}>
                Partners
              </a>
            </li>
            <li>
              <a href="Blogs" className={navDefault}>
                Blogs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
