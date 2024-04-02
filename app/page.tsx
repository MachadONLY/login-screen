import Image from "next/image";

export default function Home() {
  return (
    <>
     
        <div className="flex flex-col gap-2 p-6">
          <h1 className="font-semibold text-3xl mt-10 ml-6">AXE 🪓</h1>
          <h3 className="text-lg ml-6 mt-10">Login</h3>
          <h1 className="text-2xl ml-6">Bem-vindo de volta</h1>

          <label className="ml-6 mt-6" htmlFor="e-mail">E-mail <span className="text-cyan-300">*</span></label>
          <input className="bg-white/10 ml-4 rounded-lg p-4" placeholder="Digite seu e-mail" type="e-mail" />
          <label className="ml-6 mt-6" htmlFor="password">Password</label>
          <input className="bg-white/10 ml-4 rounded-lg p-4" placeholder="Digite sua senha" type="password" />
          <p className="flex justify-end mt-4">Esqueceu a senha?</p>
          <button className="mt-10 bg-violet-800 rounded-lg p-4 ml-4 text-lg font-semibold">Login</button>
          <div className="flex items-center gap-x-4 justify-center mt-4">
            <div className="border w-20 h-0.5"></div>
            <p className="text-lg">Ou</p>
            <div className="border w-20 h-0.5"></div>
          </div>

          <div className="flex">
            <div>
              
            </div>
          </div>
        </div>

    </>
  );
}
