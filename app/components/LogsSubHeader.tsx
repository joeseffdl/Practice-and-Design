export default function LogsSubHeader() {
  return (
    <section className="flex flex-col justify-between lg:flex-row gap-4 mt-4 font-semibold">
      <div className="lg:w-1/4 bg-indigo-500 rounded-2xl">
        <div className="flex flex-col gap-2 p-4 h-full items-center justify-end text-center text-white">
          <h6 className="bg-white rounded-full w-16 h-16 border-2 shadow-red-500 shadow-inner"></h6>
          <h6 className="text-sm">There are no milestones for today 👍</h6>
          <p className="text-xs font-thin">You can create milestones</p>
          <button className="rounded-lg py-2 px-4 bg-white text-xs w-fit text-black">
            + Lorem Ipsum
          </button>
        </div>
      </div>
      <div className="lg:w-3/4 bg-white rounded-2xl flex flex-col lg:flex-row justify-center gap-4  divide-y-2 lg:divide-x-2">
        <div className="lg:w-3/5 flex flex-col justify-center p-4 lg:py-4  gap-4">
          <h4>Project estimate</h4>
          <div className="flex flex-col lg:flex-row gap-2">
            <div className="bg-black rounded-xl w-full drop-shadow-lg">
              <div className="flex flex-col w-full items-center h-full justify-center p-2 lg:p-4 text-white">
                <h6 className="bg-white rounded-full w-5 h-5 border-2 shadow-red-500 shadow-inner"></h6>
                <div className="font-thin text-sm lg:text-base">Projects</div>
                <div className="font-semibold text-sm lg:text-base">69</div>
              </div>
            </div>
            <div className="bg-sky-500 rounded-xl w-full drop-shadow-lg">
              <div className="flex flex-col w-full items-center h-full justify-center p-2 lg:p-4 text-white">
                <h6 className="bg-white rounded-full w-5 h-5 border-2 shadow-red-500 shadow-inner"></h6>
                <div className="font-thin text-sm lg:text-base">Assigned</div>
                <div className="font-semibold text-sm lg:text-base">42</div>
              </div>
            </div>
            <div className="bg-white rounded-xl w-full drop-shadow-lg">
              <div className="flex flex-col w-full items-center h-full justify-center p-2 lg:p-4 ">
                <h6 className="bg-white rounded-full w-5 h-5 border-2 shadow-red-500 shadow-inner"></h6>
                <div className="font-thin text-sm lg:text-base">Completed</div>
                <div className="font-semibold text-sm lg:text-base">123</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="font-thin text-xs lg:text-sm">
              On time completion rate:
            </p>
            <div className="flex gap-2">
              <h3 className="font-semibold lg:text-lg text-base">62 %</h3>
              <h6 className="lg:text-xs text-[10px] bg-indigo-500 py-1 px-2 text-white rounded-lg">
                3.5%
              </h6>
            </div>
          </div>
        </div>
        <div className="lg:w-1/4 flex flex-col justify-center items-center lg:items-start p-4 gap-4">
          <div className="flex items-center gap-2">
            <h6 className="bg-white rounded-full w-5 h-5 border-2 shadow-red-500 shadow-inner"></h6>
            <h4>Our team</h4>
          </div>
          <p className="font-thin text-xs">Team members</p>
          <div className="relative w-5 h-5 ">
            <h6 className="absolute bg-white rounded-full w-5 h-5 border-2 shadow-sky-500 shadow-inner"></h6>
            <h6 className="absolute left-3 bg-white rounded-full w-5 h-5 border-2 shadow-fuchsia-500 shadow-inner"></h6>
            <h6 className="absolute left-6 bg-white rounded-full w-5 h-5 border-2 shadow-emerald-500 shadow-inner"></h6>
          </div>
          <div className="flex p-2 gap-4 justify-around items-center border rounded-xl">
            <div className="flex flex-col items-center justify-center">
              <div className="text-xs font-thin">Hours</div>
              <div>82</div>
            </div>
            <h6 className="bg-white rounded-full w-10 h-10 border-2 shadow-amber-500 shadow-inner"></h6>
          </div>
        </div>
      </div>
    </section>
  );
}
