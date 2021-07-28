const c_users = []

// joins the user to the specific chatroom
function join_User(id, username, room) {
  const p_user = { id, username, room }

  c_users.push(p_user)
  // console.log(c_users, 'users')

  return p_user
}

function get_Current_Users() {
  const usersArray = c_users.map(({ username }) => username)
  console.log(usersArray)
  return usersArray
}

// console.log('user out', c_users)

// Gets a particular user id to return the current user
function get_Current_User(id) {
  console.log(c_users, 'c_users')
  console.log(id, 'id')

  const current_user = c_users.find((p_user) => p_user.id === id)
  // console.log(c_users)
  console.log(current_user, 'current_user')

  return current_user
}

// called when the user leaves the chat and its user object deleted from array
function user_Disconnect(id) {
  const index = c_users.findIndex((p_user) => p_user.id === id)

  if (index !== -1) {
    return c_users.splice(index, 1)[0]
  }
}

module.exports = {
  join_User,
  get_Current_User,
  user_Disconnect,
  get_Current_Users,
}

// const c_users = []

// // joins the user to the specific chatroom
// export const join_User = (id, username, room) => {
//   const p_user = { id, username, room }

//   c_users.push(p_user)
//   console.log(c_users, 'users')

//   return p_user
// }

// console.log('user out', c_users)

// // Gets a particular user id to return the current user
// export const get_Current_User = (id) => {
//   return c_users.find((p_user) => p_user.id === id)
// }

// // called when the user leaves the chat and its user object deleted from array
// export const user_Disconnect = (id) => {
//   const index = c_users.findIndex((p_user) => p_user.id === id)

//   if (index !== -1) {
//     return c_users.splice(index, 1)[0]
//   }
// }
