import React, { useEffect, useState, useContext } from 'react'
import { Usecontext1 } from '../UserContext/Usercontext1';
function Feeds() {
  const [data, setData] = useState([]);
  const { flag, setFlag,UserArray,setUserArray,UserName1,SetuserName1 } = useContext(Usecontext1);

  
  async function getFeeds() {
    let url = "https://jsonplaceholder.typicode.com/posts";
    let json = await fetch(url);
    return json.json();
  }
  useEffect(async () => {
    setData(await getFeeds());
  }, []);

  return (
    <>
      <div><h2>Feeds [All Posts]</h2></div>
      {data.map((element, index) => {
        if(element.userId == UserName1) {
          return <React.Fragment key={index}>
            <div>
              <p><b>User:</b>{element.userId}</p>
              <p><b>Title:</b>{element.title}</p>
              <p><b>Body:</b>{element.body}</p>
              <p>View Comments</p>
              <hr/>
            </div>
          </React.Fragment>
        }
      })}
    </>
    
  )
}


export default Feeds