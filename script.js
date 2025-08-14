document.getElementById('fetchBtn').addEventListener('click', fetchUsers);

function fetchUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = 'Loading...';

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not OK');
            }
            return response.json();
        })
        .then(users => {
            userList.innerHTML = ''; // Clear loading text
            users.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.classList.add('user-card');

                userDiv.innerHTML = `
                    <div class="user-name">${user.name}</div>
                    <div class="user-email">${user.email}</div>
                `;

                userList.appendChild(userDiv);
            });
        })
        .catch(error => {
            userList.innerHTML = `Error: ${error.message}`;
        });
}