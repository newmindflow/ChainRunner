/**
 * This file will act as our client for the Koios API.
 * Centralizing all our Koios-related functions here keeps our
 * API routes and components clean and organized.
 *
 * We are using Koios for this prototype because it provides a
 * generous free tier for querying the Preprod Testnet.
 *
 * Koios API Docs: https://api.koios.rest/
 */

const PREPROD_API_URL = 'https://preprod.koios.rest/api/v1';

// TODO: In a real app, this API key would be stored securely
// in an .env.local file (e.g., process.env.KOIOS_API_KEY)
const KOIOS_API_KEY = 'YOUR_KOIOS_API_KEY_HERE'; // Get a free key from https://koios.rest/

/**
 * A helper function to make authenticated requests to Koios.
 */
async function fetchKoios(endpoint: string, options: RequestInit = {}) {
  const headers = new Headers(options.headers || {});
  headers.append('Authorization', `Bearer ${KOIOS_API_KEY}`);
  
  // Koios also supports 'Prefer' header for specific data formats if needed
  // headers.append('Prefer', 'count=exact');

  try {
    const response = await fetch(`${PREPROD_API_URL}${endpoint}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      console.error('Koios API Error:', response.status, response.statusText);
      return null;
    }
    return response.json();
  } catch (error) {
    console.error('Failed to fetch from Koios:', error);
    return null;
  }
}

// --- Verification Functions ---
// These are the functions our API route will call.

/**
 * VERIFICATION FOR QUEST 3: "Making a Move"
 * Checks if a wallet has sent a specific amount of lovelace
 * to our platform's quest address.
 */
export async function verifyQuest3(walletAddress: string) {
  // TODO: Logic for checking transaction history for a specific outgoing tx.
  // This is a complex query and will require checking tx_info or address_txs.
  console.log('TODO: Implement Koios verification for Quest 3', walletAddress);
  return true; // Placeholder
}

/**
 * VERIFICATION FOR QUEST 4: "The Simple Mint"
 * Checks if a wallet holds an asset from a specific policy ID.
 */
export async function verifyQuest4(walletAddress: string) {
  const LESSON_4_POLICY_ID = 'YOUR_LESSON_4_POLICY_ID_HERE';
  
  // TODO: Implement logic.
  // 1. Call '/address_assets' endpoint for `walletAddress`.
  // 2. Paginate through results and check if any asset has
  //    a `policy_id` that matches LESSON_4_POLICY_ID.
  console.log('TODO: Implement Koios verification for Quest 4', walletAddress);
  return true; // Placeholder
}

/**
 * VERIFICATION FOR QUEST 5 & 6: "Power Tools" & "Going Live!"
 * Checks if a wallet holds an asset from the NMKR policy ID.
 */
export async function verifyNMKRMint(walletAddress: string, network: 'mainnet' | 'preprod') {
  const NMKR_POLICY_ID = 'NMKR_POLICY_ID_HERE'; // The policy ID for your NMKR project
  const api_url = network === 'mainnet' 
    ? 'https://api.koios.rest/api/v1' 
    : PREPROD_API_URL;

  // TODO: Implement logic similar to verifyQuest4, but using
  // the correct API URL (Mainnet or Preprod) and NMKR_POLICY_ID.
  console.log('TODO: Implement Koios verification for NMKR mint', walletAddress, network);
  return true; // Placeholder
}
