import React from 'react';
import MeetupList from '../components/meetups/MeetupList'

const DUMMY=[
    {
        id:'m1',
        title:'first meetup!',
        image:"https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg",
        address:'some street 5, some state',
        description:'beautiful place'
    },
    {
        id:'m2',
        title:'second meetup!',
        image:"https://wallpapercave.com/wp/wp2504321.jpg",
        address:'some street 10, some state',
        description:'most beautiful place'
    }
]
function Home(props) {
    return <MeetupList meetups={props.meetups}/>
}
// export async function getServerSideProps(context){
//     const req= context.req;
//     return{
//         props:{
//             meetups:DUMMY
//         }
//     }
// }
export async function getStaticProps(){
    return{
        props:{
            meetups:DUMMY
        }
    }
}

export default Home
