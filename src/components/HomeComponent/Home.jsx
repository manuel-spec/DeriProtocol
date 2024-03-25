import Navbar from "./Navbar";
import Header from "./Header";
import Announcment from "./Announcment";
import CoinGraph from "./CoinGraph";
import Options from "./Options";
import FastTrading from "./FastTrading";
import StickyHeadTable from "./Table";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Announcment />
      <CoinGraph />
      <Options />
      <FastTrading />
      <StickyHeadTable />
    </div>
  );
};
