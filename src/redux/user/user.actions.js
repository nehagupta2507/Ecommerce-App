import { UserActionTypes } from './user.types'
//Redux is extremely valuable and super powerful
export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
})