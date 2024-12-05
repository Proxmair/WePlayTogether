import ToolTipButton from "@/components/ui/ToolTipButton";
import { LeaderBoardIcon } from "@/icon";
import { useRouter } from 'next/navigation';

const LeaderBoardButton = () => {
  const navigate = useRouter();

  const navigateToLeaderBoard = () => {
    navigate.push("/leader-board");
  };
  return (
    <ToolTipButton
      className="shadow-lg"
      tooltipText="Leader Board"
      icon={LeaderBoardIcon}
      onClick={navigateToLeaderBoard}
    />
  );
};

export default LeaderBoardButton;
