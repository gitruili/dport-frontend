import type { NextPage } from "next";
import Head from "next/head";
import Rewards from "views/Rewards";

const RewardsPage: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana Scaffold</title>
        <meta
          name="description"
          content="Basic Functionality"
        />
      </Head>
      <Rewards />
    </div>
  );
};

export default RewardsPage;
