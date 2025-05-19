// apps/admin-app/src/pages/UsersListPage.js
import React, { useState, useEffect } from 'react';
import userService from '../api/userService';
import {Table} from "shared-ui"

const UsersListPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await userService.getAllUsers();
        setUsers(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const columns = [
    { header: 'ID', key: 'id' },
    { header: 'Username', key: 'username' },
    { header: 'Email', key: 'email' },
    { header: 'Role', key: 'role' },
    // Add other relevant user fields from your API response
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>User Management (Admin)</h1>
      <Table columns={columns} data={users} isLoading={isLoading} error={error} />
    </div>
  );
};

export default UsersListPage;