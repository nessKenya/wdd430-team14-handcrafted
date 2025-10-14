import { Metadata } from "next";
import { getProfile } from '@/app/lib/actions';
import { updateProfile } from '@/app/lib/actions';

export const metadata: Metadata = {
  title: "HandCraftedHeaven | Edit Profile",
};

export default async function EditProfile() {
  const seller = await getProfile();

  return (
    <div className="max-w-xl mx-auto my-12 p-6 shadow-sm rounded-2xl">
      <h1 className="text-2xl font-semibold mb-4">Update Profile</h1>

      <form action={updateProfile} className="space-y-4">
        <div className='form-item'>
          <label htmlFor='first_name'>First Name</label>
          <input
            type="text"
            name="first_name"
            defaultValue={seller.first_name}
            required
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div className='form-item'>
          <label htmlFor='last_name'>Last Name</label>
          <input
            type="text"
            name="last_name"
            defaultValue={seller.last_name}
            required
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div className='form-item'>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            defaultValue={seller.email}
            required
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div className='form-item'>
          <label className="block text-sm font-medium mb-1">Address</label>
          <input
            type="text"
            name="address"
            defaultValue={seller.address || ''}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div className='form-item'>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input
            type="text"
            name="phone"
            defaultValue={seller.phone || ''}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <button type="submit" className="btn-alt">Save Changes</button>
      </form>
    </div>
  );
}
