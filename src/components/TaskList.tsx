import { Button } from "react-bootstrap";
import { Task, STATUSES } from "../App";

type Props = {
  taskList: Task[];
  changeStatus: (id: number, status: string) => void;
};

const TaskList = ({taskList, changeStatus}: Props) => (
  <>
    <h1 className="mt-3">Lista zadań</h1>
    <hr/>
    <ul className="list-group">
      {taskList.map(task => (
        <li key={task.id} className="list-group-item">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{task.title}</h5>
            <small>{task.status}</small>
          </div>
          <div className="d-flex w-100 justify-content-between">
            <p className="mb-1">{task.description}</p>
            {task.status === "Do zrobienia" && <Button variant="outline-warning" size="sm" onClick={()=>{changeStatus(task.id, STATUSES.DOING)}}>Oznacz jako w trakcie</Button>}
            {task.status === "W trakcie" && <Button variant="outline-success" size="sm" onClick={()=>{changeStatus(task.id, STATUSES.DONE)}}>Oznacz jako zrobione</Button>}
          </div>
        </li>
      ))}
    </ul>
  </>
)

export default TaskList;