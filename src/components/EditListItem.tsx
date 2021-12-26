import { useState } from "react"
import { Button } from "react-bootstrap"
import { Task } from "../App"


type Props = {
  task: Task
  editTask: (id: number, task: Task) => void
}

const EditListItem = ({task, editTask}: Props) => {
  const [title, setTitle] = useState(task.title)
  const [description, setDescription] = useState(task.description)

  if(task.edit) {
    return (
      <li className="list-group-item">
        <div className="d-flex w-100 justify-content-between">
          <input className="form-control" type="text" value={title} onChange={(e) => setTitle(e.currentTarget.value)}/>
          <small>{task.status}</small>
        </div>
        <div className="d-flex w-100 justify-content-between">
          <textarea className="form-control" value={description} onChange={(e) => setDescription(e.currentTarget.value)}/>
          <Button variant="outline-success" size="sm" onClick={()=>{editTask(task.id, {...task, title, description, edit: false})}}>Zapisz</Button>
        </div>
      </li>
    )
  } else {
    return (
      <li className="list-group-item">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{task.title}</h5>
          <small>{task.status}</small>
        </div>
        <div className="d-flex w-100 justify-content-between">
          <p className="mb-1">{task.description}</p>
          {task.status === "Do zrobienia" && <Button variant="outline-info" size="sm" onClick={()=>{editTask(task.id, {...task, edit: true})}}>Edytuj</Button>}
          {task.status === "W trakcie" && <Button variant="outline-info" size="sm" onClick={()=>{editTask(task.id, {...task, edit: true})}}>Edytuj</Button>}
        </div>
      </li>
    )
  }
}

export default EditListItem;