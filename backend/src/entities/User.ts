import db from '../dbConfig';
import Sequelize, { ModelDefined } from 'sequelize';

export interface UserAttributes{
    UserId: number,
    FirstName: string,
    LastName: string,
    Email: string,
    AccountType: string,
    ProjectId: number,
}

export interface UserCreationAttributes extends UserAttributes {}

const User : ModelDefined<UserAttributes, UserCreationAttributes> = db.define("User", 
{
    UserId:
    {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    FirstName: 
    {
        type: Sequelize.STRING,
        allowNull: false
    },

    LastName:
    {
        type: Sequelize.STRING,
        allowNull: false
    },

    Email: 
    {
        type: Sequelize.STRING,
        allowNull: false
    },

    AccountType: 
    {
        type: Sequelize.STRING,
        allowNull: false
    },

    ProjectId: 
    {
        type: Sequelize.NUMBER,
        allowNull: true
    }       
});

export default User;