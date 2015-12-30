/*
 * PersianInputMask v0.1.0
 * https://github.com/jalalazimi/persianMask.js
 * MIT licensed
 *
 * Copyright (C) 2015 Jalal azimi
 */

(function($) {

    var VERSION = "0.1.0",
        //Check for nodeJS
        hasModule = (typeof module !== 'undefined' && module.exports);

    var persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
        englishNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        persianChar = ["ض", "ص", "ث", "ق", "ف", "غ", "ع", "ه", "خ", "ح", "ج", "چ", "ش", "س", "ی", "ب", "ل", "ا", "ت", "ن", "م", "ک", "گ", "ظ", "ط", "ز", "ر", "ذ", "د", "پ", "و", "؟"],
        englishChar = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "z", "x", "c", "v", "b", "n", "m", ",", "?"],
        arabicChars = ["ي", "ك", "‍", "دِ", "بِ", "زِ", "ذِ", "ِشِ", "ِسِ", "‌", "ى"],
        persianChars = ["ی", "ک", "", "د", "ب", "ز", "ذ", "ش", "س", "", "ی"];


    //used for prototype.
    function PersianMask(value) {
            this._val = value;
        }
        /**
         * Used for set comma
         *
         * @param {Number} value
         * @return {String} Returns Converted string
         * @api private
         */
    function _setComma(value) {
            if (!value) return;
            value = _toEnglish(value);
            while (/(\d+)(\d{3})/.test(value))
                value = value.replace(/(\d+)(\d{3})/, "$1,$2");
            return value
        }
        /**
         * Used for convert Persian to English number
         *
         * @param {String} value
         * @return {String} Returns Converted string
         * @api private
         */
    function _toEnglish(value) {
            if (!value) return;
            var value = value.toString();
            for (var i = 0, len = value.length; i < len; i++) {
                var index = _ArrayIndex(persianNumbers, value[i]);
                if (index > -1)
                    value = _searchAndReplace(value, i, index);
            }
            return value
        }
        /**
         * Used for convert English to Persian number
         *
         * @param {String} value
         * @return {String} Returns Converted string
         * @api private
         */
    function _toPersian(value) {
            if (!value) return;
            var value = value.toString();
            for (var i = 0, len = value.length; i < len; i++) {
                var index = _ArrayIndex(englishNumbers, value[i]);
                if (index > -1)
                    value = _searchAndReplace(value, i, persianNumbers[index]);
            }
            return value
        }
        /**
         * Used for return Array Index
         *
         * @param {String} value
         * @return {Number} Returns array Index
         * @api private
         */
    function _ArrayIndex(array, value) {
            return array.indexOf(value)
        }
        /**
         * Used for search in Array and replace
         *
         * @param {String} value
         * @param {Number} array index
         * @param {String} new value
         * @return {String} Returns replaced value
         * @api private
         */
    function _searchAndReplace(value, index, newValue) {
        return value.replace(new RegExp(value[index], "g"), newValue)
    }

    var persianMask = function(inputValue) {
        if (inputValue == "" || inputValue == null)
            return null;
        return new PersianMask(inputValue);
    }

    //persianMask Version
    persianMask.version = VERSION;

    persianMask.fn = PersianMask.prototype = {
        toString: function() {
            return this._val.toString();
        },
        setComma: function() {
            return _setComma(this);
        },
        toPersian: function() {
            return _toPersian(this);
        },
        toEnglish: function() {
            return _toEnglish(this);
        }
    };

    String.prototype.setComma=function(){
        return _setComma(this);
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
        define('persianMask', [], function() {
            return persianMask;
        });
    }


})();
