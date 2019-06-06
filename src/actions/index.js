export const getRepos = () => dispatch => {
    fetch('https://api.github.com/users/supreetsingh247/repos', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => dispatch({type: 'REPO_LIST', payload: data}))
    .catch(err => console.log(err))
}