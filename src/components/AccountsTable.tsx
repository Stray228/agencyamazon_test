import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router';

import { Account } from '../constans';
import { Form, Table } from 'react-bootstrap';

interface AccountsTableProps {
  accounts: Account[];
}

const AccountsTable: React.FC<AccountsTableProps> = ({ accounts }) => {
  const navigate = useNavigate();
  const [pageNumber, setPageNumber] = useState(0);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [filterEmail, setFilterEmail] = useState('');

  const accountsPerPage = 2;
  const pagesVisited = pageNumber * accountsPerPage;

  const sortedAccounts = accounts
    .filter((account) => account.email.toLowerCase().includes(filterEmail.toLowerCase()))
    .sort((a, b) => {
      if (sortDirection === 'asc') {
        return a.accountId - b.accountId;
      } else {
        return b.accountId - a.accountId;
      }
    });

  const displayAccounts = sortedAccounts
    .slice(pagesVisited, pagesVisited + accountsPerPage)
    .map((account) => (
      <tr key={account.accountId} onClick={() => handleRowClick(account.accountId)}>
        <td>{account.accountId}</td>
        <td>{account.email}</td>
        <td>{account.authToken}</td>
        <td>{account.creationDate}</td>
      </tr>
    ));

  const pageCount = Math.ceil(accounts.length / accountsPerPage);

  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };

  const handleRowClick = (accountId: number) => {
    navigate(`/profiles/${accountId}`);
  };

  const handleSortChange = () => {
    setSortDirection((prevDirection) => (prevDirection === 'asc' ? 'desc' : 'asc'));
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterEmail(e.target.value);
  };

  return (
    <>
      <div className='table-header'>
        <h2>Accounts Table</h2>
        <Form.Group className='form-input'>
          <Form.Label>Filter by Email:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search by email..."
            value={filterEmail}
            onChange={handleFilterChange}
          />
        </Form.Group>
      </div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th onClick={handleSortChange}>Account ID</th>
            <th>Email</th>
            <th>Auth Token</th>
            <th>Creation Date</th>
          </tr>
        </thead>
        <tbody>{displayAccounts}</tbody>
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

export default AccountsTable;
