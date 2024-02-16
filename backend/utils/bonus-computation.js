const calculateOrdersEvaluationBonus = (clientRating, quantity) => {
    return clientRatingToMonetaryValueMapper(clientRating) * quantity;
}

const calculatePerformanceEvaluationBonus = (targetValue, actualValue) => {
    let bonus;
    const difference = targetValue - actualValue;

    switch (difference) {
        case -4: bonus = 100; break;
        case -3: bonus = 90; break;
        case -2: bonus = 75; break;
        case -1: bonus = 65; break;
        case 0: bonus = 50; break;
        default: bonus = 0;
    }

    return bonus + actualValue * 10;
}



const clientRatingToMonetaryValueMapper = (clientRating) => {
    switch (clientRating) {
        case 1: return 50;
        case 2: return 40;
        case 3: return 30;
        case 4: return 20;
        case 5: return 10;
        default: return 0;
    }
}

module.exports = {
    calculateOrdersEvaluationBonus,
    calculatePerformanceEvaluationBonus
}