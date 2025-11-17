'use client';

// In a real app, we'd fetch this user data, but for the
// prototype, we can use mock data.
const mockUserData = {
  username: 'ChainRunner_01',
  level: 2,
  xp: 125,
  xpToNextLevel: 250,
  joined: 'November 2025',
};

const mockCompletedQuests = [
  {
    id: 1,
    title: 'Hello, Wallet',
    xp: 50,
  },
  {
    id: 2,
    title: 'Reading the Chain',
    xp: 75,
  },
];

export default function DashboardPage() {
  const xpPercentage = (mockUserData.xp / mockUserData.xpToNextLevel) * 100;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Profile Header */}
      <div className="flex items-center gap-6 mb-8">
        {/* Placeholder for a user avatar */}
        <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center">
          <svg
            className="w-12 h-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white">
            {mockUserData.username}
          </h1>
          <p className="text-gray-400">Joined: {mockUserData.joined}</p>
        </div>
      </div>

      {/* Gamification Stats */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">Your Progress</h2>
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="text-lg font-bold text-white">
              Level {mockUserData.level}
            </span>
            <span className="text-sm text-gray-300">
              {mockUserData.xp} / {mockUserData.xpToNextLevel} XP
            </span>
          </div>
          {/* XP Bar */}
          <div className="w-full bg-gray-700 rounded-full h-4">
            <div
              className="bg-blue-500 h-4 rounded-full transition-all"
              style={{ width: `${xpPercentage}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            {mockUserData.xpToNextLevel - mockUserData.xp} XP to next level
          </p>
        </div>
      </div>

      {/* Completed Quests / Badges */}
      <div>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Completed Quests ({mockCompletedQuests.length})
        </h2>
        <div className="flex flex-col gap-4">
          {mockCompletedQuests.map((quest) => (
            <div
              key={quest.id}
              className="flex items-center justify-between bg-gray-800 p-4 rounded-lg"
            >
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {quest.title}
                </h3>
              </div>
              <div className="text-yellow-400 font-bold">{quest.xp} XP</div>
            </div>
          ))}
          {mockCompletedQuests.length === 0 && (
            <p className="text-gray-400">
              You haven't completed any quests yet. Get started!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
