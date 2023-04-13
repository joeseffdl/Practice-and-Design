import Navigation from "../Navigation"
import { HeaderComponent, MainContent, SubHeaderComponent } from "./"

export default function Dashboard() {
  return (
    <div className="flex">
      <Navigation />
      <main className="w-full">
        <section className="bg-gray-200 p-8">
          <HeaderComponent />
          <SubHeaderComponent />
        </section>
        <section className="p-8 flex flex-col lg:flex-row gap-5">
          <MainContent />
        </section>
      </main>
    </div>
  )
}
