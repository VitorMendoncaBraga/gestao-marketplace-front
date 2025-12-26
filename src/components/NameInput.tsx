import { UserRound } from "lucide-react";

interface NameInputProps {
    formData: {
        name: string,
        email: string,
        password: string
    }
    setFormData: Function
}

export function NameInput({setFormData, formData} : NameInputProps) {
  return (
   <div className="relative">
      <UserRound className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-300" size={18} />

      <input
        type="text"
        placeholder="Seu nome completo"
        className="h-10 w-full border-b  border-b-gray-200 pl-8 px-2 outline-0"
        onChange={(e) => setFormData({...formData, name: e.target.value})}
      />
    </div>
  )
}


