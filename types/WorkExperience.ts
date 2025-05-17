import { DateTime } from "luxon"

export type WorkExperience = {
    start: DateTime
    end: DateTime | "now"
    workName: string
    workplace: string
}
