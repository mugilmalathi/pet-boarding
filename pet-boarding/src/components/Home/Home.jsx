import axios from "axios";
import { useEffect, useState } from "react"
import "./Home.css"

export const Home = ()=>{

    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get("https://backend-petdb.herokuapp.com/pets")
        .then(({data: {data}})=>{
            setData([...data])
        })
    }, [])

    return (
        <div id="home">
            
            <table id="table">
                <thead id="table-head">
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>City</td>
                        <td>Address</td>
                        <td>Capacity</td>
                        <td>Cost per Day</td>
                        <td>Verified</td>
                        <td>Rating</td>
                    </tr>
                </thead>
              
                    {
                        data.map(e=>
                            <tbody id="table-body">
                                <tr>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.city}</td>
                                    <td>{e.address}</td>
                                    <td>{e.capacity}</td>
                                    <td>{e.cost}</td>
                                    <td>{e.veri}</td>
                                    <td>{e.rating}</td>
                                </tr>
                            </tbody>
                        )
                    }
            </table>

        </div>
    )
}