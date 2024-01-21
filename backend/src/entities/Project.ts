import db from '../dbConfig';
import Sequelize from 'sequelize';
import { ModelDefined } from 'sequelize';
import { UserAttributes } from './User';

export interface ProjectAttributes{
    ProjectId : number,
    ProjectName: string,
    ProjectText: string,
    ProjectSeverity: number,
    Users: UserAttributes[]
   
}

export interface ProjectCreationAttributes extends ProjectAttributes {}

const Project : ModelDefined<ProjectAttributes, ProjectCreationAttributes> = db.define("Project", 
{
    ProjectId:
    {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    
    ProjectName: 
    {
        type: Sequelize.STRING,
        allowNull: false
    },

    ProjectText:
    {
        type: Sequelize.BLOB,
        allowNull: true 
    },

    ProjectSeverity:
    {
        type: Sequelize.STRING,
        allowNull: true 
    }
});

export default Project;