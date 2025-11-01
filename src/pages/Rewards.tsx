import { mockUser, mockQuests } from '../data/mockData';

function Rewards() {
  const completedQuests = mockQuests.filter(q => mockUser.completedQuests.includes(q.id));
  const totalEarned = completedQuests.reduce((sum, q) => sum + q.reward, 0);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Rewards</h1>

      <div className="bg-gradient-to-r from-bitcoin to-mezo rounded-lg p-8 text-white mb-8">
        <div className="text-sm opacity-90 mb-2">Total Rewards Earned</div>
        <div className="text-5xl font-bold">{totalEarned} mUSD</div>
        <div className="mt-4 text-sm opacity-75">
          All rewards are stored on-chain and can be used across the Mezo ecosystem
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Reward History</h2>
        {completedQuests.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-2">No rewards yet</p>
            <p className="text-gray-400">Complete quests to start earning mUSD!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {completedQuests.map((quest) => (
              <div
                key={quest.id}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{quest.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{quest.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>Quest ID: {quest.id}</span>
                      <span>•</span>
                      <span className="text-green-600 font-semibold">✓ Claimed</span>
                    </div>
                  </div>
                  <div className="text-right ml-6">
                    <div className="text-3xl font-bold text-bitcoin mb-1">{quest.reward} mUSD</div>
                    <div className="text-xs text-gray-500">On-chain</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Rewards;

