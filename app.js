const express = require('express')
const app = express();
const path = require('path');

app.use(express.urlencoded({extended:true}))

//serveri statik ne folderin publik html file
app.use(express.static(path.join(__dirname, 'public')));

app.post('/checkbox', (request, respond) => {
    const availability = request.body;
    console.log('Availability:', availability);
    respond.send('Check console');
  });

app.listen(3000, () =>{
    console.log("Porta 3000")
})

