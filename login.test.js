const login = require('./login');

console.assert(login('admin', 'secret') === true, 'Login should succeed');
console.assert(login('user', '1234') === false, 'Login should fail');
