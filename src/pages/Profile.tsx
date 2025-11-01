import { mockUser, mockQuests } from '../data/mockData';

function Profile() {
  const completedQuests = mockQuests.filter(q => mockUser.completedQuests.includes(q.id));

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Profile</h1>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="flex items-center space-x-6 mb-6">
          <div className="w-20 h-20 bg-gradient-to-r from-bitcoin to-mezo rounded-full flex items-center justify-center text-white text-2xl font-bold">
            {mockUser.walletAddress.slice(2, 4).toUpperCase()}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Wallet Address</h2>
            <p className="text-gray-600 font-mono text-sm">{mockUser.walletAddress}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-bitcoin to-orange-400 rounded-lg p-6 text-white">
            <div className="text-sm opacity-90 mb-2">Total Earned</div>
            <div className="text-4xl font-bold">{mockUser.totalEarned} mUSD</div>
          </div>

          <div className="bg-gradient-to-br from-mezo to-purple-600 rounded-lg p-6 text-white">
            <div className="text-sm opacity-90 mb-2">Quests Completed</div>
            <div className="text-4xl font-bold">{completedQuests.length}</div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-6 text-white">
            <div className="text-sm opacity-90 mb-2">Network</div>
            <div className="text-2xl font-bold">Mezo Testnet</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Completed Quests</h2>
        {completedQuests.length === 0 ? (
          <p className="text-gray-500">No completed quests yet.</p>
        ) : (
          <div className="space-y-4">
            {completedQuests.map((quest) => (
              <div
                key={quest.id}
                className="border border-gray-200 rounded-lg p-6 hover:border-mezo transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{quest.title}</h3>
                    <p className="text-gray-600">{quest.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-bitcoin">{quest.reward} mUSD</div>
                    <div className="text-sm text-gray-500">Earned</div>
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

export default Profile;

