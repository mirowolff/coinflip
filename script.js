const coin = document.querySelector('#coin');
const sideA = document.querySelector('.side-a');
const sideB = document.querySelector('.side-b');

let currentRotation = 0;
let isCurrentlyHeads = true; // Track which side is currently showing

const items = [
    {
        bgColor: '#e5f0ff',
        iconColor: '#2f5cab',
        icon: `<svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M200 50C200 44.4771 195.523 40 190 40H50C44.4771 40 40 44.4771 40 50V190C40 195.523 44.4771 200 50 200H190C195.523 200 200 195.523 200 190V50ZM220 190C220 206.569 206.569 220 190 220H50C33.4314 220 20 206.569 20 190V50C20 33.4314 33.4314 20 50 20H190C206.569 20 220 33.4314 220 50V190Z" fill="currentColor"/>
            <path d="M170 110V130H70V110H170Z" fill="currentColor"/>
            <path d="M170 70V90H70V70H170Z" fill="currentColor"/>
            <path d="M140 150V170H70V150H140Z" fill="currentColor"/>
        </svg>`
    },
    {
        bgColor: '#fdf2f3',
        iconColor: '#9b4a07',
        icon: `<svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M130 45C130 31.1929 141.193 20 155 20H195C208.807 20 220 31.1929 220 45V85C220 98.8071 208.807 110 195 110H155C141.193 110 130 98.8071 130 85V75H110C87.9087 75 70.0001 92.9086 70.0001 115V120C94.1897 120 114.367 137.178 119 160H185.265L163.829 142.883L176.169 127.115L220.002 162.116L220.002 177.884L176.169 212.884L163.829 197.115L185.263 180H119C114.367 202.822 94.1897 220 70.0001 220C42.3859 220 20.0001 197.614 20.0001 170C20.0001 149.497 32.3411 131.876 50.0001 124.16V115C50.0001 81.8629 76.863 55 110 55H130V45ZM155 40C152.239 40 150 42.2386 150 45V85C150 87.7614 152.239 90 155 90H195C197.762 90 200 87.7614 200 85V45C200 42.2386 197.762 40 195 40H155ZM70.0001 140C53.4316 140 40.0001 153.431 40.0001 170C40.0001 186.569 53.4316 200 70.0001 200C86.5687 200 100 186.569 100 170C100 153.431 86.5687 140 70.0001 140Z" fill="currentColor"/>
        </svg>`
    },
    {
        bgColor: '#fdf2f3',
        iconColor: '#9b4a07',
        icon: `<svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M185.001 20.0012C198.808 20.0012 210.001 31.1941 210.001 45.0012V75.0012C210.001 88.8083 198.808 100.001 185.001 100.001H155.001C141.194 100.001 130.001 88.8083 130.001 75.0012V60.0012H100.001C86.9427 60.0012 75.8606 68.3544 71.7395 80.0012H75.0012C88.8083 80.0012 100.001 91.1941 100.001 105.001V135.001C100.001 148.808 88.8083 160.001 75.0012 160.001H70.0012C70.0012 171.047 78.9555 180.001 90.0012 180.001H130.001V165.001C130.001 151.194 141.194 140.001 155.001 140.001H185.001C198.808 140.001 210.001 151.194 210.001 165.001V195.001C210.001 208.808 198.808 220.001 185.001 220.001H155.001C142.906 220.001 132.815 211.413 130.499 200.001H90.0012C67.9098 200.001 50.0012 182.093 50.0012 160.001H45.0012C31.1941 160.001 20.0012 148.808 20.0012 135.001V105.001C20.0012 91.1941 31.1941 80.0012 45.0012 80.0012H51.0071C55.6402 57.1794 75.812 40.0012 100.001 40.0012H130.499C132.815 28.5898 142.906 20.0012 155.001 20.0012H185.001ZM155.001 160.001C152.24 160.001 150.001 162.24 150.001 165.001V195.001C150.001 197.763 152.24 200.001 155.001 200.001H185.001C187.763 200.001 190.001 197.763 190.001 195.001V165.001C190.001 162.24 187.763 160.001 185.001 160.001H155.001ZM45.0012 100.001C42.2398 100.001 40.0012 102.24 40.0012 105.001V135.001C40.0012 137.763 42.2398 140.001 45.0012 140.001H75.0012C77.7626 140.001 80.0012 137.763 80.0012 135.001V105.001C80.0012 102.24 77.7626 100.001 75.0012 100.001H45.0012ZM155.001 40.0012C152.24 40.0012 150.001 42.2398 150.001 45.0012V75.0012C150.001 77.7626 152.24 80.0012 155.001 80.0012H185.001C187.763 80.0012 190.001 77.7626 190.001 75.0012V45.0012C190.001 42.2398 187.763 40.0012 185.001 40.0012H155.001Z" fill="currentColor"/>
        </svg>`
    },
    {
        bgColor: '#fef2ff',
        iconColor: '#c851c3',
        icon: `<svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M110 30V9.99997H130V30H190C206.569 30 220 43.4314 220 60V160C220 176.569 206.569 190 190 190H164.164L176.664 220H154.997L142.497 190H97.4968L84.9967 220H63.3301L75.8301 190H50C33.4315 190 20 176.569 20 160V60C20 43.4314 33.4315 30 50 30H110ZM50 50C44.4772 50 40 54.4771 40 60V160C40 165.523 44.4772 170 50 170H190C195.523 170 200 165.523 200 160V60C200 54.4771 195.523 50 190 50H50ZM130 100H110V140H130V100ZM150 140V80H170V140H150ZM70 120V140H90V120H70Z" fill="currentColor"/>
        </svg>`
    },
    {
        bgColor: '#efedfd',
        iconColor: '#7b59df',
        icon: `<svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M170 80.0099V140.01H150V104.141L82.07 172.07L67.9294 157.93L135.859 90.0099H99.9997V70.0099H160L170 80.0099Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M180 20.0001C202.091 20.0001 220 37.9087 220 60.0001V180C220 202.092 202.091 220 180 220H59.9997C37.9083 220 19.9997 202.092 19.9997 180V60.0001C19.9997 37.9087 37.9083 20.0001 59.9997 20.0001H180ZM59.9997 40.0001C48.954 40.0001 39.9997 48.9544 39.9997 60.0001V180C39.9997 191.046 48.954 200 59.9997 200H180C191.045 200 200 191.046 200 180V60.0001C200 48.9544 191.045 40.0001 180 40.0001H59.9997Z" fill="currentColor"/>
        </svg>`
    },
    {
        bgColor: '#e3f7ea',
        iconColor: '#077429',
        icon: `<svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M110 160C120.356 160 128.87 167.872 129.893 177.959L130 180V200C130 211.045 121.046 220 110 220H70C59.6435 220 51.1301 212.127 50.1074 202.041L50 200V180L50.0977 177.959C51.0516 168.545 58.5374 161.065 67.9492 160.107L70 160H110ZM110 180H70V200H110V180Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M200 89.9996C210.357 89.9996 218.87 97.8718 219.893 107.959L220 110V130C220 141.045 211.046 150 200 150H110C98.9543 150 90 141.045 90 130V110L90.1074 107.959C91.062 98.543 98.5435 91.0616 107.959 90.107L110 89.9996H200ZM200 110H110V130H200V110Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M110 19.9996C120.356 20.0002 128.87 27.8721 129.893 37.9586L130 39.9996V59.9996L129.893 62.0406C128.87 72.1273 120.357 79.9996 110 79.9996H40L37.959 79.8922C28.5435 78.9376 21.062 71.4561 20.1074 62.0406L20 59.9996V39.9996L20.0977 37.9586C21.0516 28.5455 28.5374 21.0652 37.9492 20.107L40 19.9996H110ZM110 39.9996H40V59.9996H110V39.9996Z" fill="currentColor"/>
        </svg>`
    },
    {
        bgColor: '#fffde5',
        iconColor: '#af7d05',
        icon: `<svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M170 50.0004C170 44.4776 165.523 40.0004 160 40.0004H80.0001C74.4772 40.0004 70.0001 44.4776 70.0001 50.0004V190C70.0001 195.523 74.4772 200 80.0001 200H160C165.523 200 170 195.523 170 190V50.0004ZM140 60.0004V80.0004H100V60.0004H140ZM190 190C190 206.569 176.569 220 160 220H80.0001C63.4315 220 50.0001 206.569 50.0001 190V50.0004C50.0001 33.4319 63.4315 20.0004 80.0001 20.0004H160C176.569 20.0004 190 33.4319 190 50.0004V190Z" fill="currentColor"/>
        </svg>`
    },
    {
        bgColor: '#e3f7ea',
        iconColor: '#077429',
        icon: `<svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M190 19.9997C206.568 19.9997 220 33.4312 220 49.9997V190C220 206.568 206.568 220 190 220H49.9997C33.4312 220 19.9997 206.568 19.9997 190V49.9997C19.9997 33.4312 33.4312 19.9997 49.9997 19.9997H190ZM130 160V200H190C195.523 200 200 195.523 200 190V160H130ZM39.9997 190C39.9997 195.523 44.4768 200 49.9997 200H110V160H39.9997V190ZM130 99.9997V140H200V99.9997H130ZM39.9997 140H110V99.9997H39.9997V140ZM130 79.9997H200V49.9997C200 44.4768 195.523 39.9997 190 39.9997H130V79.9997ZM49.9997 39.9997C44.4768 39.9997 39.9997 44.4768 39.9997 49.9997V79.9997H110V39.9997H49.9997Z" fill="currentColor"/>
        </svg>`
    }
];

function flipCoin() {
    // Change the color and icon of the back face (the side that's NOT currently showing)
    changeBackFace(!isCurrentlyHeads);

    // Always flip to the opposite side
    isCurrentlyHeads = !isCurrentlyHeads;

    // Calculate rotation - always add 180 degrees to flip to opposite side
    const randomFlips = Math.floor(Math.random() * 3) + 3; // 3 to 5 full flips
    let finalRotation = currentRotation + (randomFlips * 360) + 180;

    gsap.to(coin, {
        rotationY: finalRotation,
        duration: 4,
        ease: 'elastic.out(1, 0.5)',
        onComplete: () => {
            currentRotation = finalRotation;
            setTimeout(flipCoin, 1500); // Wait 1.5s and flip again
        }
    });
}

function changeBackFace(isHeads) {
    // Pick a random item (color and icon) from the array
    const randomItem = items[Math.floor(Math.random() * items.length)];

    // Change the color and icon of the back face (the side that's NOT currently showing)
    if (isHeads) {
        sideA.style.backgroundColor = randomItem.bgColor;
        sideA.style.color = randomItem.iconColor;
        sideA.innerHTML = randomItem.icon;
    } else {
        sideB.style.backgroundColor = randomItem.bgColor;
        sideB.style.color = randomItem.iconColor;
        sideB.innerHTML = randomItem.icon;
    }
}

// Set the initial state for both sides of the coin
changeBackFace(true);  // Set side-a
changeBackFace(false); // Set side-b

// Start the animation after a 1.5-second delay
setTimeout(flipCoin, 1500); 