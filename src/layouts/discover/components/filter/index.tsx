import { useFilter } from '@stores/filter'

const Selector = ({
    title,
    id,
    name,
    type
}: {
    title: string
    id: string
    name: string
    type: 'gender' | 'price'
}) => {
    let [filter, updateFilter] = useFilter()

    let handleInput = () => {
        updateFilter({
            ...filter,
            [type]: title
        })
    }

    return (
        <label htmlFor={id} className=" text-gray-800 font-medium text-lg">
            <input
                id={id}
                className="form-radio text-primary"
                type="radio"
                name={name}
                value={title}
                onClick={handleInput}
            />
            <span className="pl-2">{title}</span>
        </label>
    )
}

const Filter = () => (
    <aside className="absolute -bottom-[64px] right-0 w-[240px] py-4 px-6 bg-white shadow-md rounded">
        <form className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">เพศ</h3>
            {['ทั้งหมด', 'ชาย', 'หญิง'].map((value) => (
                <Selector
                    key={value}
                    type="gender"
                    title={value}
                    id={`selector-gender-${value}`}
                    name="gender"
                />
            ))}

            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-1">
                ราคา
            </h3>
            {[
                'ทั้งหมด ',
                ...['300', '500', '1,000'].map(
                    (value) => `ไม่เกิน ${value} บาท`
                )
            ].map((value) => (
                <Selector
                    key={value}
                    type="gender"
                    title={value}
                    id={`selector-gender-${value}`}
                    name="price"
                />
            ))}
        </form>
    </aside>
)

export default Filter
