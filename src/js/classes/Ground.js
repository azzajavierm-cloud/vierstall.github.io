class Ground {
    constructor(width, height, color) {
        this.width = width
        this.height = height
        this.color = color


        console.log('ground ready')
        
    }

    create() {
        board.fillStyle = this.color
        board.fillRect(0, 0, this.width, this.height)
    }
}