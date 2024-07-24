/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import UserFormModal from '../Modals/UserFormModal';
import UserViewModal from '../Modals/UserViewModal';
import { formatDate } from '../../utils/formatDate';
import { initialData } from '../../data/DUMMY';

const Table = () => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  const handleAddUser = () => {
    setSelectedUser(null);
    setModalType('add');
  };

  const handleViewUser = (user: any) => {
    setSelectedUser(user);
    setModalType('view');
  };

  const handleEditUser = (user: any) => {
    setSelectedUser(user);
    setModalType('edit');
  };

  const handleDeleteUser = (userId: any) => {
    setLoading(true);
    setData(data.filter(user => user.id !== userId));
    setLoading(false);
  };

  const closeModal = () => {
    setModalType('');
    setSelectedUser(null);
  };

  const saveUser = (user: any) => {
    setLoading(true);
    if (selectedUser) {
      setData(data.map(item => item.id === user.id ? { ...user, inputDate: item.inputDate } : item));
    } else {
      const newUser = {
        ...user,
        id: data.length + 1,
        inputDate: new Date().toISOString().split('T')[0],
      };
      setData([...data, newUser]);
    }
    setLoading(false);
    closeModal();
  };

  const renderModal = () => {
    switch (modalType) {
      case 'add':
        return <UserFormModal onSave={saveUser} onClose={closeModal} />;
      case 'edit':
        return <UserFormModal user={selectedUser} onSave={saveUser} onClose={closeModal} />;
      case 'view':
        return <UserViewModal user={selectedUser} onClose={closeModal} />;
      default:
        return null;
    }
  };

  return (
    <section className="pt-5">
      {loading && <div className="loading-indicator">Loading...</div>}
      <button onClick={handleAddUser} className="px-3 bg-green-400 text-white rounded-md text-sm py-1 hover:bg-green-500 mb-2">
        Tambah User
      </button>
      <table className="w-full">
        <thead>
          <tr className="text-center font-semibold bg-gray-300">
            <td>No</td>
            <td>Nama</td>
            <td>Alamat</td>
            <td>P/W</td>
            <td>Tanggal Lahir</td>
            <td>Tanggal Input</td>
            <td>Aksi</td>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={user.id} className="text-center w-full">
              <td className="border border-gray-300">{index + 1}</td>
              <td className="border border-gray-300">{user.name}</td>
              <td className="border border-gray-300">{user.address}</td>
              <td className="border border-gray-300">{user.gender}</td>
              <td className="border border-gray-300">{formatDate(user.birthDate)}</td>
              <td className="border border-gray-300">{formatDate(user.inputDate)}</td>
              <td className="border border-gray-300 space-x-2">
                <button onClick={() => handleViewUser(user)} className="px-3 bg-green-400 hover:bg-green-500 text-white rounded-md text-sm">View</button>
                <button onClick={() => handleEditUser(user)} className="px-3 bg-orange-400 hover:bg-orange-500 text-white rounded-md text-sm">Edit</button>
                <button onClick={() => handleDeleteUser(user.id)} className="px-3 bg-red-400 hover:bg-red-500 text-white rounded-md text-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {renderModal()}
    </section>
  );
};

export default Table;
