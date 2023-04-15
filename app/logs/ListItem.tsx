export default function ListItem() {
    return (
      <li className="p-4 flex items-center justify-around">
        <div className="flex items-center justify-between">
          <div>Btn</div>
          <div className="flex flex-col">
            <div>Start from</div>
            <div>O 9:00 am</div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>Search Inspiration for Project</div>
          <div className="flex justify-between">
            <div>www.dribbble.com</div>
            <div>6 comments</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div>24% complete</div>
          <div>------------</div>
        </div>
        <div className="flex items-center justify-center">
          <button placeholder="Reminder" />
        </div>
      </li>
    )
};
