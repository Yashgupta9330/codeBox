import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <div className="flex justify-center items-center h-screen w-full">
      <Card className="w-full max-w-md p-8 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Sign In</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
            />
          </div>
          <Button onClick={handleSignIn} className="w-full bg-blue-500 hover:bg-blue-600 text-white">
            Sign In
          </Button>
          <div className="relative flex justify-center text-sm text-gray-500">
            <span className="bg-white px-2">or</span>
          </div>
          <Button onClick={loginWithGoogle} className="w-full bg-red-500 hover:bg-red-600 text-white">
            Login with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default GoogleAuth;

