import { bugsService } from "../services/BugsService.js";
import BaseController from "../utils/BaseController.js";

export class BugsController extends BaseController {
  constructor() {
    super('api/bugs')
    this.router
      .get('', this.getBugs)
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