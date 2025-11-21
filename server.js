// how to connect frontend and backend
import express from 'express'
const app = express();
 app.get('/',(req,res) =>{
    res.send(`Server is started...`);
 });


 const port = process.env.PORT || 3000;
 app.listen(port,()=>{
    console.log(`Server runs at ${port}`);
 });