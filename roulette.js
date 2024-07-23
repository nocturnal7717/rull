const slices = [
    { color: 'red', text: 'Prize 1', probability: 0.1 },
    { color: 'green', text: 'Prize 2', probability: 0.2 },
    { color: 'blue', text: 'Prize 3', probability: 0.3 },
    { color: 'yellow', text: 'Prize 4', probability: 0.4 }
];

function createRoulette() {
    const roulette = document.getElementById('roulette');
    let totalProbability = 0;
    slices.forEach(slice => {
        totalProbability += slice.probability;
    });

    let startAngle = 0;
    slices.forEach(slice => {
        const sliceElement = document.createElement('div');
        const sliceAngle = (slice.probability / totalProbability) * 360;
        sliceElement.style.background = slice.color;
        sliceElement.style.transform = `rotate(${startAngle}deg) skewY(${90 - sliceAngle}deg)`;
        startAngle += sliceAngle;
        sliceElement.className = 'slice';
        roulette.appendChild(sliceElement);
    });
}

function spin() {
    let random = Math.random();
    let cumulativeProbability = 0;
    for (let i = 0; i < slices.length; i++) {
        cumulativeProbability += slices[i].probability;
        if (random < cumulativeProbability) {
            alert(`You won: ${slices[i].text}`);
            break;
        }
    }
}

window.onload = createRoulette;
