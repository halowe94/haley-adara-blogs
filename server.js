const express = require('express');
const app = express();
const port = process.env.PORT || 5000

app.listen(port. () => console.log(`listening on port ${port}`));

app.get('/express', (req, res) => {
    res.send({ express: 'YOUR BACKEND IS CONNECTED TO REACT' });
})