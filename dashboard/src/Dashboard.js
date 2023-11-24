import "./Dashboard.css";
import Card from "./Card";
import { useState } from "react";
import MyChartComponent from "./ChartComponent";
import notes from "./assets/last-visited-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faAward,
  faFlask,
} from "@fortawesome/free-solid-svg-icons";
import achieve from "./assets/Hfrsd4HcVe.png";
import image from "./assets/pexels-elina-fairytale-3810968.jpg";
import logo from "./assets/logoNew.png";
const Dashboard = () => {
  const tabsData = [
    {
      title: "Challenges",
      content: (
        <div>
          <p>
            You joined PreprLabs on Nov 13, 2023,Here is your challenge journey.{" "}
          </p>
          <img src={logo} alt="lab-img" style={{ width: "100px" }}></img>
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
      title: "Labs",
      content: <h1>WHY?</h1>,
    },
  ];

  const tabsData2 = [
    {
      title: "MyLabs",
      content: (
        <div>
          <p>Front end web developer is responsible for designing, coding,</p>
          <img src={logo} alt="lab-img" style={{ width: "100px" }}></img>
        </div>
      ),
    },
    {
      title: "Invited",
      content: (
        <div>
          <p>No invites bruh!</p>
        </div>
      ),
    },
  ];
  const tabsData3 = [
    {
      title: "MyChallenges",
      content: (
        <div>
          <p>
            You joined PreprLabs on Nov 13, 2023,Here is your challenge journey.{" "}
          </p>
          <img src={logo} alt="lab-img" style={{ width: "100px" }}></img>
        </div>
      ),
    },
    {
      title: "Inviited",
      content: (
        <div>
          <p>You joined PreprLabs on Nov 13, 2023,Here is your lab journey. </p>
          <img src={logo} alt="lab-img" style={{ width: "100px" }}></img>
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
      title: "Following",
      content: (
        <div>
          <p>You are Following F.U.N. </p>
          <img src={logo} alt="lab-img" style={{ width: "100px" }}></img>
        </div>
      ),
    },
  ];

  const tabsData4 = [
    {
      title: `MyProjects`,
      content: (
        <div>
          <ul>
            <li>
              thahirasheerin - Frontend Developer Challenge 2: Login System
            </li>
            <li>
              thahirasheerin - Frontend Developer Challenge 3: Dashboard and
              Project Creation
            </li>
            <li>
              thahirasheerin - Frontend Developer Challenge 1: Web Page Creation
            </li>
          </ul>

          <img src={logo} alt="lab-img" style={{ width: "100px" }}></img>
        </div>
      ),
    },
    ,
    {
      title: "NeedAccess",
      content: (
        <div>
          <p>No Access</p>
          <img src={logo} alt="lab-img" style={{ width: "100px" }}></img>
        </div>
      ),
    },
    {
      title: "Invited",
      content: (
        <div>
          <p>No Invitations</p>
          <img src={logo} alt="lab-img" style={{ width: "100px" }}></img>
        </div>
      ),
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const [activeTab2, setActiveTab2] = useState(0);

  const handleTabClick2 = (index) => {
    setActiveTab2(index);
  };

  const [activeTab3, setActiveTab3] = useState(0);

  const handleTabClick3 = (index) => {
    setActiveTab3(index);
  };

  const [activeTab4, setActiveTab4] = useState(0);

  const handleTabClick4 = (index) => {
    setActiveTab4(index);
  };
  return (
    <main className="main-container">
      <h1>Welcome Thahira</h1>

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
          <div className="tab-content">
            {" "}
            {tabsData[activeTab] && tabsData[activeTab].content}
          </div>
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
        <Card className="card1">
          <aside className="leader-head">
            <h4>Leaderboard ?</h4>
            <button className="buttons-17">View Leaderboard</button>
          </aside>
          <div className="form-components">
            <form className="form-elements">
              <select>
                <option>Prepr</option>
              </select>
              <select>
                <option>All Labs</option>
              </select>
              <select>
                <option>All Challenges</option>
              </select>
              <select>
                <option>Learning</option>
              </select>
            </form>{" "}
            <button className="buttons-19">Clear Filters</button>
            {/* <table className="board">
              <colgroup span="4 "></colgroup>
              <tr className="main-table">
                <th>#</th>
                <th>Username</th>
                <th>Learning Points</th>
                <th>Learning Rank</th>
                <th>Achievement</th>
              </tr>
              <br></br>
              <tr className="side-table1">
                <td>1</td>
                <td>Thahira Sheerin</td>
                <td>1528</td>
                <td>5</td>
                <td>2</td>
              </tr>
              <br></br>
              <tr>
                <td>2</td>
                <td>Thameem</td>
                <td>1234</td>
                <td>9</td>
                <td>1</td>
              </tr>
            </table> */}
            <div className="leader-ranks">
              <h4>#</h4>
              <h4>Username</h4>
              <h4>Learning Points</h4>
              <h4>Learning Rank</h4>
              <h4>Achievement</h4>
              <p>1</p>
              <p>Thahira Sheerin</p>
              <p>1792</p>
              <p>6</p>
              <p>2</p>
              <p>2</p>
              <p>Thameem</p>
              <p>2134</p>
              <p>7</p>
              <p>5</p>
            </div>
          </div>
        </Card>
        <Card>
          <h4>
            {" "}
            <FontAwesomeIcon icon={faAward} style={{ color: "#795ace" }} />{" "}
            Latest Achievement
          </h4>
          <img src={achieve} style={{ width: "max-content" }}></img>
          <h1 style={{ color: "#795ace", textAlign: "center" }}>
            Participant{" "}
          </h1>
          <div className="acheive-buttons">
            <button className="buttons-19">View Detail</button>
            <br></br>
            <button className="buttons-19">Share</button>
          </div>
        </Card>
      </section>
      <section className="third-section">
        <Card>
          <h4>
            {" "}
            <FontAwesomeIcon icon={faFlask} style={{ color: "#795ace" }} /> 2
            Labs
          </h4>
          <ul className="tabs">
            {tabsData2.map((tab, index) => (
              <li
                key={index}
                className={index === activeTab2 ? "active" : ""}
                onClick={() => handleTabClick2(index)}
              >
                {tab.title}
              </li>
            ))}
          </ul>
          <div className="tab-content">
            {" "}
            {tabsData2[activeTab2] && tabsData2[activeTab2].content}
          </div>
        </Card>
        <Card>
          <h4>18 Challenges</h4>
          <ul className="tabs">
            {tabsData3.map((tab, index) => (
              <li
                key={index}
                className={index === activeTab3 ? "active" : ""}
                onClick={() => handleTabClick3(index)}
              >
                {tab.title}
              </li>
            ))}
          </ul>
          <div className="tab-content">
            {" "}
            {tabsData3[activeTab3] && tabsData3[activeTab3].content}
          </div>
        </Card>
        <Card>
          <div className="tab4-header">
            <h4>2 Projects</h4>
          <button className="buttons-17">Create</button>
          </div>
          
          <ul className="tabs">
            {tabsData4.map((tab, index) => (
              <li
                key={index}
                className={index === activeTab4 ? "active" : ""}
                onClick={() => handleTabClick4(index)}
              >
                {tab.title}
              </li>
            ))}
          </ul>
          <div className="tab-content">
            {" "}
            {tabsData4[activeTab4] && tabsData4[activeTab4].content}
          </div>
        </Card>
      </section>
    </main>
  );
};
export default Dashboard;
