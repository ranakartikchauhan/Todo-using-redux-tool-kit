export default function TodoButton({ onClick, text }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex border border-indigo-500 focus:outline-none
                                          focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 justify-center rounded-md py-2 px-4 bg-indigo-600
                                          text-sm font-medium text-white shadow-sm ml-2"
    >
      {text}
    </button>
  );
}
