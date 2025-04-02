import Container from "./Container";
import Divider from "./Divider";

const contents = [
  { name: "Twitter", link: "#" },
  { name: "Facebook", link: "#" },
  { name: "LinkedIn", link: "#" },
  { name: "Twitter", link: "#" },
];

function Footer() {
  return (
    <>
      <Container>
        <div className="flex flex-col justify-left gap-y-2">
          <div className={`gridRowSpan1 h-[28.5vh]`}>
            <div className="w-[21.7vw] md:w-[auto] sm:w-[auto] xs:w-[auto]">
              <h3>Leading the Pioneer Path in Web3</h3>
            </div>
            <div className="flex flex-col w-[21.7vw] justify-between gap-[0.5rem]">
              <div className="flex flex-col">
                <p>Contact Us</p>
                <p className="footer-p ">
                  <a
                    className="hover:text-[#00a172]"
                    href="business@arklabs.tech"
                  >
                    business@arklabs.tech
                  </a>
                </p>
              </div>
              <div className="flex flex-col gap-[0.3rem]">
                <p>Social Media</p>
                {contents.map((content, index) => (
                  <ul className="footer-p" key={index}>
                    <li className="cursor-pointer hover:text-[#00a172]">
                      {content.name} <a href={content.link} />
                    </li>
                  </ul>
                ))}
              </div>
            </div>
            <div className="flex flex-col w-[21.7vw] md:w-[auto] sm:w-[auto] xs:w-[auto] justify-between">
              <div>
                <p> Company Address</p>
                <p className="footer-p">
                  Malaysia, KL 25-2, Jalan Radin Bagus, Bandar Baru Sri
                  Petaling, 57000 Kuala Lumpur
                </p>
              </div>
              <div className="flex flex-col gap-[0.5rem]">
                <p>Schedule Appointment</p>
                <p>Monday - Friday GMT+8</p>
                <button className="cursor-pointer h-[2.5rem] bg-black text-white py-[8px] w-[130px] mt-[0.5rem]">
                  Calendly
                </button>
              </div>
            </div>
          </div>
          <div className={`footer-p lg:mt-[3rem] xs:mt-[10rem]`}>
            All Rights Reserved by Ark Tech Solutions Sdn Bhd (Company No.:
            202001014400 (1370720-T))
          </div>
        </div>
      </Container>
    </>
  );
}

export default Footer;
