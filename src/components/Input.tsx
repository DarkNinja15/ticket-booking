import { useState } from "react";
import useStore from "../store/store";

const Input = () => {
  const [value, setValue] = useState<string>("");
  const { bookSeats } = useStore();

  return (
    <div className="flex gap-2">
      {/* // Input field for entering the number of seats to book */}
      <input
        type="text"
        placeholder="Enter seats"
        value={value || ""}
        className="input input-bordered w-full max-w-xs"
        onChange={(e) => setValue(e.target.value)}
      />

      {/* // Button to reserve the seats */}
      <button
        className="btn bg-white text-black"
        onClick={() => {
          if (isNaN(parseInt(value))) {
            alert('Please enter a valid number.');
            return;
          }

          bookSeats(parseInt(value));
          setValue("");
        }}>
        Reserve
      </button>
    </div>
  );
};

export default Input;
