describe('reduce', () => {
    it('calculates the total amount of money payed for a buying list', () => {
        const cart = new Fakay(
            { name: 'milk', qty: 2, price: 1.5 },
            { name: 'kellogs', qty: 3, price: 2 },
            { name: 'yogurt', qty: 6, price: 1 },
            { name: 'spaghetti', qty: 2, price: 0.75 },
            { name: 'apple', qty: 10, price: 0.2 }
        )

        const total = cart.reduce((accum, elem) => {
            (accum + elem, 0)
            accum + elem.price * elem.qty
        
        expect(total).toBe(18.5)
    })

    it('sums the power of 2 of all nums', () => {
        const nums = new Fakay(1, 2, 3, 4, 5, 6)

        const sumPow2 = nums.reduce((accum, elem) => accum + elem ** 2, 0)

        expect(sumPow2).toBe(91)
    })

    it('sums all numbers (default initial value)', () => {
        const nums = new Fakay(0, 1, 2, 3, 4, 5, 6)

        const sum = nums.reduce((accum, elem) => accum + elem)

        expect(sum).toBe(21)
    })

    it('extract stats from colors', () => {
        const colors = new Fakay('yellow', 'black', 'green', 'yellow', 'blue', 'red', 'red', 'red', 'blue', 'yellow', 'black', 'green', 'yellow', 'yellow', 'blue', 'red', 'red', 'blue', 'yellow', 'black', 'green', 'yellow', 'yellow', 'black', 'green', 'yellow', 'blue', 'red', 'red', 'red', 'blue', 'yellow', 'black', 'green', 'yellow', 'yellow', 'blue', 'red', 'red', 'blue', 'yellow', 'black', 'green', 'yellow')

        const stats = colors.reduce((accum, color) => {
            if (accum[color] === undefined)
                accum[color] = 1
            else
                accum[color]++

            return accum
        }, {})

        // {yellow: 14, black: 6, green: 6, blue: 8, red: 10}
        expect(stats.yellow).toBe(14)
        expect(stats.black).toBe(6)
        expect(stats.green).toBe(6)
        expect(stats.blue).toBe(8)
        expect(stats.red).toBe(10)
    })
})