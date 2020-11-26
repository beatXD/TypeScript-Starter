import { Router } from 'express'
import getData from '../controllers/getData'

class APIRoutes {
  public router: Router

  private getdata: getData = new getData()

  constructor() {
    this.router = Router()
    this.routes()
  }

  private routes() {
    this.router.get('/', this.getdata.getText)
  }
}

export default APIRoutes
