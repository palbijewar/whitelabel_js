import React, { useState , useEffect} from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography,
  IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button,Pagination
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { getUsers } from '../../middlewares/interceptors';

const usersData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Inactive' },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Moderator', status: 'Active' },
  { id: 4, name: 'Emily Davis', email: 'emily@example.com', role: 'User', status: 'Pending' }
];

function UsersTable() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const limit = 10; 
  const [open, setOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const userFetchedData = await getUsers((page - 1) * limit, limit);
        setUsers(userFetchedData?.data || []);
      } catch (error) {
        setError(error.message || "Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [page]);

  console.log(users)

  const handleClickOpen = (action, user) => {
    setSelectedAction(action);
    setSelectedUser(user);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    console.log(`${selectedAction} confirmed for ${selectedUser.name}`);
    setOpen(false);
  };

  return (
    <Paper sx={{ padding: 2, margin: 2, overflowX: 'auto' }}>
      <Typography variant="h6" align="center" gutterBottom>
        Users List
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 800 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>User Id</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>User Type</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Host Id</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((user) => (
              <TableRow key={user.user_id}>
                <TableCell>{user.user_id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.user_type}</TableCell>
                <TableCell>{user.host_id}</TableCell>
                <TableCell>
                  <IconButton color="primary" sx={{ marginRight: 1 }} onClick={() => handleClickOpen('Edit', user)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="secondary" onClick={() => handleClickOpen('Delete', user)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
            count={Math.ceil(100 / limit)}
            page={page}
            onChange={(e, value) => setPage(value)}
            color="primary"
            sx={{ display: "flex", justifyContent: "center", mt: 2 }}
    />

      {/* Confirmation Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Action</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to {selectedAction?.toLowerCase()} {selectedUser?.name}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">No</Button>
          <Button onClick={handleConfirm} color="primary" autoFocus>Yes</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}

export default UsersTable;
