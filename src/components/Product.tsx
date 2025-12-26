import { formatPrice } from "@/utils/formatPrice";

interface ProductProps {
  product: {
    _id: string;
    props: {
      categories: string[];
      createdAt: string;
      description: string;
      price: number;
      situation: string;
      title: string;
      userId: string;
    };
  };
}

const situationMap: Record<string, { name: string; class: string }> = {
  sold: {
    name: "Vendido",
    class: "bg-green-700",
  },
  annunciated: {
    name: "Anunciado",
    class: "bg-blue-400",
  },
};

const categoryMap: Record<
  string,
  { bg: string; "text-color": string; name: string }
> = {
  toy: {
    bg: "bg-gray-500",
    "text-color": "text-white",
    name: "Brinquedo",
  },
  electronics: {
    bg: "bg-gray-500",
    "text-color": "text-white",
    name: "Eletrônico",
  },
};

export function Product({ product }: ProductProps) {
  const { title, price, description, categories, situation } = product.props;

  // Get situation config or a default if not found
  const sitConfig = situationMap[situation] || { name: situation, class: "bg-gray-400" };

  return (
    <div className="max-w-sm overflow-hidden rounded-2xl border border-zinc-200 shadow-sm p-1 bg-white ">
      <div className="relative ">
        <img
          className="w-full aspect-square object-cover h-50 rounded-2xl"
          src={`http://localhost:3333/uploads/${product._id}.jpg`}
          alt={title}
        />
        
        {/* Badges Container */}
        <div className="flex gap-2 items-center absolute top-2 right-2">
          {/* Situation Badge */}
          <div className={`px-3 py-1 rounded-full text-label uppercase tracking-wider font-bold text-white ${sitConfig.class}`}>
            {sitConfig.name}
          </div>

          {/* Categories Badges */}
          {categories.map((catKey) => {
            const config = categoryMap[catKey] || {
              bg: "bg-gray-500",
              "text-color": "text-white",
              name: catKey,
            };
            return (
              <div
                key={catKey}
                className={`px-3 py-1 rounded-full text-label uppercase tracking-wider font-bold ${config.bg} ${config["text-color"]}`}
              >
                {config.name}
              </div>
            );
          })}
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center font-bold text-zinc-900">
          <p className="truncate mr-2 text-title-sm">{title}</p>
          <p className="">
            {formatPrice(price)}
          </p>
        </div>
        <div className="mt-1">
          <p className="text-zinc-500 text-sm line-clamp-2 leading-relaxed max-h-75 ">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
