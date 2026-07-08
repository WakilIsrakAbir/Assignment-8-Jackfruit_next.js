import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import UpdateProfileForm from "@/components/profile/UpdateProfileForm";

export const metadata = {
  title: 'Update Profile',
  description: 'Update your SunCart account information.',
};

const UpdateProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="container mx-auto px-4 py-12 flex justify-center">
      <div className="max-w-md w-full bg-base-100 shadow-2xl rounded-3xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Edit Profile</h1>
        <UpdateProfileForm user={session.user} />
      </div>
    </div>
  );
}

export default UpdateProfilePage;
