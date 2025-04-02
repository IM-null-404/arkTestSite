const Container = ({ children, marginTop = "4rem", marginBottom = "0rem" }) => {
  return (
    <div
      style={{ marginTop, marginBottom }}
      className="relative flex sm:flex-col sm:gap-y-6 lg:flex-row lg:gap-x-6 w-[65vw] mr-auto ml-auto max-w-[1300px] "
    >
      {children}
    </div>
  );
};

export default Container;
