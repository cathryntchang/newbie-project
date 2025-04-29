const { setupUsers } = require('../app/firebase/setupUsers.js');

console.log('Starting user setup...');
setupUsers()
  .then(() => {
    console.log('User setup completed successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('User setup failed:', error);
    process.exit(1);
  }); 