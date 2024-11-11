import Icons from "../icons/Icon";

const ScreenLoader = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-5">
          {Icons.ticketIcon}
          <h3 className="font-mono font-bold">T.M.S.</h3>
        </div>
        <div>
          <h4 className="font-light">Loading.....</h4>
        </div>
      </div>
    </div>
  );
};

export default ScreenLoader;
