import HistoryList from "./components/HistoryList";
import { useGetCartHistory } from "../../lib/react-query/queries";

export default function History() {
  const {
    data,
    isPending: isCartHistoryLoading,
    isError: isCartHistoryError,
  } = useGetCartHistory();

  const cartHistoryList = data?.data?.payload?.cartHistory;

  if (isCartHistoryError) {
    return (
      <>
        <div>
          <p>Something went wrong</p>
        </div>
      </>
    );
  }
  return (
    <section className="pb-20">
      <header className="px-6 py-5">
        <h1 className=" text-2xl font-medium leading-tight lg:text-3xl ">
          <span className="font-semibold ">Shopping history</span>
        </h1>
      </header>
      <main className="px-6 max-xs:px-4">
        {isCartHistoryLoading && <p className="text-center">Loading...</p>}

        {!isCartHistoryLoading && (
          <HistoryList cartHistoryList={cartHistoryList} />
        )}
      </main>
    </section>
  );
}
