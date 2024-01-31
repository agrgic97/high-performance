const mapRatingToText = (rating) => {
    switch (rating) {
        case 1: return "excellent";
        case 2: return "very good";
        case 3: return "good";
        case 4: return "alright";
        case 5: return "bad"
    }
}

module.exports = {
    mapRatingToText
}