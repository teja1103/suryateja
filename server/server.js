const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const dotenv = require('dotenv');
const sendEmail = require('./sendmail')
const crypto = require('crypto')

////

const users = require('./usermodel')                              //students in college




const app = express();

dotenv.config()
const PORT = process.env.PORT || 5000
mongoose.connect(process.env.CONNECTION_URL).then(
    ()=> console.log('Db connected..')
)

app.use(express.json());
app.use(cors({origin:"*"}));






app.get('/',(req,res)=>{
    res.send('Hello to JNTU  API 1-11-2022 19:46');
})


// registration of students
app.post('/register',async (req,res) =>{
    try{
        const { fullname,StudentId,branch,email } = req.body;

        let newUser = new users({
            fullname,StudentId,branch,email
        })
        newUser.save();
        return res.status(200).send('Data enrolled Successfully')
    }
    catch(err){
        console.log(err)
        return res.status(500).send('data enrolled Server Error')
    }
})

app.get('/getall',async (req,res) =>{
    try{
        let allprofiles = await users.find();
        return res.json(allprofiles);
    }
    catch(err){
        console.log(err)
        return res.status(500).send('getall Server Error')
    }
})

app.post('/indprofilee', async (req,res)=>{
    try{
        const {branch} = req.body;
        let indprofile = await users.find({branch})
        return res.json(indprofile);
    }
    catch(err){
        console.log(err);
        return res.status(500).send('myprofile Server Error')
    }
})




app.listen(PORT,()=> console.log('Server is Running..'))