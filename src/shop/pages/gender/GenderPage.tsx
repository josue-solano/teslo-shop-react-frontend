import { useParams } from "react-router";

import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomJumbotron } from "@/shop/components/CustomJumbotron";
import { ProductsGrid } from "@/shop/components/ProductsGrid";

import { useProducts } from "@/shop/hooks/useProducts";

export const GenderPage = () => {
  const { gender } = useParams();
  const { data, isLoading } = useProducts();

  const genderLabel =
    gender === "men" ? "Hombres" : gender === "women" ? "Mujeres" : "Niños";

  if (isLoading) return <div>Loading</div>;

  return (
    <>
      <CustomJumbotron title={`Productos para ${genderLabel}`} />
      <ProductsGrid products={data?.products || []} />
      <CustomPagination totalPages={data?.pages || 1} />
    </>
  );
};
