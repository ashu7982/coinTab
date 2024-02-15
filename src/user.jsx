
import React, { useState, useEffect } from 'react';

function User() {
  const [users, setUsers] = useState([]);
  const [showAddButton, setShowAddButton] = useState(true);

//   useEffect(() => {
//     // Fetch users when component mounts
//     fetchUsers();
//   }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleAddButtonClick = async (user) => {
    
    console.log('Adding user to database:', user);
    setShowAddButton(false);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Cointab SE-ASSIGNMENT</h1>
      <button style={{ fontSize: '16px', padding: '10px 20px', marginBottom: '20px', cursor: 'pointer' }} onClick={fetchUsers}>All Users</button>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {users.map(user => (
          <li key={user.id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <div><strong>Name:</strong> {user.name}</div>
            <div><strong>Email:</strong> {user.email}</div>
            <div><strong>Phone:</strong> {user.phone}</div>
            <div><strong>Website:</strong> {user.website}</div>
            <div><strong>City:</strong> {user.address.city}</div>
            <div><strong>Company:</strong> {user.company.name}</div>
            {showAddButton && (
              <button style={{ fontSize: '14px', padding: '5px 10px', marginRight: '10px', cursor: 'pointer' }} onClick={() => handleAddButtonClick(user)}>Add</button>
            )}
            {!showAddButton && (
              <button style={{ fontSize: '14px', padding: '5px 10px', cursor: 'pointer' }}>Open</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default User;



