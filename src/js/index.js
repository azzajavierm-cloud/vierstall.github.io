const canvas = document.querySelector('canvas')
// Buat papan Permainan 
const board = canvas.getContext("2d") 

// Custom canvas
canvas.width = DISPLAY_PIXEL.WIDTH * ASPECT_RATIO.WIDTH
canvas.height = DISPLAY_PIXEL.HEIGHT * ASPECT_RATIO.HEIGHT

// note koordinat dimulai dari 0 dan tidak ada negatif

// Property Player
const playerProperty = {
    width: 64,
    height: 64,
    speed: 5,
    color: "tomato",
    position: {
        x: 0, 
        y: canvas.height - 64
    }
}

// // Property Enemy
// const enemyProperty = {
//     width: 64,
//     height: 64,
//     speed: 1.5,
//     color: "lightyellow",
//     position: {
//         x: canvas.width - 64, 
//         y: canvas.height - 64
//     }
// }

// Buat Kelas Ground
const ground = new Ground(canvas.width, canvas.height, "lightblue") //cuma instance belum di panggil methodnya

// Buat Kelas Player
const player = new Player(playerProperty) //cuma instance belum di panggil methodnya

// Buat Kelas Enemy
// const enemy = new Enemy(enemyProperty) //cuma instance belum di panggil methodnya



// Buat Animasi Entity dan Papan
function animate() {
    ground.create() // baru di panggil methodnya untuk membuat papan permainannya
    player.create() 
    // enemy.create()

    player.update()
    // enemy.update()

    window.requestAnimationFrame(animate) // untuk membuat animasi terus berjalan
}

window.addEventListener("keydown", function (callback){
    player.movement(callback.key)
})

animate() // untuk memulai animasi

