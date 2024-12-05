"use client"

interface ToolTipButtonInterface {
    tooltipText: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    className?: string;
    onClick: () => void;
}


const ToolTipButton = ({ tooltipText, icon: Icon, className, onClick }: ToolTipButtonInterface) => {
    return (
      <div className="tooltip" data-tip={tooltipText}>
        <button
          className={`btn btn-ghost btn-circle ${className}`}
          onClick={onClick}
        >
          <Icon />
        </button>
      </div>
    );
};

export default ToolTipButton;