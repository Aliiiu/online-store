import React from "react";
// import { ReactComponent as MenIcon } from "../../svg/short-sleeves-men-svgrepo-com.svg";
// import { MenIcon } from "../../component/icons";
// import Navlist from "./Navlist";
import { ReactComponent as MenIcon } from "../../svg/sweater.svg";
import { ReactComponent as All } from "../../svg/all.svg";
import { ReactComponent as Women } from "../../svg/women.svg";
import { ReactComponent as Jewelry } from "../../svg/jewelry.svg";
import { ReactComponent as Electronics } from "../../svg/electronics.svg";

const StoreNav = () => {
  return (
    <div className="storenav">
      <div className="storenav-container">
        <h4>Category</h4>
        <div className="navlistsec">
          <Navlist text="All" img={<All />} />
          <Navlist text="Men" img={<MenIcon />} />
          <Navlist text="Women" img={<Women />} />
          <Navlist text="Electronics" img={<Electronics />} />
          <Navlist text="Jewelry" img={<Jewelry />} />
        </div>
      </div>
    </div>
  );
};

export default StoreNav;

const Navlist = ({ text, img }) => {
  return (
    <div className="nav-list ">
      <div className="nav-list_img">{img}</div>
      <div className="nav-list-text ">{text}</div>
    </div>
  );
};
