'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Check, Loader2, AlertTriangle } from 'lucide-react';

// TODO: npm install react-simple-code-editor
// We'll use this for a simple, lightweight code editor.
// In the future, we can upgrade to something more powerful like Monaco.
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css'; // A nice dark theme for the editor

// NOTE: We've removed 'react-simple-code-editor' and 'prismjs'
// to keep the foundational repo clean. We'll use a simple <textarea>
// as a placeholder. We will still need 'lucide-react' for icons.

// --- Mock Quest Data ---
// In a real app, this data would be fetched from our database
// based on the questId.
const questDatabase: { [key: string]: any } = {
  '1': {
    title: 'Quest 1: Hello, Wallet',
    description:
      "Your first quest is to connect to a user's browser wallet (like Eternl, Nami, or Flint) and read their address.",
    instructions: `
### **Objective: Get Your Wallet Address**

1.  **Import Lucid:** We'll be using the [Lucid](https://lucid.space-camp.world/) library to interact with the wallet.
2.  **Initialize Lucid:** You need to initialize Lucid and point it to the 'preprod' Testnet.
3.  **Select a Wallet:** Use the \`lucid.selectWallet()\` method with the wallet's API name (e.g., 'eternl').
4.  **Get the Address:** Once the wallet is selected, you can get the user's address with \`lucid.wallet.address()\`.
5.  **Display the Address:** Use \`console.log()\` to display the address. Our verifier will check for this!

Good luck, ChainRunner.
    `,
    starterCode: `// TODO: This is where you'll write your code
// 1. npm install lucid-cardano
// 2. We will need to set up Lucid in /lib/lucid.ts

async function connectAndGetAddress() {
  try {
    // const lucid = await Lucid.new(null, 'Preprod');
    // lucid.selectWallet('eternl');
    // const address = await lucid.wallet.address();

    const address = "addr_test1q...your_testnet_address_here"; // Placeholder
    console.log(address);
    return address;

  } catch (error) {
    console.error("Failed to connect wallet:", error);
    return null;
  }
}

connectAndGetAddress();
`,
  },
  '2': {
    title: 'Quest 2: Reading the Chain',
    description: "Time to read live data from the blockchain.",
    instructions: `
### **Objective: Get Your Balance**

1.  **Use Koios:** We'll use the [Koios](https://koios.rest/) API to query the blockchain.
2.  **Fetch Address Info:** Make a \`fetch\` request to the Koios 'address_info' endpoint.
3.  **Find Your Balance:** Parse the JSON response and find the 'balance' (in lovelace).
4.  **Display the Balance:** \`console.log()\` the balance.
    `,
    starterCode: `// TODO: Get your wallet's testnet address from Quest 1

async function getBalance(address) {
  try {
    // const response = await fetch('...koios_preprod_url/address_info', {...});
    // const data = await response.json();
    // const balance = data[0].balance;
    
    const balance = "10000000"; // Placeholder
    console.log(balance);
    return balance;
  } catch (error) {
    console.error("Failed to get balance:", error);
    return null;
  }
}

getBalance("addr_test1q...your_testnet_address_here");
`,
  },
  // TODO: Add mock data for quests 3-6
};
// --- End Mock Quest Data ---

export default function QuestPage() {
  const params = useParams();
  const questId = params.questId as string;
  const [quest, setQuest] = useState<any>(null);
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState<
    'idle' | 'success' | 'error' | 'pending'
  >('idle');

  // Load the quest data when the component mounts
  useEffect(() => {
    if (questId) {
      const questData = questDatabase[questId];
      if (questData) {
        setQuest(questData);
        setCode(questData.starterCode);
      } else {
        // TODO: Handle quest not found
        console.error('Quest not found');
      }
    }
  }, [questId]);

  const handleVerify = async () => {
    setIsLoading(true);
    setVerificationStatus('pending');

    // TODO: We need the user's wallet address to send to the API.
    // For now, we'll use a placeholder.
    const mockWalletAddress = 'addr_test1q...placeholder';

    try {
      const response = await fetch(`/api/verify/${questId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ walletAddress: mockWalletAddress }),
      });

      const result = await response.json();

      if (response.ok && result.success && result.verified) {
        setVerificationStatus('success');
      } else {
        setVerificationStatus('error');
      }
    } catch (error) {
      console.error('Verification failed:', error);
      setVerificationStatus('error');
    }
    setIsLoading(false);
  };

  if (!quest) {
    // Loading state or 404
    return (
      <div className="flex items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-blue-500" />
      </div>
    );
  }

  return (
    <div>
      <Link
        href="/quests"
        className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-4"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Quest Map
      </Link>

      {/* Split-Screen Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Side: Instructions */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h1 className="text-3xl font-bold text-white mb-2">{quest.title}</h1>
          <p className="text-gray-300 mb-4">{quest.description}</p>
          <div
            className="prose prose-invert prose-pre:bg-gray-900 prose-pre:rounded-md"
            dangerouslySetInnerHTML={{ __html: quest.instructions }}
          />
        </div>

        {/* Right Side: Code Editor & Actions */}
        <div className="flex flex-col">
          <div className="flex-grow bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) => highlight(code, languages.javascript, 'javascript')}
              padding={16}
              className="font-mono text-sm"
              style={{
                minHeight: '400px',
                backgroundColor: '#111827', // A dark bg for the editor
              }}
            />
            {/* This is our dependency-free placeholder for the code editor.
              It's styled to look and feel like a simple code box.
            */}
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-full min-h-[400px] p-4 bg-gray-900 text-gray-100 font-mono text-sm border-none outline-none resize-none"
              placeholder="// Your code goes here..."
            />
          </div>
          
          {/* Action Bar */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex-grow">
              {verificationStatus === 'success' && (
                <div className="flex items-center text-green-400">
                  <Check className="w-5 h-5 mr-2" />
                  <span>Quest Complete! You've earned 50 XP!</span>
                </div>
              )}
              {verificationStatus === 'error' && (
                <div className="flex items-center text-red-400">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  <span>Verification failed. Check your logic and try again.</span>
                </div>
              )}
            </div>
            
            <button
              onClick={handleVerify}
              disabled={isLoading}
              className="flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 disabled:bg-gray-600"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                'Verify Quest'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
