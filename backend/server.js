const express = require ('express');
const app = express();
const port = 3000;

const IndexRoute = require('./routes/index_route');
//middleware
app.use(express.json());

app.use('/', IndexRoute);



app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
})