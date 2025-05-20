// Example AI scoring logic
function calculateConfidence(projected, line) {
    const difference = projected - line;
    return 1 / (1 + Math.exp(-difference)); // sigmoid
}

module.exports = { calculateConfidence };
