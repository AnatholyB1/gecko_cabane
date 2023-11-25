console.log("node version : " + process.version);

import express from 'express';
import http from 'http';
import boydParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './router';
import dotenv from 'dotenv';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import specs from './swaggerOptions'; // Assurez-vous d'ajuster le chemin en fonction de votre structure de projet


const app = express();	// Création de l'application express
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use(compression());	// Compression des requêtes 
app.use(cors({
    origin: ['http://localhost:5173', 'https://geckocabanerestaurant.vercel.app'],  // Remplacez ceci par l'URL de votre application cliente
    credentials: true, // Cela permet d'accepter les cookies
  }));
app.use(boydParser.json());	// Parser les requêtes en JSON
app.use(cookieParser());	// Parser les cookies
app.use('/public' ,express.static(path.join(__dirname, '../public')));	// Définition du dossier public

const server = http.createServer(app);	// Création du serveur HTTP


var MONGO_URL = process.env.MONGO_CONNECT 	// Connexion à la base de données MongoDB
if (!MONGO_URL)
{
    dotenv.config({ path: path.join(__dirname, '../.env') });
    MONGO_URL = process.env.MONGO_CONNECT;
}



server.listen(8080, () => {
    console.log('Server running on port 8080');
});	// Démarrage du serveur sur le port 8080


mongoose.Promise = Promise;
if (MONGO_URL) mongoose.connect(MONGO_URL);
mongoose.connection.on('error', err => {
    console.error(`MongoDB connection error: ${err}`);
    process.exit(1);
});


app.use('/', router())

// Connexion à la base de données MongoDB