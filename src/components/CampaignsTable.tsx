import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Table, Form, Button } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';

import { Account, Campaign } from '../constans';

interface CampaignsTableProps {
  accounts: Account[];
}

const CampaignsTable: React.FC<CampaignsTableProps> = ({ accounts }) => {
  const { accountId } = useParams();
  const selectedAccount = accounts.find((account) => account.accountId === Number(accountId));
  const { profileId } = useParams<{ profileId: string }>();
  const selectedCampaigns: Campaign[] = [];

  const [pageNumber, setPageNumber] = useState(0);
  const [filter, setFilter] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const campaignsPerPage = 5;
  const pagesVisited = pageNumber * campaignsPerPage;

  accounts.forEach((account) => {
    account.profiles.forEach((profile) => {
      if (profile.profileId === Number(profileId)) {
        selectedCampaigns.push(...profile.campaigns);
      }
    });
  });

  const filteredCampaigns = selectedCampaigns.filter(campaign =>
    campaign.date.toLowerCase().includes(filter.toLowerCase())
  ).sort((a, b) => {
    if (sortDirection === 'asc') {
      return a.campaignId - b.campaignId;
    } else {
      return b.campaignId - a.campaignId;
    }
  });

  const displayCampaigns = filteredCampaigns
    .slice(pagesVisited, pagesVisited + campaignsPerPage)
    .map((campaign) => (
      <tr key={campaign.campaignId}>
        <td>{campaign.campaignId}</td>
        <td>{campaign.clicks}</td>
        <td>{campaign.cost}</td>
        <td>{campaign.date}</td>
      </tr>
    ));

  const pageCount = Math.ceil(selectedCampaigns.length / campaignsPerPage);

  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
    setPageNumber(0);
  };

  const handleSortChange = () => {
    setSortDirection((prevDirection) => (prevDirection === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <>
      <div className='info'>
        <p>Profile ID: <span>{accountId}</span></p>
        <Button variant="outline-light">
          <Link to={`/profiles/${selectedAccount?.accountId}`} className='link'>Back to Profiles</Link>
        </Button>
      </div>

      <div className='table-header'>
        <h2>Campaigns Table</h2>
        <Form.Group className='form-input'>
          <Form.Label>Filter by date</Form.Label>
          <Form.Control
            type="text"
            placeholder="Filter by date..."
            value={filter}
            onChange={handleFilterChange}
          />
        </Form.Group>
      </div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th onClick={handleSortChange}>Campaign ID</th>
            <th>Clicks</th>
            <th>Cost</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {displayCampaigns}
        </tbody>
      </Table>

      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'pagination'}
        previousLinkClassName={'pagination__link'}
        nextLinkClassName={'pagination__link'}
        disabledClassName={'pagination__link--disabled'}
        activeClassName={'pagination__link--active'}
      />
    </>
  );
};

export default CampaignsTable;
