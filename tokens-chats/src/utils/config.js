require('dotenv').config();

exports.Config = {
  
  ADMIN:
    process.env.NODE_ENV == 'production'
      ? process.env.ADMIN
      : process.env.ADMIN_TEST,
  
  ADMIN_PASS:
    process.env.NODE_ENV == 'production'
      ? process.env.ADMIN_PASS
      : process.env.ADMIN_PASS_TEST,
  
  CONTRACTADDR:
    process.env.NODE_ENV == 'production'
      ? process.env.CONTRACTADDR
      : process.env.CONTRACTADDR_TEST,
  
  BLOCKCHAINSERV:
    process.env.NODE_ENV == 'production'
      ? process.env.BLOCKCHAINSERV
      : process.env.BLOCKCHAINSERV_TEST,
  
  DEPLOYEDCONTRACT:
    process.env.APPENV == 'development'
      ? process.env.CONTRACTADDR :
      process.env.TEST_CONTRACTADDR,

}