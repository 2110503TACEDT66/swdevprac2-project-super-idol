interface RegisterProps {
    name: string,
    email: string,
    password: string,
    tel: string,
}
export default async function Register(user : RegisterProps) {
    const response = await fetch("https://api.example.com/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user,
            role: "user",
        }),
        });
    if (!response.ok) {
        throw new Error("Failed to register");
    }
    return await response.json();
};
