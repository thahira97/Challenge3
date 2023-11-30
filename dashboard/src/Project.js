import "./Project.css";
import { useContext, useState } from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { Link, withRouter} from "react-router-dom";
import axios from "axios";
import { InputContext } from "./store/input-context";
import MainNavigation from "./MainNavigation";
import page from "./assets/Screenshot 2023-11-22 at 10.22.39 PM.png"

const Project = ({ history }) => {
  const { input, setInput } = useContext(InputContext);
  const [image, setImage] = useState(null);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
    setInput(prev => ({ ...prev, image: page }));
  };

  const inputHandler = (event) => {
    console.log(input);
    setInput({
      ...input,
      [event.target.name]: event.target.value
    });
  };

  const handleContinue = () => {
    history.push({
      pathname: "/create/project/1",
      state: { input },
    });
  };

  return (
    <>
    <MainNavigation></MainNavigation>
    <div className="main-container2">
      <h1>Create Project</h1>
      <p>
        {" "}
        <b>Challenge:</b> No active challenge selected
      </p>
      <div className="small-block">
        <p>
          To browse challenge requirements here, you need to select an active
          challenge below.
        </p>
      </div>
      <Card className="main-project">
        <h2>Project overview</h2>
        <div className="proj-detail1">
          <form className="proj-title">
            <h4>Title*</h4>
            <input
              onChange={inputHandler}
              type="text"
              id="titleBox"
              name="titleBox"
              placeholder="Max. 150 characters"
              required
            ></input>
          </form>
          <form className="proj-title">
            <h4> Project Slug</h4>
            <input
              onChange={inputHandler}
              className="input-box"
              type="text"
              id="slugBox"
              name="slugBox"
              placeholder="Project Slug"
              required
            ></input>
          </form>
        </div>
        <div className="proj-detail2">
          <form className="proj-title">
            <h4>Description</h4>
            <input
              onChange={inputHandler}
              type="text"
              id="textBox"
              name="textBox"
              placeholder="Max 300 character"
              required
            ></input>
          </form>
          <div className="sub-proj">
            <form className="proj-title">
              <h4>Active Challenge</h4>
              <select
                id="activeBox"
                name="activeBox"
                placeholder="Select Challenge"
                required
              >
                <option value="1">Select Challenge</option>
                <option value="2">Front-end Challenge</option>
                <option value="2">Back-end Challenge</option>
                <option value="2">Full-stack Challenge</option>
              </select>
            </form>
            <form className="proj-title">
              <h4>Associated Lab</h4>
              <select
                type="text"
                id="activeBox"
                name="activeBox"
                placeholder="Select Lab"
                required
              >
                <option value="1">Select Lab</option>
                <option value="2">Web Developer</option>
                <option value="2">Web Designer</option>
              </select>
            </form>
          </div>
        </div>
        <div className="proj-detail3">
          <aside className="check1">
            <input type="checkbox"></input>
            <p>
              Allow users outside your team to view your project{" "}
              <FontAwesomeIcon
                id="question"
                icon={faQuestion}
                style={{ color: "#795ace" }}
              />{" "}
            </p>
          </aside>
          <aside className="check1">
            <input type="checkbox"></input>
            <p>
              Allow users outside your team to download your project files{" "}
              <FontAwesomeIcon
                id="question"
                icon={faQuestion}
                style={{ color: "#795ace" }}
              />{" "}
            </p>
          </aside>
        </div>
      </Card>
      <br></br>
      <Card className="image-container">
        <h4>Upload Project Banner</h4>
        <label htmlFor="fileInput" className="buttons-17">
          Choose File
          <input
            type="file"
            accept="image/*"
            id="fileInput"
            className="form-control"
            onChange={(e) => handleImageChange(e)}
            style={{ display: "none" }}
          />
        </label>
        <div>
          {image && <img src={image} alt="Preview" style={{ width: "20%" }} />}
        </div>
      </Card>{" "}
      <br></br>
      <div className="lower-buttons">
        <button className="buttons-17">Cancel</button>
        {/* <a href="/create/project/1">
          {" "} */}
        <Link
          to="/create/project/1"
          className="buttons-17"
          role="button"
         
        >
          Continue
        </Link>
        <Link to="/create/project/1">
          {/* <button className="buttons-17" onClick={handleContinue}>Continue</button> */}
        </Link>

        {/* </a> */}
      </div>
    </div></>
  );
};
export default withRouter(Project);
