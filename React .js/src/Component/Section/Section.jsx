import "./Section.css";
import { assets } from "../../assets/Asesert";
import Sec_2 from "../Section_2/Sec_2.jsx";

const Section = () => {
  return (
    <>
      <div className="section">
        <img src={assets} alt="" />
        <div className="container">
          <div className="text-point">
            <h1>We exist since 1975 on the oil and gas industry.</h1>
            <a href="#">LEARN MORE</a>
          </div>
        </div>
      </div>
      <Sec_2 />
    </>
  );
};

export default Section;
