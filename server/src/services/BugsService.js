import { dbContext } from "../db/DbContext.js"

class BugsService {
  async getBugs() {
    const response = await dbContext.Bug.find()
    return response
  }

}
export const bugsService = new BugsService()