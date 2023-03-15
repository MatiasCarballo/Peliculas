const app = require('./src/app.js')
require('dotenv').config()
const port = process.env.PORT || 3005;


app.listen(port, ()=> {
    console.log(`Server corriendo en el puerto ${port}`);
})
