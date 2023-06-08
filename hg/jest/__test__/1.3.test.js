const { removeNonCanonicalDna } = require("../src/1.3.js");

test("removeNonCanonicalDna removes non-canonical lowercase bases from Dna string", () => {
    expect(removeNonCanonicalDna("CTAGGGTA")).toBe("CTAGGGTA");
    expect(removeNonCanonicalDna("ctagGGta")).toBe("GG");
    expect(removeNonCanonicalDna("ACCGTAGG")).toBe("ACCGTAGG");
    expect(removeNonCanonicalDna("ACCGXGGTAY")).toBe("ACCGGGTA");
    expect(removeNonCanonicalDna("")).toBe("");
});
