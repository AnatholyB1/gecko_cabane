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

console.log("node version : " + process.version);


const app = express();	// Création de l'application express

app.use(compression());	// Compression des requêtes 
app.use(cors({
    origin: ['http://localhost:5173', 'https://gecko-cabane.vercel.app'],
    credentials: true,
}));	// Autorisation des requêtes cross-domain
app.use(boydParser.json());	// Parser les requêtes en JSON
app.use(cookieParser());	// Parser les cookies

const server = http.createServer(app);	// Création du serveur HTTP

dotenv.config ({path: path.resolve(__dirname, "../.env") });
const MONGO_URL = process.env.MONGO_CONNECT 	// Connexion à la base de données MongoDB








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