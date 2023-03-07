import clsx from 'clsx'
import Link from 'next/link'
import styles from './button.module.css'

interface Props {
  variant?: 'primary' | 'secondary' | 'subtle' | 'destructive'
  icon?: ReactNode
}

export function LinkButton({ className, ...props }) {
  return (
    <Link
      className={clsx(className, styles.button, icon && !children && styles.iconButton, {
        [styles.buttonPrimary]: variant === 'primary',
        [styles.buttonSecondary]: variant === 'secondary',
        [styles.buttonSubtle]: variant === 'subtle',
        [styles.buttonDestructive]: variant === 'destructive',
      })}
    >
      {...props}
    </Link>
  )
}
