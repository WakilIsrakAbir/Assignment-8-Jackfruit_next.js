import RegisterForm from "@/components/auth/RegisterForm";

export const metadata = {
  title: 'Register',
  description: 'Create a new SunCart account to enjoy personalized summer deals.',
};

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 py-12">
      <div className="max-w-md w-full p-8 bg-base-100 shadow-2xl rounded-3xl">
        <h1 className="text-3xl font-bold text-center mb-6">Create Account</h1>
        <RegisterForm />
      </div>
    </div>
  );
}

export default RegisterPage;
