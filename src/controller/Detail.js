import {Link, resolvePath, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
function Detail(){
        let { id } = useParams();
        const [newStudent, setNewStudent] = useState({
            id : '',
            title : '',
            price : '',
            description : ''
        });
        useEffect(() => {
            if (id) {
                axios.get(`http://localhost:3000/tuors/${id}`)
                    .then(resp => {
                        setNewStudent(resp.data);
                        console.log(newStudent)
                    })
                    .catch(() => {
                        alert('An error occurred');
                    });
            }
        }, []);
        return (
            <div style={{width: "700px", margin: 'auto'}}>
                <h2 style={{ textAlign: 'center', marginTop: '10px' }}>Delete Tour</h2>
                <div>Tour du lịc {newStudent.title}</div><br/>
                <div>Giá: {newStudent.price}</div><br/>
                <div>Giới thiệu: {newStudent.description}</div>
                <br/>
                <Link  className="btn btn-info" to={'/'} >Back to list</Link>
            </div>
        )
    }


export default Detail