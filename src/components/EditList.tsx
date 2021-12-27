import React from "react";
import { Button } from "react-bootstrap";
import { Task, STATUSES } from "../App";
import EditListItem from "./EditListItem";
import { ListGroup } from "react-bootstrap";

type Props = {
  addTask: (task: Task) => void;
  removeTask: (id: number) => void;
  editTask: (id: number, task: Task) => void;
  taskList: Task[];
};

const EditList = ({ addTask, removeTask, editTask, taskList }: Props) => (
  <>
    <h1 className="mt-3">Edycja listy</h1>
    <hr />
    <ListGroup className="list-group">
      {taskList.map((task) => (
        <EditListItem
          key={task.id}
          task={task}
          editTask={editTask}
          removeTask={removeTask}
        />
      ))}
    </ListGroup>
    <div className="my-3">
      <Button
        variant="success"
        size="sm"
        onClick={() =>
          addTask({
            id: taskList.length + 1,
            title: "",
            description: "",
            status: STATUSES.TODO,
            edit: true,
          })
        }
      >
        Dodaj zadanie
      </Button>
    </div>
  </>
);

export default EditList;
