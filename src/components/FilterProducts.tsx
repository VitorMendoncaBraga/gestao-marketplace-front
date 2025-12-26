import { Search, Tag } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";

// Definimos o que o formulário contém
interface FilterSchema {
  title: string;
  situation: string;
}

export function FilterProducts() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Pegamos os valores atuais da URL para iniciar o formulário com eles
  const title = searchParams.get("title") ?? "";
  const situation = searchParams.get("situation") ?? "";

  const { register, handleSubmit } = useForm<FilterSchema>({
    defaultValues: {
      title,
      situation,
    },
  });

  function handleFilter({ title, situation }: FilterSchema) {
    setSearchParams((state) => {
      // 1. Sempre que filtrar, resetamos para a página 1
      state.set("page", "1");

      // 2. Se houver título, seta na URL. Se não, remove.
      if (title) state.set("title", title);
      else state.delete("title");

      // 3. Se houver situação, seta na URL. Se não, remove.
      if (situation) state.set("situation", situation);
      else state.delete("situation");

      return state;
    });
  }

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm h-fit">
      <h1 className="text-xl font-bold text-gray-200">Filtrar</h1>
      
      <form onSubmit={handleSubmit(handleFilter)}>
        <div className="relative">
          <Search className="absolute top-7 text-gray-200 w-6 h-6" />
          <input
            {...register("title")} // Registra o input
            type="text"
            placeholder="Pesquisar"
            className="w-full outline-none border-b mt-5 py-2 px-8 placeholder:text-gray-200 text-gray-200 focus:border-orange-500 transition-colors"
          />
        </div>

        <div className="relative mt-4">
          <Tag className="absolute top-7 text-gray-200 w-6 h-6" />
          <select 
            {...register("situation")} // Registra o select
            className="w-full outline-none border-b border-b-gray-200 mt-5 py-2 px-8 text-gray-200 transition-colors  bg-transparent"
          >
            <option value="">Status</option>
            <option value="annunciated">Anunciado</option>
            <option value="sold">Vendido</option>
          </select>
        </div>

        <button
          type="submit"
          className="mt-10 p-4 text-white cursor-pointer rounded-xl bg-orange-600 hover:bg-orange-700 w-full transition-colors shadow-md"
        >
          Aplicar filtro
        </button>
      </form>
    </div>
  );
}