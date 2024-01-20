import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AccountsTable from './components/AccountsTable';
import ProfilesTable from './components/ProfilesTable';
import CampaignsTable from './components/CampaignsTable';
import { accountsData } from './constans';
import Logo from './assets/logo.svg'

import './App.scss'

const App: React.FC = () => {
  return (
    <Router>
      <div className='app-header'>
        <img className='app-logo' src={Logo} alt="logo" />
        <h1 className='App-title'>AgencyAmazon Tables</h1>
      </div>
      <Routes>
        <Route path="/agencyamazon_test/" element={<AccountsTable accounts={accountsData} />} />
        <Route path="/agencyamazon_test/profiles/:accountId" element={<ProfilesTable accounts={accountsData} />} />
        <Route path="/agencyamazon_test/profiles/:accountId/campaigns/:profileId" element={<CampaignsTable accounts={accountsData} />} />
      </Routes>
    </Router>
  );
};

export default App;
