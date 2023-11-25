import "./CreateProject.css";
import Card from "./Card";
const CreateProject = () => {
  return (
    <div className="main-container3">
      <h1>Create Project</h1>
      <p>
        {" "}
        <b>Challenge:</b> No active challenge selected
      </p>
      <div className="small-block">
        <p>
          You need to complete following sections after creating your project to
          meet submission requirements.
        </p>
      </div>
      <Card className="create-project" style={{width: "100%"}}>
        <h4>Building your team</h4>
        <p>Building a team is important for your project.</p>
        <aside className="recruit">
          <span className="rec1">
            <h4>Recruiting status</h4>
            <select className="customized-form">
              <option value="Select recruiting status for your project">
                Select recruiting status for your project
              </option>
              <option value="Not currently Recruiting">
                Not currently Recruiting
              </option>
              <option value="Recruiting">Recruiting</option>
            </select>
          </span>
          <span lassName="rec2">
            <h4>Required Skills</h4>
            <select className="customized-form">
              <option value="Find teammates with these skills ">
                Find teammates with these skills
              </option>
              <option value="React">React</option>
              <option value="Tailwind css">Tailwind css</option>
              <option value="Firebase">Firebase</option>
            </select>
          </span>
          <div>
            <h4>Team members</h4>
          <select className="customized-form">
            <option value="Team members">Team members</option>
            <option value="thahira">thahira</option>
            <option value="sheerin">sheerin</option>
          </select>
          </div>
          <div>
            <h4>Position</h4>
          <input className="customized-form" type="text" placeholder="Creater">
          </input>
          </div>
        </aside>
        <aside className="check1">
          <input type="checkbox"></input>
          <p>Create project team chat </p>
        </aside>

        <div className="all-inputs">
          <div>
          <h4>Team Leader</h4>
          <input className="customized-form" type="radio">
          </input>
          </div>
          <div>
          <h4>Viewer</h4>
          <input className="customized-form" type="radio">
          </input>
          </div>
          <div>
          <h4>Editor</h4>
          <input className="customized-form" type="radio">
          </input>
          </div>
        </div>
      </Card>
      <br></br>
      <div className="lower-buttons">
        <button className="buttons-17">Back</button>
      <a href="/"> <button className="buttons-17">Create Project</button>
      </a> 
      </div>
    </div>
  );
};
export default CreateProject;
