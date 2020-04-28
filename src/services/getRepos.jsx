export const fetchUserInfo = () => {
  return fetch('https://api.github.com/users/ezjim')
    .then(res => res.json())
    .then(json => json.results);
};

export const fetchUserRepos = () => {
  return fetch('https://api.github.com/users/ezjim/repos')
    .then(res => res.json())
    .then(json => json.results);
};
