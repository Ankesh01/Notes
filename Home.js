import React,{useState} from 'react'
import './Home.css'
import axios from 'axios'
function Home() {

    const[name,setValue] = useState("");
    const[dat,setData] = useState([])
 
  

    const fet = ()=> {
        
        axios.get('http://localhost:5000/getAll')
        // .then(response=>console.log(response))
        .then(response=> {
           const allData =  response.data;
           setData(allData);
        })
        .then(()=>console.log("After Response"))
        .then(()=>console.log("DAta---------------"))
        .then(()=>console.log(dat))
      
       // .then(data=>insertRow(response.data)
        
    }
    const InsertName = ()=> {
        console.log("Inside Inert new name function frontend");
        console.log(name);
     
        axios.post('http://localhost:5000/insert',{name:name})
        .then(response => console.log(response))
        .then(fet)
      
          .catch(function (error) {
            console.log(error);
          });
    }
    
  const del = (id) => {
    axios.delete(`http://localhost:5000/delete/${id}`).then((response) => {
      setData(
        dat.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };

    return (
        <div className="container">
            <div>
            <label> Enter the Name </label><input type="text" value={name} className="input1" onChange={(e)=>{setValue(e.target.value)}}/>
            <button onClick={InsertName}>Add Name</button>
            <div id="table"> <table id="table">
                  <thead>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Delete</th>
                        <th>Edit</th>
                        </thead>
                        <tbody></tbody>
                        
                </table> {dat.map((data1,index)=>
            (
                <thead><th>{data1.id}</th><th>{data1.name}</th><th>{data1.date_added}</th>
                <th><button onClick={del(data1.id)}  >Delete</button></th>
                <th><button >Edit</button></th>
                </thead>
            ))} 
           
            </div> 
            </div>
            <div>
            <input type="search" className="searchbar"/>
            <button className="btn">Search</button>
            </div>
            <div >
               

            </div>
            <div className="fet">
                
               
                {/* <button onClick={fet }>Click</button> */}
             

            
        </div>
    

    </div>
       
    )
}

export default Home
