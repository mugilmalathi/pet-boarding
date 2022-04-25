import "./Createpets.css"

export const Createpet = ()=>{

    return (
        <div id="createpets">

            <h2>Create Pets</h2>

            <label>Id</label>
            <br />
            <input className="pet-input" id="id" type="number" />
            <br />
            <label>Name</label>
            <br />
            <input className="pet-input" id="name" type="text" />
            <br />
            <label>City</label>
            <br />
            <input className="pet-input" id="city" type="text" />
            <br />
            <label>Address</label>
            <br />
            <input className="pet-input" id="address" type="text" />
            <br />
            <label>Capacity</label>
            <br />
            <input className="pet-input" id="capacity" type="number" />
            <br />
            <label>Cost per Day</label>
            <br />
            <input className="pet-input" id="cost" type="number" />
            <br />
            <label>Verify</label>
            <br />
            <input className="pet-input" id="verify" type="text" />
            <br />
            <label>Rating</label>
            <br />
            <input className="pet-input" id="rating" type="text" />
            <br />
            <input id="pet-submit" type="submit" />
        </div>
    )
}