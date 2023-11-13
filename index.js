const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const contacts = express.Router();

app.use('contacts', contacts);



app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.use("/contacts/", contacts);
contacts.get(':name',async(req,res)=>{
  const contact = await prisma.primatest_test.create({
    data:{
      id : 1,
      email: 'julien@prisma.io',
      name: julien
  
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


