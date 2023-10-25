import {Link, resolvePath, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Field, Form, Formik} from "formik";

function UpdateForm(){
    let navigate = useNavigate();
    let { id } = useParams();
    const [tour, setTour] = useState({
        title : '',
        price : '',
        description : ''
    });

    useEffect(() => {
        console.log(id)
            axios.get(`http://localhost:3000/tuors/${id}`)
                .then(resp => {
                    setTour(resp.data);
                    console.log('tour')
                    console.log(tour)
                })
                .catch(() => {
                    alert('An error occurred');
                });
    }, [id]);
    const handleUpdateStudent = (e) => {
        console.log("obj update")
        console.log(e)
        axios.put(`http://localhost:3000/tuors/${e.id}`, e)
            .then(response => {
                alert('Update successfully');
                navigate('/')
            })
            .catch(error => {
                alert('An error occurred');
            });
    }

    return (
        <div style={{width: "500px", margin: 'auto'}}>
            <h2 style={{ textAlign: 'center', marginTop: '10px' }}>Update Tour</h2>
            <Formik enableReinitialize={true} initialValues={tour}  onSubmit={(e) => {
                handleUpdateStudent(e)
            }}>
                <Form>
                    <div className="mb-3">
                        <label className="form-label">title</label>
                        <Field className="form-control" name={'title'}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <Field className="form-control" name={'price'}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <Field className="form-control" name={'description'}/>
                    </div>
                    <button className={"btn btn-primary"} type={"submit"}>Update</button>
                </Form>
            </Formik>
            <Link style={{marginTop: '40px'}} className="btn btn-info" to={'/'} >Back to list</Link>
        </div>
    )
}
export default UpdateForm
