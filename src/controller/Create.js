import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {Field, Form, Formik} from "formik";

function CreateForm(){
    let navigate = useNavigate();
    const [newStudent, setNewStudent] = useState({
        title : '',
        price : '',
        description : ''
    });
    const handleCreateStudent = (e) => {
        console.log(e)
        axios.post(`http://localhost:3000/tuors`, e).then(response => {
            alert("Create successful")
            navigate('/')
        }).catch(error => {
            alert("error")
        })
    }
    return(
     <div style={{width: "500px", margin: 'auto'}}>
             <h2 style={{ textAlign: 'center', marginTop: '10px' }}>Create Tour</h2>
             <Formik initialValues={newStudent}  onSubmit={(e) => {
                 handleCreateStudent(e)
             }}>
                 <Form>
                     <div className="mb-3">
                         <label className="form-label">title</label>
                         <Field className="form-control" name={'title'}></Field>
                     </div>
                     <div className="mb-3">
                         <label className="form-label">Price</label>
                         <Field className="form-control" name={'price'}></Field>
                     </div>
                     <div className="mb-3">
                         <label className="form-label">Description</label>
                         <Field className="form-control" name={'description'}></Field>
                     </div>
                     <button className={"btn btn-primary"} type={"submit"}>Create</button>
                     <button style={{marginLeft: '15px'}} className="btn btn-info" type={"reset"}>Reset</button>
                 </Form>
             </Formik>
             <Link style={{marginTop: '40px'}} className="btn btn-info" to={'/'} >Back to list</Link>
         </div>
    )

}
export default CreateForm