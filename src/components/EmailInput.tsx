import { Mail } from "lucide-react";

interface EmailInputProps {
    formData: {
        name: string
        email: string,
        password: string
    } | {
        email: string,
        password: string
    }
    setFormData: Function
}

export function EmailInput({setFormData,formData}: EmailInputProps) {
  return (
   <div className="relative">
      <Mail className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-300" size={18} />

      <input
        type="email"
        placeholder="Seu e-mail cadastrado"
        className="h-10 w-full border-b border-b-gray-200 pl-8 px-2 outline-0"
        onChange={(e) => setFormData({...formData, email: e.target.value})}
      />
    </div>
  )
}


