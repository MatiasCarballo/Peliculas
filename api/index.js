const app = require('./src/app.js')
require('dotenv').config()
const {
    PORT
  } = process.env;  

const port = 3001;  

app.listen(port, ()=> {
    console.log(`Server corriendo en el puerto ${port}`);
})
