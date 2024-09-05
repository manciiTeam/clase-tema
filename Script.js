const player = document.getElementById('player');
let playerX = 175;
let playerY = 175;
const moveSpeed = 10;

document.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'ArrowUp':
            playerY = Math.max(playerY - moveSpeed, 0);
            break;
        case 'ArrowDown':
            playerY = Math.min(playerY + moveSpeed, 350);
            break;
        case 'ArrowLeft':
            playerX = Math.max(playerX - moveSpeed, 0);
            break;
        case 'ArrowRight':
            playerX = Math.min(playerX + moveSpeed, 350);
            break;
    }
    player.style.top = playerY + 'px';
    player.style.left = playerX + 'px';
});