document.addEventListener('DOMContentLoaded', function() {
  const fetchBtn = document.getElementById('fetchBtn');
  const usernameInput = document.getElementById('username');

  fetchBtn.addEventListener('click', function() {
    const username = usernameInput.value;
    fetchUserInfo(username);
  });
});

function fetchUserInfo(username) {
  const accessToken = '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';

  fetch(`https://api.github.com/users/${username}`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Accept': 'application/vnd.github+json'
    }
  })
    .then(response => response.json())
    .then(data => displayUserInfo(data))
    .catch(error => console.error('Fetching error:', error));
}
function displayUserInfo(user) {
  const container = document.getElementById('user-info');
  container.innerHTML = ''; // Clear previous results

  const element = document.createElement('div');
  element.className = 'user-info-item';
  element.innerHTML = `
    <img src="${user.avatar_url}" alt="User Avatar" width="100">
    <h2>${user.name}</h2>
    <p>Username: ${user.login}</p>
    <p>Bio: ${user.bio || 'N/A'}</p>
    <p>Location: ${user.location || 'N/A'}</p>
    <p>Repositories: ${user.public_repos}</p>
    <p>Followers: ${user.followers}</p>
    <p>Following: ${user.following}</p>
  `;

  container.appendChild(element);
}
