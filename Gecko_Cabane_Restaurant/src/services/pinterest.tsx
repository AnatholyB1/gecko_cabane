// Utilisez une bibliothèque HTTP comme axios pour effectuer des requêtes API
import axios from "axios";

// Remplacez les valeurs suivantes par vos propres clés d'API Pinterest
//const clientId = '';
//const clientSecret = 'VOTRE_CLIENT_SECRET';
const token = ''
const accessToken = ''

// Obtenez un jeton d'accès en utilisant les clés d'API
async function getAccessToken() {
  const response = await axios.post('https://api.pinterest.com/v5/oauth/token', {
    grant_type: 'authorization_code',
    code: token,
  });

  return response.data.access_token;
}

// Récupérez les épingles d'un compte spécifique
async function getPins() {
  //const accessToken = await getAccessToken();

  const response = await axios.get(`https://api-sandbox.pinterest.com/v5/pins`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      ContentType: 'application/json'
    }
  });

  return response.data.data;
}

export {getPins, getAccessToken}


