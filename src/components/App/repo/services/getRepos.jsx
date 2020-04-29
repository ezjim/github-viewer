export const fetchUserInfo = (username) => {
  return fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json());
};

export const fetchUserRepos = (username) => {
  return fetch(`https://api.github.com/users/${username}/repos`)
    .then(res => res.json());
};
