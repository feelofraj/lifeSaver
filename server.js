var express = require('express');
var MongoClient = require('mongodb').MongoClient;
// var mongoServer = "mongodb://127.0.0.1:27017/";
var mongoServer = "mongodb+srv://feelofraj:Raptraj2439123@testcluster-q3afs.mongodb.net/admin";
var dateFormat = require('dateformat');
var dateTime = new Date();
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.get('/donorListApi', function (req, res) {
    MongoClient.connect(mongoServer, function (err, database) {
        if (err) console.log(err);
        else {
            conStr = database.db('lifesafer').collection('donorList');
            conStr.find({}).toArray(function (err, data) {
                if (err) console.log(err);
                else {
                   
                    res.status(200).send(data);
                    res.end();
                }
            })
        };
    });
});
app.post('/regisApi', upload.array() , function (req, res) {
   
    MongoClient.connect(mongoServer, function (err, database) {
        if (err) console.error(err);
        else {
            conStr = database.db('lifesafer').collection('donorList');
            // conStrLogin = database.db('test').collection('authentication');
            Name = (req.body.Name);
            BloodGroup = (req.body.BloodGroup);
            Age = (req.body.Age);
            ContactNo = (req.body.ContactNo);
            City = (req.body.City);
            State = (req.body.State);
            Agree = (req.body.Agree);
            regDate = dateFormat(dateTime, "dd-MM-yyyy hh:MM:ss");;
            registration = { Name: Name, BloodGroup: BloodGroup, Age: Age, ContactNo: ContactNo, City: City, State: State, Agree: Agree ,regDate:regDate};
            // Login = { username: userId, password: newPassword }
            console.log(registration);
            conStr.findOne({ $and: [{ ContactNo: ContactNo }, { BloodGroup: BloodGroup }] }, function (err, data) {
                if (err) console.error(err);
                else if (!data) {
                    conStr.insertOne(registration, function (err, data) {
                        if (err) console.error(err);
                        else {
                            result = "Registration Successfull";
                            res.end(result);
                        };
                    })
                }
                else {
                    result = "Thanks for doing you are already registered ,Kindly share to others";
                    res.end(result);
                };
            });
        }
    })
});
app.listen(8083, function (res, err) {
    if (err) console.error('Error starting server');
    console.log('Server started and listening : http://localhost:8083');
})
