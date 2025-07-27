import React from "react";
import NavBar from "../common/NavBar";
import Table from "../common/Table";
import { FaPen } from "react-icons/fa";
import TableHeader from "../common/TableHeader";
import Tablebody from "../common/Tablebody";

export default function View_Testimonial() {
  const center = "Sub Category";
  const last = "View";
  const linkName = "View Testimonial";
  const firlsCol = "Title";
  const middleCol = "Image";
  const CenterCol = "Description";

  const secoundCol = "Rating";
  const thirdCol = "Order";
  const forthCol = "Status";
  const fiveCol = "Action";

  const firlsRow = "Neil Sims";
  const middleRow = <img src="images/iso.png" width={40} />;
  const CenterRow = "CEO Of SunPark";
  const secoundRow = "5";
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
              middleCol={middleCol}
              CenterCol={CenterCol}
              secoundCol={secoundCol}
              thirdCol={thirdCol}
              forthCol={forthCol}
              fiveCol={fiveCol}
            />

            <Tablebody
              firlsRow={firlsRow}
              secoundRow={secoundRow}
              thirdRow={thirdRow}
              middleRow={middleRow}
              CenterRow={CenterRow}
            />
            <Tablebody
              firlsRow={firlsRow}
              secoundRow={secoundRow}
              thirdRow={thirdRow}
              middleRow={middleRow}
              CenterRow={CenterRow}
              btn={btn}
            />
          </table>
        </div>
      </div>
    </>
  );
}
