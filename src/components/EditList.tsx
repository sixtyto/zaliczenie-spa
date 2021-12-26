import { Button } from "react-bootstrap";
import type { Task } from "../App";
import EditListItem from "./EditListItem";

type Props = {
  addTask: (task: Task) => void;
  removeTask: (id: number) => void;
  editTask: (id: number, task: Task) => void;
  taskList: Task[];
};

const EditList = ({addTask, removeTask, editTask, taskList}: Props) => (
  <>
    <h1 className="mt-3">Edycja listy</h1>
    <hr/>
    <ul className="list-group">
      {taskList.map(task => (
        <EditListItem task={task} editTask={editTask}/>
      ))}
    </ul>
    <div className="my-3">
      <Button variant="outline-success" size="sm" onClick={() => addTask({
        id: taskList.length + 1,
        title: "",
        description: "",
        status: "Do zrobienia",
        edit: true
      })}>Dodaj zadanie</Button>
    </div>
  </>
)

export default EditList;