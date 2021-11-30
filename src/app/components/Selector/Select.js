export const Select = ({ mode, setMode, data }) => {
  return (
    <div className="relative w-52 shadow-lg">
      <svg
        className="w-6 h-6 pointer-events-none absolute inset-0 m-auto mr-3 text-gray-700  dark:text-gray-50 "
        fill="currentColor"
        viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>

      <select
        value={mode}
        // onChange={(e) => setMode(e.target.value)}
        className="w-full cursor-pointer focus:outline-none pl-2 py-2 appearance-none flex items-center h-12 border-2 rounded border-indigo-500 bg-white hover:bg-gray-200  dark:border-gray-50 text-sm leading-5 dark:bg-gray-900 dark:text-gray-50">
        {data.map((item, i) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
