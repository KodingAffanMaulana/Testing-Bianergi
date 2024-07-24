/* eslint-disable @typescript-eslint/no-explicit-any */

import { formatDate } from "../../utils/formatDate";

const UserViewModal = ({ user, onClose }: any) => {
  return (
    <div className="modal fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 ">
      <div className='bg-white rounded-lg p-5 w-1/2'>
        <h2 className='text-center font-semibold pb-2'>User Details</h2>
        <div className='flex w-full'>
          <label className='w-5/12'>
            Nama
          </label>
          <p>: {user.name}</p>
        </div>
        <div className='flex w-full'>
          <label className='w-5/12'>
            Alamat
          </label>
          <p>: {user.address}</p>
        </div>

        <div className='flex w-full'>
          <label className='w-5/12'>
            Jenis Kelamin
          </label>
          <p>: {user.gender}</p>
        </div>

        <div className='flex w-full'>
          <label className='w-5/12'>
            Tanggal Lahir
          </label>
          <p>: {formatDate(user.birthDate)}</p>
        </div>

        <div className='flex w-full'>
          <label className='w-5/12'>
            Tanggal Input
          </label>
          <p>: {formatDate(user.inputDate)}</p>
        </div>
        <div className='flex justify-center pt-5'>
          <button onClick={onClose} className="px-5 py-1 bg-red-400 text-white rounded-md text-sm">Close</button>
        </div>
      </div>
    </div>
  );
};

export default UserViewModal;
