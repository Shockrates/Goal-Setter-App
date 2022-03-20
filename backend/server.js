import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import path from 'path';
import {fileURLToPath} from 'url';
import goalRoutes from './routes/goalRoutes.js';
import userRoutes from './routes/userRoutes.js';
import  {errorHandler} from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';


dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT || 5000;
connectDB();


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}))

app.use('/api/goals/', goalRoutes);
app.use('/api/users/', userRoutes);

//Serve Frontend
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../','frontend', 'build', 'index.html')))
} else {
    app.get('/', (req, res) => res.send('Please set to production'))
}

app.use(errorHandler);

app.listen(port,() => console.log(`Server started on ${port}`));


