
import Input from "./components/Input";
import useStore from "./store/store";

const App = () => {
  const { coach } = useStore();

  return <div>
    <h1 className="text-2xl font-bold text-center pt-4">Train Seat Reservation</h1>

    <div className="flex justify-evenly items-center">
      <div className="flex">
        <Input />
      </div>

      <div className="pt-4">
        {coach.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex gap-x-4 items-center justify-center mb-4">
            {row.map((seat, seatIndex) => (
              <div key={seatIndex}>

                <div className={`p-4 border border-gray-300 rounded-md text-center w-16 h-16 text-black ${seat.available && "bg-green-500"} ${!seat.available && "bg-red-500"} `}>
                  {seat.seatNumber}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
};

export default App;