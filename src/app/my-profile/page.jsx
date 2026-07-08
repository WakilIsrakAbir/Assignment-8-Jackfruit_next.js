import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";

export const metadata = {
  title: 'My Profile',
  description: 'Manage your SunCart account details.',
};

const MyProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  const user = session.user;

  return (
    <div className="container mx-auto px-4 py-12 flex justify-center">
      <div className="max-w-2xl w-full bg-base-100 shadow-2xl rounded-3xl p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">My Profile</h1>
        
        <div className="flex flex-col items-center sm:flex-row sm:items-start gap-8">
          <div className="avatar">
            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user.image || `https://ui-avatars.com/api/?name=${user.name || 'User'}&size=128`} alt="Profile" />
            </div>
          </div>
          
          <div className="flex-1 space-y-4 text-center sm:text-left">
            <div>
              <p className="text-sm font-semibold text-base-content/60 uppercase">Name</p>
              <p className="text-2xl font-bold">{user.name}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-base-content/60 uppercase">Email</p>
              <p className="text-lg">{user.email}</p>
            </div>
            
            <div className="pt-6">
              <Link href="/my-profile/update" className="btn btn-primary px-8">
                Edit Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfilePage;
