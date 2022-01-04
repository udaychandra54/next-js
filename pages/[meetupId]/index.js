import React from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
    return (
        <div>
            <MeetupDetail 
            image='https://media.istockphoto.com/photos/big-ben-london-picture-id483677925'
            title='first meetup'
            address='lamely street 5, london'
            description='nice place'
            />
        </div>
    )
}

export async function getStaticPaths(){
    return{
        fallback:true,
        paths:[
            {
                params:{
                    meetupId:'m1'
                }
            },
            {
                params:{
                    meetupId:'m2'
                }
            }
        ]
    }
}

export async function getStaticProps(context){
    const meetupId = context.params.meetupId
    return{
       props:{
           meetupData:{
            image:'https://media.istockphoto.com/photos/big-ben-london-picture-id483677925',
            id:meetupId,
            title:'first meetup',
            address:'lamely street 5, london',
            description:'nice place'
           }
       }
    }
}

export default MeetupDetails
