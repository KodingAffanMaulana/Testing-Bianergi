import { useState } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
const UserFormModal = ({ user, onSave, onClose }: any) => {
  const [formData, setFormData] = useState({
    name: user?.name || '',
    address: user?.address || '',
    gender: user?.gender || '',
    birthDate: user?.birthDate || '',
    inputDate: user?.inputDate || new Date().toISOString().split('T')[0],
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSave({ ...formData, id: user?.id || null });
  };

  return (
    <div className="modal fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className='bg-white w-6/12 rounded-lg p-5'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
          <div className='flex w-full'>
            <label className='w-3/12'>
              Nama
            </label>
            <input className='w-9/12 border border-black rounded' type="text" name="name" placeholder='Masukkan Nama' value={formData.name} onChange={handleChange} required />
          </div>
          <div className='flex w-full'>
            <label className='w-3/12'>
              Alamat
            </label>
            <input className='w-9/12 border border-black rounded' type="text" name="address" placeholder='Masukkan Alamat' value={formData.address} onChange={handleChange} />
          </div>

          <div className='flex w-full'>
            <label className='w-3/12'>
              Jenis Kelamin
            </label>
            <label className='mr-5'>
              <input type="radio" name="gender" value="Pria" checked={formData.gender === 'Pria'} onChange={handleChange} /> Pria
            </label>
            <label>
              <input type="radio" name="gender" value="Wanita" checked={formData.gender === 'Wanita'} onChange={handleChange} /> Wanita
            </label>
          </div>

          <div className='flex w-full'>
            <label className='w-3/12'>
              Tanggal Lahir
            </label>
            <input className='w-9/12 border border-black rounded' type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} />
          </div>

          <div className='flex justify-end gap-2'>
            <button type="submit" className="px-3 py-1 bg-green-400 text-white rounded-md text-sm hover:bg-green-500">Save</button>
            <button type="button" onClick={onClose} className="px-3 bg-red-400 text-white rounded-md text-sm hover:bg-red-500">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserFormModal