import Markdown from "marked-react"

export const AboutPreview = ({ markdown }) => {
    return (
        <div className="markdown-body bg-white w-[42.5vw] h-[34rem] rounded-md border-4 text-white p-2 overflow-y-auto break-normal">
            <Markdown value={markdown} />
        </div>
    )
}
