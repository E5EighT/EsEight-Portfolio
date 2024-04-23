import { s8cyber, s8project, s8techzStore } from "../data/images"
import { s8Cyber, s8Project, s8TechzStore } from "../data/titleProjects"
import Gallery from "./Gallery"

        

function Projects() {
  return (
  <section className="bg-neutral-100 dark:bg-zinc-950 h-auto py-10">
    <h2 className="text-teal-500 text-center font-bold text-4xl">Projects</h2>
      <div className="flex flex-col container mx-auto pt-5 justify-center items-center">
      

      <Gallery images={s8techzStore} title={s8TechzStore}/>
     <Gallery images={s8cyber} title={s8Cyber}/>

     <Gallery images={s8project} title={s8Project}/>

    </div>
  </section>
  )
}

export default Projects