// Utilisez une bibliothèque HTTP comme axios pour effectuer des requêtes API
import axios from "axios";

// Remplacez les valeurs suivantes par vos propres clés d'API Pinterest
//const clientId = '1492383';
//const clientSecret = 'VOTRE_CLIENT_SECRET';
const token = 'pina_AMAZ7RIWAA7ZGAQAGDAHYCP7EG5JXCYBQBIQCT3CTUDI2BVKMTEA52TDN5G3IPM2FUC76O6RHQ3XFV4HMS4GV6GS43BYMGIA'
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


