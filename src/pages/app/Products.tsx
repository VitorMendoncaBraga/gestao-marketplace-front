import { FilterProducts } from "@/components/FilterProducts";
import { ProductsList } from "@/components/ProductsList";

export function Products() {
  return (
    <div className="bg-shape flex-1 py-5 px-70">
      <div className="my-5 w-full flex-1 ">
        <div className="mt-10">
          <h1 className="font-bold text-2xl font-poppins">Seus produtos</h1>
          <p className="text-gray-300 mt-2 font-poppins">Acesse e gerencie a sua lista de produtos à venda</p>
        </div>
        <div className="flex gap-10 mt-10 font-(--font-poppins)">
          <FilterProducts />
          <ProductsList />
        </div>
      </div>
    </div>
  );
}
