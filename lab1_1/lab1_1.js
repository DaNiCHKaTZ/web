function count(field) {
    const n = field.length;
    const m = field[0].length;
    let count = 0;
    function check(x, y) {
        if (x < 0 || y < 0 || x >= n || y >= m || field[x][y] == 0) {
            return;
        }
        field[x][y] = 0;
        check(x + 1, y);
        check(x - 1, y);
        check(x, y + 1);
        check(x, y - 1);
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (field[i][j] == 1) {
                count++;
                check(i, j);
            }
        }
    }
    return count;
}
const field = [
    [0, 0, 1, 1, 1],
    [0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 0, 0, 1]
];
console.log(count(field));
