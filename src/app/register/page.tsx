"use client";

import { useEffect, useState } from "react";
import Register from "@/libs/Register";
import { useRouter } from "next/navigation";
import { TextField, Button } from "@mui/material";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [tel, setTel] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const router = useRouter();

  const checkFormValidity = () => {
    return (
      name.trim() !== "" &&
      email.trim() !== "" &&
      password.trim() !== "" &&
      tel.trim() !== "" &&
      profilePic.trim() !== "" &&
      password === confirmPassword
    );
  };

  useEffect(() => {
    setIsFormValid(checkFormValidity());
  }, [name, email, password, tel, profilePic, confirmPassword]);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await Register({
        name: name,
        email: email,
        password: password,
        telephone_number: tel,
        ImageURL: profilePic,
      });
      router.push("/api/auth/signin");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[95vh] bg-gray-100 py-2 ">
      <h1 className="text-2xl font-bold mb-5">Register</h1>
      <form onSubmit={handleRegister} className="w-full max-w-sm">
        <div className="mb-4">
          <TextField
            label="Name - Lastname"
            value={name || ""}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            variant="outlined"
          />
        </div>
        <div className="mb-4">
          <TextField
            label="Email"
            type="email"
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            variant="outlined"
          />
        </div>
        <div className="mb-4">
          <TextField
            label="Password"
            type="password"
            value={password || ""}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            variant="outlined"
          />
        </div>
        <div className="mb-4">
          <TextField
            label="Confirm Password"
            type="password"
            value={confirmPassword || ""}
            onChange={(e) => setConfirmPassword(e.target.value)}
            fullWidth
            variant="outlined"
          />
        </div>
        <div className="mb-4">
          <TextField
            label="Telephone"
            type="tel"
            value={tel || ""}
            onChange={(e) => setTel(e.target.value)}
            fullWidth
            variant="outlined"
          />
        </div>
        <div className="mb-4">
          <TextField
            label="Profile Picture"
            value={profilePic || ""}
            onChange={(e) => setProfilePic(e.target.value)}
            fullWidth
            variant="outlined"
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!isFormValid}
          className="w-full text-black hover:text-white hover:bg-[#F15025] border-2 border-[#F15025]"
        >
          Register
        </Button>
      </form>
    </div>
  );
}
