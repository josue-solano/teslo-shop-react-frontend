import { Outlet } from "react-router";

import { CustomHeader } from "../components/CustomHeader";
import { CustomFooter } from "@/shop/components/CustomFooter";

export const ShopLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomHeader />
      <Outlet />
      <CustomFooter />
    </div>
  );
};
