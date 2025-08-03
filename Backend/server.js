const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');
require("dotenv").config();



const app = express();
app.use(cors());
app.use(express.json());

const applicantRoutes = require('./routes/applicant');
app.use('/api/applicants',applicantRoutes);

const PORT = process.env.PORT || 5050;
mongoose.connect(process.env.MONGO_URI, {
  tls: true,
  tlsAllowInvalidCertificates: true
}).then(()=>{
    console.log("Mongoose Connected");
    app.listen(PORT, () => console.log(`Server is listening on Port ${PORT}`));
    }).catch(err => console.log('Mongoose error:', err));