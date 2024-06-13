/* eslint-disable react/prop-types */
import { useState } from "react";

import Manglore from "../assets/manglore1.png";
import Mumbai from "../assets/mumbai1.png";
import Patna from "../assets/Patna.png";
import Pune from "../assets/pune1.png";
import Logo from "../assets/rnblogo.png";

const SideBar = ({
  handleViewMVRS,
  handleViewKOCS,
  handleViewHOCS,
  handleViewHSOS,
  handleViewIssue,
  handleViewaudit,
}) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [loadingIndex, setLoadingIndex] = useState(null);

  const data = [
    { img: Manglore, text: "Connections" },
    { img: Mumbai, text: "Connections" },
    { img: Patna, text: "Connections" },
    { img: Pune, text: "Connections" },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const handleButtonClick = (viewHandler, index) => {
    setLoadingIndex(index);
    viewHandler().finally(() => setLoadingIndex(null));
  };

  return (
    <nav className="sidebar-navigation">
      <img
        src={Logo}
        className="sidebar-image"
        alt="logo"
      />
      <ul>
        <li>
          <button
            onClick={() => {
              handleButtonClick(handleViewMVRS, 0);
              handleButtonClick(handleViewaudit, 0);
            }}
          >
            {loadingIndex === 0 ? (
              <img
                src="https://ribbonsandballoons.com/frontassets/wave-ball-preloader.gif"
                className="w-[10px] h-[10px]"
                style={{ backgroundColor: "transparent", width: "30px", height: "30px" }}
              />
            ) : (
              "View MVRS"
            )}
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              handleButtonClick(handleViewaudit, 1);
              handleButtonClick(handleViewKOCS, 1);
            }}
          >
            {loadingIndex === 1 ? (
              <img
                src="https://ribbonsandballoons.com/frontassets/wave-ball-preloader.gif"
                className="w-[10px] h-[10px]"
                style={{ backgroundColor: "transparent", width: "30px", height: "30px" }}
              />
            ) : (
              "View KOCS"
            )}
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              handleButtonClick(handleViewaudit, 2);
              handleButtonClick(handleViewHOCS, 2);
            }}
          >
            {loadingIndex === 2 ? (
              <img
                src="https://ribbonsandballoons.com/frontassets/wave-ball-preloader.gif"
                className="w-[10px] h-[10px]"
                style={{ backgroundColor: "transparent", width: "30px", height: "30px" }}
              />
            ) : (
              "View HOCS"
            )}
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              handleButtonClick(handleViewaudit, 3);
              handleButtonClick(handleViewHSOS, 3);
            }}
          >
            {loadingIndex === 3 ? (
              <img
                src="https://ribbonsandballoons.com/frontassets/wave-ball-preloader.gif"
                className="w-[10px] h-[10px]"
                style={{ backgroundColor: "transparent", width: "30px", height: "30px" }}
              />
            ) : (
              "View HSOS"
            )}
          </button>
        </li>
        <li>
          <button onClick={() => handleButtonClick(handleViewIssue, 4)}>
            {loadingIndex === 4 ? (
              <img
                src="https://ribbonsandballoons.com/frontassets/wave-ball-preloader.gif"
                className="w-[10px] h-[10px]"
                style={{ backgroundColor: "transparent", width: "30px", height: "30px" }}
              />
            ) : (
              "View Issue"
            )}
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              window.localStorage.clear();
              window.location.href = "/";
            }}
          >
            Logout
          </button>
        </li>

        {data.map((item, index) => (
          <li
            key={index}
            className={index === activeIndex ? "active" : ""}
            onClick={() => handleClick(index)}
          >
            <img
              src={item.img}
              alt="image"
            />
            <span className="tooltip">{item.text}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideBar;
