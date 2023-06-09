function findMaxConsecutiveOnes(matrix) {
    const convertedMatrix = matrix.map(row => row.map(value => parseInt(value)));

    for (let i = 0; i < convertedMatrix.length; i++) {
        for (let j = 0; j < convertedMatrix[i].length; j++) {
            if (convertedMatrix[i][j] !== 0 && convertedMatrix[i][j] !== 1) {
                return -1;
            }
        }
    }

    let maxConsecutiveOnes = 0;
    let currentConsecutiveOnes = 0;

    for (let i = 0; i < convertedMatrix.length; i++) {
        for (let j = 0; j < convertedMatrix[i].length; j++) {
            if (convertedMatrix[i][j] === 1) {
                currentConsecutiveOnes++;
                maxConsecutiveOnes = Math.max(maxConsecutiveOnes, currentConsecutiveOnes);
            } else {
                currentConsecutiveOnes = 0;
            }
        }
    }

    return maxConsecutiveOnes;
}

module.exports = { findMaxConsecutiveOnes };
