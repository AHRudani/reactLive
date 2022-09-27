import React, { useState , useEffect } from 'react';
import '../AddTodo.css';

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [sno, setSno] = useState(0);

    useEffect(() => {
        setTitle(props.toodoEdit.title);
        setDesc(props.toodoEdit.desc);
        setSno(props.toodoEdit.sno);
    }, [props.toodoEdit])

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    const update = () => {
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            props.updateTodo(title, desc, sno);
            setTitle("");
            setDesc("");
            document.querySelector('.update').style.display = "none";
            document.querySelector('button[type=submit]').style.display = "block";
        }
    }

    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                </div>
                <input type="hidden" value={sno}  className="form-control"  />
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
                <button type="button" className="btn btn-sm btn-success update" onClick={()=>{update()}}> Update </button>
            </form>
        </div>
    )
}
