import LoginForm from "@/components/auth/LoginForm";

export const metadata = {
  title: 'Login',
  description: 'Log in to your SunCart account to access your profile and faster checkout.',
};

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 py-12">
      <div className="max-w-md w-full p-8 bg-base-100 shadow-2xl rounded-3xl">
        <h1 className="text-3xl font-bold text-center mb-6">Welcome Back</h1>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
