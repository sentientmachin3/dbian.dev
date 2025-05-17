import { DateTime } from "luxon"
import { SectionTitle } from "./SectionTitle"

type WorkExperience = {
    start: DateTime
    end: DateTime | "now"
    workName: string
    workplace: string
}

export function WorkHistory({
    experiences,
}: {
    experiences: WorkExperience[]
}) {
    const format = (e: WorkExperience) => {
        const end = e.end === "now" ? "now" : e.end.toFormat("LLL yyyy")
        return `${e.start.toFormat("LLL yyyy")} - ${end}: ${e.workName} @ ${e.workplace}`
    }

    return (
        <>
            <SectionTitle title={"Professional Experiences"} />
            <ul>
                {experiences.map((e, i) => (
                    <li key={`workexp_${i}`}>{format(e)}</li>
                ))}
            </ul>
        </>
    )
}
