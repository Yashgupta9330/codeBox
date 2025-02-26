import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LoginForm } from "@/components/login-from";

const GoogleAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const loginWithGoogle = () => {
    window.location.href = "http://localhost:8000/auth/google/login"; 
  };

  const handleSignIn = () => {
    
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 dark">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="w-full max-w-sm">
        <LoginForm
          email={email} 
          password={password}
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
          handleSignIn={handleSignIn}
          loginWithGoogle={loginWithGoogle}     
        />
      </div>
    </div>
  );
};

export default GoogleAuth;

