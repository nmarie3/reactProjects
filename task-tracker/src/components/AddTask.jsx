import React from 'react';
import {useState} from 'react';

const AddTask = ({taskList, setTaskList}) => {

    const [addModal, setAddModal] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInput = e => {
        const {name, value} = e.target;
        {/*the above is a destructure of the following:
            const name = e.target.name;
            const value = e.target.value*/}

        if (name === "projectName") {
            setProjectName(value);
            setErrorMessage("");
        }
        if (name === "projectName" && value === "") {
            setErrorMessage("Enter a project name");
        }
        if (name=== "taskDescription") setTaskDescription(value);
    }

    const handleAdd = e => {
        e.preventDefault();
        if (!projectName) {
            setErrorMessage("Enter a project name")
        }else {
            setTaskList([...taskList, {projectName, taskDescription}]
            );
            setAddModal(false); {/*this will close the modal after adding*/}
            setProjectName(""); {/*this will reset the inputs after adding*/}
            setTaskDescription("");
        }
    }

  return (
    <>
      <button
        className="newButton"
        type="button"
        onClick={() => setAddModal(true)}> {/*when clicked it is set to true wheich then asks the user for details*/}
            +New
      </button>
      {/*below is conditional rendering for the modal state*/}
      {addModal ? (
            <div className="popupContainer">
                <div className="popupModal">
                    <div className="titleModalFlex">
                        <h3>Add new task</h3>
                        <button
                            onClick={() => setAddModal(false)}> {/*this will close the modal*/}
                            X
                        </button>
                    </div>
                    <form>
                        <div>
                        <label>Project Name</label>
                        <input
                            className="modalInput"
                            id="project-name"
                            name="projectName"
                            type="text"
                            placeholder="Project Name"
                            value={projectName}
                            onChange={handleInput}
                            required/>
                            <p className="errorMessage">{errorMessage}</p>
                            <div>
                                <label>
                                    Task Description
                                </label>
                                <textarea
                                    className="textarea"
                                    id="task-description"
                                    name="taskDescription"
                                    rows="5"
                                    placeholder="task description"
                                    value= {taskDescription}
                                    onChange={handleInput}
                                />
                            </div>
                        </div>    
                    </form>
                    <div className="addTaskContainer">
                        <button
                            className="addTaskButton"
                            type="button"
                            onClick={handleAdd}>
                                Add Task
                        </button>
                    </div>
                </div>
            </div>
        ) : null}
    </>
  )
}

export default AddTask
