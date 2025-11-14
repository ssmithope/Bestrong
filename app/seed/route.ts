import { Pool } from 'pg';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
    ssl: {
      rejectUnauthorized: false, // Necessário para Vercel Postgres
    },
  });

  const client = await pool.connect();
  console.log('Connected to the database to seed tables.');

  try {
    const sqlFilePath = path.join(process.cwd(), 'schema.sql');
    console.log(`Reading SQL file from: ${sqlFilePath}`);

    const sql = fs.readFileSync(sqlFilePath, 'utf8');

    console.log('Executing SQL script to create/verify tables...');
    await client.query(sql);

    return NextResponse.json({ message: 'Database tables checked/created successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error seeding the database:', error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  } finally {
    await client.release();
    await pool.end();
    console.log('Database connection closed.');
  }
}