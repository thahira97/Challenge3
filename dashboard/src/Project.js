import "./Project.css";
import { useState } from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

const Project = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    console.log(imageUrl);
    setImage(imageUrl);
  };

  return (
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
              type="text"
              id="title-box"
              name="title-box"
              placeholder="Max. 150 characters"
              required
            ></input>
          </form>
          <form className="proj-title">
            <h4> Project Slug</h4>
            <input
              className="input-box"
              type="text"
              id="slug-box"
              name="slug-box"
              placeholder="Project Slug"
              required
            ></input>
          </form>
        </div>
        <div className="proj-detail2">
          <form className="proj-title">
            <h4>Description</h4>
            <input
              type="text"
              id="text-box"
              name="text-box"
              placeholder="Max 300 character"
              required
            ></input>
          </form>
          <div className="sub-proj">
            <form className="proj-title">
              <h4>Active Challenge</h4>
              <select
                id="active-box"
                name="active-box"
                placeholder="Select Challenge"
                required
              >
                <option value="1">Select Challenge</option>
                <option value="2">2</option>
              </select>
            </form>
            <form className="proj-title">
              <h4>Associated Lab</h4>
              <select
                type="text"
                id="active-box"
                name="active-box"
                placeholder="Select Lab"
                required
              >
                <option value="1">Select Lab</option>
                <option value="2">2</option>
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
        <button className="buttons-17">Continue</button>
      </div>
    </div>
  );
};
export default Project;
