export default function Middle() {
  return (
    <div className="md:bg-white h-fit rounded-2xl grid grid-cols-2 justify-around">
      <a
        href="/"
        className="bg-black text-white rounded-l-lg flex items-center h-16 py-3 shadow-md border-black border-2"
      >
        <p className="text-lg tracking-tight font-normal text-center w-full">
          check out my work!
        </p>
      </a>
      <a
        href="/"
        className="bg-white text-black rounded-r-lg flex items-center h-full py-3 shadow-md border-black border-2"
      >
        <p className="text-lg tracking-tight font-normal text-center w-full">
          contact
        </p>
      </a>
    </div>
  );
}
