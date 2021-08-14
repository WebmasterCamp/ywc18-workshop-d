import type { FunctionComponent } from 'react'

import { Chip as IChip, Color } from '@typesRoot'

const variantMap: Record<Color, string> = {
    primary: 'border-primary text-primary',
    secondary: 'border-secondary text-secondary'
}

const Chip: FunctionComponent<{
    tag: IChip
}> = ({ tag: { title, type } }) => {
    return (
        <p
            key={title}
            className={`text-xs font-medium px-2 py-0.5 border-2 rounded-full ${variantMap[type]}`}
        >
            {title}
        </p>
    )
}

export const Chips: FunctionComponent<{
    tags: IChip[]
    className?: string
}> = ({ tags = [], className = '' }) => (
    <footer className={'flex flex-row gap-2 ' + className}>
        {tags.map((tag) => (
            <Chip key={tag.title} tag={tag} />
        ))}
    </footer>
)

export default Chip
