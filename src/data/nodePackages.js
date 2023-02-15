const nodePackages = [
  {
    id: 1,
    name: 'Axios',
    url: 'https://www.npmjs.com/package/axios',
    description: 'Promise based HTTP client for the browser and node.js',
  },
  {
    id: 2,
    name: 'PG',
    url: 'https://www.npmjs.com/package/pg',
    description: 'DB - PostgreSQL Node.js',
  },
  {
    id: 3,
    name: 'Sequelize',
    url: 'https://www.npmjs.com/package/sequelize',
    description: 'DB - Node.js ORM',
  },
  {
    id: 4,
    name: 'Sqlite3',
    url: 'https://www.npmjs.com/package/sqlite3',
    description: 'DB - Node.js DB engine',
  },

  {
    id: 5,
    name: 'Mongodb',
    url: 'https://www.npmjs.com/package/mongodb',
    description: 'DB - MongoDB NodeJS Driver',
  },
  {
    id: 6,
    name: 'Mongoose',
    url: 'https://www.npmjs.com/package/mongoose',
    description: 'DB - Object model',
  },
  {
    id: 7,
    name: 'GraphQL',
    url: 'https://www.npmjs.com/package/graphql',
    description: 'DB - A query language for APIs',
  },
  {
    id: 8,
    name: 'Express GraphQL',
    url: 'https://www.npmjs.com/package/express-graphql',
    description: 'Middleware',
  },
  {
    id: 9,
    name: 'Multer',
    url: 'https://www.npmjs.com/package/multer',
    description: 'Middleware ',
  },
  {
    id: 10,
    name: 'Cors',
    url: 'https://www.npmjs.com/package/cors',
    description: 'Middleware',
  },
  {
    id: 11,
    name: 'Body parser',
    url: 'https://www.npmjs.com/package/body-parser',
    description: 'Middleware',
  },
  {
    id: 12,
    name: 'Helmet',
    url: 'https://www.npmjs.com/package/helmet',
    description: 'HTTP headers Security ',
  },

  {
    id: 13,
    name: 'Passport',
    url: 'https://www.npmjs.com/package/passport',
    description: 'Auth',
  },
  {
    id: 14,
    name: 'Bcrypt',
    url: 'https://www.npmjs.com/package/bcrypt',
    description: 'Auth',
  },
  {
    id: 15,
    name: 'Bcryptjs',
    url: 'https://www.npmjs.com/package/bcryptjs',
    description: 'Auth',
  },
  {
    id: 16,
    name: 'JWT Express',
    url: 'https://www.npmjs.com/package/express-jwt',
    description: 'Auth',
  },
  {
    id: 17,
    name: 'JWT decode',
    url: 'https://www.npmjs.com/package/jwt-decode',
    description: 'Auth',
  },
  {
    id: 18,
    name: 'JsonWebToken',
    url: 'https://www.npmjs.com/package/jsonwebtoken',
    description: 'Auth',
  },
  {
    id: 19,
    name: 'Validato',
    url: 'https://www.npmjs.com/package/validator',
    description: 'Validation - string sanitizers',
  },
  {
    id: 20,
    name: 'Yup',
    url: 'https://www.npmjs.com/package/yup',
    description: 'Validation - schema builder',
  },

  {
    id: 21,
    name: 'Validator Express',
    url: 'https://www.npmjs.com/package/express-validator',
    description: 'Validation - middleware express',
  },
  {
    id: 22,
    name: 'Ajv JSON schema',
    url: 'https://www.npmjs.com/package/ajv',
    description: 'Validation - JSON schema',
  },
  {
    id: 23,
    name: 'FS extra',
    url: 'https://www.npmjs.com/package/fs-extra',
    description: 'File system with native fs module ',
  },
  {
    id: 24,
    name: 'Progress',
    url: 'https://www.npmjs.com/package/progress',
    description: 'Flexible ascii progress bar',
  },
  {
    id: 25,
    name: 'Nanoid',
    url: 'https://www.npmjs.com/package/nanoid',
    description: 'ID generator',
  },
  {
    id: 26,
    name: 'Express fileupload',
    url: 'https://www.npmjs.com/package/express-fileupload',
    description: 'Express fileupload',
  },
  {
    id: 27,
    name: 'EJS',
    url: 'https://www.npmjs.com/package/ejs',
    description: 'Templating languages',
  },
  {
    id: 28,
    name: 'Handlebars',
    url: 'https://www.npmjs.com/package/handlebars',
    description: 'Templating languages',
  },
  {
    id: 29,
    name: 'Inquirer',
    url: 'https://www.npmjs.com/package/inquirer',
    description: 'Interactive collection command line ui.',
  },

  {
    id: 30,
    name: 'TS node',
    url: 'https://www.npmjs.com/package/ts-node',
    description: 'TypeScript execution node.js',
  },
  {
    id: 31,
    name: 'Lodash',
    url: 'https://www.npmjs.com/package/lodash',
    description: 'JS utility modularity, performance',
  },
  {
    id: 32,
    name: 'SCV parse',
    url: 'https://www.npmjs.com/package/csv-parse',
    description: 'Parser CSV to objects',
  },

  {
    id: 33,
    name: 'Chalk',
    url: 'https://www.npmjs.com/package/chalk',
    description: 'Terminal Colors',
  },
  {
    id: 34,
    name: 'Morgan',
    url: 'https://www.npmjs.com/package/morgan',
    description: 'Logger ',
  },
  {
    id: 35,
    name: 'Concurrently',
    url: 'https://www.npmjs.com/package/concurrently',
    description: 'Run commands concurrently',
  },

  {
    id: 36,
    name: 'Sharp',
    url: 'https://www.npmjs.com/package/sharp',
    description: 'Image processing',
  },
  {
    id: 37,
    name: 'Cropperjs',
    url: 'https://www.npmjs.com/package/cropperjs',
    description: 'Image cropper',
  },
  {
    id: 38,
    name: 'Swagger UI Express',
    url: '  https://www.npmjs.com/package/swagger-ui-express',
    description: 'Auto-generated swagger API ',
  },
  {
    id: 39,
    name: 'Swagger UI Express',
    url: 'https://www.npmjs.com/package/swagger',
    description: 'Swagger module ',
  },

  {
    id: 40,
    name: 'lib phone number',
    url: 'https://www.npmjs.com/package/libphonenumber-js',
    description: 'Phone number services',
  },

  // { id: , name: '', url: '', description: '' },
]
export default nodePackages
