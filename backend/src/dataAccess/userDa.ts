import User, { UserCreationAttributes } from "../entities/User";

async function createUser(user: UserCreationAttributes) {
  return await User.create(user);
}

async function getUserById(id: number) {
  return await User.findByPk(id);
}

async function deleteUser(id: number) {
  let deleteElem = await User.findByPk(id);

  if (!deleteElem) {
    console.log("This element does not exist, so it cannot be deleted");
    return;
  }
  return await deleteElem.destroy();
}


export {
  createUser,
  getUserById,
  deleteUser,
}