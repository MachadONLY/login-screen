import Image from "next/image";
import { Axe } from "lucide-react";
import { Facebook } from 'lucide-react';

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-2 p-6">
        <h1 className="flex items-center gap-4 font-semibold text-3xl mt-10 ml-4">
          AXE <Axe className="text-sky-500 w-8 h-8" />
        </h1>
        <h3 className="text-lg ml-4 mt-10">Login</h3>
        <h1 className="text-2xl ml-4">Bem-vindo de volta</h1>

        <label className="ml-4 mt-6" htmlFor="e-mail">
          E-mail <span className="text-cyan-300">*</span>
        </label>
        <input
          className="bg-white/10 ml-4 rounded-lg p-4"
          placeholder="Digite seu e-mail"
          type="e-mail"
        />
        <label className="ml-4 mt-6" htmlFor="password">
          Password
        </label>
        <input
          className="bg-white/10 ml-4 rounded-lg p-4"
          placeholder="Digite sua senha"
          type="password"
        />
        <p className="flex justify-end mt-4">Esqueceu a senha?</p>
        <button className="mt-10 bg-gradient-to-r from-violet-800 to-blue-400 rounded-lg p-4 ml-4 text-lg font-semibold">
          Login
        </button>
        <div className="flex items-center gap-x-4 justify-center mt-4">
          <div className="border w-20 h-0.5"></div>
          <p className="text-lg">Ou</p>
          <div className="border w-20 h-0.5"></div>
        </div>

        <div className="flex">
          <div>
            <Facebook />
            Facebook
          </div>
        </div>
      </div>
    </>
  );
}
