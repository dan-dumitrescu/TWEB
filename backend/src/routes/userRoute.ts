import express from 'express';
import {createUser, getUserById, deleteUser} from "../dataAccess/userDa";

let userRouter = express.Router();
  
userRouter.route('/user').post( async (req, res) => {
  return res.json(await createUser(req.body));
})


userRouter.route('/user/:id').get( async (req, res) => {
  let id = parseInt(req.params.id) 
  return res.json(await getUserById(id));
})

userRouter.route('/user/:id').delete( async (req, res) => {
  let id = parseInt(req.params.id) 
  return res.json(await deleteUser(id));
})



export default userRouter;