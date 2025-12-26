import { KeyRound, Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

interface PasswordInputProps {
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

export function PasswordInput({setFormData,formData} : PasswordInputProps) {
  const [viewPassword, setViewPassword] = useState(false);
  return (
    <div className="relative">
      <KeyRound
        className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-300"
        size={18}
      />
      <input
        type={viewPassword ? 'text': 'password' }
        placeholder="Sua senha de acesso"
        className="h-10 w-full border-b border-b-gray-200 pl-8 px-2 outline-0"
        onChange={(e) => setFormData({...formData, password: e.target.value})}
      />
      {viewPassword ? (
        <Eye
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
          size={18}
          onClick={() => setViewPassword(!viewPassword)}
        />
      ) : (
        <EyeClosed
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
          size={18}
          onClick={() => setViewPassword(!viewPassword)}
        />
      )}
    </div>
  );
}
