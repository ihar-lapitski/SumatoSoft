(() => {
    // dictionary - this font was exported from "LCD Font Generator" program in this hexadecimal form
    const dictionary = {
        '0': [0x7c, 0x8a, 0x92, 0xa2, 0x7c],
        '1': [0x42, 0xfe, 0x02],
        '2': [0x42, 0x86, 0x8a, 0x92, 0x62],
        '3': [0x84, 0x82, 0xa2, 0xd2, 0x8c],
        '4': [0x18, 0x28, 0x48, 0xfe, 0x08],
        '5': [0xe4, 0xa2, 0xa2, 0xa2, 0x9c],
        '6': [0x3c, 0x52, 0x92, 0x92, 0x0c],
        '7': [0x80, 0x8e, 0x90, 0xa0, 0xc0],
        '8': [0x6c, 0x92, 0x92, 0x92, 0x6c],
        '9': [0x60, 0x92, 0x92, 0x94, 0x78],
        'A': [0x7e, 0x88, 0x88, 0x88, 0x7e],
        'B': [0xfe, 0x92, 0x92, 0x92, 0x6c],
        'C': [0x7c, 0x82, 0x82, 0x82, 0x44],
        'D': [0xfe, 0x82, 0x82, 0x44, 0x38],
        'E': [0xfe, 0x92, 0x92, 0x92, 0x82],
        'F': [0xfe, 0x90, 0x90, 0x90, 0x80],
        'G': [0x7c, 0x82, 0x92, 0x92, 0x5c],
        'H': [0xfe, 0x10, 0x10, 0x10, 0xfe],
        'I': [0x82, 0xfe, 0x82],
        'J': [0x04, 0x02, 0x82, 0xfc, 0x80],
        'K': [0xfe, 0x10, 0x28, 0x44, 0x82],
        'L': [0xfe, 0x02, 0x02, 0x02, 0x02],
        'M': [0xfe, 0x40, 0x30, 0x40, 0xfe],
        'N': [0xfe, 0x20, 0x10, 0x08, 0xfe],
        'O': [0x7c, 0x82, 0x82, 0x82, 0x7c],
        'P': [0xfe, 0x90, 0x90, 0x90, 0x60],
        'Q': [0x7c, 0x82, 0x8a, 0x84, 0x7a],
        'R': [0xfe, 0x90, 0x98, 0x94, 0x62],
        'S': [0x62, 0x92, 0x92, 0x92, 0x8c],
        'T': [0x80, 0x80, 0xfe, 0x80, 0x80],
        'U': [0xfc, 0x02, 0x02, 0x02, 0xfc],
        'V': [0xf8, 0x04, 0x02, 0x04, 0xf8],
        'W': [0xfc, 0x02, 0x0c, 0x02, 0xfc],
        'X': [0xfc, 0x02, 0x0c, 0x02, 0xfc],
        'Y': [0xe0, 0x10, 0x0e, 0x10, 0xe0],
        'Z': [0x86, 0x8a, 0x92, 0xa2, 0xc2],
        'a': [0x04, 0x2a, 0x2a, 0x2a, 0x1e],
        'b': [0xfe, 0x22, 0x22, 0x22, 0x1c],
        'c': [0x1c, 0x22, 0x22, 0x22],
        'd': [0x1c, 0x22, 0x22, 0x12, 0xfe],
        'e': [0x1c, 0x2a, 0x2a, 0x2a, 0x18],
        'f': [0x08, 0x7e, 0x88, 0x80, 0x40],
        'g': [0x18, 0x25, 0x25, 0x25, 0x3e],
        'h': [0xfe, 0x10, 0x20, 0x20, 0x1e],
        'i': [0x22, 0xbe, 0x02],
        'j': [0x04, 0x02, 0x02, 0xbc],
        'k': [0xfe, 0x08, 0x14, 0x22],
        'l': [0x82, 0xfe, 0x02],
        'm': [0x3e, 0x20, 0x18, 0x20, 0x1e],
        'n': [0x3e, 0x10, 0x20, 0x20, 0x1e],
        'o': [0x1c, 0x22, 0x22, 0x22, 0x1c],
        'p': [0x3f, 0x24, 0x24, 0x24, 0x18],
        'q': [0x10, 0x28, 0x28, 0x10, 0x3e],
        'r': [0x3e, 0x10, 0x20, 0x20, 0x10],
        's': [0x10, 0x2a, 0x2a, 0x2a, 0x04],
        't': [0x20, 0xfc, 0x22, 0x02, 0x04],
        'u': [0x3c, 0x02, 0x02, 0x04, 0x3e],
        'v': [0x38, 0x04, 0x02, 0x04, 0x38],
        'w': [0x3c, 0x02, 0x04, 0x02, 0x3c],
        'x': [0x22, 0x14, 0x08, 0x14, 0x22],
        'y': [0x30, 0x09, 0x09, 0x09, 0x3e],
        'z': [0x22, 0x26, 0x2a, 0x32, 0x22],
        ' ': [0x00, 0x00, 0x00, 0x00, 0x00],
        '*': [0x28, 0x10, 0x7c, 0x10, 0x28],
        '+': [0x08, 0x08, 0x3e, 0x08, 0x08],
        '/': [0x03, 0x0c, 0x30, 0xc0],
        '-': [0x08, 0x08, 0x08, 0x08],
        '=': [0x14, 0x14, 0x14, 0x14],
        '?': [0x40, 0x9a, 0x60],
        '"': [0xc0, 0x00, 0xc0],
        '(': [0x7e, 0x81],
        ')': [0x81, 0x7e],
        ':': [0x22],
        '.': [0x02],
        ',': [0x03],
        '!': [0xfa],
        "'": [0xc0]
    };

    const emptyColumn = 0x00;
    const container = document.getElementById('creeping-line-container');
    const sizeOfPixel = 10;
    const containerLength = Math.floor(container.clientWidth / sizeOfPixel);
    let length;

    function createPixel(pixelClass) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        if (pixelClass) {
            pixel.classList.add(pixelClass);
        }
        return pixel;
    }

    function createColumn(columnBinaryStr) {
        const column = document.createElement('div');
        column.classList.add('column');
        let pixel;
        for (let digit of columnBinaryStr){
            pixel = (digit === '1') ? createPixel('alight-pixel') : createPixel();
            column.appendChild(pixel);
        }
        return column;
    }

    function createLine() {
        // clear container
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        const text = document.getElementById('text-field').value;

        // transform it to binary column queue
        let queue;
        if (text) {
            queue = transformTextIntoColumns(text) || [];
        }

        // and add it to the line
        queue.forEach((item) => {
            container.appendChild(createColumn(item));
        });
    }

    function transformTextIntoColumns(text) {
        let queue = [];
        for (let symbol of text) {
            if (dictionary[symbol]) {
                queue = queue.concat(dictionary[symbol], emptyColumn);
            }
        }
        queue = queue.map(toBinary);

        length = containerLength + queue.length;

        return queue;
    }

    function startAnimation() {
        container.classList.add('animated');
        container.style.animationDuration = length / 25 + 's';  // to ensure the same speed for texts with different length
    }

    function stopAnimation() {
        container.classList.remove('animated');
    }

    function run() {
        stop();
        createLine();
        setTimeout(startAnimation, 0);  // setTimeout to ensure actual class removing and then adding
    }

    function stop() {
        stopAnimation();
    }

    function toBinary(n16) {
        let n2 = n16.toString(2);
        while (n2.length < 8) {
            n2 = '0' + n2;
        }
        return n2;
    }

    document.getElementById('go-button').addEventListener('click', run);
    document.getElementById('stop-button').addEventListener('click', stop);
})();
