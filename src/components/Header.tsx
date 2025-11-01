import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [isConnected] = useState(true); // Mock connected state
  
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-bitcoin to-mezo bg-clip-text text-transparent">
                ⚡ EduFund
              </div>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-600 hover:text-gray-900 transition">
                Quests
              </Link>
              {isConnected && (
                <>
                  <Link to="/profile" className="text-gray-600 hover:text-gray-900 transition">
                    Profile
                  </Link>
                  <Link to="/rewards" className="text-gray-600 hover:text-gray-900 transition">
                    Rewards
                  </Link>
                </>
              )}
              <Link to="/company/login" className="text-mezo hover:text-purple-700 transition font-semibold">
                For Companies
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-gradient-to-r from-bitcoin to-mezo text-white px-4 py-2 rounded-lg">
              <span className="font-bold text-sm">🔗 Mezo Testnet</span>
            </div>
            <div className="bg-gradient-to-r from-bitcoin to-mezo text-white px-4 py-2 rounded-lg">
              <span className="font-semibold text-sm">0x1234...5678</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

