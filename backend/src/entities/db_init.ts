import mysql from 'mysql2/promise.js';
import env from 'dotenv';
import Project from './Project';
import User from './User';
import { Users } from './dbConst';

env.config();

function createDatabase(){   
    mysql.createConnection({
    user : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD
    })
    .then((connection) => {   
    return connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_DATABASE}`)
    })    
    .catch((err) => {
    console.warn(err.stack)
    })
}

function fkConfig()
{
   Project.hasMany(User, {as : Users, foreignKey: "ProjectId"});
    User.belongsTo(Project, { foreignKey: "ProjectId"}) 
}

function db_init(){
    createDatabase();
    fkConfig();    
}

export default db_init;