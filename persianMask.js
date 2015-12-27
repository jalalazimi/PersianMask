/*
 * PersianInputMask v0.1.0
 * https://github.com/jalalazimi/persianMask.js
 * MIT licensed
 *
 * Copyright (C) 2015 Jalal azimi
 */

(function ($) {

    var VERSION = "0.1.0",
        //Check for nodeJS
        hasModule = (typeof module !== 'undefined' && module.exports);

    //used for prototype.
    function PersianMask(str) {
        this._str = str;
    }
    
    /**
     * Used for set comma
     *
     * @param {Number} value
     * @return {String} Returns Converted string
     * @api private
     */
    function _setComma(value) {
        if (!value) {
            return;
        }
        value = "" + value;
            value = _persianInt(value);
        if (value)
            while (/(\d+)(\d{3})/.test(value))
                value = value.replace(/(\d+)(\d{3})/, "$1,$2");
        return value
    }

    /**
     * Used for convert persian number to English number
     *
     * @param {String} value
     * @return {String} Returns Converted string
     * @api private
     */
    function _persianInt(value) {
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
        if (value != null && value != undefined) {
            var numberString = value.toString();
            for (var i = 0; i < numberString.length; i++) {
                var setNumber = numberDictionary[numberString.charAt(i)];
                setNumber ? result += setNumber : result += numberString.charAt(i)
            }
        }
        return result
    }





    var persianMask = function (inputValue) {
        if (inputValue == "" || inputValue == null)
        	return null;
        return new PersianMask(inputValue);
    }

    //persianMask Version
    persianMask.version = VERSION;

    persianMask.fn = PersianMask.prototype = {
        clone: function () {
            return persianMask(this);
        },
        value: function () {
            return this._str;
        },
        toString: function () {
            return this._str.toString();
        },
        set : function (value) {
            this._str = String(value);
            return this;
        },
        setComma: function () {
            return _setComma(this);
        }
    };

    //CommonJS module
    if (hasModule) {
        module.exports = persianMask;
    }
    //global ender:false
    if (typeof ender === 'undefined') {
        this['persianMask'] = persianMask;
    }
    //global define:false
    if (typeof define === 'function' && define.amd) {
        define('persianMask', [], function () {
            return persianMask;
        });
    }


})();
