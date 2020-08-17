import express from 'express';

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send(`Node and express server running on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Your server is runnig on port ${PORT}`);
})