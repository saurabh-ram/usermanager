import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/usersSlice.js";
import { Box, Heading, Button } from "@chakra-ui/react";
import UserTable from "../components/UserTable.jsx";
import UserForm from "../components/UserForm.jsx";
import { useState } from "react";

export default function UsersPage() {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.users);

  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <Box p={5}>
      <Heading>User Manager</Heading>

      <UserForm editingUser={editingUser} clearEdit={() => setEditingUser(null)} />

      <UserTable users={list} loading={loading} onEdit={setEditingUser} />
    </Box>
  );
}
