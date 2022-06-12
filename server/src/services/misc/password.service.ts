import bcrypt from 'bcrypt'

export default class _PasswordService {
  constructor() {}

  static async crypte(user: any) {
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(user.password, salt)
    user.password = hashedPassword
  }

  static comparePassword(
    password: string,
    userHashedPassword: string
  ): boolean {
    const match = bcrypt.compareSync(password, userHashedPassword)
    return match
  }
}
