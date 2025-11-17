'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';

// Validation schema with Zod
const FormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
  phone_number: z.string().optional(),
  // Address fields
  street: z.string().min(1, { message: 'Street is required.' }),
  city: z.string().min(1, { message: 'City is required.' }),
  state: z.string().min(1, { message: 'State is required.' }),
  zip_code: z.string().min(1, { message: 'ZIP Code is required.' }),
  country: z.string().min(1, { message: 'Country is required.' }),
});

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
    phone_number?: string[];
    street?: string[];
    city?: string[];
    state?: string[];
    zip_code?: string[];
    country?: string[];
  };
  message?: string | null;
};

export async function createUser(prevState: State, formData: FormData) {
  // 1. Validate the form data on the server
  const validatedFields = FormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
    phone_number: formData.get('phone_number'),
    street: formData.get('street'),
    city: formData.get('city'),
    state: formData.get('state'),
    zip_code: formData.get('zip_code'),
    country: formData.get('country'),
  });

  // 2. If validation fails, return the errors
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Invalid Fields. Failed to Create User.',
    };
  }

  // 3. Hash the password
  // const hashedPassword = await bcrypt.hash(validatedFields.data.password, 10);

  // 4. Insert data into the database
  try {
    // TODO: Use a transaction to insert into 'users' and then 'addresses'
    // 1. INSERT into users table (name, email, hashedPassword, phone_number)
    // 2. GET the new user's ID
    // 3. INSERT into addresses table (user_id, street, city, etc.)
    console.log('Data is valid. Ready to insert into DB:', validatedFields.data);
  } catch (error) {
    // Handle database errors (e.g., unique email constraint)
    return { message: 'Database Error: Failed to create user.' };
  }

  // 5. Redirect to the login page on success
  redirect('/login');
}

// --- Login Action ---
export type LoginState = string | undefined;

export async function authenticate(
  prevState: LoginState,
  formData: FormData,
) {
  try {
    console.log('Attempting to authenticate user with email:', formData.get('email'));
    // TODO: Add actual authentication logic here (e.g., with NextAuth.js)
    // For now, we'll simulate a successful login.
    // In a real app, you would redirect on success.
    // redirect('/dashboard');
  } catch (error) {
    if (error instanceof Error && error.message.includes('CredentialsSignin')) {
      return 'Invalid credentials.';
    }
    return 'Something went wrong.';
  }
}
