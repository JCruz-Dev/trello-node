import express from 'express';
import userRoutes from './routes/userRoutes';
const app = express();
const PORT = 3002;

app.use('/', userRoutes);
app.listen(PORT, () => {
    console.log('Server is running on Port 3002');
});
