interface RegisterProps {
  name: string;
  email: string;
  password: string;
  telephone_number: string;
  ImageURL: string;
}
export default async function Register(user: RegisterProps) {
  const response = await fetch(
    "https://superidol-backend.onrender.com/api/v1/auth/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        password: user.password,
        telephone_number: user.telephone_number,
        role: "user",
        ImageURL: user.ImageURL,
      }),
    }
  );
  if (!response.ok) {
    throw new Error("Failed to register");
  }
  return await response.json();
}
