import { AuthController } from '~~/server/controller/auth'

export default defineEventHandler(async (event) => {
  return AuthController.edit(event)
})
