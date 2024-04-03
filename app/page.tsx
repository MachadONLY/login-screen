import Image from "next/image";
import { Axe } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import hero from "./Assets/hero.svg";

export default function Home() {
  return (
    <>
      <main className="lg:p-6 lg:flex lg:items-center  lg:justify-center  bg-slate-950">
        <Image src={hero}
        className="hidden lg:block lg:rounded-lg "
        width={400}
        height={500}
        alt="imagem principal do controle"
        />
        <div className="flex flex-col gap-2 p-6">
          <h1 className="flex items-center gap-4 font-semibold text-3xl mt-10 ml-4">
            LOGIN SCREEN <Axe className="text-sky-500 w-8 h-8" />
          </h1>
          <h3 className="text-lg ml-4 mt-10">Login</h3>
          <h1 className="text-2xl ml-4">Bem-vindo de volta</h1>

          <label className="ml-4 mt-6" htmlFor="e-mail">
            E-mail <span className="text-cyan-300">*</span>
          </label>
          <input
            className="bg-white/10 ml-4 rounded-lg p-4 lg:w-72"
            placeholder="Digite seu e-mail"
            type="e-mail"
          />
          <label className="ml-4 mt-6" htmlFor="password">
            Password
          </label>
          <input
            className="bg-white/10 ml-4 rounded-lg p-4 lg:w-72"
            placeholder="Digite sua senha"
            type="password"
          />
          <p className="flex justify-end mt-4 lg:w-72 cursor-pointer">Esqueceu a senha?</p>
          <button className="lg:w-72 mt-10 bg-gradient-to-r from-violet-800 to-blue-400 rounded-lg p-4 ml-4 text-lg font-semibold">
            Login
          </button>

          <div className="lg:flex lg:flex-col lg:ml-4 ">
            <div className="flex items-center gap-x-4 justify-center mt-4">
              <div className="border w-20 h-0.5 border-gray-600"></div>
              <p className="text-lg">Ou</p>
              <div className="border w-20 h-0.5 border-gray-600"></div>
            </div>
            <div className="flex flex-col items-center justify-center mt-6">
              <div className="flex gap-2">
                <div className="bg-slate-900 text-zinc-300 border border-gray-700 p-2 rounded-lg w-28 flex gap-2 items-center cursor-pointer justify-center">
                  <FaGoogle />
                  Google
                </div>

                <div className="bg-slate-900 text-zinc-300 border border-gray-700 p-2 rounded-lg w-28 flex gap-2 items-center cursor-pointer justify-center">
                  <ImFacebook2 />
                  Facebook
                </div>
              </div>

              <div className="bg-slate-900 text-zinc-300 border border-gray-700 p-2 rounded-lg w-28 flex gap-2 items-center cursor-pointer justify-center mt-4">
                <FaApple />
                Apple
              </div>
            </div>
          </div>
        </div>
      </main>

    </>
  );
}
