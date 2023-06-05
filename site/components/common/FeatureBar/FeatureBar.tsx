import cn from 'clsx'
import s from './FeatureBar.module.css'
import { ReactNode } from 'react'

interface FeatureBarProps {
  className?: string
  title: string
  description?: string
  hide?: boolean
  action?: ReactNode
}

const FeatureBar = ({
  title,
  description,
  className,
  action,
  hide,
}: FeatureBarProps) => {
  const rootClassName = cn(
    s.root,
    {
      transform: true,
      'translate-y-0 opacity-100': !hide,
      'translate-y-full opacity-0': hide,
    },
    className
  )
  return (
    <div className={rootClassName}>
      <span className="block md:inline">{title}</span>
      <span className="block mb-6 md:inline md:mb-0 md:ml-2">
        {description}
      </span>
      {action && action}
    </div>
  )
}

export default FeatureBar
