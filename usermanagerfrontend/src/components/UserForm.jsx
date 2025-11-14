import {
  Box,
  Input,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { createUser, editUser } from "../store/usersSlice.js";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../schemas/userSchema";
import { useEffect } from "react";

export default function UserForm({ editingUser, clearEdit }) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  useEffect(() => {
    if (editingUser) {
      reset(editingUser);
    }
  }, [editingUser]);

  const onSubmit = (data) => {
    if (editingUser) {
      dispatch(editUser({ id: editingUser.id, data }));
      clearEdit();
    } else {
      dispatch(createUser(data));
    }
    reset();
  };

  return (
    <Box mt={5} p={4} border="1px solid #ccc" borderRadius="md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl mb={3} isInvalid={errors.name}>
          <FormLabel>Name</FormLabel>
          <Input {...register("name")} />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>

        <FormControl mb={3} isInvalid={errors.email}>
          <FormLabel>Email</FormLabel>
          <Input {...register("email")} />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>

        <FormControl mb={3} isInvalid={errors.age}>
          <FormLabel>Age</FormLabel>
          <Input type="number" {...register("age", { valueAsNumber: true })} />
          <FormErrorMessage>{errors.age?.message}</FormErrorMessage>
        </FormControl>

        <Button colorScheme="blue" type="submit">
          {editingUser ? "Update User" : "Add User"}
        </Button>
      </form>
    </Box>
  );
}
