function InputHeader() {
  return (
    <div className="relative ml-5 mr-5">
      <svg
        className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        placeholder="Search"
        className="w-full h-10 py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white "
      />
    </div>
  );
}

export default InputHeader;
