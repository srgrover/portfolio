import { useState } from "react";
import type { Project } from "../../types/Project.type";
import { ProjectItem } from "./ProjectItem";

interface Props {
    projects: Project[];
}

export function filterProjects(filter: string, projects: Project[]): Project[] {
    return projects.filter((proyect: Project) => proyect.name.includes(filter));
}

export default function Projects({ projects }: Props) {
    const [projectList, setProjectList] = useState<Project[]>(projects);

    return (
        <div className="flex flex-col gap-6">
            <form>
                <input type="email" id="email" aria-describedby="helper-text-explanation" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Buscador" onChange={($event) => setProjectList(filterProjects($event.target.value, projects))} />
                <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500">Introduce el nombre del repositorio que quieras y la lista se actualizará automáticamente.</p>
            </form>
            <p className="text-sm text-gray-500">NOTA: La mayoria de los repositorios que se muestran aquí son de ejemplo y algunos forks. Esta sección sigue en construcción y trabajaré para mejorarla. De momento se puede ver el funcionamiento de la página hasta que solo muestre los repositorios funcionales.</p>

            <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                    <pre className="flex gap-2 items-center text-sm text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide-icon lucide lucide-git-fork"><circle cx="12" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><circle cx="18" cy="6" r="3"></circle><path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"></path><path d="M12 12v3"></path></svg>
                        { projectList.length } repositorios
                    </pre>
                    <a href="https://github.com/srgrover?tab=repositories" target="_blank" rel="noopener">
                        <pre className="flex gap-2 items-center text-sm text-gray-500">
                            View on GitHub
                            <svg
                                            stroke="currentColor"
                                            width={12}
                                            height={12}
                                            strokeWidth="3"
                                            className="lucide-icon lucide lucide-arrow-up-right"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg
                                        >
                        </pre>
                    </a>
                </div>
                    {
                        !projects.length &&
                        (
                            <p className="text-sm text-gray-500 rounded-md border border-neutral-300 px-3 py-4">
                                No hay proyectos disponibles para mostrar. Puedes visitar mis repositorios en <a href="https://github.com/srgrover?tab=repositories" className="underline hover:text-black">GitHub</a>.
                            </p> 
                        )
                    }
                    {
                        projectList.length && projects.length
                        ?   projectList.map((project: Project) => (
                                <ProjectItem project={ project } key={ project.id } />
                            ))
                        :   <p className="text-sm text-gray-500 rounded-md border border-neutral-300 px-3 py-4">
                                No hay repositorios que coincidan con tu búsqueda.
                            </p>
                    }
            </div>
        </div>
    );
}