import { Auth0Provider } from "@bcwdev/auth0provider";
import { bugsService } from "../services/BugsService.js";
import BaseController from "../utils/BaseController.js";

export class BugsController extends BaseController {
  constructor() {
    super('api/bugs')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('',this.postBugs)
      .get('', this.getBugs)
  }

  async postBugs(request, response, next) {
    try {
      const bugsToPost = request.body
      const user = request.userInfo
      bugsToPost.creatorId = user.id
      
      response.send(await bugsService.postBugs(bugsToPost))
    }
    catch (error) {
      next.error(error)
    }
  }

  async getBugs(request, response, next) {
    try {
      // const bugs = request.body
      await bugsService.getBugs()
    }
    catch (error) {
      next.error(error)
    }
  }


}