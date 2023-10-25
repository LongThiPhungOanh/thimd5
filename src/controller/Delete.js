import {Link, resolvePath, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Field, Form, Formik} from "formik";

function Delete(){
        let navigate = useNavigate();
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
        const handleDeleteStudent = (e) => {
            const confirm = window.confirm("are you sure?")
            if (confirm){
                axios.delete(`http://localhost:3000/tuors/${id}`, e)
                    .then(response => {
                        alert('Delete successfully');
                        navigate('/')
                    })
                    .catch(error => {
                        alert('An error occurred');
                    });
            }
        }

        return (
            <div style={{width: "700px", margin: 'auto'}}>
                <h2 style={{ textAlign: 'center', marginTop: '10px' }}>Delete Tour</h2>
                <div>Tour du lịc {newStudent.title}</div><br/>
                <div>Giá: {newStudent.price}</div><br/>
                <div>Giới thiệu: {newStudent.description}</div>
                <button style={{marginTop : '20px'}} className="btn btn-danger" onClick={()=> handleDeleteStudent(newStudent.id)}>Delete</button><br/>
                <Link style={{marginTop: '40px'}} className="btn btn-info" to={'/'} >Back to list</Link>
            </div>
        )
    }

export default Delete