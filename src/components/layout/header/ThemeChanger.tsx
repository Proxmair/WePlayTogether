import ToolTipButton from '@/components/ui/ToolTipButton'
import { DarkModeIcon } from '@/icon'
import React from 'react'

const ThemeChanger = () => {
  return (
    <div>
        <ToolTipButton className="shadow-lg" tooltipText="Dark Mode" icon={DarkModeIcon} onClick={()=>{}}/>
    </div>
  )
}

export default ThemeChanger