import React, { useEffect, useState } from 'react'

export function Fetch() {

    var [data , setData] = useState([]);
    const fetchData = async () => {
        let responce = await fetch("https://jsonplaceholder.typicode.com/todos/");
        setData(await responce.json())
    }

    useEffect(()=>{
        fetchData();
    },[]);

    const divStyle = {
        maxWidth : '18em'
    };

  return (
    <div className="py-5">
        <div className="container">
            <div className="row hidden-md-up">
                { true ?
                    data.map((obj)=>{
                        return(
                        <div className="col-md-3" key={obj.id}>
                            {obj.completed ? 
                            <div className="card text-white bg-success mb-3" style={divStyle}>
                                <div className="card-header">Completed</div>
                                <div className="card-body">
                                    <h5 className="card-title">{obj.title}</h5>
                                    <p className="card-text">Id is {obj.userId} </p>
                                    <p className="card-text">{obj.id}</p>
                                </div>
                            </div>
                            : 
                            <div className="card text-white bg-danger mb-3" style={divStyle}>
                                <div className="card-header">Not Completed</div>
                                <div className="card-body">
                                    <h5 className="card-title">{obj.title}</h5>
                                    <p className="card-text">Id is {obj.userId} </p>
                                    <p className="card-text">{obj.id}</p>
                                </div>
                            </div>
                            }
                        </div>
                        )
                    })
                :
                <div className="col-md-3" key={data.id}>
                    {data.completed ? 
                    <div className="card text-white bg-success mb-3" style={divStyle}>
                        <div className="card-header">Completed</div>
                        <div className="card-body">
                            <h5 className="card-title">{data.title}</h5>
                            <p className="card-text">Id is {data.userId} </p>
                            <p className="card-text">{data.id}</p>
                        </div>
                    </div>
                    : 
                    <div className="card text-white bg-danger mb-3" style={divStyle}>
                        <div className="card-header">Not Completed</div>
                        <div className="card-body">
                            <h5 className="card-title">{data.title}</h5>
                            <p className="card-text">Id is {data.userId} </p>
                            <p className="card-text">{data.id}</p>
                        </div>
                    </div>
                    }
                </div>
                }
            </div>
        </div>
    </div>
  )
}
