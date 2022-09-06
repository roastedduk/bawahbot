const MAX_LENGTH = 32
const MIN_LENGTH = 10

const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const generateBottomNoise = () => {
    const LETTERS = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
    const length = randomNumber(MIN_LENGTH, MAX_LENGTH)
    const uppercase = randomNumber(0, 1)

    let result = ''
    for (let x = 0; x<length; ++x) {
        let randomLetter = LETTERS[randomNumber(0, LETTERS.length-1)]
        result += randomLetter
    }

    return uppercase === 1 ? result : result.toLocaleLowerCase()
}