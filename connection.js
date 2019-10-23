const mongoose = require('mongoose');

//connect mongodb
mongoose.connect('mongodb+srv://:@cluster0-ngaul.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', (error) => console.log('db connection err'))

db.once('open', () => console.log('connected to mongo db'))





<link class="calenderStyle" href="calenderStyle.css" rel="stylesheet" type="text/css">
<link class="styleNM" href="styleNM.css" rel="stylesheet" type="text/css">
<link class="styleM" href="styleM.css" rel="stylesheet" type="text/css">
<link class="styleLI" href="styleLI.css" rel="stylesheet" type="text/css">
<link class="styleFrm" href="styleFrm.css" rel="stylesheet" type="text/css">
    
<link class="style" href="style.css" rel="stylesheet" type="text/css">
<link class="styleHo" href="styleHo.css" rel="stylesheet" type="text/css">
<link class="styleHoWr" href="styleHoWr.css" rel="stylesheet" type="text/css">

