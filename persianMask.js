(function($) {
$.fn.persianSeprator = function(price) {
setComma = function(number) {
    number = "" + number,
    number = persianInt(number);
    if (number)
        while (/(\d+)(\d{3})/.test(number))
            number = number.replace(/(\d+)(\d{3})/, "$1,$2");
    return number
},
persianInt = function(number) {
    var numberDictionary = {
        "۱": "1",
        "۲": "2",
        "۳": "3",
        "۴": "4",
        "۵": "5",
        "۶": "6",
        "۷": "7",
        "۸": "8",
        "۹": "9",
        "۰": "0",
        "/": "."
    }
      , result = "";
    if (number != null  && number != undefined) {
        var numberString = number.toString();
        for (var i = 0; i < numberString.length; i++) {
            var setNumber = numberDictionary[numberString.charAt(i)];
            setNumber ? result += setNumber : result += numberString.charAt(i)
        }
    }
    return result
}
}
})(jQuery);
