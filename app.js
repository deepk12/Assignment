const express = require( 'express' );
 
const app = express();
const  port = 4000;
 
app.use( express.json() ); // for parsing application/json
app.use( express.urlencoded( { extended: true } ) ); // for parsing application/x-www-form-urlencoded
 
app.get('/', (req, res) => {
    res.sendFile( __dirname + '/index.html');
});
 
app.post('/submit',(req,res)=>{
    const formData = req.body;
    res.send(`Form data received: ${JSON.stringify(formData)}`);
});
 
 
 
app.listen(port,()=>{
    console.log(`The Server is running at ${port}`);
});