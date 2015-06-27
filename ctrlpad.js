window.addEventListener('WebComponentsReady', function() {

    var nowState = 0;

    var board = document.getElementById('board'),
        body = document.getElementById('body'),
        F = document.getElementById('f'),
        B = document.getElementById('b'),
        L = document.getElementById('l'),
        R = document.getElementById('r'),
        show = document.getElementById('show'),
        bubu = document.getElementById('bubu'),
        cf = 0,
        cb = 0,
        cl = 0,
        cr = 0,
        w = window.innerWidth;

    F.style.height = w / 3.2 + 'px';
    F.style.bottom = ((w / 3.2) + 5) + 'px';
    B.style.height = w / 3.2 + 'px';
    L.style.height = w / 4 * 2 + 'px';
    R.style.height = w / 4 * 2 + 'px';
    bubu.style.left = (w / 2 - 30) + 'px';

    window.addEventListener('resize', rs);

    function rs() {
        w = window.innerWidth;
        console.log(w);
        F.style.height = w / 3.2 + 'px';
        F.style.bottom = ((w / 3.2) + 5) + 'px';
        B.style.height = w / 3.2 + 'px';
        L.style.height = w / 4 * 2 + 'px';
        R.style.height = w / 4 * 2 + 'px';
        bubu.style.left = (w / 2 - 50) + 'px';
    }




    board.on('ready', function ready() {
        var ff = document.getElementById('ff'),
            bb = document.getElementById('bb'),
            ll = document.getElementById('ll'),
            rr = document.getElementById('rr'),
            buzzer = document.getElementById('buzzer');


        F.addEventListener('touchstart', function() {
            body.style.backgroundPosition = 'right bottom';
            cf = 1;
            board.board.send([0x90, 0x00, 0x01, 0x91, 0x01, 0x00]);
            if (cl == 0 && cr == 0) {
                show.className = 'f';
            }
            if (cl == 1) {
                show.className = 'fl';
            }
            if (cr == 1) {
                show.className = 'fr';
            }
        }, false);

        F.addEventListener('touchend', function() {
            body.style.backgroundPosition = 'left bottom';
            cf = 0;
            board.board.send([0x90, 0x00, 0x00, 0x91, 0x00, 0x00]);
            if ((cf + cb + cl + cr) == 0) {
                show.className = 'n';
            }
        }, false);


        B.addEventListener('touchstart', function() {
            body.style.backgroundPosition = 'right bottom';
            cb = 1;
            board.board.send([0x90, 0x40, 0x00, 0x91, 0x02, 0x00]);
            if (cl == 0 && cr == 0) {
                show.className = 'b';
            }
            if (cl == 1) {
                show.className = 'bl';
            }
            if (cr == 1) {
                show.className = 'br';
            }
        }, false);

        B.addEventListener('touchend', function() {
            body.style.backgroundPosition = 'left bottom';
            cb = 0;
            board.board.send([0x90, 0x00, 0x00, 0x91, 0x00, 0x00]);
            if ((cf + cb + cl + cr) == 0) {
                show.className = 'n';
            }
        }, false);



        L.addEventListener('touchstart', function() {
            body.style.backgroundPosition = 'right bottom';
            cl = 1;
            board.board.send([0x90, 0x40, 0x00, 0x91, 0x01, 0x00]);
            if (cf == 0 && cb == 0) {
                show.className = 'l';
            }
            if (cf == 1) {
                show.className = 'fl';
            }
            if (cb == 1) {
                show.className = 'bl';
            }
        }, false);

        L.addEventListener('touchend', function() {
            body.style.backgroundPosition = 'left bottom';
            cl = 0;
            board.board.send([0x90, 0x00, 0x00, 0x91, 0x00, 0x00]);
            if ((cf + cb + cl + cr) == 0) {
                show.className = 'n';
            }
        }, false);



        R.addEventListener('touchstart', function() {
            body.style.backgroundPosition = 'right bottom';
            cr = 1;
            board.board.send([0x90, 0x00, 0x01, 0x91, 0x02, 0x00]);
            if (cf == 0 && cb == 0) {
                show.className = 'r';
            }
            if (cf == 1) {
                show.className = 'fr';
            }
            if (cb == 1) {
                show.className = 'br';
            }
        }, false);

        R.addEventListener('touchend', function() {
            body.style.backgroundPosition = 'left bottom';
            cr = 0;
            board.board.send([0x90, 0x00, 0x00, 0x91, 0x00, 0x00]);
            if ((cf + cb + cl + cr) == 0) {
                show.className = 'n';
            }
        }, false);


    });

}, false);