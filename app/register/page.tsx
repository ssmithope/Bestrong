import React from 'react';
import RegisterForm from '@/app/ui/register-form';

const RegisterPage = () => {
  return (
    <main className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <RegisterForm />
      </div>
    </main>
  );
};

export default RegisterPage;