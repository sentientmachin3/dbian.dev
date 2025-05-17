import { ListSection, WorkHistory } from "../components"
import { languages, skills, workExperiences } from "./data"

export default function Home() {
    return (
        <div className={"flex flex-col px-12 pt-20"}>
            <div className={"flex flex-col gap-4"}>
                <WorkHistory experiences={workExperiences} />
                <ListSection
                    title={"Skills and technologies"}
                    elements={skills}
                />
                <ListSection title={"Languages"} elements={languages} />
            </div>
        </div>
    )
}
