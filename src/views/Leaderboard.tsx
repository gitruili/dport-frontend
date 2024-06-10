import React from 'react';

interface LeaderboardEntry {
  rank: number;
  userId: string;
  carModel: string;
  battType: string;
  score: number;
}

const leaderboardData: LeaderboardEntry[] = [
  { rank: 1, userId: 'User1', carModel: 'Tesla Model S', battType: 'Li-Ion', score: 1000 },
  { rank: 2, userId: 'User2', carModel: 'Nissan Leaf', battType: 'Li-Ion', score: 950 },
  { rank: 3, userId: 'User3', carModel: 'Chevy Bolt', battType: 'Li-Ion', score: 900 },
  // Add more entries as needed
];

const Leaderboard: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-6">Green Hero Leaderboard</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-gray-100 shadow-md rounded-lg text-lg">
          <thead className="bg-gray-300 text-black">
            <tr>
              <th className="px-6 py-3">Rank#</th>
              <th className="px-6 py-3">UserID</th>
              <th className="px-6 py-3">Car Model</th>
              <th className="px-6 py-3">Batt Type</th>
              <th className="px-6 py-3">Score</th>
            </tr>
          </thead>
          <tbody className="text-black">
            {leaderboardData.map((entry) => (
              <tr key={entry.rank} className="border-t bg-white hover:bg-gray-200">
                <td className="px-6 py-3 text-center">{entry.rank}</td>
                <td className="px-6 py-3 text-center">{entry.userId}</td>
                <td className="px-6 py-3 text-center">{entry.carModel}</td>
                <td className="px-6 py-3 text-center">{entry.battType}</td>
                <td className="px-6 py-3 text-center">{entry.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">How to earn points or $DPT token :</h3>
        <ul className="list-disc list-inside ml-4 text-lg">
          <li>Drive smart with optimal battery charging</li>
          <li>Charge smart to optimal battery status</li>
          <li>Longer range using lower electricity</li>
          <li>Use EV services with our partner network</li>
          <li>Replace or recycle with nearest provider</li>
          <li>Higher remaining value gets higher points</li>
          <li>Stake $SOL to earn more points</li>
        </ul>
        <p className="mt-4 text-lg">
          BMS/DePIN device/Mobile app can monitor required data and/or calculate based on AI.
        </p>
      </div>
    </div>
  );
}

export default Leaderboard;
