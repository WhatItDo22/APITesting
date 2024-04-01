document.addEventListener('DOMContentLoaded', function() {
  const fetchBtn = document.getElementById('fetchBtn');
  const usernameInput = document.getElementById('username');

  fetchBtn.addEventListener('click', function() {
    const username = usernameInput.value;
    fetchUserInfo(username);
  });
});

function fetchUserInfo(username) {
  fetch(`https://api.github.com/users/${username}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('User not found');
      }
    })
    .then(data => {
      displayUserInfo(data);
    })
    .catch(error => {
      console.error('Fetching error:', error);
      displayError(error.message);
    });
}

function displayUserInfo(user) {
  const container = document.getElementById('user-info');
  container.innerHTML = ''; // Clear previous results

  const element = document.createElement('div');
  element.className = 'user-info-item';
  element.innerHTML = `
    <img src="${user.avatar_url}" alt="User Avatar" width="100">
    <h2>${user.name || user.login}</h2>
    <p>Username: ${user.login}</p>
    <p>Bio: ${user.bio || 'N/A'}</p>
    <p>Location: ${user.location || 'N/A'}</p>
    <p>Repositories: ${user.public_repos}</p>
    <p>Followers: ${user.followers}</p>
    <p>Following: ${user.following}</p>
  `;

  container.appendChild(element);
}

function displayError(message) {
  const container = document.getElementById('user-info');
  container.innerHTML = ''; // Clear previous results

  const element = document.createElement('div');
  element.className = 'error-message';
  element.textContent = message;

  container.appendChild(element);
}
