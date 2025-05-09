import { MainContent, Profile } from "../components"

export default function Home() {
    return (
        <div className="flex">
            <Profile />
            <MainContent />
        </div>
    )
}
