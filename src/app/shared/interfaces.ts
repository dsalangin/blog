export interface User {
  email: string
  password: string
}

export interface FbAuthResponse {
  displayName: string
  email: string
  idToken: string
  localId: string
  registered: boolean
}
