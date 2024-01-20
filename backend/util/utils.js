const extractAccountIdFromUrl = (url) => {
    const regex = "/account/([A-Z0-9]+)";

    const match = url.match(regex);

    return (match && match[1]) ? match[1] : null;
}

const extractSalesOrderIdFromUrl = (url) => {
    const regex = "/salesOrder/([A-Z0-9]+)$/";

    const match = url.match(regex);

    return (match && match[1]) ? match[1] : null;
}

module.exports = {
    extractAccountIdFromUrl,
    extractSalesOrderIdFromUrl
}