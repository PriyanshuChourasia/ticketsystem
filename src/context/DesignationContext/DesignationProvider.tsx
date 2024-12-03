import { useState } from "react";
import { DesignationContext } from "./DesignationContext";
import { IDesignationInterface } from "../../interfaces/DesignationInterface/DesignationInterface";

const DesignationProvider = ({ children }: any) => {
  const [designationDetail, setDesignationDetail] = useState<
    IDesignationInterface[]
  >([]);


  return (
    <DesignationContext.Provider
      value={{
        designationDetail,
        setDesignationDetail,
      }}
    >
      {children}
    </DesignationContext.Provider>
  );
};

export default DesignationProvider;
