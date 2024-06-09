import React from 'react';

interface NFT {
  id: string;
  name: string;
  image: string;
}

const mockNFTs: NFT[] = [
  { id: '1', name: 'NFT One', image: 'https://via.placeholder.com/150' },
  { id: '2', name: 'NFT Two', image: 'https://via.placeholder.com/150' },
  { id: '3', name: 'NFT Three', image: 'https://via.placeholder.com/150' },
  // Add more NFTs as needed
];

const Profile: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Profile</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {mockNFTs.map(nft => (
          <div key={nft.id} className="card shadow-lg rounded-lg p-4">
            <img src={nft.image} alt={nft.name} className="rounded-t-lg" />
            <div className="p-2">
              <h3 className="text-lg font-semibold">{nft.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
