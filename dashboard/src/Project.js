import "./Project.css";
import Card from "./Card";

const Project = () => {
  return (
    <div className="main-container2">
      <h1>Create Project</h1>
      <hr></hr>
      <p> Challenge: No active challenge selected</p>
      <div className="small-block">
        <p>
          To browse challenge requirements here, you need to select an active
          challenge below.
        </p>
      </div>
      <Card></Card>
    </div>
  );
};
export default Project;
