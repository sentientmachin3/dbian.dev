"use client"

import { ListSection, Profile, WorkHistory } from "../components"
import { languages, skills, workExperiences } from "./data"

export default function Home() {
    return (
        <>
            <div className={"flex flex-col"}>
                <div className={"w-full bg-main/20"}>
                    <Profile />
                </div>
                <div>
                    <div className={"flex flex-col pt-20 items-center"}>
                        <div
                            className={
                                "flex flex-col max-w-[60%] justify-center gap-4"
                            }
                        >
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
                        <div className={"flex flex-col text-center py-4"}>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
