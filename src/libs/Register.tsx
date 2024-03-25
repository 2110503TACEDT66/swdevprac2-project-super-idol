interface RegisterProps {
  name: string;
  email: string;
  password: string;
  tel: string;
  profilePic: string;
}
export default async function Register(user: RegisterProps) {
  const response = await fetch(
    "https://online-jobfair.vercel.app/api/v1/auth/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user,
        role: "user",
      }),
    }
  );
  if (!response.ok) {
    throw new Error("Failed to register");
  }
  return await response.json();
}
