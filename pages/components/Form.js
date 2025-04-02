import Container from "./Container";

function Form() {
  return (
    <Container>
      <div className="flex flex-col justify-center w-full">
        <form className="flex flex-col items-center justify-between gap-8 rounded-sm bg-gray-800 p-10 lg:flex-row">
          <div className="w-full flex flex-col gap-y-4">
            <h2 style={{ "--color": "white" }}>Interested in what we do ?</h2>
            <p className="grey-par" style={{ "--color": "#cbd5e0" }}>
              Feel free to give us a ping. A free consultation is provided.
            </p>
          </div>
          <div className="flex flex-col gap-y-2 w-full">
            <div className="flex flex-row gap-x-2 w-full">
              <input
                className="h-[3rem] bg-gray-700/70 pl-4 rounded-md w-full "
                placeholder="Name"
              ></input>
              <input
                className="h-[3rem] bg-gray-700/70 pl-4 rounded-md w-full"
                placeholder="Telegram"
              ></input>
            </div>
            <div>
              <input
                className="h-[3rem] bg-gray-700/70 pl-4 rounded-md w-full"
                placeholder="Email Address"
              ></input>
            </div>
            <div>
              <input
                className="h-[3rem] bg-gray-700/70 pl-4 rounded-md w-full"
                placeholder="Your Message"
              ></input>
            </div>
            <div>
              <button className="cursor-pointer h-[3rem] bg-[#00a172] pl-4 rounded-md w-full text-gray-100">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default Form;
