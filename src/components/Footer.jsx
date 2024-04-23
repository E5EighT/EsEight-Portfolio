import { BsGithub, BsTwitterX } from "react-icons/bs"

function Footer() {
  return (
    <footer className="bg-neutral-100  dark:bg-zinc-950 flex justify-between p-5">
        <span className="font-bold text-teal-500">
            EsEight Portfolio 2024.
        </span>
        <div className="flex">
        <a className="pr-5 text-teal-600 hover:text-teal-500" target="_blank" href="https://x.com/e5eightz"><i className="text-3xl"><BsTwitterX/></i></a>
        <a className="text-teal-600 hover:text-teal-500" target="_blank" href="https://github.com/e5eight"><i className="text-3xl"><BsGithub/></i></a>
        </div>
    </footer>
  )
}

export default Footer