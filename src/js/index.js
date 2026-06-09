const canvas = document.querySelector('canvas')
// Buat papan Permainan 
const board = canvas.getContext("2d")

const CANVAS_WIDTH = canvas.width = 512
const CANVAS_HEIGHT = canvas.height = 512  

// input gambar
const playerImage = new Image()
playerImage.src = './src/assets/soldier.png' // path relatif agar berjalan di GitHub Pages

function animate() {
    board.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT) // untuk membersihkan canvas setiap frame    
    // board.fillRect(50, 50, 100, 100) // untuk membuat persegi panjang di canvas
    // board.drawImage(image, src_x, src_y, src_w, src_h, dest_x, dest_y, dest_w, dest_h) // untuk menggambar gambar di canvas
    board.drawImage(playerImage, sx, sy, sw, sh, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT) // untuk menggambar gambar di canvas
    requestAnimationFrame(animate) // untuk membuat animasi terus berjalan
}

animate() // untuk memulai animasi




// // Custom canvas
// canvas.width = DISPLAY_PIXEL.WIDTH * ASPECT_RATIO.WIDTH
// canvas.height = DISPLAY_PIXEL.HEIGHT * ASPECT_RATIO.HEIGHT

// // note koordinat dimulai dari 0 dan tidak ada negatif

// // Property Player
// const playerProperty = {
//     width: 64,
//     height: 64,
//     speed: 5,
//     color: "tomato",
//     position: {
//         x: 0, 
//         y: canvas.height - 64
//     }
// }

// // // Property Enemy
// // const enemyProperty = {
// //     width: 64,
// //     height: 64,
// //     speed: 1.5,
// //     color: "lightyellow",
// //     position: {
// //         x: canvas.width - 64, 
// //         y: canvas.height - 64
// //     }
// // }

// // Buat Kelas Ground
// const ground = new Ground('./src/assets/background.png', canvas.width, canvas.height) // path relatif agar berjalan di GitHub Pages

// // Buat Kelas Player
// const player = new Player(playerProperty) //cuma instance belum di panggil methodnya

// // Buat Kelas Enemy
// // const enemy = new Enemy(enemyProperty) //cuma instance belum di panggil methodnya



// // Buat Animasi Entity dan Papan
// function animate() {
    
//     ground.create() // baru di panggil methodnya untuk membuat papan permainannya

//     player.create() 
//     // enemy.create()

//     player.update()
//     // enemy.update()

    

//     window.requestAnimationFrame(animate) // untuk membuat animasi terus berjalan
// }

// window.addEventListener("keydown", function (callback){
//     console.log(callback.key)
//         switch (callback.key) {
//             case "ArrowUp" : 
//                 console.log('Up')   
//                 player.jump() // untuk membuat player melompat           
//                 break
//             case "ArrowLeft" :
//                 console.log('kiri')
//                 player.moveLeft() // untuk membuat player bergerak ke kiri
//                 break
//             case "ArrowRight" : 
//                 console.log('kanan')
//                 player.moveRight() // untuk membuat player bergerak ke kanan
//                 break
//             default :
//                 break
//         }
// })

// animate() // untuk memulai animasi

