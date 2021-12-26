import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Route, Routes } from "react-router";
import About from "./components/About";

import EditList from './components/EditList';
import NavBar from './components/NavBar';
import TaskList from "./components/TaskList";

export type Task = {
  id: number;
  title: string;
  description: string;
  status: string;
  edit?: boolean;
}

export const STATUSES = {
  TODO: "Do zrobienia",
  DOING: "W trakcie",
  DONE: "Zrobione"
};

const App = () => {
  const [ taskList, setTaskList ] = useState([] as Task[]);

  const addTask = (task: Task) => {
    setTaskList([...taskList, task]);
  }

  const removeTask = (id: number) => {
    setTaskList(taskList.filter(task => task.id !== id));
  }

  const editTask = (id: number, task: Task) => {
    setTaskList(taskList.map(t => t.id === id ? task : t));
  }

  const changeStatus = (id: number, status: string) => {
    setTaskList(taskList.map(task => task.id === id ? { ...task, status } : task));
  }

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]') as Task[];

    if(tasks.length > 0) {
      setTaskList(tasks);
    } else {
      setTaskList([
        {
          id: 1,
          title: "Przykładowe zadanie 1",
          description: "Opis przykładowego zadania o statusie Do zrobienia",
          status: STATUSES.TODO
        },
        {
          id: 2,
          title: "Przykładowe zadanie 2",
          description: "Opis przykładowego zadania o statusie W trakcie",
          status: STATUSES.DOING
        },
        {
          id: 3,
          title: "Przykładowe zadanie 3",
          description: "Opis przykładowego zadania o statusie Zrobione",
          status: STATUSES.DONE
        }
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskList));
  }, [taskList]);

  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Col>
            <Routes>
              <Route path="/" element={<TaskList taskList={taskList} changeStatus={changeStatus}/>} />
              <Route path="/modify-list" element={<EditList taskList={taskList} addTask={addTask} removeTask={removeTask} editTask={editTask}/>} />
              <Route path="/about" element={<About/>} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
)};


export default App;
