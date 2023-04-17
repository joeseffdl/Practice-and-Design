export default function SubHeader() {
  return (
    <section className="flex flex-col justify-between lg:flex-row gap-4 mt-4 font-semibold">
      <div className="flex flex-col gap-2 bg-white border p-4 rounded-lg w-full">
        <h3 className="text-lg ">Hours this week</h3>
        <h2 className="text-3xl flex items-center gap-1">
          40 <span className="text-sm">/hrs</span>
        </h2>
      </div>

      <div className="flex flex-col gap-2 bg-white border p-4 rounded-lg w-full">
        <h3 className="text-lg ">Project completed</h3>
        <h2 className="text-3xl flex items-center gap-1">
          69 <span className="text-sm">%</span>
        </h2>
      </div>

      <div className="flex flex-col gap-2 bg-white border p-4 rounded-lg w-full">
        <h3 className="text-lg ">Tasks in due</h3>
        <h2 className="text-3xl flex items-center gap-1">
          69 <span className="text-sm">/420</span>
        </h2>
      </div>

      <div className="flex flex-col gap-2 bg-white border p-4 rounded-lg w-full">
        <h3 className="text-lg ">Newly assigned tasks</h3>
        <h2 className="text-3xl flex items-center gap-1">
          123 <span className="text-sm"></span>
        </h2>
      </div>
    </section>
  );
}
