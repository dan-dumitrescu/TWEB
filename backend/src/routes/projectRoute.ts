import express from 'express';
import {createProject, getProjectById, getProjects, deleteProject, updateProject} from "../dataAccess/projectDa"
import projectFilterDto from '../dataAccess/models/projectFilterDto';

let projectRouter = express.Router();
  
projectRouter.route('/project').post( async (req, res) => {
  return res.json(await createProject(req.body));
})

projectRouter.route('/project').get( async (req, res) => {  
  var queryParams = new projectFilterDto(req.query) 
  return res.json(await getProjects(queryParams));
})

projectRouter.route('/project/:id').get( async (req, res) => {
  let id = parseInt(req.params.id) 
  return res.json(await getProjectById(id));
})

projectRouter.route('/project/:id').delete( async (req, res) => {
  let id = parseInt(req.params.id) 
  return res.json(await deleteProject(id));
})

projectRouter.route('/project/:id').put( async (req, res) => {
  let id = parseInt(req.params.id) 
  return res.json(await updateProject(req.body, id));
})

export default projectRouter;