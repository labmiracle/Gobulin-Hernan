function removeNonCanonicalDna(dnaString) {
    if (dnaString === "") {
        return "";
    }

    const filteredArray = dnaString.split("").filter(base => /[CGTA]/.test(base));

    return filteredArray.join("");
}

module.exports = { removeNonCanonicalDna };
