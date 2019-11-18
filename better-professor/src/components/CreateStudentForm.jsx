import React, {useState} from "react";

const CreateStudentForm = () => {
    const [add, setAdd] = useState({
        id: Date.now(), 
        first_name: '', 
        last_name: ''
    })
    const handleChange = event => {
        setAdd({...add, [event.target.name]:event.target.value})
    }
   

    const submitForm = event => {
        event.preventDefault();
        // call in axios with auth here 
        // post request 
        // then request 
    }

    return (
        <div>
            <form value={add.id} onSubmit={submitForm}>
                <input
                type="text"
                name="first_name"
                placeholder="student first name"
                value={add.first_name}
                onChange={handleChange}
                />
                <input
                type='text'
                name="last_name"
                placeholder="student last name"
                value={add.last_name}
                onChange={handleChange}
                />
                <button type="submit">Create Student</button>
            </form>
        </div>
    )
}

export default CreateStudentForm;