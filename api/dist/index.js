"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const router_1 = __importDefault(require("./router"));
const app = (0, express_1.default)(); // Création de l'application express
app.use((0, compression_1.default)()); // Compression des requêtes 
app.use((0, cors_1.default)({
    credentials: true,
})); // Autorisation des requêtes cross-domain
app.use(body_parser_1.default.json()); // Parser les requêtes en JSON
app.use((0, cookie_parser_1.default)()); // Parser les cookies
const server = http_1.default.createServer(app); // Création du serveur HTTP
server.listen(8080, () => {
    console.log('Server running on port 8080');
}); // Démarrage du serveur sur le port 8080
const MONGO_URL = "mongodb+srv://geckoCabaneAdmin:kBfmodeuQFj6cegP@mycluster.enclzip.mongodb.net/MyCluster?retryWrites=true&w=majority";
mongoose_1.default.Promise = Promise;
mongoose_1.default.connect(MONGO_URL);
mongoose_1.default.connection.on('error', err => {
    console.error(`MongoDB connection error: ${err}`);
    process.exit(1);
});
app.use('/', (0, router_1.default)());
// Connexion à la base de données MongoDB
//# sourceMappingURL=index.js.map