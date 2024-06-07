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
    <div>
      <h2>Green Hero Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Rank#</th>
            <th>UserID</th>
            <th>CarModel</th>
            <th>BattType</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((entry) => (
            <tr key={entry.rank}>
              <td>{entry.rank}</td>
              <td>{entry.userId}</td>
              <td>{entry.carModel}</td>
              <td>{entry.battType}</td>
              <td>{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h3>How to earn points or $DPT token</h3>
        <ul>
          <li>Drive smart with optimal battery charging</li>
          <li>Charge smart to optimal battery status</li>
          <li>Longer range using lower electricity</li>
          <li>Use EV services with our partner network</li>
          <li>Replace or recycle with nearest provider</li>
          <li>Higher remaining value gets higher points</li>
          <li>Stake $SOL to earn more points</li>
        </ul>
        <p>
          BMS/DePIN device/Mobile app can monitor required data and/or calculate based on AI.
        </p>
      </div>
    </div>
  );
}

export default Leaderboard;
