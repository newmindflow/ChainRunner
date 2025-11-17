import Link from 'next/link';
import { ChevronRight, Lock, CheckCircle } from 'lucide-react'; // Icons

/**
 * This is the main "Quest Map" page.
 * It lists all available quests for the user.
 * * TODO: In the future, this data will come from our database and
 * be cross-referenced with the user's progress to show
 * "completed" or "locked" states.
 */

// We'll hardcode the quest data based on our README.md for this prototype
const quests = [
  {
    id: 1,
    title: 'Hello, Wallet',
    description: 'Connect to a browser wallet & read your address.',
    href: '/quests/1',
    xp: 50,
    status: 'completed', // 'completed', 'available', 'locked'
  },
  {
    id: 2,
    title: 'Reading the Chain',
    description: 'Use the Koios API to query your wallet\'s balance.',
    href: '/quests/2',
    xp: 75,
    status: 'available',
  },
  {
    id: 3,
    title: 'Making a Move',
    description: 'Build & submit a simple ADA transaction on Testnet.',
    href: '/quests/3',
    xp: 100,
    status: 'locked',
  },
  {
    id: 4,
    title: 'The Simple Mint',
    description: 'Mint your first NFT on Testnet using Lucid/Mesh.',
    href: '/quests/4',
    xp: 150,
    status: 'locked',
  },
  {
    id: 5,
    title: 'Power Tools',
    description: 'Mint a second NFT using the NMKR API/SDK.',
    href: '/quests/5',
    xp: 150,
    status: 'locked',
  },
  {
    id: 6,
    title: 'Going Live!',
    description: 'Mint your "Graduation NFT" on Mainnet.',
    href: '/quests/6',
    xp: 200,
    status: 'locked',
  },
];

export default function QuestsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-4">Module 1 Quests</h1>
      <p className="text-lg text-gray-300 mb-8">
        This is your first quest line. Complete these challenges to learn the
        fundamentals of building on Cardano.
      </p>

      <div className="flex flex-col gap-4">
        {quests.map((quest) => (
          <QuestCard key={quest.id} quest={quest} />
        ))}
      </div>
    </div>
  );
}

// A helper component for rendering each quest card
function QuestCard({ quest }: { quest: (typeof quests)[0] }) {
  const isLocked = quest.status === 'locked';

  const QuestIcon = () => {
    switch (quest.status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'available':
        return <ChevronRight className="w-6 h-6 text-blue-400" />;
      case 'locked':
        return <Lock className="w-6 h-6 text-gray-500" />;
    }
  };

  const content = (
    <div
      className={`flex items-center justify-between p-6 rounded-lg transition-all ${
        isLocked
          ? 'bg-gray-800 opacity-60 cursor-not-allowed'
          : 'bg-gray-800 hover:bg-gray-700'
      }`}
    >
      <div className="flex items-center gap-4">
        <QuestIcon />
        <div>
          <h3
            className={`text-xl font-semibold ${
              isLocked ? 'text-gray-500' : 'text-white'
            }`}
          >
            {quest.title}
          </h3>
          <p className={isLocked ? 'text-gray-600' : 'text-gray-300'}>
            {quest.description}
          </p>
        </div>
      </div>
      <div className="text-right">
        <div
          className={`font-bold text-lg ${
            isLocked
              ? 'text-yellow-700'
              : 'text-yellow-400'
          }`}
        >
          {quest.xp} XP
        </div>
        {!isLocked && <ChevronRight className="w-5 h-5 text-gray-400 hidden sm:block" />}
      </div>
    </div>
  );

  if (isLocked) {
    return <div title="Complete previous quests to unlock">{content}</div>;
  }

  return (
    <Link href={quest.href} className="block">
      {content}
    </Link>
  );
}app/quests/page.tsx
