import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { Task, STATUSES } from "../App";

type Props = {
  taskList: Task[];
  changeStatus: (id: number, status: string) => void;
};

const TaskList = ({ taskList, changeStatus }: Props) => {
  const todo = taskList.filter((task) => task.status === STATUSES.TODO);
  const inProgress = taskList.filter(
    (task) => task.status === STATUSES.IN_PROGRESS
  );
  const done = taskList.filter((task) => task.status === STATUSES.DONE);

  return (
    <>
      <h1 className="mt-3">Lista zadań</h1>
      <hr />
      {inProgress.length > 0 && (
        <h5 className="my-3">{STATUSES.IN_PROGRESS}</h5>
      )}
      <ListGroup>
        {inProgress.map((task) => (
          <ListGroup.Item key={task.id} className="list-group-item">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{task.title}</h5>
              <small>{task.status}</small>
            </div>
            <div className="d-flex w-100 justify-content-between">
              <p className="mb-1">{task.description}</p>
              <Button
                variant="outline-success"
                size="sm"
                onClick={() => {
                  changeStatus(task.id, STATUSES.DONE);
                }}
              >
                Oznacz jako {STATUSES.DONE.toLowerCase()}
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      {todo.length > 0 && <h5 className="my-3">{STATUSES.TODO}</h5>}
      <ListGroup>
        {todo.map((task) => (
          <ListGroup.Item key={task.id} className="list-group-item">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{task.title}</h5>
              <small>{task.status}</small>
            </div>
            <div className="d-flex w-100 justify-content-between">
              <p className="mb-1">{task.description}</p>
              <Button
                variant="outline-success"
                size="sm"
                onClick={() => {
                  changeStatus(task.id, STATUSES.IN_PROGRESS);
                }}
              >
                Oznacz jako {STATUSES.IN_PROGRESS.toLowerCase()}
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      {done.length > 0 && <h5 className="my-3">{STATUSES.DONE}</h5>}
      <ListGroup>
        {done.map((task) => (
          <ListGroup.Item key={task.id} className="list-group-item">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{task.title}</h5>
              <small>{task.status}</small>
            </div>
            <div className="d-flex w-100 justify-content-between">
              <p className="mb-1">{task.description}</p>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default TaskList;
