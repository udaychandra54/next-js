import React from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

function NewMeetup() {
    const meetupHandler=async(enteredFormData)=>{
       const response = await fetch('/api/new-meetup',
       {
           method:"POST",
           body:JSON.stringify(enteredFormData),
           headers:{
               "Content-Type":"application/json"
           }
       })
       const data = await response.json();
       console.log(data);
    }
    return <NewMeetupForm onAddMeetup={meetupHandler}/>
}

export default NewMeetup
