import { Header, LogsSubHeader } from "../components";
import { ListItem, WeatherGridItem } from "./";

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

      <section className="hidden gap-2 xl:flex flex-col items-center p-5 w-1/4">
        <div className="w-full h-1/5 flex flex-col items-center bg-slate-200 rounded-3xl">
          <div className="bg-slate-400 text-center w-1/3 rounded-b-full p-1 text-xs font-semibold">
            Today
          </div>
          <div className="w-full h-full flex border-black">
            <div className="w-2/5 flex items-center justify-center">
              <h6 className="bg-white rounded-full w-20 h-20 border-2 shadow-amber-200 shadow-inner" />
            </div>
            <div className="w-3/5 flex flex-col items-center justify-center gap-y-3 divide-y divide-slate-500 py-5">
              <div className="font-bold text-6xl text-white">
                23<span className="text-slate-500 text-4xl">/13</span>
              </div>
              <div className="text-xs font-semibold">Lorem ipsum dolor</div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-full h-full flex flex-col items-center bg-slate-200 rounded-3xl gap-2 py-3 px-8">
            <div className="w-full flex justify-center items-center">
              <div>
                My <span>home</span>
              </div>
            </div>
            <div className="flex w-full rounded-3xl border-2 border-slate-500 bg-slate-800">
              <div className="flex justify-around items-center w-full rounded-3xl m-0.5 bg-green-500">
                <h6 className=" bg-white rounded-full w-8 h-8 border-2 shadow-amber-200 shadow-inner" />
                <div className="font-semibold text-white text-left w-1/2">
                  Energy
                </div>
              </div>
              <div className="w-full flex flex-col text-white p-3 justify-center">
                <div className="font-semibold text-sm">15.2 kWh</div>
                <div className="text-[10px] font-semibold text-slate-300">
                  2x Device turn on
                </div>
              </div>
            </div>
            <div className="p-5 gap-2 w-full h-full bg-slate-800 rounded-3xl grid grid-cols-2 border border-white ">
              <WeatherGridItem />
              <WeatherGridItem />
              <WeatherGridItem />
              <WeatherGridItem />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
