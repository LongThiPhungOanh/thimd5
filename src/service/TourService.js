import axios from "axios";

export async function findAll(){
    try {
        const response = await axios.get('http://localhost:3000/tuors');
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}


export function findOne(id){
    axios.get(`http://localhost:3000/tuors/${id}`).then(response => {
        return response;
    }).catch(error => {
        return null
    })
}

export function create(tour){
    axios.post(`http://localhost:3000/tuors`, tour).then(response => {
       alert("create successful")
    }).catch(error => {
        alert("error")
    })
}
export function update(tour){
    axios.put(`http://localhost:3000/tuors/${tour.id}`, tour).then(response => {
        alert("update successful")
    }).catch(error => {
        alert("error")
    })
}

export function deleteById(id){
    axios.delete(`http://localhost:3000/tuors/${id}`).then(response => {
        alert("delete successful")
    }).catch(error => {
        alert("error")
    })
}


