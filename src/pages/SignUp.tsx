import { signUp } from "@/api/signUp";
import { EmailInput } from "@/components/EmailInput";
import { NameInput } from "@/components/NameInput";
import { PasswordInput } from "@/components/PasswordInput";
import { MoveRight } from "lucide-react";
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

type FormDataSignUp = {
  name: string;
  email: string;
  password: string;
};

export function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  async function formSubmit({ email, name, password }: FormDataSignUp, e: FormEvent) {
    e.preventDefault()
    try {
      await signUp({email, name,password})
      toast.success("Cadastro realizado com sucesso!")
      setTimeout(() => {
        navigate('/sign-in')
      }, 3000)
    } catch (error) {
      toast.error("Falha ao realizar cadastro!")
    }
  }

  return (
    <div className="w-4/10 p-10 bg-shape font-sans">
      <div className="bg-white rounded-4xl h-full p-20 flex flex-col gap-20">
        <div>
          <h1 className="font-bold text-2xl">Crie sua conta</h1>
          <p className="text-gray-200 mt-1">
            Informe os seus dados pessoais e de acesso
          </p>
        </div>
        <form
          className="mt-5 flex flex-col gap-10"
          onSubmit={(e) =>
            formSubmit({
              email: formData.email,
              name: formData.name,
              password: formData.password,
            }, e)
          }
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-gray-400">
              NOME
            </label>
            <NameInput formData={formData} setFormData={setFormData} />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-gray-400">
              E-MAIL
            </label>
            <EmailInput formData={formData} setFormData={setFormData} />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-gray-400">
              SENHA
            </label>
            <PasswordInput formData={formData} setFormData={setFormData} />
          </div>

          <div className="relative w-full">
            <button className="bg-orange-dark text-white w-full text-left p-4 rounded-xl cursor-pointer">
              Cadastrar
            </button>
            <MoveRight className="absolute right-4 top-1/2 -translate-y-1/2 text-white  " />
          </div>
        </form>
        <div>
          <p className="text-gray-200">Já tem uma conta?</p>
          <div className="relative w-full mt-5 ">
            <button
              className="text-orange-dark w-full text-left p-4 rounded-xl border border-orange-dark cursor-pointer"
              onClick={() => navigate("/sign-in")}
            >
              Acessar
            </button>
            <MoveRight className="absolute right-4 top-1/2 -translate-y-1/2 text-orange-dark   " />
          </div>
        </div>
      </div>
    </div>
  );
}
