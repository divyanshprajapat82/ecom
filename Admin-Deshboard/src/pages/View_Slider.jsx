import React from "react";
import NavBar from "../common/NavBar";
import Table from "../common/Table";
import { FaPen } from "react-icons/fa";
import TableHeader from "../common/TableHeader";
import Tablebody from "../common/Tablebody";

export default function View_Slider() {
  const center = "Slider";
  const last = "View";
  const linkName = "View Slider";
  const firlsCol = "Name";
  const secoundCol = "Image";
  const thirdCol = "Order";
  const forthCol = "Status";
  const fiveCol = "Action";

  const firlsRow = "Neil Sims";
  const secoundRow = <img src="images/iso.png" width={40} />;
  const thirdRow = "1";
  const btn = "Deactive";
  return (
    <>
      <div>
        <NavBar center={center} last={last} />
        <div className="max-w-[1000px] m-auto mt-4 overflow-x-scroll">
          <TableHeader linkName={linkName} />
          <table className="w-full text-left overflow-hidden">
            <Table
              firlsCol={firlsCol}
              secoundCol={secoundCol}
              thirdCol={thirdCol}
              forthCol={forthCol}
              fiveCol={fiveCol}
            />

            <Tablebody
              firlsRow={firlsRow}
              secoundRow={secoundRow}
              thirdRow={thirdRow}
            />
            <Tablebody
              firlsRow={firlsRow}
              secoundRow={secoundRow}
              thirdRow={thirdRow}
              btn={btn}
            />
          </table>
        </div>
      </div>
    </>
  );
}
