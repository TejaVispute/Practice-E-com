import { NavLink } from "react-router-dom";
import { useBookContext } from "../Context/BooksContext";

function ProductCard({ filter }) {

    let { search } = useBookContext();

    return (

        <div className="mt-5" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr", gap: "1rem" }}>
            {
                filter.filter((book) => (
                    book.name.toLocaleLowerCase().includes(search.toLowerCase())
                )).map((e) => {
                    let url = `/bookdetails/${e._id}`;

                    return (
                        <NavLink style={{ textDecoration: "none", color: "black" }} to={url}>
                            <div class="card text-center h-100">
                                <img src={e.image} class="card-img-top" alt="not found" height="250px" />
                                <div class="card-body">
                                    <h5 class="card-title">{e.name.substring(0, 12)}...</h5>
                                    <p class="card-text">Categorie: {e.categories}</p>
                                    <button className="btn btn-outline-dark">Buy now</button>
                                </div>
                            </div>
                        </NavLink>
                    )
                })

            }
        </div>

    )
}

export default ProductCard;









// import React, { useState } from 'react'
// import { UserData } from './UserData';

// const App = () => {
//   const [data,setdata] = useState("");
//   const onChange =(event)=>{
//     console.log(event.target.value);
//     setdata(event.target.value)
//   }

//   return (
//     <div>
//       <input type="text" placeholder='Enter the data' onChange={onChange}/>
//       <ul>
//         {UserData.filter((user)=>
//         user.name.toLowerCase().includes(data.toLowerCase())
//         ).map((user)=>(
//          <tbody>
//           <tr>
//             <th>name</th>
//             <th>profression</th>
//             <th>location</th>
//           </tr>
//           <td>{user.name}</td>
//           <td>{user.profession}</td>
//           <td>{user.location}</td>
//          </tbody>
//         ))}
//       </ul>
//       <ul></ul>
//     </div>
//   )
// }

// export default App