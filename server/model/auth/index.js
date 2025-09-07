import { prisma } from '~~/server/db'

export class AuthModel {
  static async edit ({ user }) {
    if (!user) {
      return {
        success: false
      }
    }

    const data = { user_id: user.id, email: user.email, provider: user.app_metadata.provider }

    const result = await prisma.users.upsert({
      where: {
        user_id: data.user_id
      },
      update: {},
      create: data
    })

    if (result) {
      return {
        success: true
      }
    }
  }
}
