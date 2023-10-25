import {useEffect, useState} from "react";
import {findAll} from "../service/TourService";
import axios from "axios";
import {Link} from "react-router-dom";

function Home(){
    const [data, setData] = useState([])
    useEffect(() => {
        fetchData()
    }, []);
    const fetchData = () => {
        axios.get(`http://localhost:3000/tuors`).then(response => {
           setData(response.data)
        }).catch(error => {
            alert("error")
        })
    }

    return (
    <>
        <h3 style={{textAlign: 'center', marginTop: '50px'}}>List tour</h3>
        <Link style={{marginLeft : '400px'}} className="btn btn-primary" to={'/create'}>Create</Link>
        <table style={{margin: '0 auto',marginTop: '20px', borderCollapse: 'collapse', border: '1px', width: '700px'}}
               className="table table-hover">
            <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Price</th>
                <th colSpan="2">#</th>
            </tr>
            </thead>
            <tbody>
            {data && data.map(item => (
                <tr>
                    <td>{item.id}</td>
                    <td><Link style={{color: 'black'}} to={`detail/${item.id}`}>{item.title}</Link></td>
                    <td>{item.price}</td>
                    <td>
                        <Link style={{width: '70px'}} className="btn btn-warning"
                             to={`/update/${item.id}`}>Edit
                        </Link>
                    </td>
                    <td>
                        <Link style={{width: '70px'}} to={`/delete/${item.id}`}
                                className="btn btn-danger">Delete
                        </Link>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </>
    )
}
export default Home