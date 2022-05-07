import axios from "axios";
import { useEffect, useState } from "react"
import "./Home.css"

export const Home = ()=>{

    const [data, setData] = useState([])

    useEffect(()=>{
        getData();
    }, [])

    const getData = ()=>{
        axios.get("http://localhost:8080/pets")
        .then((res)=>{
            setData(res.data);
        })
    }

    return (
        <div id="home">
            
            <table id="table">
                <thead id="table-head">
                    <tr>
                        <td>Id</td>
                        <td style={{backgroundColor:"orange"}}>Name</td>
                        <td>City</td>
                        <td style={{backgroundColor:"orange"}}>Address</td>
                        <td>Capacity</td>
                        <td style={{backgroundColor:"orange", width:"150px"}}>Cost per Day</td>
                        <td>Verified</td>
                        <td style={{backgroundColor:"orange"}}>Rating</td>
                    </tr>
               
                </thead>
              {
                  data.map(e=>
                    <tbody id="table-body">
                    <tr>
                        <td>{e.id}</td>
                        <td style={{backgroundColor:"rgb(243, 230, 206)"}}>{e.name}</td>
                        <td>{e.city}</td>
                        <td style={{backgroundColor:"rgb(243, 230, 206)"}}>{e.address}</td>
                        <td>{e.capacity}</td>
                        <td style={{backgroundColor:"rgb(243, 230, 206)"}}>{e.cost}</td>
                        <td>{e.veri}</td>
                        <td style={{backgroundColor:"rgb(243, 230, 206)"}}>{e.rating}</td>
                    </tr>
                </tbody>
                  )
              }

            </table>

        </div>
    )
}