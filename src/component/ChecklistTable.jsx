/* eslint-disable react/prop-types */
import MvrTable from "./MvrTable";
import KocsTable from "./KocsTable";

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
    //
  }

  if (modalType === "hsosTable") {
    //
  }

  if (modalType === "kocsTable") {
    return (
        <KocsTable
          data={data}
          column={column}
          title={title}
          from={from}
          to={to}
        />
      );
  }
};

export default ChecklistTable;
