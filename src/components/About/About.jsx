import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import favico from "../../assets/favico.png";

const About = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between text-white">
        <div>
          <Link to="/">
            <ArrowBackIosIcon style={{ fontSize: 15 }} className="ml-2" />
          </Link>
        </div>
        <div className="flex flex-row justify-center items-center p-2">
          <p className="text-lg font-bold">About us</p>
        </div>
        <div> </div>
      </div>
      <div className="flex flex-row p-3 bg-white">
        <img src={favico} alt="" width={50} />
      </div>
      <div className="bg-white mb-10">
        <p className="text-lg font-bold">About us</p>
        <p className="text-sm mb-10">
          Tradentra Global Professional Station, an innovative digital asset
          trading platform serving professional trading users worldwide, is
          dedicated to discovering quality and innovative digital asset
          investment opportunities. Tradentra currently provides more than 40
          kinds of digital asset products trading and investment services.
          Headquartered in Canada, it is operated by the Tradentra Global Pro
          Station team.
          <br />
          <br />
          <br />
          Tradentra Group is the world's leading blockchain asset financial
          service provider. It has provided high quality services to millions of
          users from over 130 countries around the world. It has independent
          offices in Singapore, Korea, Hong Kong, China and other countries and
          regions. trading business and operation centers.
          <br />
          <br />
          <br />
          The Tradentra Group and its sub-brands are global leaders in
          technology platforms, product branches, security and risk control
          systems, operations and customer service systems. In addition, other
          sub-brands under which Tradentra operates globally include Deri
          Protocol Japan's digital asset trading platform and Tradentra Wallet
          digital asset management services.
        </p>
      </div>
    </div>
  );
};

export default About;
