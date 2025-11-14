import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Spinner,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/usersSlice.js";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function UserTable({ users, loading, onEdit }) {
  const dispatch = useDispatch();

  if (loading) return <Spinner size="xl" />;

  return (
    <Table mt={5} variant="striped">
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Age</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>

      <Tbody>
        {users.map((u) => (
          <Tr key={u.id}>
            <Td>{u.id}</Td>
            <Td>{u.name}</Td>
            <Td>{u.email}</Td>
            <Td>{u.age}</Td>
            <Td>
              <IconButton
                icon={<FaEdit />}
                mr={2}
                onClick={() => onEdit(u)}
              />
              <IconButton
                colorScheme="red"
                icon={<FaTrash />}
                onClick={() => dispatch(removeUser(u.id))}
              />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
