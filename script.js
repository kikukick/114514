const game = new Chess();

const board = Chessboard('board', {
    draggable: true,
    position: 'start',
    pieceTheme: './images/{piece}.png', // カスタム駒画像
    onDrop: (source, target) => {
        const move = game.move({ from: source, to: target, promotion: 'q' });

        if (move === null) return 'snapback'; // 無効な動きなら戻す
    }
});
