import express from 'express';

const app = express()
const port: number = 3001;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
