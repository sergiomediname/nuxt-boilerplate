import { AuthModel } from '~~/server/model/auth'

export class AuthController {
  static async edit (event) {
    const body = await readBody(event)
    const user = body.user

    const data = await AuthModel.edit({ user })

    return data
  }
}
