import { dbContext } from "../db/DbContext.js"

class BugsService {
async  postBugs(bugsToPost) {
    const bugs = await dbContext.Bug.create(bugsToPost)
    await bugs.populate('creator')
    return bugs
  }
  async getBugs() {
    const response = await dbContext.Bug.find()
    return response
  }

}
export const bugsService = new BugsService()