export default function LogsSubHeader() {
  return (
    <section className="flex flex-col justify-between lg:flex-row gap-4 mt-4 font-semibold">
          <div className="lg:w-1/4 bg-indigo-500 rounded-lg">
              <div className="flex flex-col p-4">
                  <h6>Some Image</h6>
                  <h6>There are no milestones for today</h6>
                  <p>You can create milestones</p>
                  <button >Lorem Ipsum</button>
              </div>
      </div>
          <div className="lg:w-3/4 bg-white rounded-lg flex">
              <div className="lg:w-2/3 flex flex-col p-4 gap-4">
                  <h4>Project estimate</h4>
                  <div className="flex gap-2">
                      <div>1</div>
                      <div>2</div>
                      <div>3</div>
                  </div>
                  <div className="flex justify-around items-center">
                      <p>On time completion rate:</p>
                      <h3>2</h3>
                      <h6>3</h6>
                  </div>
              </div>
              <div className="lg:w-1/3 flex flex-col gap-4">
                  <div className="flex gap-4">
                      <div>Img</div>
                      <h4>Our team</h4>
                  </div>
                  <p>Team members</p>
                  <div>Imgs</div>
                  <div className="flex gap-4 items-center">
                      <div className="flex flex-col">
                          <div>Hours</div>
                          <div>82%</div>
                      </div>
                      <div className="flex items-center justify-center">
                          Img
                      </div>
                  </div>
                  
              </div>
      </div>
    </section>
  )
}
