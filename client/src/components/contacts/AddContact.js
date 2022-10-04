import React from "react";
import { useReducer } from "react";
import { useState } from "react";
import { useEffect } from "react";

// create useReducer for changing values
const reducer = (state, action) => {
    console.log(action, 'this is the action');
    switch (action.type) {
        case 'addID':
            console.log('Logged if the editName action is being dispatched');
            //it updates the name to the input value
            return { ...state, id: action.payload };

        case 'addName':
            return { ...state, name: action.payload };

        case 'addEmail':
            return { ...state, email: action.payload };

        case 'addPhoneNumber':
            return { ...state, phone_number: action.payload };

        case 'addContactId':
            return { ...state, contact_id: action.payload };
        case 'addNotes':
            return { ...state, notes: action.payload };
        case 'addImage':
            return { ...state, image: action.payload };
        case 'clearForm':
            return { id: '', name: '', email: '',phone_number: '', contact_id: '', notes: '', image: '' };
        default:
            return state;
    }
};
const AddContact = () =>{

    const [contacts, setContacts] = useState([]);

    const getContacts = async () =>{
        const response = await fetch(
            `http://localhost:6444/contacts`
        );
        const contact = await response.json();
        console.log(contact);
        setContacts(contact);
    }

    useEffect(() =>{
        getContacts();
    }, []);

    const initialState = {
        id: "", name: '', email: '',phone_number: '', contact_id: '', notes: '', image: ''
    };

    const[state, dispatch] = useReducer(reducer, initialState);
    const handleAddContact = async (e) =>{
        e.preventDefault();

        const newContact ={
            id: state.id, name: state.name, email: state.email, phone_number: state.phone_number, contact_id: state.contact_id, notes: state.notes, image: state.image 
        }

        const response = await fetch('http://localhost:6444/contacts',{
            method: 'POST',
            headers: {
                Accept:'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newContact)
        });
        const content = await response.json();
        setContacts([...contacts, content])
        dispatch({type:'clearForm'});
    }
    return  (
        <>
<div className="addContact">
    <header>Add a new Contact</header>

    <form onSubmit={handleAddContact}>
        <fieldset>
        <label>ID: </label>
        <input type="number" value={state.id} onChange={(e) => dispatch({type: 'addID', payload: e.target.value})}/>
        <br></br>
        <label>Name: </label>
        <input type="text" value={state.name} onChange={(e) => dispatch({type: 'addName', payload: e.target.value})}/>
        <br></br>
        <label>Email: </label>
        <input type="email" value={state.email} onChange={(e) => dispatch({type: 'addEmail', payload: e.target.value})}/>
        <br></br>
        <label>Phone Number: </label>
        <input type="text" value={state.phone_number} onChange={(e) => dispatch({type: 'addPhoneNumber', payload: e.target.value})}/>
        <br></br>
        <label>Contact ID: </label>
        <input type="number" value={state.conact_id} onChange={(e) => dispatch({type: 'addContactId', payload: e.target.value})}/>
        <br></br>
        <label>Notes: </label>
        <input type="text" value={state.notes} onChange={(e) => dispatch({type: 'addNotes', payload: e.target.value})}/>
        <br></br>
        <label>Image: </label>
        <input type="text" value={state.image} onChange={(e) => dispatch({type: 'addImage', payload: e.target.value})} />
        </fieldset>
        <input type="submit"/>
    </form>
</div>
        </>
    )
}

export default AddContact;