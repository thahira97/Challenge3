import "./Dashboard.css";
import Card from "./Card";
import { useState } from "react";
import MyChartComponent from "./ChartComponent";
import notes from "./assets/last-visited-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faAward } from "@fortawesome/free-solid-svg-icons";
import achieve from "./assets/Hfrsd4HcVe.png";
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
            <table className="board">
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
            </table>
          </div>
        </Card>
        <Card>
          <h4>
            {" "}
            <FontAwesomeIcon icon={faAward} style={{ color: "#795ace" }} />{" "}
            Latest Achievement
          </h4>
          <img src={achieve} style={{ width: "max-content" }}></img>
          <h1 style={{ color: "#795ace", textAlign: "center" }}>Participant </h1>
          <div className="acheive-buttons">
            <button className="buttons-19">View Detail</button>
          <br></br>
          <button className="buttons-19">Share</button>
          </div>
          
        </Card>
      </section>
    </main>
  );
};
export default Dashboard;
