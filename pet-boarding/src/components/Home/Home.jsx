import "./Home.css"

export const Home = ()=>{

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
                
                <tbody id="table-body">
                    <tr>
                        <td>1</td>
                        <td>Bob</td>
                        <td>Chennai</td>
                        <td>Tamilnadu</td>
                        <td>15</td>
                        <td>2000</td>
                        <td>Yes</td>
                        <td>9.8</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}