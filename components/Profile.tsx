import Image from "next/image"

export function Profile() {
    return (
        <div className="flex flex-col pt-12 px-4">
            <div className={"flex flex-col text-center justify-center"}>
                <div className={"font-bold text-3xl"}>{"Davide Bianchi"}</div>
                <div className={"font-bold opacity-50 text-xl"}>
                    {"Software Developer"}
                </div>
                <div className="flex w-full py-6 justify-center">
                    <Image
                        src={"/profile.png"}
                        width={450}
                        height={450}
                        alt={"profile"}
                        className={"rounded-full"}
                    />
                </div>
                <div className={"flex justify-center gap-3 opacity-60"}>
                    <a
                        href="https://github.com/sentientmachin3"
                        target="_blank"
                    >
                        <Image
                            src={"/github.svg"}
                            width={50}
                            height={50}
                            alt={"github"}
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/davide-bianchi-394224157/"
                        target="_blank"
                    >
                        <Image
                            src={"/linkedin.svg"}
                            width={50}
                            height={50}
                            alt={"linkedin"}
                        />
                    </a>
                </div>
                <div className="pt-2">
                    <a className="underline" href={"/cv.pdf"}>
                        {"Download my CV"}
                    </a>
                </div>
                <div
                    className={"flex flex-col text-center py-12 gap-2 text-md"}
                >
                    <div>Age 29, currently in Verona, Italy.</div>
                    <div>
                        {
                            "Bachelor's degree in computer science @ University of Verona, Italy."
                        }
                    </div>
                    <div>
                        Science nerd, guitar player, Linux and OSS geek, LOTR
                        and Star Trek fan.
                    </div>
                </div>
            </div>
        </div>
    )
}
