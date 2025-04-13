interface SeparatorProps {
  color?: string
  className?: string
}

export default function Separator({
  color = 'gray-300',
  className = ''
}: SeparatorProps) {
  const borderColorClass = color.startsWith('border-')
    ? color
    : `border-${color}`

  return (
    <div className={`flex w-full border-t ${borderColorClass} ${className}`} />
  )
}
