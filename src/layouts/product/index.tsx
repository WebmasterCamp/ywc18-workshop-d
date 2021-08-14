import type { FunctionComponent } from 'react'

const ProductLayout: FunctionComponent<{
    className?: string
}> = ({ children, className = '' }) => (
    <main
        className={
            'flex flex-col w-full max-w-[960px] gap-16 mx-auto mb-12 py-8 ' +
            className
        }
    >
        {children}
    </main>
)

export default ProductLayout
