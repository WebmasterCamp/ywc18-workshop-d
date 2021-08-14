export const groupMasonry = <T extends any[]>(
    data: T,
    chunk: number
): Array<T> => {
    let newChunk: T[] = Array(chunk).fill([])

    if (data)
        data.forEach((item, index) => {
            let column = index % chunk

            // @ts-ignore
            newChunk[column] = [...newChunk[column], item]
        })

    return newChunk
}
