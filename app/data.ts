import { DateTime } from "luxon"
import { WorkExperience } from "../types"

export const workExperiences: WorkExperience[] = [
    {
        start: DateTime.fromObject({ month: 10, year: 2023 }),
        end: "now",
        workName: "Dee Jungle",
        workplace: "Software Developer",
    },
    {
        start: DateTime.fromObject({ month: 8, year: 2022 }),
        end: DateTime.fromObject({ month: 10, year: 2023 }),
        workplace: "Bit Mobility",
        workName: "Software Developer",
    },
    {
        start: DateTime.fromObject({ month: 10, year: 2020 }),
        end: DateTime.fromObject({ month: 7, year: 2022 }),
        workplace: "Iotinga",
        workName: "Software Developer",
    },
]

export const skills: string[] = [
    "Backend development via GraphQL or REST frameworks like ExpressJS",
    "Relational databases (Postgres, MySQL, MariaDB) and non-relational databases (AWS DynamoDB, CouchDB, Redis)",
    "IoT devices integrations via MQTT",
    "Integrations with modern payment systems (Stripe, Satispay, Paypal)",
    "Front-end web development, in ReactJS, Flask and Angular",
    "Mobile cross-platform applications with React Native",
    "AWS tools and services",
]

export const languages = [
    "Typescript/Javascript",
    "Python",
    "Java",
    "Lua",
    "Golang",
    "C",
]
