import cors from 'cors'
import express from "express";
import mongoose from 'mongoose';
import users from './routes/userRoutes.js' 

const app = express();
app.use(express.json());
// app.use(cookieParser())
app.use(express.urlencoded({extended:false}));
app.use(cors({credentials:true,origin:"*"}));

app.use('/api',users)

let port = 5000;

mongoose.connect("mongodb+srv://kdhar499:DurLa1999mo@cluster0.rjxq1d0.mongodb.net/blackcoffer?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Database Connected")).catch((err) => {
    console.log(err);
})


// Define User schema
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    // Add more fields as needed
  });
  
 export const UserData = mongoose.model('UserData', UserSchema);
  


app.listen(port, () => {
    console.log(`new database successfully connected ${port}`);
})