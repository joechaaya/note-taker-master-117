const express = require('express');
const apiRoutes = require('./routes/apiRoutes/noteRoutes');
const htmlRoutes = require('./routes/htmlRoutes/index');
const app = express();


const PORT = process.env.PORT || 3001;



app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log('API server now on port 3001')
});

