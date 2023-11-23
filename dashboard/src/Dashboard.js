import "./Dashboard.css";
import Card from "./Card";
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
      content: (
        <div>
          <p>You joined PreprLabs on Nov 13, 2023,Here is your lab journey. </p>
          <img src={""} alt="lab-img" style={{ width: "100px" }}></img>
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
  return (
    <main className="main-container">
      <h1>Welcome Thahira</h1>
      <section>
        <Card>
          <h4>My Progress</h4>
          <ul className="tabs"></ul>
        </Card>
      </section>
    </main>
  );
};
export default Dashboard;
