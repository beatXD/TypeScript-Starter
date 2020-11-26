import { Request, Response } from 'express'

class DataController {

  public async getText(req: Request, res: Response): Promise<any> {
    try {
      return res.status(200).send('Hello TypeScript !!')
    } catch (error) {
      return res.status(500).end(error.message)
    }
  }
}

export default DataController
