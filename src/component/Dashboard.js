import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { getUserList, updateUserList, deleteUser } from '../api';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, IconButton, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';

import './Dashboard.css';

const Dashboard = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedData, setEditedData] = useState({ name: '', email: '', role: '' }); 

  const getUserData = async () => {
    try {
      const response = await getUserList();
      setUserList(response);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleEditClick = (user) => {
    setEditingUserId(user.id);
    setEditedData({ name: user.name, email: user.email, role: user.role });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSaveClick = async (userId) => {
    try {
      await updateUserList(userId, editedData);
      const updatedUserList = userList.map(user =>
        user.id === userId ? { ...user, ...editedData } : user
      );
      setUserList(updatedUserList);
      setEditingUserId(null); 
    } catch (error) {
      console.error('Error updating user', error);
    }
  };

  const handleDeleteClick = async (userId) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    });

    if (result.isConfirmed) {
      try {
        await deleteUser(userId);
        const updatedUserList = userList.filter(user => user.id !== userId);
        setUserList(updatedUserList);
        Swal.fire(
          'Deleted!',
          'The user has been deleted.',
          'success'
        );
      } catch (error) {
        console.error('Error deleting user', error);
      }
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h1>Welcome to your Dashboard!</h1>
        <p>This is your personal dashboard where you can manage your account.</p>

        <div className="container mx-auto mt-4">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="user list table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={5} align="center">
                      <CircularProgress />
                    </TableCell>
                  </TableRow>
                ) : userList.length > 0 ? (
                  userList.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.id}</TableCell>

                      <TableCell>
                        {editingUserId === user.id ? (
                          <TextField
                            name="name"
                            value={editedData.name}
                            onChange={handleInputChange}
                            variant="outlined"
                            size="small"
                          />
                        ) : (
                          user.name
                        )}
                      </TableCell>

                      <TableCell>
                        {editingUserId === user.id ? (
                          <TextField
                            name="email"
                            value={editedData.email}
                            onChange={handleInputChange}
                            variant="outlined"
                            size="small"
                          />
                        ) : (
                          user.email
                        )}
                      </TableCell>

                      <TableCell>
                        {editingUserId === user.id ? (
                          <TextField
                            name="role"
                            value={editedData.role}
                            onChange={handleInputChange}
                            variant="outlined"
                            size="small"
                          />
                        ) : (
                          user.role
                        )}
                      </TableCell>

                      <TableCell>
                        {editingUserId === user.id ? (
                          <IconButton onClick={() => handleSaveClick(user.id)} color="primary">
                            Save
                          </IconButton>
                        ) : (
                          <>
                            <IconButton onClick={() => handleEditClick(user)} color="primary">
                              <EditIcon />
                            </IconButton>
                            <IconButton onClick={() => handleDeleteClick(user.id)} color="secondary">
                              <DeleteIcon />
                            </IconButton>
                          </>
                        )}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} align="center">
                      No Users Found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
