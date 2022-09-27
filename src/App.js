import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
    let initTodo;
    if (localStorage.getItem("todos") === null) {
      initTodo = [];
    } else {
      initTodo = JSON.parse(localStorage.getItem("todos"));
    }

    const onDelete = (todo) => {
      setTodos(todos.filter((e) => {
        return e !== todo;
      }));
      localStorage.setItem("todos", JSON.stringify(todos));
    }

    const [toodoEdit, setToodoEdit] = useState({});
    const onEdit = (todo) => {
      setToodoEdit(todo);
      document.querySelector('.update').style.display = "block";
      document.querySelector('button[type=submit]').style.display = "none";
    }

    const addTodo = (title, desc) => {
      let sno;
      if (todos.length === 0) {
        sno = 0;
      } else {
        sno = todos[todos.length - 1].sno + 1;
      }
      const myTodo = {
        sno: sno,
        title: title,
        desc: desc,
      }
      setTodos([...todos, myTodo]);
    }

    const updateTodo = (title,desc,sno) =>{
      const newState = todos.map(obj => {
        if (obj.sno === sno) {
          return {...obj, title: title , desc : desc};
        }
        return obj;
      });
      setTodos(newState)
    }

    const [todos, setTodos] = useState(initTodo);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
      <>
        <Router>
          <Header title = "My Todos List" searchBar = { false }/>  
          <Switch>
            <Route exact path = "/" render = {
              () => {
                    return (
                      <>
                        <AddTodo addTodo = { addTodo } toodoEdit = { toodoEdit } updateTodo = { updateTodo }/>
                        <Todos todos = { todos } onDelete = { onDelete } onEdit = { onEdit }/>
                      </>
                    )
                  }
              }>
            </Route>
            <Route exact path = "/about" >
              <About/>
            </Route>  
          </Switch>
          <Footer/>
        </Router> 
      </>
    );
  }

  export default App;