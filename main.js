var scenary = $('#scenary'),
    block = $('block'),
    keyCodes = { left: 37, up: 38, right: 39, down: 40 },
    keys = [];

window.addEventListener('keydown', function (evt) {
    keys[evt.keyCode] = true;

    // get position of div
    var x = parseInt(block.style.left, 10),
        y = parseInt(block.style.top, 10);

    if (keys[keyCodes.right]) {
        x += 1;
    }

    // set div position
    block.style.left = x + 'px';
    block.style.top = y + 'px';

    console.log("x: "+x);
    console.log(block.style.left);
});

window.addEventListener('keyup', function (evt) {
    keys[evt.keyCode] = false;
});

/*
setInterval(function () {
    // get position of div
    var x = parseInt(block.style.left, 10),
        y = parseInt(block.style.top, 10);

    // update position
    // left/right
    if (keys[keyCodes.left]) {
        x -= 1;
    } else if (keys[keyCodes.right]) {
        x += 1;
    }
    // up/down
    if (keys[keyCodes.up]) {
        y -= 1;
    } else if (keys[keyCodes.down]) {
        y += 1;
    }

    // set div position
    block.style.left = x + 'px';
    block.style.top = y + 'px';
}, 1/30);
*/
