export default (state = {}, action) => {
  switch (action.type) {
    case 'REPO_LIST':
      return {
       repositories: action.payload
      }
    default:
      return state
  }
}