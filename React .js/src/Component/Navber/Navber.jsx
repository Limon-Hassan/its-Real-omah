import './Navber.css'
import { assets } from '../../assets/Asesert';
import Section from '../Section/Section';


const Navber = () => {
  return (
    <>
      <div className="Navber">
        <div className="container">
          <div className="helena">
            <img className="image_1" src={assets.logo} alt="" />
            <ul className="list">
              <li>
                <a className="blind" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="blind" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="blind" href="#">
                  Services
                </a>
              </li>
              <li>
                <a className="blind" href="#">
                  Gallery
                </a>
              </li>
              <li>
                <a className="blind" href="#">
                  Blog
                </a>
              </li>
            </ul>
            <a className="btn" href="#">
              CONTACT
            </a>
          </div>
        </div>
      </div>
      <Section/>
    </>
  );
}

export default Navber