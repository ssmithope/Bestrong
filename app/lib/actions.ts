'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';
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

  const { name, email, password, phone_number, street, city, state, zip_code, country } = validatedFields.data;

  // 3. Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // 4. Insert data into the database
  try {
    // Using a transaction to ensure both user and address are created successfully.
    await sql.query('BEGIN');
    
    const userResult = await sql`
      INSERT INTO users (name, email, password, phone_number)
      VALUES (${name}, ${email}, ${hashedPassword}, ${phone_number})
      RETURNING id;
    `;
    const newUserId = userResult.rows[0].id;

    await sql`
      INSERT INTO addresses (user_id, street, city, state, zip_code, country, is_default)
      VALUES (${newUserId}, ${street}, ${city}, ${state}, ${zip_code}, ${country}, true);
    `;

    await sql.query('COMMIT');

  } catch (error) {
    // Handle database errors (e.g., unique email constraint)
    await sql.query('ROLLBACK');
    // Check for unique email violation
    if (error instanceof Error && error.message.includes('duplicate key value violates unique constraint')) {
      return { message: 'An account with this email already exists.' };
    }

    return { message: 'Database Error: Failed to create user. Please try again.' };
  }

  // 5. Redirect to the login page on success
  redirect('/login');
}

// --- Login Action ---
export type LoginState = string | undefined;

import { signIn } from '@/auth'; // Make sure this path points to your auth.ts file
import { AuthError } from 'next-auth';

export async function authenticate(
  prevState: LoginState,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.type === 'CredentialsSignin') {
        return 'Invalid credentials.';
      }
    }
    // Re-throw other errors to be handled by Next.js
    throw error;
  }
}
