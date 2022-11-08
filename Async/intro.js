// Fecha: 02 de noviembre del 2022

function main() {
    try {
        const result = divideSync(12, 3);
        assert.equal(result, 4);
    } catch {
        assert.fail(err);
    }
}

function mainCallbk() {
    divideCallback(12, 3, (err, result) => {
        if (err) {
            assert.fail(err);
        } else {
            assert.equal(result, 4);
        }
    });
}