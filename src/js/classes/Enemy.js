class Enemy {
    constructor(props) {
        this.width = props.width
        this.height = props.height
        this.speed = props.speed
        this.color = props.color
        this.position = {
            x: props.position.x,
            y: props.position.y
        }
        console.log('Enemy Berhasil Dibuat', props)
    }

    update() {
        this.position.x -= this.speed
        this.position.y -= this.speed
    }

    create() {
        board.fillStyle = this.color
        board.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}