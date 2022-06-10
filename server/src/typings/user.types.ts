export interface UserAuthLT {
  email: string
  password: string
}

export interface UserAuthRT extends UserAuthLT {
  username: string
}
