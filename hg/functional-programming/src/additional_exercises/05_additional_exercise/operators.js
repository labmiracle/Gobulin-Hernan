function plus(r) {
    return function (l) {
        return l + r;
    };
}

function minus(r) {
    return function (l) {
        return l - r;
    };
}

function times(r) {
    return function (l) {
        return l * r;
    };
}

function dividedBy(r) {
    return function (l) {
        return Math.floor(l / r);
    };
}
module.exports = {
    plus,
    minus,
    times,
    dividedBy,
};
