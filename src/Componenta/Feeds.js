import React, { useEffect, useState, useContext } from 'react'
import { Usecontext1 } from '../UserContext/Usercontext1';
function Feeds() {
  const [data, setData] = useState([]);
  const { flag, setFlag,UserArray,setUserArray,UserName1,SetuserName1 } = useContext(Usecontext1);

  useEffect( () => {
    let url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url).then((value) => {
      return value.json();
    }).then((value) => {
      setData(value);
    })
  }, []);

  return (
    <>
    <div><h1>Hello</h1></div>
      <div><h2>Feeds [All Posts]</h2></div>
      {data.map((element, index) => {
        if(element.userId == UserName1) {
          return <div key={index}>
            <div>
              <p><b>User:</b>{element.userId}</p>
              <p><b>Title:</b>{element.title}</p>
              <p><b>Body:</b>{element.body}</p>
              <p>View Comments</p>
              <hr/>
            </div>
          </div>
        }
      })}
    </>
    
  )
}


export default Feeds