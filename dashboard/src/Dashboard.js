import "./Dashboard.css";
import Card from "./Card";
import { useState } from "react";
import MyChartComponent from "./ChartComponent";
import notes from "./assets/last-visited-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
const Dashboard = () => {
  const tabsData = [
    {
      title: "Challenges",
      content: (
        <div>
          <p>
            You joined PreprLabs on Nov 13, 2023,Here is your challenge journey.{" "}
          </p>
          <img src={""} alt="lab-img" style={{ width: "100px" }}></img>
          <ul className="inner-tabs">
            <li>Project Submitted:</li>
            <b>2</b>
            <li>Project Created:</li>
            <b>2</b>
            <li>Invited:</li>
            <b>2</b>
            <li>Followed:</li>
            <b>2</b>
          </ul>
        </div>
      ),
    },
    {
      title: "Labs",
      content: (
        <div>
          <p>You joined PreprLabs on Nov 13, 2023,Here is your lab journey. </p>
          <MyChartComponent></MyChartComponent>
          <ul>
            <li>Project Submitted:</li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      ),
    },
    {
      title: "Resources",
      content: (
        <div>
          <p>
            You joined PreprLabs on Nov 13, 2023,Here is your Resource journey.{" "}
          </p>
          <img src={""} alt="lab-img" style={{ width: "100px" }}></img>
          <button></button>
        </div>
      ),
    },
  ];
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <main className="main-container">
      <h1>Welcome Thahira</h1>
      <section className="main-sections">
      <section className="first-section">
        <Card>
          <h4>My Progress</h4>
          <ul className="tabs">
            {tabsData.map((tab, index) => (
              <li
                key={index}
                className={index === activeTab ? "active" : ""}
                onClick={() => handleTabClick(index)}
              >
                {tab.title}
              </li>
            ))}
          </ul>
          <div className="tab-content">{tabsData[activeTab].content}</div>
        </Card>
        <Card>
          <h4>Continue where you left of</h4>
          <p>Start your PreprLabs journey now!</p>
          <img
            src={notes}
            style={{ width: "150px", justifyContent: "center" }}
          ></img>
          <button className="buttons-19">Explore More</button>
        </Card>
        <Card>
          <ul>
            <h4>Upcoming Challenge Deadlines</h4>
            <li>
              {" "}
              <FontAwesomeIcon
                icon={faCalendarDays}
                style={{ color: "#5f63dd" }}
              />
              Frontend Developer Challenge 1: Web Page
            </li>
            <hr></hr>
            <li>
              <FontAwesomeIcon
                icon={faCalendarDays}
                style={{ color: "#5f63dd" }}
              />{" "}
              Frontend Developer Challenge 2: Login
            </li>
            <hr></hr>
            <li>
              <FontAwesomeIcon
                icon={faCalendarDays}
                style={{ color: "#5f63dd" }}
              />
              Frontend Developer Challenge 3: Dashboard
            </li>
            <hr></hr>
          </ul>
        </Card>
      </section>
      <section className="second-section">
        <Card>
          <h4></h4>
        </Card>
      </section>
      </section>
    </main>
  );
};
export default Dashboard;
