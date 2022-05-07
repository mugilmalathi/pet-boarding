import axios from "axios"
import { useEffect, useState } from "react"
import "./Createpets.css"

export const Createpet = ()=>{

    const [formData, setFormData] = useState({
        id: "",
        name: "",
        city: "",
        address: "",
        capacity: "",
        cost: "",
        veri: "",
        rating: ""
    })

    const [data, setData] = useState([])

    const handleChange = (e)=>{
        const {id, value} = e.target;
        setFormData({
            ...formData,
            [id]: value
        })
    }

    const handleSubmit = (e)=>{
        axios.post("https://backend-petdb.herokuapp.com/pets", formData)
        .then(()=>{
            setFormData({
                id: "",
                name: "",
                city: "",
                address: "",
                capacity: "",
                cost: "",
                veri: "",
                rating: ""
            })
        })
        .then(()=>{
            getData();
        })
    }

    useEffect(()=>{
        getData();
    }, [])

    const getData = ()=>{
        axios.get("https://backend-petdb.herokuapp.com/pets")
        .then((res)=>{
            setData(res.data);
        })
    }

    return (
        <div id="createpets">

            <h2>Create Pets</h2>

            <label>Id</label>
            <br />
            <input className="pet-input" id="id" value={formData.id} onChange={handleChange} type="number" />
            <br />
            <label>Name</label>
            <br />
            <input className="pet-input" id="name" value={formData.name} onChange={handleChange} type="text" />
            <br />
            <label>City</label>
            <br />
            <input className="pet-input" id="city" value={formData.city} onChange={handleChange} type="text" />
            <br />
            <label>Address</label>
            <br />
            <input className="pet-input" id="address" value={formData.address} onChange={handleChange} type="text" />
            <br />
            <label>Capacity</label>
            <br />
            <input className="pet-input" id="capacity" value={formData.capacity} onChange={handleChange} type="number" />
            <br />
            <label>Cost per Day</label>
            <br />
            <input className="pet-input" id="cost" value={formData.cost} onChange={handleChange} type="number" />
            <br />
            <label>Verify</label>
            <br />
            <input className="pet-input" id="veri" value={formData.veri} onChange={handleChange} type="text" />
            <br />
            <label>Rating</label>
            <br />
            <input className="pet-input" id="rating" value={formData.rating} onChange={handleChange} type="text" />
            <br />
            <input id="pet-submit" type="submit" onClick={handleSubmit} />
        </div>
    )
}