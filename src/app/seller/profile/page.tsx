import Link from "next/link";
import { Metadata } from "next";
import { getProfile } from "@/app/lib/actions";


export const metadata: Metadata = {
  title: "HandCraftedHeaven | My Profile",
};

export default async function MyItems() {
  const seller = await getProfile();

  return(
  <section className="mb-16">
      <div className="flex justify-between items-center my-10">
        <p className="text-2xl font-black font-heading">My Profile.</p>
        <Link href="/seller/profile/edit" className="btn-alt text-center">Edit Profile</Link>
      </div>
      <div className="md:w-2/3 capitalize">
        <div className="profile-record">
          <span className="record-item">First Name</span>
          <span className="record-item">{ seller.first_name }</span>
        </div>
        <div className="profile-record">
          <span className="record-item">Last Name</span>
          <span className="record-item">{ seller.last_name }</span>
        </div>
        <div className="profile-record">
          <span className="record-item">Email</span>
          <span className="record-item lowercase">{ seller.email }</span>
        </div>
        <div className="profile-record">
          <span className="record-item">Address</span>
          <span className="record-item">{ seller.address }</span>
        </div>
        <div className="profile-record">
          <span className="record-item">Phone</span>
          <span className="record-item">{ seller.phone }</span>
        </div>
      </div>
    </section>
  )
}
