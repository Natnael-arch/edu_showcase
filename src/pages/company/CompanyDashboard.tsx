import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockCompany, mockPools } from '../../data/mockData';
import toast from 'react-hot-toast';

function CompanyDashboard() {
  const navigate = useNavigate();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [musdBalance] = useState('325.50'); // Mock balance

  const handleLogout = () => {
    toast.success('Logged out successfully');
    navigate('/company/login');
  };

  const handleDeletePool = (poolId: string) => {
    if (!confirm('Are you sure you want to close this pool and remove the quest?')) {
      return;
    }
    // Use poolId in success message
    toast.success(`Pool ${poolId} closed and quest removed (Demo Mode)`);
  };

  const totalFunded = mockPools.reduce((sum, p) => sum + p.totalFund, 0);
  const totalRemaining = mockPools.reduce((sum, p) => sum + p.remainingBalance, 0);
  const totalStudents = mockPools.reduce((sum, p) => sum + (p._count?.rewards || 0), 0);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Demo Notice Banner */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <span className="text-yellow-400 text-xl">⚠️</span>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              <strong>Demo Mode:</strong> This is a mock showcase of the EduFund platform. All data is simulated and no real transactions occur.
            </p>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900">{mockCompany.name}</h1>
            <p className="text-gray-600">{mockCompany.email}</p>
            <p className="text-sm text-gray-500 font-mono mt-1">{mockCompany.walletAddress}</p>
            
            {/* mUSD Balance */}
            <div className="mt-3">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-bitcoin to-mezo text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                  <span className="text-sm font-semibold">
                    {parseFloat(musdBalance).toFixed(2)} mUSD
                  </span>
                </div>
                <a
                  href="https://app.mezo.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition"
                >
                  Get mUSD from Mezo →
                </a>
              </div>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-gray-600 hover:text-gray-900 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-bitcoin to-orange-400 rounded-lg p-6 text-white">
          <div className="text-sm opacity-90 mb-2">Total Funded</div>
          <div className="text-4xl font-bold">{totalFunded} mUSD</div>
        </div>

        <div className="bg-gradient-to-br from-mezo to-purple-600 rounded-lg p-6 text-white">
          <div className="text-sm opacity-90 mb-2">Remaining Balance</div>
          <div className="text-4xl font-bold">{totalRemaining} mUSD</div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-6 text-white">
          <div className="text-sm opacity-90 mb-2">Students Rewarded</div>
          <div className="text-4xl font-bold">{totalStudents}</div>
        </div>
      </div>

      {/* Pools List */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Funding Pools</h2>
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-gradient-to-r from-bitcoin to-mezo text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            + Create Pool
          </button>
        </div>

        {mockPools.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">No funding pools yet</p>
            <button
              onClick={() => setShowCreateModal(true)}
              className="text-mezo font-semibold hover:underline"
            >
              Create your first pool →
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {mockPools.map((pool) => {
              const isEnded = (pool._count?.rewards || 0) >= pool.maxParticipants || 
                             pool.remainingBalance < pool.rewardPerStudent;
              
              return (
                <div
                  key={pool.id}
                  className={`border rounded-lg p-6 transition-colors ${
                    isEnded ? 'border-gray-300 bg-gray-50' : 'border-gray-200 hover:border-mezo'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {pool.courseName}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          pool.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {pool.active ? 'Active' : 'Closed'}
                        </span>
                        {isEnded && pool.active && (
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800">
                            Ended
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-bitcoin">
                        {pool.remainingBalance} mUSD
                      </div>
                      <div className="text-sm text-gray-600">
                        of {pool.totalFund} mUSD
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600">Reward/Student</div>
                      <div className="font-semibold">{pool.rewardPerStudent} mUSD</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Max Students</div>
                      <div className="font-semibold">{pool.maxParticipants}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Rewarded</div>
                      <div className="font-semibold">{pool._count?.rewards || 0}/{pool.maxParticipants}</div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                    <button className="text-mezo font-semibold hover:underline text-sm">
                      View Details →
                    </button>
                    
                    {isEnded && pool.active && (
                      <button
                        onClick={() => handleDeletePool(pool.id)}
                        className="text-red-600 hover:text-red-700 font-semibold text-sm px-3 py-1 border border-red-300 rounded hover:bg-red-50 transition"
                      >
                        🗑️ Remove Quest
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Create Pool Modal */}
      {showCreateModal && (
        <CreatePoolModal onClose={() => setShowCreateModal(false)} />
      )}
    </div>
  );
}

// Create Pool Modal Component
function CreatePoolModal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    courseName: '',
    totalFund: '',
    rewardPerStudent: '',
    maxParticipants: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Pool created successfully! (Demo Mode)');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold mb-4">Create Funding Pool</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Course Name
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              value={formData.courseName}
              onChange={(e) => setFormData({ ...formData, courseName: e.target.value })}
              placeholder="Intro to Web3"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Total Fund (mUSD)
            </label>
            <input
              type="number"
              required
              min="1"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              value={formData.totalFund}
              onChange={(e) => setFormData({ ...formData, totalFund: e.target.value })}
              placeholder="100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Reward Per Student (mUSD)
            </label>
            <input
              type="number"
              required
              min="1"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              value={formData.rewardPerStudent}
              onChange={(e) => setFormData({ ...formData, rewardPerStudent: e.target.value })}
              placeholder="5"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Max Participants
            </label>
            <input
              type="number"
              required
              min="1"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              value={formData.maxParticipants}
              onChange={(e) => setFormData({ ...formData, maxParticipants: e.target.value })}
              placeholder="20"
            />
          </div>

          <div className="flex space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-bitcoin to-mezo text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90"
            >
              Create Pool
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CompanyDashboard;

