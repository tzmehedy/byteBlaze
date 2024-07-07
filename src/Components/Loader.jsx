import { SyncLoader } from "react-spinners";

const Loader = () => {
    return (
      <div className="flex flex-col justify-center items-center min-h-[calc(100vh-135px)]">
        <SyncLoader />
      </div>
    );
};

export default Loader;