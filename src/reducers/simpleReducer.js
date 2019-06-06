export default (state = {}, action) => {
  switch (action.type) {
    case 'REPO_LIST':
      return {
        ...state,
       repositories: action.payload
      }
    case 'BASIC_INFO':
      return {
        ...state,
        info: action.payload
      }
    default:
      return state
  }
}