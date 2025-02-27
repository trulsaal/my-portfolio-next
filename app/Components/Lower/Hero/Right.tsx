export default function Right() {
  return (
    <div className="md:bg-white gap-4 h-fit rounded-2xl flex flex-col justify-around p-4">
      <a
        href="/"
        className="bg-black text-white rounded-full flex items-center h-fit py-3 shadow-sm border-black border-2"
      >
        <p className="text-normal tracking-tight font-bold text-center w-full">
          check out my work
        </p>
      </a>
      <a
        href="/"
        className="bg-white text-black rounded-full flex items-center h-fit py-3 shadow-sm border-black border-2"
      >
        <p className="text-normal tracking-tight font-bold text-center w-full">
          contact
        </p>
      </a>
    </div>
  );
}
