import { Header, LogsSubHeader, Navigation } from "../components"
import {ListItem} from "./"

export default function Logs() {
  return (
    <div className="flex">
      <Navigation />
      <div className="w-full flex flex-col lg:flex-row">
        <section className="lg:w-3/4">
          <section className="p-8 ">
            <Header
              title="Timekeeping"
              subtitle="Monitor the status of your workers"
            />
          </section>
          <div className="bg-slate-200 p-8 flex flex-col gap-2">
            <LogsSubHeader />
            <div className="flex justify-between items-center">
              <h2>Tasks</h2>
              <h4>See All Tasks {">"}</h4>
            </div>
            <ul className="flex flex-col gap-2">
              <ListItem />
              <ListItem />
              <ListItem />
            </ul>
          </div>
        </section>

        <section className="lg:w-1/4">2</section>
      </div>
    </div>
  )
}
