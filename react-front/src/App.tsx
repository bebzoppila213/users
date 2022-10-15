import Users from "./users/Users";
import Modal from "./users/Modal";
import { useState } from "react";
import useFetch from "./hooks/useFetch";
import { IUser } from "./users/Iterfaces";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { data, isLoading } = useFetch<IUser[]>("http://127.0.0.1:3002/", []);

  const [modalState, setModalState] = useState<IUser>({
    name: "",
    phone: "",
    email: "",
    address: "",
    position_name: "",
    department: "",
    hire_date: "",
    id: 0,
  });

  const openModal = (id: number) => {
    setModalIsOpen(true);
    setModalState(data.find((dataItem) => dataItem.id === id) || data[0]);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="App">
      <Users openModal={openModal} users={data}></Users>
      <Modal
        closeModal={closeModal}
        modalState={modalState}
        modalIsOpen={modalIsOpen}
      ></Modal>
    </div>
  );
}

export default App;
