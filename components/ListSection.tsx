import { SectionTitle } from "./SectionTitle"

export function ListSection({
    elements,
    title,
}: {
    elements: string[]
    title: string
}) {
    return (
        <>
            <SectionTitle title={title} />
            <ul>
                {elements.map((e, i) => (
                    <li key={`list_section_${i}`}>{e}</li>
                ))}
            </ul>
        </>
    )
}
