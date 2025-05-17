"use client"

import { useEffect, useState } from "react"
import { ListSection, Profile, WorkHistory } from "../components"
import { languages, skills, workExperiences } from "./data"

export default function Home() {
    const [isMobile, setIsMobile] = useState(true)

    useEffect(() => {
        const handleResize = () => {
            if (window !== undefined) {
                setIsMobile(window.innerWidth < 1200)
            }
        }
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <>
            <div
                className={`flex ${isMobile ? "flex-col" : "flex-row h-full"}`}
            >
                <div
                    className={`${isMobile ? "w-full" : "h-full w-[25%]"}  bg-main/20`}
                >
                    <Profile />
                </div>
                <div>
                    <div className={"flex flex-col px-12 pt-20"}>
                        <div className={"flex flex-col gap-4"}>
                            <WorkHistory experiences={workExperiences} />
                            <ListSection
                                title={"Skills and technologies"}
                                elements={skills}
                            />
                            <ListSection
                                title={"Languages"}
                                elements={languages}
                            />
                        </div>
                        <div className={"pt-4"}>
                            <div>
                                Check out my side projects on{" "}
                                <a
                                    className="underline"
                                    href="https://github.com/sentientmachin3"
                                    target="_blank"
                                >
                                    Github
                                </a>
                            </div>
                            <div>
                                I sometimes write about anything that passes
                                through my mind at{" "}
                                <a
                                    className="underline"
                                    href="https://thoughts.dbian.dev"
                                >
                                    thoughts.dbian.dev
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
