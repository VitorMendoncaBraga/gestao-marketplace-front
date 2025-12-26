import { app } from "@/lib/axios";

interface getProductsRequest {
  page?: string | null;
  title?: string | null;
  situation?: string | null;
}

interface GetProductsResponse {
  products: {
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
  }[];
}

export async function getProducts({ page, situation, title }: getProductsRequest) {
  // O Axios automaticamente remove campos que são null ou undefined dos params
  const response = await app.get<GetProductsResponse>("/products", {
    params: {
      page,
      title: title || undefined, // Se for string vazia "", vira undefined e o axios ignora
      situation: situation || undefined,
    },
  });

  return response.data;
}