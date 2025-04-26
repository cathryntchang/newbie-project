const { setupCompany } = require('../app/firebase/setupCompany.js');

console.log('Starting company setup...');
setupCompany()
  .then(() => {
    console.log('Company setup completed successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Company setup failed:', error);
    process.exit(1);
  }); 