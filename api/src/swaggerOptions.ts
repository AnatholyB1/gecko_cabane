import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Gecko Cabane API',
      version: '1.0.0',
      description: 'API REST created for dynamic website Gecko Cabane, image management, user management, email sending, authentication, authorization',
    },
  },
  apis: ['./src/router/*.ts'], // Chemin vers vos fichiers de définition de route (ajustez cela en fonction de votre structure de projet)
};

const specs = swaggerJsdoc(options);

export default specs;
