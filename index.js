//implementing pouchdb module 
let pouchDB = require("PouchDB");

//creating a database object

let db = new pouchDB("sofvie");
console.log("Database created succesfully.");

let doc = {
    _id : '111',
    name : 'naresh',
    age : 24,
    desgination : 'developer' 
};
db.put(doc); //this will store the document in database

//to view the document
db.get('111').then(function (doc){
    console.log(doc);
});
