import Project, { ProjectCreationAttributes } from "../entities/Project";
import User from "../entities/User";
import { Users } from "../entities/dbConst";
import { Like } from "./operators";
import projectFilterDto from "./models/projectFilterDto";
import db from "../dbConfig";

async function createProject(project: ProjectCreationAttributes) {
  return await Project.create(project, { include: [{ model: User, as: Users }] });
}

async function getProjects(projectFilter: projectFilterDto) {

  if (!projectFilter.take)
    projectFilter.take = 10;

  if (!projectFilter.skip)
    projectFilter.skip = 0;

  let whereClause: any = {};
  if (projectFilter.projectName)
    whereClause.ProjectName = { [Like]: `%${projectFilter.projectName}%` };

  if (projectFilter.projectId)
    whereClause.ProjectSurName = { [Like]: `%${projectFilter.projectId}%` };

  return await Project.findAndCountAll(
    {
      distinct: true,
      where: whereClause,
      limit: projectFilter.take,
      offset: projectFilter.skip * projectFilter.take,
    });

}

async function getProjectById(id: number) {
  return await Project.findByPk(id, { include: [Users] });
}

async function deleteProject(id: number) {
  let deleteElem = await Project.findByPk(id);

  if (!deleteElem) {
    console.log("This element does not exist, so it cannot be deleted");
    return;
  }
  return await deleteElem.destroy();
}

async function updateProject(project: ProjectCreationAttributes, id: number) {
  const findProject = await getProjectById(project.ProjectId);

  if (!findProject) {
    console.log("This Project does not exist");
    return;
  }

  const t = await db.transaction()
  try {
    await findProject.update(project);

    // deleted
    const existUser = await User.findAll({
      where: {
        ProjectId: project.ProjectId,
      },
    });

    if (existUser.length > 0) {
      let userIds = existUser.map(a => a.dataValues.UserId);
      let userIdsDeleted = userIds.filter(id => !project.Users.find(add => add.UserId === id)?.UserId)
      if (userIdsDeleted.length > 0)
        await User.destroy({
          where: {
            UserId: userIdsDeleted,
          },
        })
    }

    // inserted 
    const insertedA = project.Users.filter(a => a.UserId === 0)
    if (insertedA.length > 0)
      await User.bulkCreate(insertedA)

    // updated
    const updatedA = project.Users.filter(a => a.UserId !== 0);
    if (updatedA.length > 0) {
      for (let item of updatedA) {
        const findA = await User.findByPk(item.UserId);
        await findA?.update(item);
      }
    }

    await t.commit();

  } catch (e) {
    await t.rollback();
    throw e;
  }
}

export {
  createProject,
  getProjectById,
  getProjects,
  deleteProject,
  updateProject
}