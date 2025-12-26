import { getProfile } from "@/api/getProfile";
import Logo from "@/assets/Logo.svg";
import { formatUserProfileName } from "@/utils/formatUserProfileName";
import { useQuery } from "@tanstack/react-query";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function NavBar() {
  const { data: userProfile } = useQuery({
    queryKey: ["me"],
    queryFn: getProfile,
    retry: false,
  });
  const navigate = useNavigate()
  return (
    <div className="flex justify-between p-4 bg-background border-b border-b-shape">
      <img src={Logo} alt="" />
      <div className="flex gap-7 items-center">
        <div className="relative">
          <Plus className="absolute text-white top-1/2 -translate-y-1/2 left-2" />
          <button className="px-5 py-2 pl-9 rounded-xl bg-orange-dark text-white font-bold cursor-pointer" onClick={() => navigate('/new-product')}>
            Novo Produto
          </button>
        </div>
        <div className="rounded-full border border-orange-dark bg-background flex justify-center items-center h-10 w-10 cursor-pointer">
          <p>{userProfile && formatUserProfileName(userProfile?.userProfile.name)}</p>
        </div>
      </div>
    </div>
  );
}
