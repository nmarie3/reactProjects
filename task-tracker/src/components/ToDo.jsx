import React from 'react'

const ToDo = ({task}) => {
  return (
    <>
        <div className="toDoContainer">
            <div className="taskContainer">
            <p>{task.projectName}</p>
            <button>Edit</button>
            </div>
            <p>{task.taskDescription}</p>
            <div className="deleteArea">
                <button className="deleteButton">Delete</button>
            </div>
        </div>
    </>
  )
}

export default ToDo
