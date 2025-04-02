"use client";

import Products from "@/components/Products";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [password, setPassword] = useState("********");

  const handlePasswordChange = () => {
    setPassword("Tia@rosa!");
  };

  return (
    <main className="flex  flex-col justify-center items-center min-h-[612px] ">
      <h1 className="text-4xl font-bold text-orange-800">
        Tia Rosa, Coffe Shop
      </h1>
      <p className="mt-4 text-3xl text-gray-800">
        Bem-vindo ao nosso café! Aqui você encontra os melhores cafés da cidade.
      </p>

      <Products />

      <div className="flex items-center justify-center gap-2 ml-58">
        <Button
          className="mt-4 h-[41px] cursor-pointer"
          onClick={handlePasswordChange}
        >
          Ver senha do Wi-fi
        </Button>
        <input
          type="text"
          defaultValue={password}
          value={password}
          className="mt-4 p-2  rounded font-bold text-[18px]"
        />
      </div>
    </main>
  );
}
