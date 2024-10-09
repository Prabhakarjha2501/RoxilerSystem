const app=require('./app.js')
const db = require('./models');

const PORT = process.env.PORT || 9000;


const start = async () => {
  console.log('\x1b[36m%s\x1b[0m', '*********************** START - DB Connection Test ***********************');
  await db.sequelize.authenticate();
  console.log('\x1b[36m%s\x1b[0m', '*********************** COMPLETED - DB Connection Test ***********************');

  app.listen(PORT, () => {
    console.log('\x1b[32m%s\x1b[0m', '-----------------------------------------------------------------------');
    console.log('\x1b[32m%s\x1b[0m', `API listening on PORT: ${PORT}`);
    console.log('\x1b[32m%s\x1b[0m', '-----------------------------------------------------------------------');
  });
};

start();