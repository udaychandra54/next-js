import React from 'react';
import {MongoClient} from 'mongodb'

async function  handler(req,res) {
    try{
        if(req.method==='POST'){
            const data = req.body;
         const client =  await MongoClient.connect('mongodb+srv://uday0854:udaychandra@cluster0.079dh.mongodb.net/meetups?retryWrites=true&w=majority');
          const db =  client.db();
         const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);
        console.log(result);
    
        client.close();
        res.status(201).json({message:'data inserted!'})
        }
    }catch(err){
        console.log(err);
    }
    
   
}

export default handler
