export default function HeaderComponent() {
    return (
      <section className="flex flex-col lg:flex-row justify-between gap-4">
        <div className="flex flex-col">
          <p className="text-sm text-slate-500 font-semibold">
            Good Morning, User!
          </p>
          <h2 className="text-xl lg:text-3xl font-semibold">Dashboard</h2>
        </div>
        <div>
          <input
            type="search"
            className="flex items-center rounded-full px-2 py-1"
            placeholder="Search"
          />
        </div>
      </section>
    )
};
