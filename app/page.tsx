import Link from 'next/link';
import { ArrowRight, CheckCircle, Code } from 'lucide-react'; // We'll use lucide-react for icons

/**
 * This is the main Homepage for the ChainRunner application.
 * It serves as the landing page.
 */
export default function HomePage() {
  const features = [
    {
      icon: <Code className="w-6 h-6 text-blue-400" />,
      title: 'In-Browser Code Editor',
      description: 'Write real JavaScript (Lucid, Mesh) right in your browser.',
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-400" />,
      title: 'On-Chain Verification',
      description: 'Our backend verifies your Testnet/Mainnet actions.',
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-yellow-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16v4m-2-2h4m5 11v4m-2-2h4M12 3v1m0 16v1m-6.364-.636l.707-.707M17.657 6.343l.707-.707m-12.02 12.02l.707-.707M12 12a5 5 0 100-10 5 5 0 000 10zm0 10a5 5 0 100-10 5 5 0 000 10z"
          />
        </svg>
      ),
      title: 'XP, Levels & Trophies',
      description: 'Earn XP for every quest and mint a final "Trophy" NFT.',
    },
  ];

  return (
    <div className="flex flex-col items-center text-center">
      {/* Hero Section */}
      <div className="py-24 sm:py-32">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Welcome to ChainRunner
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl">
          Go from JavaScript dev to Cardano dev, one on-chain quest at a time.
          Our gamified RPG is the "CryptoZombies" for the Cardano ecosystem.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/quests" // TODO: This will link to the Quest Map page
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Start Your First Quest
            <ArrowRight className="inline-block w-4 h-4 ml-2" />
          </Link>
          <a
            href="https://github.com/your-github/ChainRunner" // TODO: Update with your repo link
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold leading-6 text-gray-100"
          >
            View on GitHub <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full max-w-5xl py-16">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          The On-Chain Learning RPG
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-700 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
