//GET user - GET
const getUser = (id) => {
  fetch(`https://dummyjson.com/users/${id}`)
  .then(res => res.json())
  .then(console.log)
};

//CREATE user - POST
const createUser = (user) => {
  fetch('https://dummyjson.com/users/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  })
  .then(res => res.json())
  .then(console.log)
}

//UPDATE user - PUT
const updateUser = (id, user) => {
  fetch(`https://dummyjson.com/users/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  })
  .then(res => res.json())
  .then(console.log)
}

//DELETE user - DELETE
const deleteUser = (id) => {
  fetch(`https://dummyjson.com/users/${id}`, {
    method: 'DELETE'
  })
  .then(res => res.json())
  .then(console.log)
}

//LOGIN token - POST
const login = (user) => {
  fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
    credentials: 'include'
  })
  .then(res => res.json())
  .then(console.log)
}

//GET auth user - GET
const getAuthUser = (token) => {
  fetch('https://dummyjson.com/auth/me', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`,
  }, 
  credentials: 'include' 
})
.then(res => res.json())
.then(console.log)
};

//REFRESH token - POST
const refresh = (refToken) => {
  fetch('https://dummyjson.com/auth/refresh', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    refreshToken: refToken,
    expiresInMins: 90
  }),
  credentials: 'include' 
})
.then(res => res.json())
.then(console.log)
}

//getUser(2);

/*
createUser({
  firstName: "Rick",
  lastName: "Sanchez",
  age: 101
});
*/

/*
updateUser(2, {
  lastName: "Morty"
});
*/

//deleteUser(2);

/*
login({
  username: "emilys",
  password: "emilyspass",
  expiresInMins: 30
});
*/

//getAuthUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3MzEwMTg0NTMsImV4cCI6MTczMTAyMDI1M30.ShNjlF4u0EI9u0fnYBpozYUb876ohfzUU3wWCDqbCK8');

//refresh('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3MzEwMTg0NTMsImV4cCI6MTczMzYxMDQ1M30.1pDoddo-iZMS2RNPNDyyCZrcC995aBlnyuNyaQAxwOQ');