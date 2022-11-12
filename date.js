// ex 1
module.exports.longFormatDate = longFormatDate;

function longFormatDate() {
    const currentDate = new Date();

    const formatOptions = {
        weekday: "long",
        month: "long",
        day: "numeric",
    };

    const dateFormatted = currentDate.toLocaleDateString("en-US", formatOptions);

    return dateFormatted;
}

// ex2
module.exports.someFunc = someFunc;

var someFunc = function () {
    return "function declared as expression";
}

// ex3
module.exports.anonFunc = function () {
    return "another way to declare a function";
}