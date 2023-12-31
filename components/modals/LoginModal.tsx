"use client"
import { useLoginModal } from "@/hooks/useLoginModal";
import { useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import { useRegisterModal } from "@/hooks/useRegisterModal";
import { signIn } from "next-auth/react"
import toast from "react-hot-toast/headless";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = () => {
    try {
      setIsLoading(true);
      signIn("credentials", {
        email,
        password
      })
      toast.success("Success")
      loginModal.onClose()
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onToggle = () => {
    if (isLoading) return
    loginModal.onClose()
    registerModal.onOpen()
  }

  const bodyContent = (
    <div className="flex flex-col gap-4">
      {/* Email */}
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
      />
      {/* Password */}
      <Input
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={isLoading}
        type="password"
      />
    </div>
  );

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        Don't have an account?
        <span
          onClick={onToggle}
          className="text-white cursor-pointer hover:underline"
        >
          Create an account
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Sign in"
      onClose={loginModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
