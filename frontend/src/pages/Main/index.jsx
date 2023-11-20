import { SearchInput } from "./components/SearchInput";
import { useGetProducts } from "../../lib/react-query/queries";
import ProductList from "./components/ProductList";
import { useState } from "react";

export default function Main() {
  const {
    data,
    isPending: isProductsLoading,
    isError: isProductsError,
  } = useGetProducts();

  const [searchText, setSearchText] = useState("");
  if (isProductsError) {
    return (
      <>
        <div>
          <p>Something went wrong</p>
        </div>
      </>
    );
  }

  return (
    <section className="px-2">
      {/* ----HEADER----- */}
      <header className="px-10 py-5">
        <div className="flex flex-wrap items-center justify-center gap-4 xl:justify-between">
          <div className="">
            <h1 className="text-2xl font-medium leading-tight max-sm:text-center  sm:text-3xl ">
              <span className="font-semibold text-clrOrangePeel ">
                Shoppingify
              </span>
              allows you take your <br /> shopping list wherever you go
            </h1>
          </div>

          <div className="">
            <SearchInput
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/*-----MAIN---- */}
      <div className="flex-1">
        <div className="px-10 max-sm:px-4">
          {isProductsLoading ? (
            <p className="text-center">Loading....</p>
          ) : (
            <ProductList
              searchText={searchText}
              products={data?.data?.payload?.products}
            />
          )}
        </div>
      </div>
    </section>
  );
}
