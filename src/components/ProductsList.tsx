import { getProducts } from "@/api/getProducts";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { Product } from "./Product";

export function ProductsList() {
  const [params] = useSearchParams();

  const page = params.get("page") ?? '1';
  const title = params.get("title") ?? undefined;
  const situation = params.get("situation") ?? undefined;

  const { data, isLoading } = useQuery({
    queryKey: ["products", { page, title, situation }], 
    queryFn: () => getProducts({ page, title, situation }),
  });

  if (isLoading) return <div>Carregando...</div>;

  // Como o retorno da API é { products: [...] }, acessamos data.products
  const productsList = data?.products ?? [];

  return (
    <div className={`flex-1 h-full ${productsList.length == 0 ? 'flex justify-center items-center' : 'grid grid-cols-2' }`}>
      {productsList.length === 0 ? (
        <p>Sem produtos cadastrados</p>
      ) : (
        productsList.map((product) => (
          <Product product={product} key={product._id} />
        ))
      )}
    </div>
  );
}