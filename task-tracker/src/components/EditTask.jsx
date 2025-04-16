import React from 'react'
import { useState, useEffect } from 'react';


{/*will need to destructure "index" below as well if you plan to not go chronologically*/}
const EditTask = ({task, taskList, setTaskList}) => {
    const [editModal, setEditModal] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

useEffect(() => {
    setProjectName(task.projectName);
    setTaskDescription(task.taskDescription);
}, []); {/*this effect shows our previous text in the input field after we click the edit button*/}
    
        const handleInput = e => {
            const {name, value} = e.target;
            {/*the above is a destructure of the following:
                const name = e.target.name;
                const value = e.target.value*/}
    
            if (name === "projectName") setProjectName(value);
            if (name=== "taskDescription") setTaskDescription(value);
        }
    
        const handleUpdate = e => {
            e.preventDefault();
            let taskIndex =taskList.indexOf(task);
            {/*if not using local storage, keep below only: 
                taskList.splice(taskIndex, 1);*/}
            taskList.splice(taskIndex, 1, {
                projectName: projectName,
                taskDescription: taskDescription,
                timestamp: task.timestamp,
                duration: task.duration
            }); 
            {/*if not using local storage, just keep this below: 
                setTaskList([...taskList, {projectName, taskDescription}]
            ); until setEditModal*/}
            localStorage.setItem("taskListStorage", JSON.stringify(taskList));
            window.location.reload();
            setEditModal(false); {/*this will close the modal after adding*/}

        }

  return (
    <>
        <button
            onClick={() => setEditModal(true)}>Edit</button>
        {editModal ? (
            <>
            <div className="popupContainer">
                <div className="popupModal">
                    <div className="titleModalFlex">
                        <h3>Edit task</h3>
                        <button
                            onClick={() => setEditModal(false)}> {/*this will close the modal*/}
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
                            onClick={handleUpdate}>
                                Save Task
                        </button>
                    </div>
                </div>
            </div>
            </>
        ) : null}
    </>
  )
}

export default EditTask
