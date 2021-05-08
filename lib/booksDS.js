const MongoClient = require('mongodb').MongoClient;
const keys = require('../config/keys');

//DB Config
const dbUri = keys.MongoUri;

let dbo = null;
    
    const init = async() => {
        try {
            MongoClient.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true}, (err, db) => {
                if(err) {
                    throw err
                } else {
                    console.log('Mongo db connected')
                    dbo = db.db(keys.dbName)
                }
            });
        } catch(err) {
            console.log('Error while initializing mongodb')
        }       
    }

    const findAll = async() => {
        try {
            const result = await dbo.collection(keys.collectionName).find({}).toArray()                
            return result            
        } catch (err) {
            throw err
        }
    }

    const findOne = async(code) => {
        try {
            const result = await dbo.collection(keys.collectionName).findOne({code})             
            return result            
        } catch (err) {
            throw err
        }
    }

module.exports = {init, findAll, findOne};