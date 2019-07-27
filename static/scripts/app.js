const animData = [
    {name: 'jump', count: 24},
    {name: 'left', count: 9},
    {name: 'right', count: 12},
    {name: 'idle', count: 1}
];

function loadAnimationSet(name, count) {
    const frames = [];

    for(let i = 0; i < count; ++i) {
        frames[i] = new Image();
        frames[i].src = `static/images/${name}/${i}.png`
    }

    return frames;
}

const animFrames = {};
animData.forEach(data => {
    animFrames[data.name] = loadAnimationSet(data.name, data.count);
});

const divRoot = document.getElementById('root');
const imgRoot = document.createElement('img');
imgRoot.style.display = 'block';
imgRoot.src = animFrames['jump'][0].src;
imgRoot.style.height = '100%';
imgRoot.style.width = '100%';
divRoot.appendChild(imgRoot);

let animCurrentSet = 'idle';
let animCurrentFrame = 0;

setInterval(() => {
    if(animCurrentFrame >= animFrames[animCurrentSet].length) {
        animCurrentSet = 'idle';
        animCurrentFrame = 0;
    }

    imgRoot.src = animFrames[animCurrentSet][animCurrentFrame].src;
    animCurrentFrame++;
}, 30);

document.addEventListener('keyup', e => {
    switch(e.keyCode) {
        case 38:
            animCurrentSet = 'jump';
            break;

        case 37:
            animCurrentSet = 'left';
            break;

        case 39:
            animCurrentSet = 'right';
            break;

        default:
    }
    animCurrentFrame = 0;
    console.log(e.keyCode);
});