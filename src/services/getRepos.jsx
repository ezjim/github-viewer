export const fetchRepos = () => {
  return fetch('https://api.github.com/users/ezjim')
    .then(res => res.json())
    .then(json => json.results);
};
