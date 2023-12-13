import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import { IconUserPlus } from "@tabler/icons-react";
import axios from "axios";
import { useForm } from "react-hook-form";
import UserList from "./components/UserList";

const BASE_URL = "https://users-crud.academlo.tech"

function App() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    reset({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: "",
    });
    setUserToEdit(null);
  };

  const handleUpdateUser = (user) => {
    handleOpenModal();
    setUserToEdit(user);
  };

  const createUser = (newUser) => {
    axios
      .post(BASE_URL + "/users/", newUser)
      .then(({ data: newUser }) => {
        setUsers([...users, newUser]);
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const deleteUser = (idUserToDelete) => {
    axios
      .delete(BASE_URL + `/users/${idUserToDelete}/`)
      .then(() => {
        const newUser = users.filter(
          (user) => user.id !== idUserToDelete
        );
        setUsers(newUser);
      })
      .catch((err) => console.log(err));
  };

  const updateUser = (user) => {
    axios
      .patch(BASE_URL + `/users/${userToEdit.id}/`, user)
      .then(({ data: updatedUser }) => {
        const newUser = users.map((user) =>
          user.id === userToEdit.id ? updatedUser : user
        );
        setUsers(newUser);
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
     .get(BASE_URL + "/users/")
     .then(({ data }) => setUsers(data))
     .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (userToEdit !== null) {
      reset(userToEdit);
    }
  }, [userToEdit]);

  return (
    <main className="text-[22px]">
  
    <header className="flex justify-between p-5">
    <h2 className="text-center p-2 font-bold">Usuarios</h2>
    <button className="bg-blue-500 rounded-md mt-2 p-1 hover:bg-blue-700 transition-color hover:tracking-widest transition-all flex gap-1 items-center" onClick={handleOpenModal}>
      Crear nuevo usuario
      <IconUserPlus />
      </button>
    </header>
      <Modal 
          showModal={showModal} 
          onCloseModal={handleCloseModal}
          handleSubmit={handleSubmit}
          register={register}
          createUser={createUser}
          isUpdating={!!userToEdit}
          updateUser={updateUser}
        errors={errors}/>
      <UserList
        users={users}
        deleteUser={deleteUser}
        handleUpdateUser={handleUpdateUser}
      />
    </main>
  );
}

export default App;
