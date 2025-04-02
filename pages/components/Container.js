const Container = ({ children, marginTop = "4rem", marginBottom = "0rem" }) => {
  return (
    <div
      style={{ marginTop, marginBottom }}
      className="relative w-[65vw] mr-auto ml-auto max-w-[1300px] flex sm:flex-col sm:gap-y-6 xs:flex-col xs:gap-y-6 xs:w-[85vw] lg:flex-row lg:gap-x-6  "
    >
      {children}
    </div>
  );
};

export default Container;
