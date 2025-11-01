import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockQuests } from '../data/mockData';
import toast from 'react-hot-toast';

function QuestDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [completed, setCompleted] = useState(false);
  const [showClaimButton, setShowClaimButton] = useState(false);
  const [claiming, setClaiming] = useState(false);

  const quest = mockQuests.find(q => q.id === id);

  const handleCompleteQuest = () => {
    setCompleted(true);
    setShowClaimButton(true);
    toast.success('Quest completed! Now claim your reward.');
  };

  const handleClaimReward = () => {
    setClaiming(true);
    setTimeout(() => {
      toast.success(`Successfully claimed ${quest?.reward} mUSD! Check your wallet! 💰`, {
        duration: 5000,
      });
      setClaiming(false);
      setTimeout(() => {
        navigate('/rewards');
      }, 2000);
    }, 2000);
  };

  if (!quest) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Quest not found</p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 text-mezo font-semibold hover:underline"
        >
          ← Back to Quests
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={() => navigate('/')}
        className="text-gray-600 hover:text-gray-900 mb-6 flex items-center"
      >
        ← Back to Quests
      </button>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{quest.title}</h1>
            <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-purple-100 text-purple-800">
              {quest.difficulty}
            </span>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-600 mb-1">Reward</div>
            <div className="text-3xl font-bold text-bitcoin">{quest.reward} mUSD</div>
          </div>
        </div>

        <div className="prose max-w-none mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Description</h2>
          <p className="text-gray-700 mb-6">{quest.description}</p>

          <h2 className="text-xl font-semibold text-gray-900 mb-3">Quest Content</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="text-gray-700 whitespace-pre-wrap">{quest.content}</div>
          </div>
        </div>

        {completed && showClaimButton ? (
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
              Quest completed! Claim your reward below.
            </div>
            <button
              onClick={handleClaimReward}
              disabled={claiming}
              className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-colors ${
                claiming
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-bitcoin to-mezo hover:opacity-90'
              }`}
            >
              {claiming
                ? 'Claiming Reward...'
                : `Claim ${quest.reward} mUSD Reward`}
            </button>
          </div>
        ) : (
          <button
            onClick={handleCompleteQuest}
            disabled={completed}
            className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-colors ${
              completed
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-bitcoin to-mezo hover:opacity-90'
            }`}
          >
            {completed
              ? 'Completed! ✓'
              : 'Complete Quest'}
          </button>
        )}
      </div>
    </div>
  );
}

export default QuestDetails;

