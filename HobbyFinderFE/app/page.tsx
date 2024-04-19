'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import { Button } from '@mantine/core';
import Link from 'next/link';


export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
    <Link href="/home">
      <Button> Home </Button>
    </Link>
    {user && (
      <div>
        <img src={user.picture ?? ""} alt={user.name ?? "profile img"} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )}
    </>
  );
}
