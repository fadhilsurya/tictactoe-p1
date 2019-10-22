function generateBoard() {

    let board = [];
    let inputChar = ['x', 'o']
    let countX = 0
    let countO = 0

    // generate board
    for (let i = 0; i < 3; i++) {
        let temp = []
        for (let j = 0; j < 3; j++) {
            temp.push('')
        }
        board.push(temp)
    }

    // input random kedalam board
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            let random = Math.floor(Math.random() * 2)
            if (random % 2 == 0) {
                board[i][j] = inputChar[0]
                countX++
                if (countX > 5) {
                    board[i][j] = inputChar[1]
                    countO++

                }
            } else if (random % 2 != 0) {
                board[i][j] = inputChar[1]
                countO++
                if (countO > 5) {
                    board[i][j] = inputChar[0]
                    countX++
                }
            }
        }
    }
    return board
}
console.log(generateBoard())