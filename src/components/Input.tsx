const Input = () => {
    return <div className="flex gap-2">
        <input type="text" placeholder="Enter seats" className="input input-bordered w-full max-w-xs" />
        <button className="btn bg-white text-black">Reserve</button>
    </div>
};

export default Input;