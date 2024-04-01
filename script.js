document.addEventListener('DOMContentLoaded', function() {
  const fetchBtn = document.getElementById('fetchBtn');
  const usernameInput = document.getElementById('username');

  fetchBtn.addEventListener('click', function() {
    const username = usernameInput.value;
    fetchUserInfo(username);
  });
});

function fetchUserInfo(username) {
  fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://api.github.com/users/${username}`)}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to fetch user information');
      }
    })
    .then(data => {
      const userInfo = JSON.parse(data.contents);
      displayUserInfo(userInfo);
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
    <img src="${user.avatar_url || ''}" alt="User Avatar" width="100">
    <h2>${user.name || 'N/A'}</h2>
    <p>Username: ${user.login || 'N/A'}</p>
    <p>Bio: ${user.bio || 'N/A'}</p>
    <p>Location: ${user.location || 'N/A'}</p>
    <p>Repositories: ${user.public_repos || 'N/A'}</p>
    <p>Followers: ${user.followers || 'N/A'}</p>
    <p>Following: ${user.following || 'N/A'}</p>
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
