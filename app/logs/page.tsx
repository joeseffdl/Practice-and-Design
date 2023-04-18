import { Header, LogsSubHeader } from "../components";
import { ListItem } from "./";

export default function Logs() {
  return (
    <div className="w-full flex flex-col xl:flex-row">
      <section className="xl:w-3/4">
        <section className="p-8 ">
          <Header
            title="Timekeeping"
            subtitle="Monitor the status of your workers"
          />
        </section>
        <div className="bg-slate-200 p-8 flex flex-col gap-2">
          <LogsSubHeader />
          <div className="flex justify-between items-center py-4 px-2">
            <h2 className="font-semibold text-lg">Tasks</h2>
            <h4 className="text-xs">See All Tasks {">"}</h4>
          </div>
          <ul className="flex flex-col gap-2">
            <ListItem />
            <ListItem />
            <ListItem />
          </ul>
        </div>
      </section>

      <section className="hidden xl:w-1/4"></section>
    </div>
  );
}
