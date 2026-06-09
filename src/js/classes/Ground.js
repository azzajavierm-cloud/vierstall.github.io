class Ground {
    constructor(image, width, height) {
        this.image = new Image()
        this.image.src = image
        this.width = width
        this.height = height
        // this.color = color // tidak perlu karena sudah ada gambar
        this.position = {
            x: 0,
            y: 0
        }

        console.log('ground ready')
        
    }

    create() {
        // board.fillStyle = this.color
        // board.fillRect(0, 0, this.width, this.height)

        board.drawImage(this.image, this.position.x, this.position.y)
        board.drawImage(this.image, this.position.x, this.position.y, this.width, this.height) // untuk menyesuaikan ukuran gambar dengan ukuran canvas
        // this.position.x += 5 // untuk membuat gambar bergerak ke kanan


    }
}