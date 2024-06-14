/* eslint-disable react/prop-types */
import MvrTable from "./MvrTable";
import KocsTable from "./KocsTable";
import HsosTable from "./HsosTable";
import HocsTable from "./HocsTable";

const ChecklistTable = ({ data, column, title, from, to, modalType }) => {
  if (modalType === "mvrTable") {
    return (
      <MvrTable
        data={data}
        column={column}
        title={title}
        from={from}
        to={to}
      />
    );
  }

  if (modalType === "hocsTable") {
    return (
      <HocsTable
        data={data}
        column={column}
        title={title}
      />
    );
  }

  if (modalType === "hsosTable") {
    return (
      <HsosTable
        data={data}
        column={column}
        title={title}
      />
    );
  }

  if (modalType === "kocsTable") {
    return (
      <KocsTable
        data={data}
        column={column}
        title={title}
      />
    );
  }
};

export default ChecklistTable;
