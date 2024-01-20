import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Table, Form, Button } from 'react-bootstrap';

import { Account } from '../constans';

interface ProfilesTableProps {
  accounts: Account[];
}

const ProfilesTable: React.FC<ProfilesTableProps> = ({ accounts }) => {
  const navigate = useNavigate();
  const { accountId } = useParams();

  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);
  const [accountNotFound, setAccountNotFound] = useState(false);

  useEffect(() => {
    const account = accounts.find((acc) => acc.accountId === Number(accountId));
    if (account) {
      setSelectedAccount(account);
      setAccountNotFound(false);
    } else {
      setAccountNotFound(true);
    }
  }, [accounts, accountId]);

  const [pageNumber, setPageNumber] = useState(0);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [filter, setFilter] = useState('');

  if (!selectedAccount) {
    return <div>Account not found</div>;
  }

  const profilesPerPage = 4;
  const pagesVisited = pageNumber * profilesPerPage;

  const filteredProfiles = selectedAccount
    ? selectedAccount.profiles.filter(
      (profile) =>
        profile.country.toLowerCase().includes(filter.toLowerCase()) ||
        profile.marketplace.toLowerCase().includes(filter.toLowerCase())
    )
    : [];

  const sortedProfiles = filteredProfiles.sort((a, b) => {
    if (sortDirection === 'asc') {
      return a.profileId - b.profileId;
    } else {
      return b.profileId - a.profileId;
    }
  });

  const displayProfiles = sortedProfiles
    .slice(pagesVisited, pagesVisited + profilesPerPage)
    .map((profile) => (
      <tr key={profile.profileId} onClick={() => handleRowClick(profile.profileId)}>
        <td>{profile.profileId}</td>
        <td>{profile.country}</td>
        <td>{profile.marketplace}</td>
      </tr>
    ));

  const pageCount = Math.ceil(selectedAccount.profiles.length / profilesPerPage);

  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };

  const handleRowClick = (profileId: number) => {
    navigate(`/profiles/${accountId}/campaigns/${profileId}`);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
    setPageNumber(0);
  };

  const handleSortChange = () => {
    setSortDirection((prevDirection) => (prevDirection === 'asc' ? 'desc' : 'asc'));
  };

  if (accountNotFound) {
    return <div>Account not found</div>;
  }

  return (
    <>
      <div className='info'>
        <p>Account ID: <span>{accountId}</span></p>
        <Button variant="outline-light">
          <Link to="/agencyamazon_test/" className='link'>Back to Accounts</Link>
        </Button>
      </div>
      <div className='table-header'>
        <h2>Profiles Table</h2>
        <Form.Group className='form-input'>
          <Form.Label>Filter by Country or Marketplace:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search by country or marketplace..."
            value={filter}
            onChange={handleFilterChange}
          />

        </Form.Group>
      </div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th onClick={handleSortChange}>Profile ID</th>
            <th>Country</th>
            <th>Marketplace</th>
          </tr>
        </thead>
        <tbody>{displayProfiles}</tbody>
      </Table>

      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'pagination'}
        previousLinkClassName={'pagination__link'}
        nextLinkClassName={'pagination__link'}
        disabledClassName={'pagination__link--disabled'}
        activeClassName={'pagination__link--active'}
      />
    </>
  )
};

export default ProfilesTable;
