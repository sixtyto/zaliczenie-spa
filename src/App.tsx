import React from "react";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Route, Routes } from "react-router";
import About from "./components/About";

import EditList from "./components/EditList";
import NavBar from "./components/NavBar";
import TaskList from "./components/TaskList";
import { useLocation } from "react-router-dom";

export type Task = {
  id: number;
  title: string;
  description: string;
  status: string;
  edit?: boolean;
};

export const STATUSES = {
  TODO: "Do zrobienia",
  IN_PROGRESS: "W trakcie",
  DONE: "Zrobione",
};

const App = () => {
  const location = useLocation();
  const [taskList, setTaskList] = useState([] as Task[]);

  const addTask = (task: Task) => {
    setTaskList([...taskList, task]);
  };

  const removeTask = (id: number) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const editTask = (id: number, newTask: Task) => {
    setTaskList(taskList.map((task) => (task.id === id ? newTask : task)));
  };

  const changeStatus = (id: number, status: string) => {
    setTaskList(
      taskList.map((task) => (task.id === id ? { ...task, status } : task))
    );
  };

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]") as Task[];

    if (tasks.length > 0) {
      setTaskList(tasks);
    } else {
      setTaskList([
        {
          id: 1,
          title: "Przykładowe zadanie 1",
          description: "Opis przykładowego zadania o statusie Do zrobienia",
          status: STATUSES.TODO,
        },
        {
          id: 2,
          title: "Przykładowe zadanie 2",
          description: "Opis przykładowego zadania o statusie W trakcie",
          status: STATUSES.IN_PROGRESS,
        },
        {
          id: 3,
          title: "Przykładowe zadanie 3",
          description: "Opis przykładowego zadania o statusie Zrobione",
          status: STATUSES.DONE,
        },
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  useEffect(() => {
    const cleanTaskList = taskList
      .map((task) => {
        if (task.title.length !== 0 && task.description.length !== 0) {
          return {
            ...task,
            edit: false,
          };
        }
      })
      .filter((task) => task !== undefined);
    if (cleanTaskList.length !== 0) {
      setTaskList(cleanTaskList as Task[]);
    }
  }, [location]);

  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Col>
            <Routes>
              <Route
                path="/"
                element={
                  <TaskList taskList={taskList} changeStatus={changeStatus} />
                }
              />
              <Route
                path="/edit-list"
                element={
                  <EditList
                    taskList={taskList}
                    addTask={addTask}
                    removeTask={removeTask}
                    editTask={editTask}
                  />
                }
              />
              <Route path="/about" element={<About />} />
              <Route
                path="*"
                element={
                  <p className="text-center lead my-5">404 - Nic tu nie ma</p>
                }
              />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
