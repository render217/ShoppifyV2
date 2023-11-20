import ClipLoader from "react-spinners/ClipLoader";
export default function FullSpinner() {
  return (
    <>
      <div className="grid h-screen place-content-center">
        <ClipLoader color="#F9A109" loading={true} size={50} />
      </div>
    </>
  );
}
