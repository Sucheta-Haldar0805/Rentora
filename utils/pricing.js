module.exports.calculatePrice = (basePrice, taxPercent = 18) => {

    const taxAmount = Math.round((basePrice * taxPercent) / 100);

    const finalPrice = basePrice + taxAmount;

    return {
        basePrice,
        taxAmount,
        finalPrice
    };
};