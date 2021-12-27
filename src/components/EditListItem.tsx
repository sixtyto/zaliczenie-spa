import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  FormControl,
  InputGroup,
  ListGroup,
} from "react-bootstrap";
import { Task } from "../App";

type Props = {
  task: Task;
  editTask: (id: number, task: Task) => void;
  removeTask: (id: number) => void;
};

const EditListItem = ({ task, editTask, removeTask }: Props) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  if (task.edit) {
    return (
      <ListGroup.Item>
        <InputGroup>
          <InputGroup.Text>Tytuł</InputGroup.Text>
          <FormControl
            placeholder="Tytuł"
            aria-label="Tytuł"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroup.Text>Opis</InputGroup.Text>
          <FormControl
            as="textarea"
            placeholder="Opis"
            aria-label="Opis"
            value={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
          />
          <Button
            variant="outline-success"
            size="sm"
            onClick={() => {
              editTask(task.id, { ...task, title, description, edit: false });
            }}
          >
            Zapisz
          </Button>
        </InputGroup>
      </ListGroup.Item>
    );
  } else {
    return (
      <ListGroup.Item className="list-group-item">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{task.title}</h5>
          <small>{task.status}</small>
        </div>
        <div className="d-flex w-100 justify-content-between">
          <p className="mb-1">{task.description}</p>
          <ButtonGroup>
            <Button
              variant="warning"
              size="sm"
              onClick={() => {
                editTask(task.id, { ...task, edit: true });
              }}
            >
              Edytuj
            </Button>
            <Button
              variant="danger"
              size="sm"
              onClick={() => {
                removeTask(task.id);
              }}
            >
              Usuń
            </Button>
          </ButtonGroup>
        </div>
      </ListGroup.Item>
    );
  }
};

export default EditListItem;
