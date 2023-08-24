import React, { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { PiCalendarCheckBold } from "react-icons/pi";

const GroceryItemComponent = ({ item, handleDeleteItem }) => {
  const [isClick, setIsClick] = useState(true);

  return (
    <>
      <tr>
        <td className="p-3"> {item.name}</td>
        <td className="p-3"> {isClick ? "On Process" : item.status}</td>

        <td>
          <button
            onClick={() => setIsClick()}
            type="submit"
            className="btn btn-success "
          >
            <PiCalendarCheckBold />
          </button>
          <button
            onClick={() => handleDeleteItem(item.id)}
            type="submit"
            className="btn btn-danger "
          >
            <BsFillTrashFill />
          </button>
        </td>
      </tr>
    </>
  );
};

export default GroceryItemComponent;
