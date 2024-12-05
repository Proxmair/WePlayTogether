import ToolTipButton from "@/components/ui/ToolTipButton"
import { FeedBackIcon } from "@/icon"

const FeedBackButton = () => {
    const handleOpenForm = () => {
        window.open("https://forms.gle/oXgcrvaCLpcem8NbA", "_blank");
    }
  return (
    <ToolTipButton className="shadow-lg" tooltipText="Feed Back" icon={FeedBackIcon} onClick={handleOpenForm}/>
  )
}

export default FeedBackButton